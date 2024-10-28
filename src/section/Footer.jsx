
import { social } from "../constant/social";
const Footer = () => {
  return (
    <footer className="flex max-lg:flex-col max-lg:gap-5 justify-between padding-x py-10 font-bold">
      <div className="flex justify-between flex-1">
        <p>&copy; issamKebdani</p>
        <p>privacy policy</p>
        <p>Terme of use</p>
      </div>
      <ul className="flex flex-1 justify-end max-lg:justify-center">
        {social.map((item) => (
          <li
            key={item.id}
            className="border-[1px] border-white p-2 rounded-full cursor-pointer mr-2"
          >
            <img src={item.src} alt="social" />
          </li>
        ))}
      </ul>
    </footer>
  );
};

export default Footer;
