export type BrandNFT = {
    id: string;
    name: string;
    image: string;
    description: string;
    price: string;
  };
  
  export type Brand = {
    brand: string;
    nfts: BrandNFT[];
    offers: string;
  };
  
  
  