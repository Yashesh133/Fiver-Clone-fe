import React from 'react'

const AddGig = () => {
  return (
    <div className="flex justify-center">
      <div className="container py-10">
        <h1 className="mb-7 text-gray-700 font-medium text-[28px]">Add New Gig</h1>
        <div className="flex gap-24 justify-between">
          <div className="flex-1 flex flex-col gap-3 justify-between">
            <label className="text-gray-700 text-lg" htmlFor="">
              Title
            </label>
            <input
              className="w-full p-4 border my-1"
              type="text"
              placeholder="e.g. I will do something I'm really good at"
            />
            <label className="text-gray-700 text-lg" htmlFor="">
              Category
            </label>
            <select
              className="w-full p-4 border my-1"
              name="cats"
              id="cats"
            >
              <option value="design">Design</option>
              <option value="web">Web Development</option>
              <option value="animation">Animation</option>
              <option value="music">Music</option>
            </select>
            <label className="text-gray-700 text-lg" htmlFor="">
              Cover Image
            </label>
            <input className="w-full p-4" type="file" />
            <label className="text-gray-700 text-lg" htmlFor="">
              Upload Images
            </label>
            <input className="w-full p-4" type="file" multiple />
            <label className="text-gray-700 text-lg" htmlFor="">
              Description
            </label>
            <textarea
              className="w-full p-4 border my-1"
              placeholder="Brief descriptions to introduce your service to customers"
              rows="16"
            ></textarea>
            <button className="w-full p-4 bg-green-700 text-white font-semibold text-xl cursor-pointer">
              Create
            </button>
          </div>
          <div className="flex-1">
            <label className="text-gray-700 text-lg" htmlFor="">
              Service Title
            </label>
            <input
              className="w-full p-4 border my-1"
              type="text"
              placeholder="e.g. One-page web design"
            />
            <label className="text-gray-700 text-lg" htmlFor="">
              Short Description
            </label>
            <textarea
              className="w-full p-4 border my-1"
              placeholder="Short description of your service"
              rows="10"
            ></textarea>
            <label className="text-gray-700 text-lg" htmlFor="">
              Delivery Time (e.g. 3 days)
            </label>
            <input className="w-full p-4 border my-1" type="number" />
            <label className="text-gray-700 text-lg" htmlFor="">
              Revision Number
            </label>
            <input className="w-full p-4 border my-1" type="number" />
            <label className="text-gray-700 text-lg" htmlFor="">
              Add Features
            </label>
            <input
              className="w-full p-4 border my-1"
              type="text"
              placeholder="e.g. page design"
            />
            <input
              className="w-full p-4 border my-1"
              type="text"
              placeholder="e.g. file uploading"
            />
            <input
              className="w-full p-4 border my-1"
              type="text"
              placeholder="e.g. setting up a domain"
            />
            <input
              className="w-full p-4 border my-1"
              type="text"
              placeholder="e.g. hosting"
            />
            <label className="text-gray-700 text-lg" htmlFor="">
              Price
            </label>
            <input className="w-full p-4 border my-1" type="number" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default AddGig