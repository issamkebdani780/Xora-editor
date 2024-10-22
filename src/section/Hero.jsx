import Button from "../component/button";
import zap from '../../public/images/zap.svg'


const Hero = () => {
  return (
    <section className="lg:grid lg:grid-cols-2 padding-x pt-32 lg:pt-14">
        <div className="flex justify-center items-start flex-col ">
            <p className="mb-5 text-p3 max-lg:text-2xl uppercase">video editing</p>
            <h1 className="mb-6 h4 lg:h2 uppercase">amazingly simple</h1>
            <p className="font-bold mb-9 lg:max-w-[500px] max-lg:text-2xl text-slate-200">
            we designed xora ai video editor to be an easy to use, quick to learn,
            and surprisingly powerful
            </p>
            <Button text="try it now" icon={zap} />
        </div>
        <div className="max-lg:hidden flex justify-center items-center">
            <img src="../../public/images/hero.png" alt="hero" className=""/>
        </div>
    </section>
  );
};

export default Hero;
