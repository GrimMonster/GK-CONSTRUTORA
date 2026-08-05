import { Project } from '../types';

export const PROJECTS_DATA: Project[] = [
  {
    id: 'residencia-monolito',
    title: 'Residência Monólito',
    subtitle: 'Concreto Aparente e Balanços Escultóricos',
    category: 'residencial',
    categoryLabel: 'Residencial de Luxo',
    location: 'Alphaville, São Paulo',
    area: '1.450 m²',
    year: '2025',
    architect: 'Studio MK27 & GK Engineering',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=85',
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1600&q=85',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1600&q=85',
      'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1600&q=85'
    ],
    description: 'Uma obra-prima da engenharia contemporânea. Estrutura em concreto protendido com balanço livre de 14 metros sem apoio de pilares intermediários. Caixilharia de alumínio minimalista Schüco com vidros de alta performance termoacústica.',
    highlights: [
      'Balanço livre protendido de 14m',
      'Certificação Internacional LEED Gold',
      'Automação Integrada Crestron Home',
      'Piscina suspensa com borda em vidro de 80mm'
    ],
    status: 'Concluído',
    vgv: 'R$ 48 Mi',
    floorPlanImage: 'https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'torre-onyx-corporate',
    title: 'Torre Onyx Financial',
    subtitle: 'Arquitetura Corporativa de Alta Eficiência',
    category: 'corporativo',
    categoryLabel: 'Corporativo Icon',
    location: 'Av. Brigadeiro Faria Lima, SP',
    area: '38.000 m²',
    year: '2024',
    architect: 'Aflalo & Gasperini Arquitetos',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1600&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1600&q=85',
      'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1600&q=85',
      'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1600&q=85'
    ],
    description: 'Edifício de escritórios AAA projetado com fachada pele de vidro insulado duplo com controle solar ativo. Construído com modelagem BIM 5D integrada, reduzindo em 30% a pegada de carbono durante a execução.',
    highlights: [
      'Lajes corporativas de 1.800 m² sem pilares',
      'Certificação LEED Platinum & WELL Building',
      'Fachada ventilada em granito Nero Marquina e Aço Corten',
      'Heliponto homologado para aeronaves pesadas (6t)'
    ],
    status: 'Concluído',
    vgv: 'R$ 650 Mi'
  },
  {
    id: 'penthouse-horizonte',
    title: 'Penthouse Horizonte Sky',
    subtitle: 'Engenharia de Interiores e Leveza Estrutural',
    category: 'penthouse',
    categoryLabel: 'Pent-house de Luxo',
    location: 'Jardins, São Paulo',
    area: '980 m²',
    year: '2025',
    architect: 'Arthur Casas & GK Prime',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1600&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1600&q=85',
      'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1600&q=85',
      'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1600&q=85'
    ],
    description: 'Cobertura triplex com reforço estrutural em fibra de carbono para abrigar espelho d’água aquecido no 35º andar. Acabamentos em mármore Travertino Navona usinado em CNC e marcenaria artesanal em Pau-Ferro.',
    highlights: [
      'Reforço estrutural ultra-leve em fibra de carbono',
      'Piscina acrílica com vista panorâmica 360º',
      'Isolamento acústico com manta de borracha reciclada alemã',
      'Adega climatizada subterrânea para 2.000 garrafas'
    ],
    status: 'Concluído',
    vgv: 'R$ 75 Mi'
  },
  {
    id: 'residencia-valle-sereno',
    title: 'Residência Valle Sereno',
    subtitle: 'Simbiose Entre Aço, Pedra e Madeira',
    category: 'residencial',
    categoryLabel: 'Residencial de Luxo',
    location: 'Vale do Sol, Nova Lima / BH',
    area: '1.920 m²',
    year: '2026',
    architect: 'Jacobsen Arquitetura',
    image: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1600&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1600&q=85',
      'https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?auto=format&fit=crop&w=1600&q=85',
      'https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&w=1600&q=85'
    ],
    description: 'Residência implantada em aclive acentuado com contenção inteligente em solo grampeado e pilares metálicos em aço Weathering (Corten). Telhado verde extensivo para regulação térmica natural.',
    highlights: [
      'Engenharia de fundação profunda em microestacas',
      'Telhado verde termicamente isolado de 800m²',
      'Captação e reutilização de 100% da água da chuva',
      'Brises pivotantes em madeira Cumaru de reflorestamento'
    ],
    status: 'Em Execução',
    vgv: 'R$ 55 Mi'
  },
  {
    id: 'complexo-helix-hub',
    title: 'Complexo Hélix Innovation',
    subtitle: 'Ícone de Engenharia Sustentável e Inovação',
    category: 'icone',
    categoryLabel: 'Marco Arquitetônico',
    location: 'Barra da Tijuca, Rio de Janeiro',
    area: '52.000 m²',
    year: '2025',
    architect: 'Zaha Hadid Architects & GK Brasil',
    image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1600&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1600&q=85',
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1600&q=85'
    ],
    description: 'Um marco urbano futurista com geometria curvilínea complexa executada com fôrmas robotizadas sob medida e concreto de altíssimo desempenho (CAD) de 100 MPa.',
    highlights: [
      'Geometria não-euclidiana com fôrmas CNC de precisão',
      'Concreto de altíssimo desempenho (100 MPa)',
      'Geração de energia solar fotovoltaica integrada na fachada (BIPV)',
      'Monitoramento estrutural com sensores de deformação IoT'
    ],
    status: 'Em Execução',
    vgv: 'R$ 920 Mi'
  },
  {
    id: 'residencia-brise-wood',
    title: 'Residência Brise Wood',
    subtitle: 'Estrutura de Madeira Laminada Colada (MLC)',
    category: 'residencial',
    categoryLabel: 'Residencial de Luxo',
    location: 'Fazenda Boa Vista, Porto Feliz',
    area: '1.650 m²',
    year: '2024',
    architect: 'Bernardes Arquitetura',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1600&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1600&q=85',
      'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1600&q=85'
    ],
    description: 'Projeto pioneiro no Brasil combinando fundações em concreto aparente e superestrutura em Madeira Laminada Colada (Glulam). Montagem de estrutura pré-fabricada realizada em 45 dias no local.',
    highlights: [
      'Superestrutura industrializada em MLC (Glulam)',
      'Pegada de carbono negativa na fase de estrutura',
      'Usina fotovoltaica off-grid de 45kWp',
      'Climatização geotérmica por poços profundos'
    ],
    status: 'Concluído',
    vgv: 'R$ 62 Mi'
  }
];
