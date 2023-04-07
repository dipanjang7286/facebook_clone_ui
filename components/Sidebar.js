import React from "react";
import { ImUsers } from "react-icons/im";
import { MdGroups } from "react-icons/md";
import { AiOutlineShop } from "react-icons/ai";
import { MdOutlineOndemandVideo, MdOutlineExpandMore } from "react-icons/md";
import { BsStopwatch } from "react-icons/bs";
import Image from "next/image";
import { useSession } from "next-auth/react";
import Sidebaritem from "./Sidebaritems";

const Sidebar = () => {
//   const { data: session, status } = useSession();
  return (
    <div className="hidden lg:inline-flex flex-col py-2 pl-2 max-w-xl lg:min-w-[320px]">
      <div className="flex items-center space-x-2 py-3 pl-4  hover:bg-gray-200 rounded-l-xl cursor-pointer ">
        <Image
          src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/2021_Facebook_icon.svg/800px-2021_Facebook_icon.svg.png'
          height={40}
          width={40}
          className="rounded-full cursor-pointer"
        />
        <p className="hidden sm:inline-flex font-medium">
          Dipanjan Ghosh
        </p>
      </div>
      <Sidebaritem Icon={ImUsers} value="Friends"></Sidebaritem>
      <Sidebaritem Icon={MdGroups} value="Groups"></Sidebaritem>
      <Sidebaritem Icon={AiOutlineShop} value="MarketPlace"></Sidebaritem>
      <Sidebaritem Icon={MdOutlineOndemandVideo} value="Watch"></Sidebaritem>
      <Sidebaritem Icon={BsStopwatch} value="Memeries"></Sidebaritem>
      <Sidebaritem Icon={MdOutlineExpandMore} value="See more"></Sidebaritem>
    </div>
  );
};

export default Sidebar;