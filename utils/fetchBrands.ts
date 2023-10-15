// utils/fetchBrands.ts

import { Brand } from "@/brands";

export const fetchBrands = async (brandName?: string): Promise<Brand[]> => {
    
    const res = await fetch (`http://localhost:3000/api/brands?brand=${brandName}`, { next: { revalidate: 10, }});
    console.log('brandName',brandName);
    const data = res.ok ? await res.json() : [];
    console.log('data',data);
    const brandData: Brand[] = [data] || [];
    console.log('brandData',brandData);
    return brandData;
}
