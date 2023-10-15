// // pages/[brand].tsx-
// import { fetchBrands } from '@/utils/fetchBrands';
// import DataMapping from './DataMapping';
// import { Brand } from '@/brands';

// type SearchParams = {
//   brand?: string;
// };
// type Props = {
//   brand?: string;
// };

// const BrandPage = async (request: any) => {
//   console.log('request in brandpage',request);
//   const brand = request.nextUrl.pathname.split("/").pop();
//   let brandData: Brand[] = [];
//   console.log('searchParams',brand);
//   brandData = await fetchBrands(brand) || [];
//   // if (typeof brandName === 'string') {
//   //   brandData = await fetchBrands(brandName) || [];
//   // }



//   return (
//     <div className="p-4">
//       <DataMapping brandData={brandData}/>
      
//     </div>
//   );
// };

// export default BrandPage;



// pages/[brand].tsx-
import { fetchBrands } from '@/utils/fetchBrands';
import DataMapping from './DataMapping';
import { Brand } from '@/brands';
import Header from '@/components/Header';

type SearchParams = {
  brand?: string;
};
type Props = {
  searchParams: SearchParams;
};


const BrandPage = async ({ searchParams }: Props) => {

  let brandData: Brand[] = [];
  console.log('searchParams',searchParams.brand);
  brandData = await fetchBrands(searchParams.brand) || [];



  return (
    <div>
      <Header />
      <DataMapping brandData={brandData} data={[]}/>
    </div>
  );
};

export default BrandPage;
