import CardNumber from "./CardNumber"
import TitleCard from "../Global/TitleCard"

const GlobalStat = () => {
    return (
        <div className="flex flex-col xl:col-span-6 col-span-1  bg-white py-5 px-5 rounded-xl drop-shadow-md lg:mr-3">
            <TitleCard title={"Marketing Status"} />
            <div className="grid grid-cols-3 justify-items-start mt-5">
                <CardNumber number={"201"} title={"Reach"} color={"#0FAEE1"} />
                <CardNumber number={"20"} title={"Interactions"} color={"#2EC800"} />
                <CardNumber number={"68%"} title={"CONVERSION RATE"} color={"#0FAEE1"} />
                
            </div>
        </div>
    )
}

export default GlobalStat