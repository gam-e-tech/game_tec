export interface WorkExperience {
  role: string;
  company: string;
  location: string;
  period: string;
  responsibilities: string[];
}

export interface Education {
  degree: string;
  institution: string;
  period: string;
  details: string;
}

export interface SkillCategory {
  category: string;
  skills: string[];
}

export interface ChartData {
  subject: string;
  A: number;
  fullMark: number;
}
