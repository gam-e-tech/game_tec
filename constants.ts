import { WorkExperience, Education, SkillCategory, ChartData } from './types';

export const RESUME_CONTEXT = `
Name: Gemechis Fekede
Roles: Civil Engineering Student, Video Editor, Graphic Designer
Location: Addis Ababa, Ethiopia
Phone: +251 940 732 824
Email: gamefekeda663@gmail.com
Instagram: @gftn_100

Education:
- Bachelor of Civil Engineering, Addis Ababa University (2024–Present)
- High School Diploma, Nekemte Secondary School (2020–2024)

Work Experience:
- Metal Fabrication Assistant at Sifan Metal Fabrication Company (Aug 2020 – May 2023): Assisted in measuring, cutting, welding, grinding. Supported assembly. Conducted quality checks.
- Freelance Video Editor & Graphic Designer (Jun 2024 – Present): Edited raw footage, added motion graphics, color grading. Designed posters, logos, branding.

Skills:
- Digital: Video Editing, Graphic Design, Motion Graphics, Branding.
- Software: Microsoft Word, Excel, PowerPoint, Access.
- Technical: Metal Fabrication, Electrical House Systems.
- Strengths: Problem Solving, Attention to Detail, Teamwork.

Languages:
- Oromic (Native)
- Amharic (Native)
- English (B2 - Professional Working Proficiency)

Volunteering:
- Community Support Volunteer (2024–Present): Supported underprivileged families, assisted small business startups.
`;

export const EXPERIENCES: WorkExperience[] = [
  {
    role: "Freelance Video Editor & Graphic Designer",
    company: "Self-Employed (Online)",
    location: "Remote",
    period: "Jun 2024 – Present",
    responsibilities: [
      "Edit raw footage into engaging, high-quality videos with transitions and effects.",
      "Perform audio syncing, color correction, and color grading for YouTube and social media.",
      "Design posters, flyers, banners, logos, and complete brand identities.",
      "Develop layouts and illustrations aligned with specific client goals."
    ]
  },
  {
    role: "Metal Fabrication Assistant",
    company: "Sifan Metal Fabrication Company",
    location: "Addis Ababa",
    period: "Aug 2020 – May 2023",
    responsibilities: [
      "Assisted in measuring, cutting, welding, grinding, and polishing metal components.",
      "Supported assembly and installation of metal structures and machinery parts.",
      "Conducted repairs, maintenance, and quality checks on fabricated products.",
      "Collaborated with senior technicians ensuring safety standards."
    ]
  }
];

export const EDUCATION: Education[] = [
  {
    degree: "Bachelor of Civil Engineering",
    institution: "Addis Ababa University",
    period: "2024 – Present",
    details: "EQF Level 6. Focus on Engineering, Manufacturing, and Construction."
  },
  {
    degree: "High School Diploma",
    institution: "Nekemte Secondary School",
    period: "2020 – 2024",
    details: "Natural Sciences stream. EQF Level 5."
  }
];

export const SKILL_CHART_DATA: ChartData[] = [
  { subject: 'Engineering', A: 90, fullMark: 100 },
  { subject: 'Video Editing', A: 85, fullMark: 100 },
  { subject: 'Graphic Design', A: 80, fullMark: 100 },
  { subject: 'Fabrication', A: 95, fullMark: 100 },
  { subject: 'Problem Solving', A: 90, fullMark: 100 },
  { subject: 'Teamwork', A: 85, fullMark: 100 },
];
