import React,{useState,useEffect} from "react";

function Carfilter({carsList,setBrand,orderCarList}:any) {
    const [brandList, setBrandList] = useState<any>([]);
    const brandSet = new Set();
    useEffect(() => {
      if (carsList) {
        filterCarList();
      }
    }, [carsList]);
  
    const filterCarList = () => {
      carsList.forEach((element: any) => {
        brandSet.add(element.carBrand);
        
      });
      console.log(brandSet);  
      
      setBrandList(Array.from(brandSet));
      
        }
  return (
    <div className='mt-10 flex items-center justify-between'>
        <div>
            <h2 className='text-[30px] font-bold'>
                Cars Catalog
            </h2>
            <h2 className='text-gray-400'>Explore The Options</h2>

        </div>
        <div className='flex gap-5'>
        <select onChange={(e)=>orderCarList(e.target.value)} className="select select-bordered w-full max-w-xs">
            <option disabled selected>Price</option>
            <option value={-1}>Min-Max</option>
            <option value={1}>Max-Min</option>
        </select>
        <select onChange={(e)=>setBrand(e.target.value)} className="select select-bordered w-full max-w-xs">
            <option disabled selected>Manufacturer</option>
            {brandList && brandList.map((brand:string,index:number)=>(
                <option key={index}>{brand}</option>
            ))}  
        </select>
        </div>
        
    </div>
  )
}

export default Carfilter