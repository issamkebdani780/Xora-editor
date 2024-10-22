
import xora from "../../public/images/xora.svg";
import close from "../../public/images/close.svg";
import magic from "../../public/images/magic.svg";

import { useState } from "react";

import Links from "../component/links";
const Header = () => {
  const [isOpen, setIsopen] = useState(true);

  return (
    <header className="z-50 py-5 fixed top-0 left-0 w-full  ">
        <div className="w-full flex justify-between items-center lg:hidden padding-b padding-x">
            <img src={xora} alt="logo" width={115} height={55} className="z-50" />
            <div className="w-10 h-10 border-2 z-50 flex items-center justify-center rounded-full border-s4/25">
                <img
                    src={isOpen ? close : magic}
                    alt="toggleButton"
                    className="cursor-pointer"
                    onClick={
                        () => { setIsopen(!isOpen);}
                    }
                />
            </div>
        </div>
        {isOpen ? (
            <ul
            className="max-lg:bg-s2  padding-x flex lg:justify-between justify-center items-center gap-10 w-full max-lg:absolute max-lg:top-0 max-lg:left-0 max-lg:flex-col max-lg:items-start max-lg:h-screen"
            >
                <Links l="#features" text="FEATURES" />
                <div className="bg-cyan-700 w-1.5 h-1.5 rounded-full max-lg:hidden"></div>
                <Links l="#PRICING" text="PRICING" />
                <img src={xora} alt="logo" className="max-lg:hidden" />
                <Links l="#FAQ" text="FAQ" />
                <div className="bg-cyan-700 w-1.5 h-1.5 rounded-full max-lg:hidden"></div>
                <Links l="#DOWNOALD" text="DOWNOALD" />
            </ul>
        ) : (
            ""
        )}
    </header>
  );
};

export default Header;
