import {
  Bot,
  Boxes,
  Braces,
  Brain,
  Cloud,
  Layers,
  MonitorSmartphone,
  Server,
  type LucideIcon,
} from 'lucide-react';

export type StackGroup = {
  label: string;
  icon: LucideIcon;
  items: string[];
};

/**
 * SOURCE OF TRUTH: every item here must appear in the CORE COMPETENCIES or
 * TECHNICAL SKILLS section of `resume/resume.tex`, or be one Aniket has
 * explicitly confirmed (CrewAI, fine-tuning). Nothing gets added from project
 * docs, the legacy site, or inference — a skills list is only worth anything
 * if every pill can be defended in an interview. Update the resume first,
 * then this file.
 */
export const STACK: StackGroup[] = [
  {
    label: 'Languages',
    icon: Braces,
    items: ['Python', 'TypeScript', 'SQL', 'C++'],
  },
  {
    label: 'Agentic AI',
    icon: Bot,
    items: [
      'Multi-agent orchestration',
      'ReAct tool calling',
      'MCP',
      'LangChain',
      'CrewAI',
    ],
  },
  {
    label: 'LLM Engineering',
    icon: Brain,
    items: ['Claude', 'GPT', 'Ollama', 'Together AI', 'Fine-tuning'],
  },
  {
    label: 'RAG & Retrieval',
    icon: Layers,
    items: ['ChromaDB', 'FAISS', 'Sentence Transformers'],
  },
  {
    label: 'ML & Data Science',
    icon: Boxes,
    items: [
      'PyTorch',
      'TensorFlow',
      'Transformers',
      'Scikit-learn',
      'NLP',
      'Pandas',
      'NumPy',
    ],
  },
  {
    label: 'Backend & Integrations',
    icon: Server,
    items: [
      'FastAPI',
      'SQLAlchemy',
      'PostgreSQL',
      'Supabase',
      'Redis',
      'Celery',
      'WebSockets',
      'Twilio',
      'Whisper',
      'ElevenLabs',
    ],
  },
  {
    label: 'Cloud & MLOps',
    icon: Cloud,
    items: [
      'Docker',
      'AWS (EC2, S3, SageMaker)',
      'Weights & Biases',
      'CI/CD',
      'Git/GitHub',
    ],
  },
  {
    label: 'Frontend',
    icon: MonitorSmartphone,
    items: ['React', 'Tailwind CSS'],
  },
];
