import React from "react";
import { Link } from "react-router-dom";

const Messages = () => {
  const currentUser = {
    id: 1,
    username: "Anna",
    isSeller: true,
  };

  const message = `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora amet incidunt minima illum accusantium. Explicabo quod ut error, enim quo aperiam aliquam repellat? Velit animi tempore deleniti! Explicabo, sequi soluta.`;

  return (
    <div>
      <div className="myGigs flex justify-center">
        <div className="container py-[50px]">
          <div className="title flex justify-between items-center">
            <h1 className="text-4xl font-bold my-2">Messages</h1>
          </div>
          <table className="w-full">
            <tr className="h-12">
              <th className="text-left">Buyer</th>
              <th className="text-left">Last Message</th>
              <th className="text-left">Date</th>
              <th className="text-left">Action</th>
            </tr>
            <tr className="h-12 bg-[#1dbf730f] border">
              <td>
                <h3 className="p-2">yash</h3>
              </td>
              <td>
                <Link>{message.substring(0, 100)}...</Link>
              </td>
              <td>23-02-2023</td>

              <td>
                <button className="bg-green-500 text-white font-semibold border-none px-4 py-2 cursor-pointer m-2">
                  Mark as Read
                </button>
              </td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Messages;
