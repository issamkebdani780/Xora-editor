/* eslint-disable react/prop-types */
import Button from "./button";

const Featur = ({srcimg , p1text , htext , p2text , srcicon ,btext}) => {
  return (
    <div className="py-10 px-4 rounded-t-3xl border-t-[1px] border-x-[1px] border-t-s3 border-x-s3 bg-s2">
      <img src={srcimg} alt="icon" className="mb-8 w-16" />
      <p className="text-p3 pb-6">{p1text}</p>
      <h1 className="h3 pb-4 max-w-[300px]">{htext}</h1>
      <p className="text-p4 pb-5 font-bold">{p2text}</p>
      <Button icon={srcicon} text={btext} />
    </div>
  );
}


export default Featur