export type ContactData = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  message: string;
}

export type Status = {
  message?: string;
  status?: boolean;
  succes?: boolean;
}

export type ProjectCardData = {
  title: string;
  description: string;
  imgUrl?: string | any;
  link?: string;
}

export type SkillsContextType = {
  id: number;
  title: string;
  content: string;
}

export type ProjectTableType = {
  title: string;
  description: string;
  imgUrl: any;
  link: string;
}