import React from 'react'
import { Link } from 'react-router-dom'

const CategoryCard = ({ item }) => {
  return (
    <div>
      <Link to="/gigs?cat=design">
        <div className="catCard w-[252px] h-[344px] text-white rounded cursor-pointer relative">
          <img className='h-full w-full object-cover' src={item.img} alt="" />
          <span className="desc absolute top-4 left-6 font-normal">{item.desc}</span>
          <span className="title absolute top-8 left-6 font-bold text-[24px]">{item.title}</span>
        </div>
      </Link>
    </div>
  )
}

export default CategoryCard