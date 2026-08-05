export type ProjectCategory = 'todos' | 'residencial' | 'corporativo' | 'penthouse' | 'icone';

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: ProjectCategory;
  categoryLabel: string;
  location: string;
  area: string; // e.g. "1.850 m²"
  year: string;
  architect: string;
  image: string;
  gallery: string[];
  description: string;
  highlights: string[];
  status: 'Concluído' | 'Em Execução' | 'Lançamento';
  vgv?: string;
  floorPlanImage?: string;
}

export interface Differential {
  id: string;
  number: string;
  title: string;
  description: string;
  iconName: string;
  size: 'large' | 'medium' | 'tall' | 'small';
  metric?: {
    value: string;
    label: string;
  };
  features?: string[];
}

export interface StatItem {
  number: number;
  suffix: string;
  prefix?: string;
  decimals?: number;
  label: string;
  description: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  avatar: string;
  quote: string;
  projectAssociated: string;
  rating: number;
}

export interface BIMCalculationState {
  projectType: 'residencial' | 'corporativo' | 'retrofit' | 'penthouse';
  areaSquareMeters: number;
  finishLevel: 'signature' | 'ultra' | 'master';
  location: 'sp-faria-lima' | 'alphaville' | 'rio-barra' | 'curitiba' | 'outros';
  options: {
    helipad: boolean;
    infinityPool: boolean;
    crestronAutomation: boolean;
    leedPlatinum: boolean;
    solarFacade: boolean;
  };
}
