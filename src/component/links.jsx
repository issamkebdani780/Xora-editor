

// eslint-disable-next-line react/prop-types
const Links = ({l , text}) => {
  return (
    <li>
        <a href={l} className="max-lg:h5 font-bold transition-colors duration-300 cursor-pointer hover:text-p1">{text}</a>
    </li>
  )
}

export default Links