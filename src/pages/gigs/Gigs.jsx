import React, { useRef, useState } from "react";
import { gigs } from "../../../data";
import GigCard from "../../Components/GigCard";

function Gigs() {
  const [sort, setSort] = useState("sales");
  const [open, setOpen] = useState(false);
  const minRef = useRef();
  const maxRef = useRef();

  const reSort = (type) => {
    setSort(type);
    setOpen(false);
  };

  const apply = () => {
    console.log(minRef.current.value);
    console.log(maxRef.current.value);
  };

  return (
    <div className="w-full flex justify-center">
      <div className="container flex flex-col gap-5 p-8">
        <span className="text-sm font-light text-gray-500">{"Liverr > Graphics & Design"} </span>
        <h1 className="text-2xl font-semibold">AI Artists</h1>
        <p className="text-gray-500 font-light">Explore the boundaries of art and technology with Liverr's AI artists</p>
        <div className="flex justify-between items-center mb-5">
          <div className="flex items-center gap-10 text-gray-500 font-light">
            <span>Budget</span>
            <input ref={minRef} type="number" placeholder="min" className="p-2 border border-lightgrey rounded outline-none" />
            <input ref={maxRef} type="number" placeholder="max" className="p-2 border border-lightgrey rounded outline-none" />
            <button onClick={apply} className="p-2 bg-[#1dbf73] text-white font-semibold rounded cursor-pointer">Apply</button>
          </div>
          <div className="relative flex items-center gap-10">
            <span className="text-gray-500 font-light">Sort by</span>
            <span className="font-semibold">{sort === "sales" ? "Best Selling" : "Newest"}</span>
            <img src="./assets/down.png" alt="" onClick={() => setOpen(!open)} className="w-4 h-4 cursor-pointer" />
            {open && (
              <div className="rightMenu p-5 bg-white border border-lightgrey rounded absolute top-8 right-0 z-10 flex flex-col gap-5 text-gray-500 cursor-pointer">
                {sort === "sales" ? (
                  <span onClick={() => reSort("createdAt")}>Newest</span>
                ) : (

                  <span onClick={() => reSort("sales")}>Best Selling</span>

                )}
              </div>
            )}
          </div>
        </div>
        <div className="flex justify-between flex-wrap">
          {gigs.map((gig) => (
            <GigCard key={gig.id} item={gig} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Gigs;
