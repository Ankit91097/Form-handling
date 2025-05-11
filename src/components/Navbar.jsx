import React from "react";

const Navbar = () => {
  return (
    <>
      <div className="flex item-center justify-between p-5 bg-green-400">
        <h1 className="text-4xl font-semibold">Sheryians</h1>
        <div className="flex item-center justify-between gap-10 ">
          <h3 className="text-2xl">About</h3>
          <h3 className="text-2xl">Contact</h3>
          <h3 className="text-2xl">Courses</h3>
          <h3 className="text-2xl">Your Account</h3>
        </div>
      </div>
    </>
  );
};

export default Navbar;
