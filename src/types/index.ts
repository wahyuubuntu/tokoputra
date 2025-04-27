
export interface Product {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
  description: string;
  rating: number;
  ratingCount: number;
  buyLink: string;
}

export interface Video {
  id: number;
  title: string;
  youtubeId: string;
  downloadLink: string;
}

export interface Banner {
  id: number;
  imageUrl: string;
  title: string;
  link: string;
}

export interface ProfileContact {
  name: string;
  email: string;
  phone: string;
  address: string;
  socialLinks: {
    instagram?: string;
    facebook?: string;
    twitter?: string;
  };
}
