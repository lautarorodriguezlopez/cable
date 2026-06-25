export const mockProfile = {
  personality: {
    archetype: "El Analista Resiliente",
    description: "Basado en tus últimas 4 semanas de conversación, muestras un perfil altamente analítico, con tendencia a sobre-procesar problemas laborales. Alta apertura a la experiencia, pero con picos de estrés (neuroticismo temporal) asociados a fechas de entrega.",
    traits: [
      { name: "Apertura", score: 85 },
      { name: "Responsabilidad", score: 90 },
      { name: "Extraversión", score: 40 },
      { name: "Amabilidad", score: 70 },
      { name: "Neuroticismo", score: 65 }
    ]
  },
  availableTests: [
    {
      id: 'big5',
      title: 'Inventario Big Five (BFI)',
      description: 'Evalúa los 5 grandes rasgos de la personalidad. Base de la psicología moderna.',
      duration: '5 min',
      status: 'completed',
      scientific: true
    },
    {
      id: 'phq9',
      title: 'Cuestionario PHQ-9',
      description: 'Métrica estándar clínica para evaluar el nivel de desgaste anímico e indicios de depresión.',
      duration: '3 min',
      status: 'pending',
      scientific: true
    },
    {
      id: 'gad7',
      title: 'Escala de Ansiedad GAD-7',
      description: 'Herramienta de screening validada para evaluar el nivel de ansiedad generalizada.',
      duration: '2 min',
      status: 'pending',
      scientific: true
    },
    {
      id: 'mbi',
      title: 'Inventario Burnout de Maslach',
      description: 'Mide el agotamiento emocional y la realización personal en el trabajo.',
      duration: '7 min',
      status: 'pending',
      scientific: true
    }
  ]
};
