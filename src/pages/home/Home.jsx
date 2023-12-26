import React from 'react'
import Featured from '../../Components/Featured'
import TrustedBy from '../../Components/TrustedBy'
import Slide from '../../Components/Slide'
import { cards } from "../../../data"
import CategoryCard from '../../Components/categoryCard'

const Home = () => {
  return (
    <div>
      <Featured />
      <TrustedBy />
      <Slide slidesToShow={5} arrowsScroll={5} centerMode={true} wheel={true} autoplay={true} autoplaySpeed={1000}>
        {
          cards.map((item) => (
            <CategoryCard item={item} key={item.id} />
          ))
        }
      </Slide>
      <div className="features bg-[#f1fdf7] flex justify-center py-[100px]">
        <div className="container flex items-center gap-[200]">
          <div className="item flex flex-col gap-4 first:flex-2 last:flex-3">
            <h1 className='font-medium mb-3 text-[38px]'>A whole world of freelance talent at your fingertips</h1>
            <div className="title flex items-center gap-2 font-medium text-[18px] text-[#808080]">
              <img className='h-[24px] w-[24px]' src="./assets/check.png" alt="" />
              The best for every budget
            </div>
            <p className='text-[18px] font-light text-[#808080] leading-5 tracking-[1px]'>
              Find high-quality services at every price point. No hourly rates,
              just project-based pricing.
            </p>
            <div className="title flex items-center gap-2 font-medium text-[18px] text-[#808080]">
              <img className='h-[24px] w-[24px]' src="./assets/check.png" />
              Quality work done quickly
            </div>
            <p className='text-[18px] font-light text-[#808080] leading-5 tracking-[1px]'>
              Find the right freelancer to begin working on your project within
              minutes.
            </p>
            <div className="title flex items-center gap-2 font-medium text-[18px] text-[#808080]">
              <img className='h-[24px] w-[24px]' src="./assets/check.png" />
              Protected payments, every time
            </div>
            <p className='text-[18px] font-light text-[#808080] leading-5 tracking-[1px]'>
              Always know what you'll pay upfront. Your payment isn't released
              until you approve the work.
            </p>
            <div className="title flex items-center gap-2 font-medium text-[18px] text-[#808080]">
              <img className='h-[24px] w-[24px]' src="./assets/check.png" />
              24/7 support
            </div>
            <p className='text-[18px] font-light text-[#808080] leading-5 tracking-[1px]'>
              Find high-quality services at every price point. No hourly rates,
              just project-based pricing.
            </p>
          </div>
          <div className="item flex flex-col gap-4 first:flex-2 last:flex-3">
            <video className='w-[720px]' src="./assets/video.mp4" controls />
          </div>
        </div>
      </div>
      <div className="explore">
        <div className="container">
          <h1>Explore the marketplace</h1>
          <div className="items">
            <div className="item">
              <img
                src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/graphics-design.d32a2f8.svg"
                alt=""
              />
              <div className="line"></div>
              <span>Graphics & Design</span>
            </div>
            <div className="item">
              <img
                src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/online-marketing.74e221b.svg"
                alt=""
              />
              <div className="line"></div>

              <span>Digital Marketing</span>
            </div>
            <div className="item">
              <img
                src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/writing-translation.32ebe2e.svg"
                alt=""
              />
              <div className="line"></div>
              <span>Writing & Translation</span>
            </div>
            <div className="item">
              <img
                src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/video-animation.f0d9d71.svg"
                alt=""
              />
              <div className="line"></div>
              <span>Video & Animation</span>
            </div>
            <div className="item">
              <img
                src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/music-audio.320af20.svg"
                alt=""
              />
              <div className="line"></div>
              <span>Music & Audio</span>
            </div>
            <div className="item">
              <img
                src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/programming.9362366.svg"
                alt=""
              />
              <div className="line"></div>
              <span>Programming & Tech</span>
            </div>
            <div className="item">
              <img
                src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/business.bbdf319.svg"
                alt=""
              />
              <div className="line"></div>
              <span>Business</span>
            </div>
            <div className="item">
              <img
                src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/lifestyle.745b575.svg"
                alt=""
              />
              <div className="line"></div>
              <span>Lifestyle</span>
            </div>
            <div className="item">
              <img
                src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/data.718910f.svg"
                alt=""
              />
              <div className="line"></div>
              <span>Data</span>
            </div>
            <div className="item">
              <img
                src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/photography.01cf943.svg"
                alt=""
              />
              <div className="line"></div>
              <span>Photography</span>
            </div>
          </div>
        </div>
      </div>
      <div className="features dark">
        <div className="container">
          <div className="item">
            <h1>
              liverr <i>business</i>
            </h1>
            <h1>
              A business solution designed for <i>teams</i>
            </h1>
            <p>
              Upgrade to a curated experience packed with tools and benefits,
              dedicated to businesses
            </p>
            <div className="title">
              <img src="./img/check.png" alt="" />
              Connect to freelancers with proven business experience
            </div>

            <div className="title">
              <img src="./img/check.png" alt="" />
              Get matched with the perfect talent by a customer success manager
            </div>

            <div className="title">
              <img src="./img/check.png" alt="" />
              Manage teamwork and boost productivity with one powerful workspace
            </div>
            <button>Explore Liverr Business</button>
          </div>
          <div className="item">
            <img
              src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_870,dpr_2.0/v1/attachments/generic_asset/asset/d9c17ceebda44764b591a8074a898e63-1599597624768/business-desktop-870-x2.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home