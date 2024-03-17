import React from "react";
import cls from "classnames";
import Nav from "./nav/Nav";

const Layout = ({ children, rightSidebar = false, leftSidebar = true, title }) => {
  return (
    <div className="overflow-hidden bg-secondary  text-primary min-h-screen bg-gray-800 md:pr-[100px] text-gray-200 h-[100vh]">
      <Nav rightSidebar={rightSidebar} leftSidebar={leftSidebar} title={title}/>
      <main
        className={cls(
          `mt-20 rounded-3xl justify-center items-center w-min-screen md:container md:mx-[55px]  mx-4 pb-24`
        )}
      >
        {children}
      </main>
    </div>
  );
};

export default Layout;
