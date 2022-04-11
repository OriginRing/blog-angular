export interface articleList {
  code: string;
  data: article[]
}

export interface articleDetail {
  code: string;
  data: article
}

export interface article{
  id?: string;
  name?: string;
  date?: string;
  author?: string;
  introduce?: string;
  content?: string,
  image?: string
}
