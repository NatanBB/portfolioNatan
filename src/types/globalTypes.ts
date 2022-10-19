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