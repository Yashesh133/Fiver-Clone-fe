import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {

  const [active, setActive] = useState(false)
  const [open, setOpen] = useState(false)

  const { pathname } = useLocation()

  // active navbar 
  const isActive = () => {
    window.scrollY > 0 ? setActive(true) : setActive(false)
  }

  useEffect(() => {
    window.addEventListener("scroll", isActive)

    return () => {
      window.removeEventListener("scroll", isActive)
    }
  }, [])


  // dummy user
  const sellerUser = {
    id: 1,
    name: "yashesh thummar",
    isSeller: true,
  }

  return (
    <div className={active || pathname !== "/" ? "flex flex-col items-center justify-between z-50 bg-[#ffffff] text-[#013914] transition-all ease-in-out duration-500 sticky top-0"
      : " flex flex-col items-center justify-between bg-[#013914] text-[#ffffff] z-50"
    }>
      <div className='container flex justify-between items-center py-[20px]'>
        <div className='logo text-[34px] font-extrabold'>
          <Link to="/">
            <span>fiverr </span>
          </Link>

          <span className='text-[#1dbf73]'>.</span>
        </div>
        <div className='links flex gap-5 justify-center items-center font-bold '>
          <span>Fiver Business</span>
          <span>Explore</span>
          <span>English</span>
          <span>Sign in</span>
          {!sellerUser?.isSeller && <span>Become a seller</span>}

          {!sellerUser && <button className='px-[20px] py-[10px] bg-transparent rounded border-2 hover:bg-[#1dbf73] hover:border-[#1dbf73]'>
            join
          </button>
          }
          {sellerUser.isSeller && (
            <>
              <div className='flex items-center gap-3 cursor-pointer relative' onClick={() => setOpen(!open)}>
                <img
                  src='https://www.freeiconspng.com/uploads/user-login-icon-14.png'
                  alt='loginIcon'
                  className='h-[32px] w-[32px] object-cover' />
                <span>{sellerUser?.name}</span>
                {
                  open && (
                    <>
                      <div className='absolute top-12 p-[20px] bg-white rounded-xl border flex flex-col gap-3 text-gray-600 w-[150px] font-medium'>
                        {sellerUser?.isSeller && (
                          <>
                            <Link to="/Gigs">Gigs</Link>
                            <Link to="/AddGig">Add New Gigs</Link>
                          </>
                        )}
                        <Link to="/Orders">Orders</Link>
                        <Link to="/Messages">Message</Link>
                        <Link to="/">Logout</Link>
                      </div>
                    </>
                  )
                }

              </div>
            </>
          )}

        </div>
      </div>
      {
        (active || pathname !== "/") &&
        <>
          <hr className='h-0 w-full border-[0.5px] border-gray-300' />
          <div className='container p-[10px] flex justify-between font-semibold text-black'>
            <Link to="/">
              Graphics & Design
            </Link>
            <Link to="/">
              Video & Animation
            </Link>
            <Link to="/">
              Writing & Translation
            </Link>
            <Link to="/">
              AI Services
            </Link>
            <Link to="/">
              Digital Marketing
            </Link>
            <Link to="/">
              Music & Audio
            </Link>
            <Link to="/">
              Programming & Tech
            </Link>
            <Link to="/">
              Business
            </Link>
            <Link to="/">
              Lifestyle
            </Link>
          </div>
        </>
      }

    </div >
  );
};

export default Navbar;
