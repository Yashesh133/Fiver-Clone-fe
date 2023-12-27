import React from "react";
import { Slider } from "infinite-react-carousel/lib";

function Gig() {
  return (
    <div className="flex justify-center">
      <div className="container p-8 flex gap-[50px]">
        <div className="left flex flex-col gap-[20px] basis-3/5">
          <span className="breadcrumbs text-gray-500 text-[13px] font-light">{"Liverr > Graphics & Design >"}</span>
          <h1>I will create ai generated art for you</h1>
          <div className="user flex items-center gap-[10px]">
            <img
              className="pp w-[32px] h-[32px] rounded-[50%] object-cover"
              src="https://images.pexels.com/photos/720327/pexels-photo-720327.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt=""
            />
            <span className="font-medium text-[14px]">Anna Bell</span>
            <div className="stars flex items-center gap-[5px]">
              <img className="h-[24px] w-[24px]" src="/assets/star.png" alt="" />
              <img className="h-[24px] w-[24px]" src="/assets/star.png" alt="" />
              <img className="h-[24px] w-[24px]" src="/assets/star.png" alt="" />
              <img className="h-[24px] w-[24px]" src="/assets/star.png" alt="" />
              <img className="h-[24px] w-[24px]" src="/assets/star.png" alt="" />
              <span className="text-[14px] font-bold text-yellow-500">5</span>
            </div>
          </div>
          <Slider slidesToShow={1} arrowsScroll={1} className="slider bg-gray-200">
            <img
              className="object-contain max-h-[500px]"
              src="https://images.pexels.com/photos/1074535/pexels-photo-1074535.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt=""
            />
            <img
              className="object-contain max-h-[500px]"
              src="https://images.pexels.com/photos/1462935/pexels-photo-1462935.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt=""
            />
            <img
              className="object-contain max-h-[500px]"
              src="https://images.pexels.com/photos/1054777/pexels-photo-1054777.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt=""
            />
          </Slider>
          <h2 className="font-normal"> About the Gig </h2>
          <p className="font-light leading-6 text-gray-500">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid sit reiciendis quibusdam fuga sed omnis dolore, inventore ratione, id ducimus sequi numquam? Earum necessitatibus expedita eveniet amet error cum deleniti, quos ipsum vero delectus recusandae ullam alias est, veniam quaerat assumenda voluptatum nulla ab adipisci quibusdam fuga illo, praesentium possimus? Reprehenderit veniam similique laboriosam, accusantium cum deserunt ipsam repellendus ex. Aliquid rerum sequi tenetur eius, nemo veniam vero aut reprehenderit illum, quibusdam dolorem quos tempora nam hic maxime libero doloribus labore. Enim adipisci neque quae libero, quas quisquam laudantium debitis incidunt unde consequuntur, accusamus eos inventore consequatur! Ratione pariatur atque cum! Officiis quaerat commodi dolorum quidem, neque dolore consequatur nobis adipisci facere vitae ipsa, minus obcaecati eos sed nesciunt? Commodi neque voluptas accusantium molestiae, provident nulla earum quis quisquam facilis mollitia at eos explicabo id vitae minus voluptate, nobis ducimus ipsa sunt fugiat? Error minus et, aperiam non laborum, vitae impedit rerum exercitationem cumque nulla facilis doloribus provident quaerat accusantium magnam tenetur tempora nihil similique adipisci quisquam, dolor ab velit. A inventore ducimus porro recusandae, repudiandae in dolor alias dolorum itaque assumenda nisi, ipsam vero adipisci non molestiae numquam unde veniam eius illum, sint pariatur quae labore maiores id! Praesentium?z
          </p>
          <div className="seller flex flex-col gap-[20px] mt-12">
            <h2 className="font-semibold">
              About the Seller
            </h2>
            <div className="user flex items-center gap-[20px]">
              <img
                src="https://images.pexels.com/photos/720327/pexels-photo-720327.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
                className="w-[100px] h-[100px] rounded-[50%] object-cover"
              />
              <div className="info flex flex-col gap-[10px]">
                <span className="font-semibold text-[14px]">Anna Bell</span>
                <div className="stars flex items-center gap-[5px]">
                  <img className="h-[14px] w-[14px]" src="/assets/star.png" alt="" />
                  <img className="h-[14px] w-[14px]" src="/assets/star.png" alt="" />
                  <img className="h-[14px] w-[14px]" src="/assets/star.png" alt="" />
                  <img className="h-[14px] w-[14px]" src="/assets/star.png" alt="" />
                  <img className="h-[14px] w-[14px]" src="/assets/star.png" alt="" />
                  <span className="text-[14px] font-bold text-yellow-500">5</span>
                </div>
                <button className="bg-white border border-gray-400 p-[10px] rounded cursor-pointer">
                  Contact Me
                </button>
              </div>
            </div>
            <div className="box border border-gray-300 rounded p-[20px] mt-[20px]">
              <div className="items flex justify-between flex-wrap">
                <div className="item flex flex-col gap-[10px] mb-[20px] w-[300px]">
                  <span className="title font-light">From</span>
                  <span className="desc">USA</span>
                </div>
                <div className="item flex flex-col gap-[10px] mb-[20px] w-[300px]">
                  <span className="title font-light">Member Since</span>
                  <span className="desc ">Aug 2022</span>
                </div>
                <div className="item flex flex-col gap-[10px] mb-[20px] w-[300px]">
                  <span className="title font-light">AVG. response time</span>
                  <span className="desc ">4 hours</span>
                </div>
                <div className="item flex flex-col gap-[10px] mb-[20px] w-[300px]">
                  <span className="title font-light">Last Delivery</span>
                  <span className="desc ">1 day Ago</span>
                </div>
                <div className="item flex flex-col gap-[10px] mb-[20px] w-[300px]">
                  <span className="title font-light">Language</span>
                  <span className="desc ">English, Hindi, Gujarati</span>
                </div>
              </div>
              <hr className="h-0 border-[1px] border-gray-500 mb-[20px]" />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero dolorum dolores, ullam veniam provident possimus quis consequuntur est magnam ipsa autem officiis voluptatum repellendus repudiandae optio. Architecto, voluptatibus corporis! Obcaecati.
              </p>
            </div>
          </div>
          <div className="reviews mt-[50px]">
            <h2 className="font-semibold">
              Reviews
            </h2>
            <div className="item flex flex-col gap-[20px] m-[20px]">
              <div className="user flex items-center">
                <img
                  className="pp h-[50px] w-[50px] rounded-[50%]"
                  src="https://images.pexels.com/photos/839586/pexels-photo-839586.jpeg?auto=compress&cs=tinysrgb&w=1600"
                  alt=""
                />
                <div className="info flex flex-col gap-[10px] ml-3">
                  <span>Yashesh Thummar</span>
                  <div className="country flex items-center gap-[10px] text-gray-500">
                    <img
                      src="https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1fa-1f1f8.png"
                      alt=""
                      className="w-[20px]"
                    />
                    <span>India</span>
                  </div>
                </div>
              </div>
              <div className="stars flex gap-[5px]">
                <img className="h-[24px] w-[24px]" src="/assets/star.png" alt="" />
                <img className="h-[24px] w-[24px]" src="/assets/star.png" alt="" />
                <img className="h-[24px] w-[24px]" src="/assets/star.png" alt="" />
                <img className="h-[24px] w-[24px]" src="/assets/star.png" alt="" />
                <img className="h-[24px] w-[24px]" src="/assets/star.png" alt="" />
                <span className="text-[14px] font-bold text-yellow-500">5</span>
              </div>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas delectus aperiam soluta tempore atque, ratione alias hic possimus? Velit, inventore!</p>
              <div className="helpful flex items-center gap-[10px]">
                <span>Helpful?</span>
                <img className="h-[14px] w-[14px]" src="/assets/like.png" alt="" />
                <span>Yes</span>
                <img className="h-[14px] w-[14px]" src="/assets/dislike.png" alt="" />
                <span>No</span>
              </div>
            </div>
            <hr className="h-0 border-[1px] border-gray-500 mb-[50px]" />
            <div className="item flex flex-col gap-[20px] m-[20px]">
              <div className="user flex items-center">
                <img
                  className="pp h-[50px] w-[50px] rounded-[50%]"
                  src="https://images.pexels.com/photos/842980/pexels-photo-842980.jpeg?auto=compress&cs=tinysrgb&w=1600"
                  alt=""
                />
                <div className="info flex flex-col gap-[10px] ml-3">
                  <span>Alis Thummar</span>
                  <div className="country flex items-center gap-[10px] text-gray-500">
                    <img
                      src="https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1fa-1f1f8.png"
                      alt=""
                      className="w-[20px]"
                    />
                    <span>India</span>
                  </div>
                </div>
              </div>
              <div className="stars flex gap-[5px]">
                <img className="h-[14px] w-[14px]" src="/assets/star.png" alt="" />
                <img className="h-[14px] w-[14px]" src="/assets/star.png" alt="" />
                <img className="h-[14px] w-[14px]" src="/assets/star.png" alt="" />
                <img className="h-[14px] w-[14px]" src="/assets/star.png" alt="" />
                <img className="h-[14px] w-[14px]" src="/assets/star.png" alt="" />
                <span className="text-[14px] font-bold text-yellow-500">5</span>
              </div>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas delectus aperiam soluta tempore atque, ratione alias hic possimus? Velit, inventore!</p>
              <div className="helpful flex items-center gap-[10px]">
                <span>Helpful?</span>
                <img className="h-[14px] w-[14px]" src="/assets/like.png" alt="" />
                <span>Yes</span>
                <img className="h-[14px] w-[14px]" src="/assets/dislike.png" alt="" />
                <span>No</span>
              </div>
            </div>

            <hr className="h-0 border-[1px] border-gray-500 mb-[50px]" />

            <div className="item flex flex-col gap-[20px] m-[20px]">
              <div className="user flex items-center">
                <img
                  className="pp h-[50px] w-[50px] rounded-[50%]"
                  src="https://images.pexels.com/photos/4124367/pexels-photo-4124367.jpeg?auto=compress&cs=tinysrgb&w=1600"
                  alt=""
                />
                <div className="info flex flex-col gap-[10px] ml-3">
                  <span>vaidik Thummar</span>
                  <div className="country flex items-center gap-[10px] text-gray-500">
                    <img
                      src="https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1fa-1f1f8.png"
                      alt=""
                      className="w-[20px]"
                    />
                    <span>India</span>
                  </div>
                </div>
              </div>
              <div className="stars flex gap-[5px]">
                <img className="h-[14px] w-[14px]" src="/assets/star.png" alt="" />
                <img className="h-[14px] w-[14px]" src="/assets/star.png" alt="" />
                <img className="h-[14px] w-[14px]" src="/assets/star.png" alt="" />
                <img className="h-[14px] w-[14px]" src="/assets/star.png" alt="" />
                <img className="h-[14px] w-[14px]" src="/assets/star.png" alt="" />
                <span className="text-[14px] font-bold text-yellow-500">5</span>
              </div>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas delectus aperiam soluta tempore atque, ratione alias hic possimus? Velit, inventore!</p>
              <div className="helpful flex items-center gap-[10px]">
                <span>Helpful?</span>
                <img className="h-[14px] w-[14px]" src="/assets/like.png" alt="" />
                <span>Yes</span>
                <img className="h-[14px] w-[14px]" src="/assets/dislike.png" alt="" />
                <span>No</span>
              </div>
            </div>
            <hr className="h-[0] border-[1px] border-gray-500 mb-[50px]" />

          </div>
        </div>
        <div className="right basis-2/5 border border-gray-500 p-[20px] rounded sticky top-[150px] gap-[20px] max-h-[500px] h-max ">
          <div className="price flex justify-between items-center">
            <h2 className="font-normal">1. AI generated image</h2>
            <h3 className="font-medium">$ 59.99</h3>
          </div>
          <p className="text-gray-500 my-[10px]">
            I will create a unique high quality AI generated image based on a description that you give me
          </p>
          <div className="details flex items-center justify-between text-[14px] mb-3">
            <div className="item flex items-center gap-[10px]">
              <img src="/assets/clock.png" alt="" className="w-[20px]" />
              <span>2 Days Delivery</span>
            </div>
            <div className="item flex items-center gap-[10px]">
              <img src="/assets/recycle.png" alt="" className="w-[20px]" />
              <span>3 Revisions</span>
            </div>
          </div>
          <div className="features flex flex-col gap-[10px]">
            <div className="item flex items-center gap-[10px] font-light text-gray-500 mb-[5px]">
              <img src="/assets/greencheck.png" alt="" className="w-[14px]" />
              <span>Prompt writing</span>
            </div>
            <div className="item flex items-center gap-[10px] font-light text-gray-500 mb-[5px]">
              <img src="/assets/greencheck.png" alt="" className="w-[14px]" />
              <span>Artwork delivery</span>
            </div>
            <div className="item flex items-center gap-[10px] font-light text-gray-500 mb-[5px]">
              <img src="/assets/greencheck.png" alt="" className="w-[14px]" />
              <span>Image upscaling</span>
            </div>
            <div className="item flex items-center gap-[10px] font-light text-gray-500 mb-[5px]">
              <img src="/assets/greencheck.png" alt="" className="w-[14px]" />
              <span>Additional design</span>
            </div>
          </div>
          <button className="bg-[#1dbf73] w-full p-[10px] text-white font-medium border-none text-[18px] cursor-pointer">
            Continue
          </button>
        </div>
      </div>
    </div>
  );
}

export default Gig;
