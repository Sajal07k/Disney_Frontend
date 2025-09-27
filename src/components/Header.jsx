import Logo from "./../assets/Images/disney_logo.png";
import {
  HiHome,
  HiMagnifyingGlass,
  HiStar,
  HiPlayCircle,
  HiTv,
} from "react-icons/hi2";
import { HiPlus, HiDotsVertical } from "react-icons/hi";
import HeaderItems from "./HeaderItems";
import { useState } from "react";

function Header() {
  const [toggle, setToggle] = useState(false);
  const navItems = [
    {
      name: "HOME",
      icon: HiHome,
    },
    {
      name: "SEARCH",
      icon: HiMagnifyingGlass,
    },
    {
      name: "WATCHLIST",
      icon: HiPlus,
    },
    {
      name: "ORIGINALS",
      icon: HiStar,
    },
    {
      name: "MOVIES",
      icon: HiPlayCircle,
    },
    {
      name: "SERIES",
      icon: HiTv,
    },
  ];
  return (
    <div className="flex items-center justify-between p-5 w-screen">
      <div className="flex items-center gap-8">
        <img src={Logo} className="w-[80px] md:w-[115px] object-cover" />
        <div className="hidden md:flex gap-8">
            {navItems.map((item) => 
                <HeaderItems key={item.name} name={item.name} Icon={item.icon} />
            )}
        </div>
        <div className="flex md:hidden gap-5">
            {navItems.map((item, index) => 
                index < 3 && <HeaderItems key={item.name} name={item.name} Icon={item.icon} />
            )}
            <div className="md:hidden" onClick={() => setToggle(!toggle)}>
                <HeaderItems name={""} Icon={HiDotsVertical}/>
                {toggle ? (
                    <div className="absolute mt-3 bg-[#121212] border-[1px] border-gray-700 p-3 px-5 py-4">
                        {navItems.map((item, index) => 
                            index > 2 && <HeaderItems key={item.name} name={item.name} Icon={item.icon} />
                        )}
                    </div>
                ) : null}
            </div>
        </div>
      </div>
      <img
        src="https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745"
        className="w-[40px] rounded-full"
      />
    </div>
  );
}

export default Header;
