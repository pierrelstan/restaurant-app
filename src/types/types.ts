export interface Posts {
  _id: string;
  name: string;
  owner_name: string;
  species: string;
  age: number;
  poddy_trained: boolean;
  diet: Array<string>;
  image_url: string;
  likes: Array<string>;
  dislikes: Array<string>;
}
export interface PostsProps {
  posts: Posts;
}

export interface maintenanceProps {
  image?: StaticImageData | string;
}
