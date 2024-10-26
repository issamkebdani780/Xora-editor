
/* eslint-disable react/prop-types */
import clsx from "clsx";
import { useState } from "react";
import { SlideDown } from "react-slidedown";
import 'react-slidedown/lib/slidedown.css' ;

const Faq = ({number , title , body}) => {
  const [open, setOpen] = useState(false);
  return (
    <div
      className={clsx(
        "p-3 mb-5 rounded-3xl cursor-pointer",
        open && "bg-black-100"
      )}
      onClick={() => setOpen(!open)}
    >
      <div className="flex justify-between mb-2">
        <div className="max-lg:max-w-[calc(70%)] text-wrap">
          <p className="text-p3 lg:text-xs">{number}.</p>
          <h5 className={clsx("h6 max-x-sm" , open && "text-p1")}>{title}</h5>
        </div>
        <div className="w-10 h-10 flex justify-center items-center bg-black-100  rounded-full">
          <img
            src={`../../public/images/${open ? "close" : "magic"}.svg`}
            alt="icon"
            className="w-5 h-5"
          />
        </div>
      </div>
      <SlideDown>{open && <p>{body}</p>}</SlideDown>
    </div>
  );
};

export default Faq;
