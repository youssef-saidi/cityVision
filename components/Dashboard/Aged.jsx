import TitleCard from "../Global/TitleCard"

const Aged = () => {
  return (
    <div className="flex flex-col xl:col-span-4 col-span-1 w-full bg-white py-5 px-4 rounded-xl drop-shadow-md xl:mt-0 mt-2">
      <TitleCard title={"Check the latest trends"} />
      <div className="flex flex-col mt-5">
        <div className="flex border rounded-xl p-2 text-sm items-center">
          <h1 className="w-full truncate"> #WWEChamber</h1>
          <h1 className="truncate text-lg">153k</h1>
        </div>
  
      </div>
    </div>
  )
}

export default Aged