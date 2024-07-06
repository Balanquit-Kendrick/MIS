import DashDisplay from "./dashboard-display"
import { CircleUser } from "lucide-react"

const Dashboard = () => {
  return (
    <div className="flex flex-col">
        <div className="mr-2">
            <div className="w-full bg-[#D6EFD8] my-2 rounded-lg">
                <div className="h-12 place-content-end items-center flex ">
                    <header className="flex rounded-lg gap-2 mr-2 items-center">
                        <input type="text" className="h-6 rounded-md p-2" placeholder="search" />
                        <button className="bg-[#80AF81] rounded-full p-1">
                            <CircleUser color="#1A5319"/>
                        </button>
                    </header>
                </div>
            </div>
        </div>
        <div className="min-h-screen bg-[#D6EFD8] rounded-lg mr-2">
            <DashDisplay/>
        </div>
    </div>
  )
}

export default Dashboard