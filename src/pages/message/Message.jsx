import React from "react";
import { Link } from "react-router-dom";

const Message = () => {
  return (
    <div className="message flex justify-center ">
      <div className="container m-[50px]">
        <span className="breadcrumbs font-light text-[13px] text-[#555]">
          <Link to="/messages">Messages</Link> {"> John Doe >"}
        </span>
        <div className="messages my-[30px] p-[50px] flex flex-col gap-[20px] h-[500px] overflow-y-scroll">
          <div className="item flex gap-[20px] max-w-[600px] text-[18px]">
            <img
              className="h-10 w-10 rounded-[50%] object-cover"
              src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt=""
            />
            <p className="p-5 rounded-tl-none rounded-tr-3xl rounded-br-3xl rounded-bl-3xl bg-gray-300 font-medium">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos iure
              mollitia perspiciatis officiis voluptate? Sequi quae officia
              possimus, iusto labore alias mollitia eveniet nemo placeat
              laboriosam nisi animi! Error, tenetur!
            </p>
          </div>
          <div className="item owner flex gap-[20px] max-w-[600px] text-[18px] flex-row-reverse self-end">
            <img
              className="h-10 w-10 rounded-[50%] object-cover"
              src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt=""
            />
            <p className="p-5 rounded-tl-3xl rounded-tr-none rounded-br-3xl rounded-bl-3xl bg-blue-600 text-white font-medium">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos iure
              mollitia perspiciatis officiis voluptate? Sequi quae officia
              possimus, iusto labore alias mollitia eveniet nemo placeat
              laboriosam nisi animi! Error, tenetur!
            </p>
          </div>
          <div className="item flex gap-[20px] max-w-[600px] text-[18px]">
            <img
              className="h-10 w-10 rounded-[50%] object-cover"
              src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt=""
            />
            <p className="p-5 rounded-tl-none rounded-tr-3xl rounded-br-3xl rounded-bl-3xl bg-gray-300 font-medium">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos iure
              mollitia perspiciatis officiis voluptate? Sequi quae officia
              possimus, iusto labore alias mollitia eveniet nemo placeat
              laboriosam nisi animi! Error, tenetur!
            </p>
          </div>
          <div className="item flex gap-[20px] max-w-[600px] text-[18px]">
            <img
              className="h-10 w-10 rounded-[50%] object-cover"
              src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt=""
            />
            <p className="p-5 rounded-tl-none rounded-tr-3xl rounded-br-3xl rounded-bl-3xl bg-gray-300 font-medium">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos iure
              mollitia perspiciatis officiis voluptate? Sequi quae officia
              possimus, iusto labore alias mollitia eveniet nemo placeat
              laboriosam nisi animi! Error, tenetur!
            </p>
          </div>
          <div className="item owner flex gap-[20px] max-w-[600px] text-[18px] flex-row-reverse self-end">
            <img
              className="h-10 w-10 rounded-[50%] object-cover"
              src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt=""
            />
            <p className="p-5 rounded-tl-3xl rounded-tr-none rounded-br-3xl rounded-bl-3xl bg-blue-600 text-white font-medium">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos iure
              mollitia perspiciatis officiis voluptate? Sequi quae officia
              possimus, iusto labore alias mollitia eveniet nemo placeat
              laboriosam nisi animi! Error, tenetur!
            </p>
          </div>
          <div className="item flex gap-[20px] max-w-[600px] text-[18px]">
            <img
              className="h-10 w-10 rounded-[50%] object-cover"
              src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt=""
            />
            <p className="p-5 rounded-tl-none rounded-tr-3xl rounded-br-3xl rounded-bl-3xl bg-gray-300 font-medium">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos iure
              mollitia perspiciatis officiis voluptate? Sequi quae officia
              possimus, iusto labore alias mollitia eveniet nemo placeat
              laboriosam nisi animi! Error, tenetur!
            </p>
          </div>
          <div className="item owner flex gap-[20px] max-w-[600px] text-[18px] flex-row-reverse self-end">
            <img
              className="h-10 w-10 rounded-[50%] object-cover"
              src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt=""
            />
            <p className="p-5 rounded-tl-3xl rounded-tr-none rounded-br-3xl rounded-bl-3xl bg-blue-600 text-white font-medium">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos iure
              mollitia perspiciatis officiis voluptate? Sequi quae officia
              possimus, iusto labore alias mollitia eveniet nemo placeat
              laboriosam nisi animi! Error, tenetur!
            </p>
          </div>
          <div className="item owner flex gap-[20px] max-w-[600px] text-[18px] flex-row-reverse self-end">
            <img
              className="h-10 w-10 rounded-[50%] object-cover"
              src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt=""
            />
            <p className="p-5 rounded-tl-3xl rounded-tr-none rounded-br-3xl rounded-bl-3xl bg-blue-600 text-white font-medium">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos iure
              mollitia perspiciatis officiis voluptate? Sequi quae officia
              possimus, iusto labore alias mollitia eveniet nemo placeat
              laboriosam nisi animi! Error, tenetur!
            </p>
          </div>
        </div>
        <hr className="h-0 border border-gray-400 mb-5" />
        <div className="write flex items-center justify-evenly">
          <textarea className="w-4/5 h-24 p-2 rounded-lg border border-gray-600" type="text" placeholder="write a message" name="" id="" cols={30} rows={10} />
          <button className="bg-[#1dbf73] w-[200px] p-5 text-white font-medium border-none rounded cursor-pointer text-[24px]">Send</button>
        </div>
      </div>
    </div>
  );
};

export default Message;