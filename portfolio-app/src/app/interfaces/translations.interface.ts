export interface Translation {
  contact: string;
  skills: string;
  languages: string;
  additional: string;
  profile: string;
  experience: string;
  education: string;
  projects: string;
  downloadPdf: string;
  generatingPdf: string;
  pdfSuccess: string;
  pdfError: string;
  native: string;
  drivingLicense: string;
  relocation: string;
  profileDescription: string;
  currentPosition: string;
  location: {
    wroclaw: string;
    zielonaGora: string;
  };
  skillsList: string[];
  languagesList: LanguageItem[];
  additionalList: AdditionalItem[];
  experienceList: ExperienceItem[];
  educationList: EducationItem[];
  projectsList: string[];
}

export interface LanguageItem {
  name: string;
  level: string;
}

export interface AdditionalItem {
  icon: string;
  text: string;
}

export interface ExperienceItem {
  company: string;
  period: string;
  title: string;
  location: string;
  achievements: string[];
}

export interface EducationItem {
  institution: string;
  year: string;
  degree: string;
  details: string[];
}
