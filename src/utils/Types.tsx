export type ChildrenType = {
  children: React.ReactNode;
  className?: string;
};

export type PostType = {
  id?: any;
  imgUrl: string;
  category: string;
  title: string;
  author: string;
  date: Date;
  excerpt: string;
};

export type SocialsType={
  id: number;
  link: string;
  icon: React.ReactElement
}