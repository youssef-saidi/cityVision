import TitleCard from "../Global/TitleCard"

const Aged = () => {
  return (
    <div className="flex flex-col xl:col-span-4 col-span-1 w-full bg-white py-5 px-4 rounded-xl drop-shadow-md xl:mt-0 mt-2">
      <TitleCard title={"Simple View"} />
      <div className="flex flex-col mt-5">
        <img src="img.png" alt="" />

      </div>
    </div>
  )
}

export default Aged