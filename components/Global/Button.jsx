
const Button = ({ bgcolor, color, text }) => {
    return (
        <button className='transition duration-150 ease-in-out transform hover:scale-90 rounded-lg sm:text-sm text-xs py-3 px-10 sm:px-16 truncate font-bold hover:text-red-500 w-full' style={{ background: bgcolor, color: color }}>{text}</button>
    )
}

export default Button;