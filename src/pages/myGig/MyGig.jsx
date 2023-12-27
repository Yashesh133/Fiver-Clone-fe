import React from 'react'
import { Link } from 'react-router-dom';

const MyGig = () => {

  const currentUser = {
    id: 1,
    username: "Anna",
    isSeller: true,
  };

  return (
    <div>
      <div className="myGigs flex justify-center">
        <div className="container py-[50px]">
          <div className="title flex justify-between items-center">
            <h1 className='text-3xl font-bold my-2'>My Gigs</h1>
            {currentUser.isSeller && (
              <Link to="/AddGig">
                <button className="bg-green-500 text-white font-semibold border-none px-4 py-2 cursor-pointer">
                  Add New Gig
                </button>
              </Link>
            )}
          </div>
          <table className="w-full">
            <tr className="h-12">
              <th className="text-left">Image</th>
              <th className="text-left">Title</th>
              <th className="text-left">Price</th>
              <th className="text-left">{currentUser?.isSeller ? "Buyer" : "Seller" }</th>
              <th className="text-left">Contact</th>
            </tr>
            <tr className="h-12 even:bg-[#1dbf730f] border">
              <td>
                <img
                  className="image w-[50px] h-[25px] object-cover"
                  src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600"
                  alt=""
                />
              </td>
              <td>Stunning concept art</td>
              <td>59.<sup className="text-xs">99</sup></td>
              <td>13</td>
              <td>
                <img className="message cursor-pointer w-[20px]" src="./assets/message.png" alt="" />
              </td>
            </tr>
            <tr className="h-12 even:bg-[#1dbf730f]">
              <td>
                <img
                  className="image w-[50px] h-[25px] object-cover"
                  src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600"
                  alt=""
                />
              </td>
              <td>Stunning concept art</td>
              <td>59.<sup className="text-xs">99</sup></td>
              <td>13</td>
              <td>
                <img className="message cursor-pointer w-[20px]" src="./assets/message.png" alt="" />
              </td>
            </tr>
            <tr className="h-12 even:bg-[#1dbf730f]">
              <td>
                <img
                  className="image w-[50px] h-[25px] object-cover"
                  src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600"
                  alt=""
                />
              </td>
              <td>Stunning concept art</td>
              <td>59.<sup className="text-xs">99</sup></td>
              <td>13</td>
              <td>
                <img className="message cursor-pointer w-[20px]" src="./assets/message.png" alt="" />
              </td>
            </tr>
            <tr className="h-12 even:bg-[#1dbf730f]">
              <td>
                <img
                  className="image w-[50px] h-[25px] object-cover"
                  src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600"
                  alt=""
                />
              </td>
              <td>Stunning concept art</td>
              <td>59.<sup className="text-xs">99</sup></td>
              <td>13</td>
              <td>
                <img className="message cursor-pointer w-[20px]" src="./assets/message.png" alt="" />
              </td>
            </tr>
          </table>
        </div>
      </div>

    </div>
  )
}

export default MyGig