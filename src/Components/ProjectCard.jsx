import React from 'react'
import { Link } from 'react-router-dom'

const ProjectCard = ({ item }) => {
    return (
        <div className='shadow-lg'>
            <Link to="/">
                <div className="catCard w-[300px] h-[300px] rounded cursor-pointer overflow-hidden">
                    <img className='w-full h-[70%] object-cover' src={item.img} />
                    <div className='flex items-center gap-3 p-4'>
                        <img className='h-[40px] w-[40px] object-cover rounded-md' src={item.pp} />
                        <div>
                            <h2 className='text-[14px] font-normal'>{item.cat}</h2>
                            <span className='text-[12px] font-normal'>{item.username}</span>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default ProjectCard