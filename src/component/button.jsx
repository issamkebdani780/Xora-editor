/* eslint-disable react/prop-types */


const Button = ({text , icon}) => {
  return (
    <button className="font-bold flex gap-3 shadow-500 bg-s5 items-center justify-center px-5 py-2 rounded-2xl hover:text-p1">
        <img src={icon} alt="" />{text}
    </button>
  )
}

export default Button