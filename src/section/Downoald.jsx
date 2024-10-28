
import { logos } from "../constant/logos";

const Downoald = () => {
  return (
    <section
      id="downoald"
      className="bg-s2 flex flex-col justify-between  pt-20 pb-8 padding-x overflow-hidden"
    >
      <div className="flex flex-row items-center mb-10 ">
        <div className="flex flex-col gap-4">
          <img src="../../public/images/xora.svg" alt="logo" className="w-40" />
          <p className="text-p5 max-w-sm">
            Try it now for free on ios,android,PC, web - whatever,weve got you
            covered
          </p>
          <div className="flex cursor-pointer">
            <img
              src="../../public/images/detail-1.png"
              alt="icon"
              width={70}
              height={70}
            />
            <img
              src="../../public/images/detail-2.png"
              alt="icon"
              width={70}
              height={70}
            />
            <img
              src="../../public/images/detail-3.png"
              alt="icon"
              width={70}
              height={70}
            />
            <img
              src="../../public/images/detail-4.png"
              alt="icon"
              width={70}
              height={70}
            />
          </div>
        </div>
        <div className="border-2 border-s3 p-5 rounded-3xl max-lg:hidden relative -right-[10%]">
          <img
            src="../../public/images/screen.jpg"
            alt="img"
            className="rounded-3xl"
            width={855}
            height={655}
          />
        </div>
      </div>
      <ul className="flex gap-8 flex-wrap justify-center">
        {logos.map((item) => (
          <li key={item}>
            <img src={item} alt="logo" />
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Downoald