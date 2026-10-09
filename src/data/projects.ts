import type { Project } from "../types/project";
import pocketpilotDashboard from "../assets/images/projects/pocketpilot/dashboard.png";
import pocketpilotMetas from "../assets/images/projects/pocketpilot/metas.png";
import pocketpilotTransactions from "../assets/images/projects/pocketpilot/transactions.png";
import expontaneaHome from "../assets/images/projects/expontanea/home.png";
import expontaneaCatalogo from "../assets/images/projects/expontanea/catalogo.png";
import expontaneaNosotros from "../assets/images/projects/expontanea/nosotros.png";
import autocareHome from "../assets/images/projects/autocare/home.png";
import autocareLogin from "../assets/images/projects/autocare/login.png";
import autocareServicios from "../assets/images/projects/autocare/servicios.png";
import autocareCuenta from "../assets/images/projects/autocare/cuenta.png";
import autocareDashboard from "../assets/images/projects/autocare/dashboard.png";

export const projects: Project[] = [
  {
    slug: "pocketpilot",
    name: "PocketPilot",
    category: { es: "APLICACIÓN WEB", en: "WEB APPLICATION" },
    previewImage: pocketpilotDashboard,
    description: {
      es: "Una aplicación web diseñada para ayudar a los usuarios a organizar sus finanzas personales, registrar transacciones, administrar presupuestos, establecer metas financieras y monitorear deudas desde una sola interfaz.",
      en: "A web application designed to help users organize their personal finances, track transactions, manage budgets, set financial goals and monitor debts from a single interface.",
    },
    technologies: ["React", "JavaScript", "Context API", "LocalStorage", "CSS"],
    features: [
      {
        items: [
          { es: "Panel", en: "Dashboard" },
          { es: "Transacciones", en: "Transactions" },
          { es: "Presupuestos", en: "Budgets" },
          { es: "Metas", en: "Goals" },
          { es: "Deudas", en: "Debts" },
          { es: "Configuración", en: "Settings" },
        ],
      },
    ],
    role: {
      es: "Desarrollo frontend, arquitectura de componentes, interfaces responsive y organización de los principales flujos de usuario.",
      en: "Frontend development, component architecture, responsive interfaces and organization of the main user flows.",
    },
    learning: [
      { es: "Estado en React", en: "React state" },
      { es: "Context API", en: "Context API" },
      { es: "LocalStorage", en: "LocalStorage" },
      { es: "Organización de componentes", en: "Component organization" },
      { es: "Patrones de interfaz para aplicaciones financieras", en: "Interface patterns for financial applications" },
    ],
    screenshots: {
      gallery: [
        { image: pocketpilotDashboard, label: { es: "Dashboard", en: "Dashboard" } },
        { image: pocketpilotMetas, label: { es: "Metas", en: "Goals" } },
        { image: pocketpilotTransactions, label: { es: "Transacciones", en: "Transactions" } },
      ],
    },
  },
  {
    slug: "expontanea",
    name: "Expontánea SV",
    category: { es: "COMERCIO ELECTRÓNICO", en: "E-COMMERCE" },
    previewImage: expontaneaHome,
    description: {
      es: "Una tienda web de flores diseñada para mostrar productos, ofrecer una experiencia de navegación fluida y permitir a los usuarios construir un carrito de compras.",
      en: "A responsive flower shop website designed to showcase products, provide a smooth browsing experience and allow users to build a shopping cart.",
    },
    technologies: ["React", "TypeScript", "Vite", "React Router", "React Hook Form", "CSS"],
    features: [
      {
        items: [
          { es: "Catálogo de productos", en: "Product Catalog" },
          { es: "Detalles de producto", en: "Product Details" },
          { es: "Carrito de compras", en: "Shopping Cart" },
          { es: "Diseño responsive", en: "Responsive Design" },
          { es: "Navegación del lado del cliente", en: "Client-side Navigation" },
        ],
      },
    ],
    role: {
      es: "Desarrollo frontend, creación de componentes reutilizables, navegación entre vistas y construcción de la experiencia responsive.",
      en: "Frontend development, reusable components, view navigation and responsive experience.",
    },
    learning: [
      { es: "Fundamentos de TypeScript", en: "TypeScript fundamentals" },
      { es: "React Router", en: "React Router" },
      { es: "Componentes reutilizables", en: "Reusable components" },
      { es: "Diseño responsive", en: "Responsive design" },
      { es: "Manejo de formularios", en: "Form handling" },
    ],
    screenshots: {
      gallery: [
        { image: expontaneaHome, label: { es: "Inicio", en: "Home" } },
        { image: expontaneaCatalogo, label: { es: "Catálogo", en: "Catalog" } },
        { image: expontaneaNosotros, label: { es: "Nosotros", en: "About us" } },
      ],
    },
  },
  {
    slug: "autocare",
    name: "AutoCare SV",
    category: { es: "APLICACIÓN FULL-STACK", en: "FULL-STACK APPLICATION" },
    previewImage: autocareHome,
    description: {
      es: "Una plataforma web para un centro de servicio automotriz que permite a los clientes consultar servicios, agendar citas y administrar sus vehículos desde un área de cuenta.",
      en: "A web platform designed for an automotive service center, allowing customers to explore services, schedule appointments and manage their vehicles through a dedicated account area.",
    },
    technologies: ["React", "TypeScript", "Vite", "React Hook Form", "Zod", "NestJS", "Prisma", "REST API"],
    features: [
      {
        title: { es: "Funciones públicas", en: "Public features" },
        items: [
          { es: "Servicios", en: "Services" },
          { es: "Detalles de servicio", en: "Service Details" },
          { es: "Solicitud de cita", en: "Appointment Request" },
          { es: "Autenticación", en: "Authentication" },
          { es: "Registro", en: "Registration" },
          { es: "Navegación responsive", en: "Responsive Navigation" },
        ],
      },
      {
        title: { es: "Área del cliente", en: "Client area" },
        items: [
          { es: "Panel", en: "Dashboard" },
          { es: "Vehículos", en: "Vehicles" },
          { es: "Citas", en: "Appointments" },
          { es: "Detalles de cita", en: "Appointment Details" },
          { es: "Historial de servicio", en: "Service History" },
        ],
      },
    ],
    role: {
      es: "Desarrollo frontend y backend, integración entre React y la API REST, implementación del área del cliente y conexión con la base de datos.",
      en: "Frontend and backend development, React and REST API integration, implementation of the client area and database integration.",
    },
    learning: [
      { es: "Arquitectura full-stack", en: "Full-stack architecture" },
      { es: "React + TypeScript", en: "React + TypeScript" },
      { es: "NestJS", en: "NestJS" },
      { es: "REST APIs", en: "REST APIs" },
      { es: "Prisma", en: "Prisma" },
      { es: "Integración frontend/backend", en: "Frontend/backend integration" },
    ],
    screenshots: {
      gallery: [
        { image: autocareHome, label: { es: "Inicio", en: "Home" } },
        { image: autocareLogin, label: { es: "Login", en: "Login" } },
        { image: autocareServicios, label: { es: "Servicios", en: "Services" } },
        { image: autocareCuenta, label: { es: "Cuenta", en: "Account" } },
        { image: autocareDashboard, label: { es: "Dashboard", en: "Dashboard" } },
      ],
    },
    architecture: {
      layers: [
        { es: "Usuario", en: "User" },
        { es: "React + TypeScript", en: "React + TypeScript" },
        { es: "API REST", en: "REST API" },
        { es: "NestJS", en: "NestJS" },
        { es: "Prisma", en: "Prisma" },
        { es: "Base de datos", en: "Database" },
      ],
    },
  },
];
