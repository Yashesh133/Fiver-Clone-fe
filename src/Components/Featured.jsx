import React from 'react'

const Featured = () => {
    return (
        <div className="featured h-[600px] flex justify-center bg-[#013914] text-white">
            <div className="container flex items-center">
                <div className="left flex flex-col gap-8">
                    <h1 className='text-[50px]'>
                        Find the perfect <span className='font-extralight italic'>freelance</span> services for your business
                    </h1>
                    <div className="search flex items-center justify-between bg-white rounded-[5px]">
                        <div className="searchInput flex items-center gap-2">
                            <img src="/assets/search.png" alt="" className='h-[20px] w-[20px] m-5' />
                            <input className='border-none outline-none' type="text" placeholder='Try "building mobil app"' />
                        </div>
                        <button className='w-[150px] h-[60px] border-none bg-[#1dbf73] text-white cursor-pointer'>Search</button>
                    </div>
                    <div className="popular flex items-center gap-2">
                        <span>Popular:</span>
                        <button className='bg-transparent text-white border-[1px] border-white px-[5px] py-[10px] rounded-[20px] text-[14px] cursor-pointer'>Web Design</button>
                        <button className='bg-transparent text-white border-[1px] border-white px-[5px] py-[10px] rounded-[20px] text-[14px] cursor-pointer'>WordPress</button>
                        <button className='bg-transparent text-white border-[1px] border-white px-[5px] py-[10px] rounded-[20px] text-[14px] cursor-pointer'>Logo Design</button>
                        <button className='bg-transparent text-white border-[1px] border-white px-[5px] py-[10px] rounded-[20px] text-[14px] cursor-pointer'>AI Services</button>
                    </div>
                </div>
                <div className="right h-full">
                    <img src="./assets/man.png" className='object-cover h-full' alt="" />
                </div>
            </div>
        </div>
    )
}

export default Featured