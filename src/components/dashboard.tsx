import DashDisplay from "./dashboard-display"

const Dashboard = () => {
  return (
    <div className=" bg-gray-100 ">
        <nav className="bg-red-200 h-12">
        Navigation
        </nav>
        <DashDisplay/>
    </div>
  )
}

export default Dashboard