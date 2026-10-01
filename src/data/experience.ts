export type ExperiencePoint = {
  title: string;
  text: string;
};

export type Experience = {
  period: string;
  role: string;
  org: string;
  location: string;
  points: ExperiencePoint[];
};

/**
 * Mirrors the EXPERIENCE section of `resume/resume.tex` — edit the resume
 * first, then this file, so the two never claim different things.
 */
export const EXPERIENCE: Experience[] = [
  {
    period: 'Jun 2024 — Dec 2025',
    role: 'AI Engineer',
    org: 'Acadally',
    location: 'Delhi, India',
    points: [
      {
        title: 'Adaptive Tutoring System',
        text: 'Spearheaded the development of an AI-powered tutoring platform for grades 5–8, personalizing learning experiences and improving engagement.',
      },
      {
        title: 'Difficulty Calibration Agent',
        text: 'Engineered an agent using Item Response Theory (IRT) to accurately calibrate question difficulty, integrating NCERT textbooks as retrieval-augmented generation (RAG) sources.',
      },
      {
        title: 'Context-Aware Question Generator',
        text: "Leveraged large language models to produce dynamic, Bloom's Taxonomy-aligned questions, fostering critical thinking and deeper student interaction.",
      },
      {
        title: 'Text-to-SQL Interface',
        text: 'Designed and implemented a robust agent that translates teacher queries into SQL, enabling rapid data retrieval and real-time performance analytics.',
      },
    ],
  },
  {
    period: 'Apr — Jun 2024',
    role: 'Graduate Engineer Trainee',
    org: 'Radius Synergies',
    location: 'Delhi, India',
    points: [
      {
        title: 'Predictive Analytics & ETL',
        text: 'Built an ETL pipeline processing 17M+ records to prepare data for an electricity-consumption forecasting model, supporting strategic energy-efficiency planning.',
      },
    ],
  },
];
