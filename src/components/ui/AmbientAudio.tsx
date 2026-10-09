import { useEffect, useRef, useState } from "react";
import { Volume2, VolumeX } from "lucide-react";
import { useLanguage } from "../../context/LanguageContext";
import "./AmbientAudio.css";

function AmbientAudio() {
  const { language } = useLanguage();
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const promptTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [isPromptVisible, setIsPromptVisible] = useState(true);
  const [hasAudio, setHasAudio] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const content = language === "es"
    ? {
        title: "¿Activamos el modo ambiente?",
        description: "Un pequeño detalle sonoro para acompañar tu recorrido.",
        enable: "Activar sonido",
        dismiss: "Ahora no",
        pause: "Pausar sonido",
        resume: "Reanudar sonido",
      }
    : {
        title: "Enable ambient mode?",
        description: "A small sound detail to accompany your journey.",
        enable: "Enable sound",
        dismiss: "Not now",
        pause: "Pause sound",
        resume: "Resume sound",
      };

  useEffect(() => () => {
    audioRef.current?.pause();

    if (promptTimerRef.current !== null) {
      clearTimeout(promptTimerRef.current);
    }
  }, []);

  const dismissPrompt = () => {
    if (promptTimerRef.current !== null) {
      clearTimeout(promptTimerRef.current);
    }

    setIsPromptVisible(false);
    promptTimerRef.current = setTimeout(() => {
      setIsPromptVisible(true);
      promptTimerRef.current = null;
    }, 8 * 60 * 1000);
  };

  const enableAudio = async () => {
    const audio = new Audio("/audio/ambient.mp3");
    audio.loop = true;
    audio.volume = 0.25;

    try {
      await audio.play();
      audioRef.current = audio;
      if (promptTimerRef.current !== null) {
        clearTimeout(promptTimerRef.current);
        promptTimerRef.current = null;
      }
      setHasAudio(true);
      setIsPlaying(true);
      setIsPromptVisible(false);
    } catch {
      audio.pause();
    }
  };

  const toggleAudio = async () => {
    const audio = audioRef.current;

    if (!audio) {
      return;
    }

    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
      return;
    }

    try {
      await audio.play();
      setIsPlaying(true);
    } catch {
      setIsPlaying(false);
    }
  };

  if (isPromptVisible) {
    return (
      <aside className="ambient-audio" aria-labelledby="ambient-audio-title">
        <h2 id="ambient-audio-title">{content.title}</h2>
        <p>{content.description}</p>
        <div className="ambient-audio__actions">
          <button className="ambient-audio__button ambient-audio__button--primary" type="button" onClick={enableAudio}>
            {content.enable}
          </button>
          <button className="ambient-audio__button ambient-audio__button--secondary" type="button" onClick={dismissPrompt}>
            {content.dismiss}
          </button>
        </div>
      </aside>
    );
  }

  if (!hasAudio) {
    return null;
  }

  const audioActionLabel = isPlaying ? content.pause : content.resume;

  return (
    <button className="ambient-audio__control" type="button" aria-label={audioActionLabel} onClick={toggleAudio}>
      {isPlaying ? <Volume2 size={17} aria-hidden="true" /> : <VolumeX size={17} aria-hidden="true" />}
      <span>{audioActionLabel}</span>
    </button>
  );
}

export default AmbientAudio;
