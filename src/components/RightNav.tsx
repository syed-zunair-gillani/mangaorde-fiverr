'use client'
import { GlobalContext } from "@/context/global-context";
import React, { useContext } from "react";

const RightNav = () => {

  const { genres, setSelectGener } = useContext(GlobalContext)
  
  const handleGenres = (item:any) => {
      setSelectGener(item)
  }

  return (
    <>
      <section id="right_nav">
        <div className="p-8">
        <div className="row-base-header text-white">
          <div className="heading">
            <h2 className="heading-1g m-0">Genres</h2>
          </div>
        </div>
        <ul className="mt-5 flex flex-wrap gap-2">
          <li onClick={()=>handleGenres('all')} className="bg-[#282a34] p-1 hover:bg-white hover:text-gray-800 cursor-pointer !pt-1.5 px-2">All</li>
            {
                genres?.map((item:any,idx:number)=>(
                    <li key={idx} onClick={()=>handleGenres(item.slug.current)} className="bg-[#282a34] p-1 hover:bg-white hover:text-gray-800 cursor-pointer !pt-1.5 px-2">{item.name}</li>
                ))
            }
        </ul>
        </div>
      </section>
    </>
  );
};

export default RightNav;
