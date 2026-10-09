export type LocalizedText = {
  es: string;
  en: string;
};

export type FeatureGroup = {
  title?: LocalizedText;
  items: LocalizedText[];
};

export type ProjectScreenshots = {
  preview?: string;
  gallery: ProjectScreenshot[];
};

export type ProjectScreenshot = {
  image: string;
  label: LocalizedText;
};

export type ProjectArchitecture = {
  layers: LocalizedText[];
};

export type Project = {
  slug: string;
  name: string;
  category: LocalizedText;
  description: LocalizedText;
  previewImage: string;
  technologies: string[];
  features: FeatureGroup[];
  role: LocalizedText;
  learning: LocalizedText[];
  screenshots: ProjectScreenshots;
  architecture?: ProjectArchitecture;
};
