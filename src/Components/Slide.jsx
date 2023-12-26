import React from 'react'
import Slider from 'infinite-react-carousel';
import CategoryCard from './categoryCard';
import { cards } from "../../data"

const Slide = ({ children, arrowsScroll, centerMode, slidesToShow , wheel , autoplay , autoplaySpeed}) => {
    return (
        <div className='flex justify-center py-[100px]'>
            <div className='container'>
                <Slider slidesToShow={slidesToShow} arrowsScroll={arrowsScroll} centerMode={centerMode} wheel={wheel} autoplay={autoplay} autoplaySpeed={autoplaySpeed}>
                    {children}
                </Slider>
            </div>
        </div>
    )
}

export default Slide