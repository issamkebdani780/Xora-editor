import { useEffect, useState } from "react";
import Button from "../component/button";
import CountUp from "react-countup" ;


function Pricing() {

    const [monthly , setMonthly] = useState(true) ;

    useEffect(() => {
      if (monthly) {
        document.getElementById("slider").classList.remove("right-1");
        document.getElementById("slider").classList.add("left-1");
      } else {
        document.getElementById("slider").classList.remove("left-1");
        document.getElementById("slider").classList.add("right-1");
      }
    }, [monthly]) ;
    

    return (
      <section id="pricing" className=" padding-x mb-20">
        <div className="flex flex-col items-center mb-16">
          <h1 className="h3 text-center pb-7 max-lg:max-w-96 max-w-lg">
            Flexible pricing for teams of all sizes
          </h1>
          <div className="border-2 border-s4/25 text-center rounded-xl flex items-center justify-center p-1 bg-s2 relative">
            <div
              id="slider"
              className=" absolute rounded-xl  w-32 h-11 bg-s5 top-1 left-1"
            ></div>
            <div
              className="py-2 px-5 w-32 h-11 z-10 font-bold cursor-pointer"
              onClick={() => {
                setMonthly(true);
              }}
            >
              MONTHLY
            </div>
            <div
              className="py-2 px-5 w-32 h-11 z-10 font-bold cursor-pointer"
              onClick={() => {
                setMonthly(false);
              }}
            >
              ANNUAL
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center max-lg:flex-col max-lg:gap-10">
          <div className="flex flex-col items-center w-full lg:w-1/3 bg-s1 pt-12 pb-5 px-2 relative rounded-3xl border-4 border-s2">
            <img
              src="../../public/images/plan-1.png"
              alt="icon"
              className="w-12 absolute -top-6"
            />
            <p className="border-2 px-4 rounded-full text-p1 border-p1 mb-4">
              CORE
            </p>
            <h4 className="h4">
              <CountUp start={12} end={monthly ? 12 : 24} duration={0.4} preserveValue useEasing={false}/>
              <sup>/Mo</sup>
            </h4>
            <p className="text-p4 font-bold mb-12">Best for solo creators</p>
            <ul className="bg-s1 w-full rounded-2xl p-4 flex flex-col gap-2 mb-5 items-center">
              <li className="flex items-center">
                <img
                  src="../../public/images/check.png"
                  alt="icon"
                  className="w-10 "
                />
                100MB cloud storage
              </li>
              <li className="flex items-center">
                <img
                  src="../../public/images/check.png"
                  alt="icon"
                  className="w-10 "
                />
                100MB cloud storage
              </li>
              <li className="flex items-center">
                <img
                  src="../../public/images/check.png"
                  alt="icon"
                  className="w-10 "
                />
                100MB cloud storage
              </li>
              <li className="flex items-center">
                <img
                  src="../../public/images/check.png"
                  alt="icon"
                  className="w-10 "
                />
                100MB cloud storage
              </li>
            </ul>
            <Button
              text="Get started"
              icon="../../public/images/plan-1.png"
            ></Button>
          </div>
          <div className="flex flex-col items-center w-full lg:w-1/3 bg-s2 pt-12 px-2 relative rounded-3xl border-2 border-p2 h-[600px]">
            <img
              src="../../public/images/plan-2.png"
              alt="icon"
              className="w-16 absolute -top-8"
            />
            <p className="border-2 px-4 rounded-full text-p3 border-p3 mb-4">
              OVERDRIVE
            </p>
            <h4 className="h4 text-p3">
              <CountUp start={59} end={monthly ? 59 : 70} duration={0.4} preserveValue useEasing={false}/>
              <sup>/Mo</sup>
            </h4>
            <p className="text-p4 font-bold mb-12">Most popular plan</p>
            <ul className="bg-s1 w-full rounded-2xl p-4 flex flex-col  items-center  gap-2 mb-5">
              <li className="flex items-center">
                <img
                  src="../../public/images/check.png"
                  alt="icon"
                  className="w-10 "
                />
                All starter features
              </li>
              <li className="flex items-center">
                <img
                  src="../../public/images/check.png"
                  alt="icon"
                  className="w-10 "
                />
                118 additional storage
              </li>
              <li className="flex items-center">
                <img
                  src="../../public/images/check.png"
                  alt="icon"
                  className="w-10 "
                />
                unlimited project
              </li>
              <li className="flex items-center">
                <img
                  src="../../public/images/check.png"
                  alt="icon"
                  className="w-10 "
                />
                analytics
              </li>
            </ul>
            <Button
              text="Get started"
              icon="../../public/images/plan-2.png"
            ></Button>
          </div>
          <div className="flex flex-col items-center w-full lg:w-1/3 bg-s1 pt-12 pb-5 px-2 relative rounded-3xl border-4 border-s2">
            <img
              src="../../public/images/plan-3.png"
              alt="icon"
              className="w-12 absolute -top-6"
            />
            <p className="border-2 px-4 rounded-full text-p1 border-p1 mb-4">
              CORE
            </p>
            <h4 className="h4">
              <CountUp start={29} end={monthly ? 29 : 39} duration={0.4} preserveValue useEasing={false}/>
              <sup>/Mo</sup>
            </h4>
            <p className="text-p4 font-bold mb-12">Best for solo creators</p>
            <ul className="bg-s1 w-full rounded-2xl p-4 flex flex-col gap-2 mb-5 items-center">
              <li className="flex items-center">
                <img
                  src="../../public/images/check.png"
                  alt="icon"
                  className="w-10 "
                />
                100MB cloud storage
              </li>
              <li className="flex items-center">
                <img
                  src="../../public/images/check.png"
                  alt="icon"
                  className="w-10 "
                />
                100MB cloud storage
              </li>
              <li className="flex items-center">
                <img
                  src="../../public/images/check.png"
                  alt="icon"
                  className="w-10 "
                />
                100MB cloud storage
              </li>
              <li className="flex items-center">
                <img
                  src="../../public/images/check.png"
                  alt="icon"
                  className="w-10 "
                />
                100MB cloud storage
              </li>
            </ul>
            <Button
              text="Get started"
              icon="../../public/images/plan-3.png"
            ></Button>
          </div>
        </div>
      </section>
    );
}

export default Pricing;