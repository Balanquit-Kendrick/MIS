
const Sidebar = () => {
  return (
    <div className="px-2 pb-10 pt-2">
        <div className="min-h-[90%] w-full rounded-lg bg-[#80AF81]">
            <div className="rounded-lg flex bg-[#80AF81] h-12 justify-center items-center mb-6 pt-5">
                <p className="text-3xl font-bold">
                    MIS
                </p>
            </div>
            <div className="px-3 font-medium text-[#1A5319]">
                <button className="hover:bg-[#1A5319] hover:text-[#D6EFD8] text-left p-2 rounded-md w-full">
                    Dashboard
                </button>
            </div>
            <div className="px-3 font-medium text-[#1A5319]">
                <button className="hover:bg-[#1A5319] hover:text-[#D6EFD8] text-left p-2 rounded-md w-full">
                    Accounts
                </button>
            </div>
            <div className="px-3 font-medium text-[#1A5319]">
                <button className="hover:bg-[#1A5319] hover:text-[#D6EFD8] text-left p-2 rounded-md w-full">
                    Activities
                </button>
            </div>
            <div className="px-3 font-medium text-[#1A5319]">
                <button className="hover:bg-[#1A5319] hover:text-[#D6EFD8] text-left p-2 rounded-md w-full">
                    Membership
                </button>
            </div>
            <div className="px-3 font-medium text-[#1A5319]">
                <button className="hover:bg-[#1A5319] hover:text-[#D6EFD8] text-left p-2 rounded-md w-full">
                    Transactions
                </button>
            </div>
            <div className="px-3 font-medium text-[#1A5319]">
                <button className="hover:bg-[#1A5319] hover:text-[#D6EFD8] text-left p-2 rounded-md w-full">
                    Settings
                </button>
            </div>
        </div>
    </div>
  )
}

export default Sidebar