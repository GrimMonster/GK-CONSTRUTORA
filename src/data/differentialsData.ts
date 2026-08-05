import { Differential, StatItem, Testimonial } from '../types';

export const DIFFERENTIALS_DATA: Differential[] = [
  {
    id: 'precisao-bim',
    number: '01',
    title: 'Precisão Milimétrica & BIM 5D',
    description: 'Utilizamos modelagem digital tridimensional integrada com controle financeiro e cronograma físico em tempo real. Tolerância zero para imprevistos no canteiro de obras.',
    iconName: 'Cpu',
    size: 'large',
    metric: {
      value: '0,02 mm',
      label: 'Tolerância de escaneamento a laser 3D'
    },
    features: [
      'Detecção automatizada de conflitos (Clash Detection)',
      'Gêmeos Digitais (Digital Twins) para gestão pós-obra',
      'Orçamento dinâmico vinculado aos elementos 3D'
    ]
  },
  {
    id: 'sustentabilidade-ativa',
    number: '02',
    title: 'Sustentabilidade Ativa & ESG',
    description: 'Construções certificadas com selos verdes internacionais (LEED, WELL, AQUA-HQE). Redução ativa de desperdício de insumos e consumo energético otimizado.',
    iconName: 'Leaf',
    size: 'medium',
    metric: {
      value: '-40%',
      label: 'Consumo hídrico e energético'
    },
    features: [
      'Gestão inteligente de resíduos com reciclabilidade >90%',
      'Concreto de baixa pegada de carbono',
      'Certificação internacional garantida em contrato'
    ]
  },
  {
    id: 'prazo-rigoroso',
    number: '03',
    title: 'Prazo Rigoroso Industrializado',
    description: 'Cronograma executivo estruturado sob metodologia Last Planner® com penalidades contratuais em caso de descumprimento. Entregamos 100% das obras dentro do prazo acordado.',
    iconName: 'Clock',
    size: 'medium',
    metric: {
      value: '0 Atrasos',
      label: 'Em mais de 20 anos de história'
    },
    features: [
      'Processos pré-fabricados de montagem ágil',
      'Relatórios semanais com medição por drone',
      'Cláusulas com bônus e penalidade de pontualidade'
    ]
  },
  {
    id: 'gestao-transparente',
    number: '04',
    title: 'Gestão Transparente & Portal 24/7',
    description: 'Acompanhe cada etapa da sua obra através do Portal GK Exclusivo. Acesso a transmissão ao vivo via câmeras 4K, diário de obra digital e fluxo de caixa auditável.',
    iconName: 'ShieldCheck',
    size: 'large',
    metric: {
      value: '24/7',
      label: 'Câmeras em HD e auditoria financeira'
    },
    features: [
      'Live streaming 4K de múltiplos ângulos da obra',
      'Aprovação de memoriais e aditivos em 1-clique',
      'Transparência financeira total com notas fiscais indexadas'
    ]
  }
];

export const STATS_DATA: StatItem[] = [
  {
    number: 500,
    suffix: ' mil m²',
    prefix: '+',
    label: 'Área Construída',
    description: 'Projetos residenciais de luxo e edifícios corporativos executados com perfeição.'
  },
  {
    number: 20,
    suffix: ' Anos',
    prefix: '+',
    label: 'Legado no Mercado',
    description: 'Tradição em engenharia pesada e acabamentos de alta complexidade.'
  },
  {
    number: 100,
    suffix: '%',
    label: 'Pontualidade em Contrato',
    description: 'Zero dias de atraso acumulados em mais de duas décadas de operações.'
  },
  {
    number: 2.8,
    suffix: ' Bi',
    prefix: 'R$ ',
    decimals: 1,
    label: 'VGV Entregue',
    description: 'Valor Geral de Vendas gerenciado e construído com máxima eficiência financeira.'
  }
];

export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: '1',
    name: 'Arq. Marcio Kogan',
    role: 'Sócio-Fundador',
    company: 'Studio MK27',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80',
    quote: 'A GK Construtora é uma das poucas empresas no Brasil capazes de materializar estruturas metálicas e balanços de concreto protendido exatamente como projetados no papel, sem atritos ou concessões na qualidade dos detalhes.',
    projectAssociated: 'Residência Monólito',
    rating: 5
  },
  {
    id: '2',
    name: 'Dr. Roberto Villela',
    role: 'Proprietário & Investidor',
    company: 'Holding Villela Capital',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80',
    quote: 'Entregaram a nossa sede corporativa 25 dias antes do prazo estipulado. O portal de acompanhamento 24/7 nos deu total serenidade durante todo o processo construtivo.',
    projectAssociated: 'Torre Onyx Financial',
    rating: 5
  },
  {
    id: '3',
    name: 'Carolina & Henrique Mattos',
    role: 'Proprietários',
    company: 'Fazenda Boa Vista',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80',
    quote: 'A execução da estrutura em madeira MLC e o cuidado com a preservação do terreno nativo superaram todas as expectativas da nossa família. O acabamento fino é impecável.',
    projectAssociated: 'Residência Brise Wood',
    rating: 5
  }
];
