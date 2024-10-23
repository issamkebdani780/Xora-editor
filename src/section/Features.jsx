/* eslint-disable no-unused-vars */
import Button from "../component/button"
import Featur from "../component/Featur";
import zap from "../../public/images/zap.svg";
import feature1 from "../../public/images/feature-1.png";
import feature2 from "../../public/images/feature-2.png";


const Features = () => {
  return (
    <section className="padding-x mb-20">
      <div className="rounded-t-3xl border-t-2 border-x-2 border-t-s3 border-x-s3">
        <div className="flex flex-col lg:flex-row ">
          <Featur
            srcimg={feature1}
            p1text="easy entegration"
            htext="work smarter not harder"
            p2text="with xora, tedious tasks are history. Automation and smart processes bring your productivity to heights. it`s like having an extra cup of coffe, but without the jitters"
            srcicon={zap}
            btext="watch the demo"
          />
          <Featur
            srcimg={feature2}
            p1text="secure and tauswortny"
            htext="sleep aesy, we got your back"
            p2text="your data security is our priority. with state-of-the-art encryptionand robust privacy controis, xora helps keeps your information secure and locked up tighter than fort know"
            srcicon={zap}
            btext="read the docs"
          />
        </div>
        <ul className="flex flex-wrap text-center justify-around border-2 border-s3 rounded-t-3xl py-10">
          <li className="flex flex-col items-center justify-center gap-2 m-2">
            <img
              src="../../public/images/detail-1.png"
              alt="icon"
              className="w-16"
            />
            <p className="max-w-32">ai automated video editing</p>
          </li>
          <li className="flex flex-col items-center justify-center gap-2 m-2">
            <img
              src="../../public/images/detail-2.png"
              alt="icon"
              className="w-16"
            />
            <p className="max-w-32">collaborate with your team</p>
          </li>
          <li className="flex flex-col items-center justify-center gap-2 m-2">
            <img
              src="../../public/images/detail-3.png"
              alt="icon"
              className="w-16"
            />
            <p className="max-w-32">ultra fast cloud-enounr</p>
          </li>
          <li className="flex flex-col items-center justify-center gap-2 m-2">
            <img
              src="../../public/images/detail-4.png"
              alt="icon"
              className="w-16"
            />
            <p className="max-w-32">24/7 customer support</p>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Features