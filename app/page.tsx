"use client"
import Carfilter from "@/components/Home/Carfilter";
import CarsList from "@/components/Home/CarList";
import Hero from "@/components/Home/Home";
import SearchInput from "@/components/Home/Search";
import ToastMsg from "@/components/ToastMsg";
import { BookCreatedFlagContext } from "./context/BookCreatedFlagContext";
import { getCarList } from "@/services";
import { useEffect, useState } from "react";



export default function Home() {

  const [carsList,setCarsList]=useState<any>([])
  const [carsOrgList,setCarsOrgList]=useState<any>([])
  const [showToastMsg,setShowToastMsg]=useState<boolean>(false);
  useEffect(()=>{
    getCarList_();
  },[])
  const getCarList_=async()=>{
    const result:any=await getCarList();
    setCarsList(result?.carLists)
    setCarsOrgList(result?.carLists);
  }

  const filterCarList=(brand:string)=>{
    const filterList=carsOrgList.filter((item:any)=>
    item.carBrand==brand);
    setCarsList(filterList);
  }

  const orderCarList=(order:any)=>{
    const sortedData = [...carsOrgList].sort((a, b) =>
    order==-1? a.price - b.price:b.price - a.price);
    setCarsList(sortedData);
  }

  useEffect(()=>{
    if(showToastMsg)
    {
      setTimeout(function(){
        setShowToastMsg(false)
      },4000);
    }
  },[showToastMsg])
  

  return (
    <div className="p-5 sm:px-10 md:px-20">
      <BookCreatedFlagContext.Provider value={{showToastMsg,setShowToastMsg}}>
        <Hero/>
        <SearchInput/>
        <Carfilter carsList={carsOrgList}
        orderCarList={(value:string)=>orderCarList(value)}
        setBrand={(value:string)=>filterCarList(value)} />
        <CarsList carsList={carsList} />
        {showToastMsg?<ToastMsg msg={'Booking Created Successfully!'} />:null}
    </BookCreatedFlagContext.Provider>
    </div>
  )
}