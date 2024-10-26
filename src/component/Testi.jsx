/* eslint-disable react/prop-types */


const Testi = ({ text, imgUrl, name, desc }) => {
  return (
    <div className="border-[0.5px] border-s2 px-5 py-10">
      <p className="text-p4 font-bold mb-5">{text}</p>
      <div className="flex ">
        <img src={imgUrl} alt="img" width={50} className="mr-10"/>
        <div className="font-bold">
          <p className="text-p1">{name}</p>
          <p className="text-gray-500">{desc}</p>
        </div>
      </div>
    </div>
  );
};

export default Testi