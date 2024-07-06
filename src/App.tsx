import Dashboard from "./components/dashboard"
import Sidebar from "./components/sidebar"

function App() {
  return (
    <div className="grid min-h-screen w-full md:grid-cols-[150px_1fr] lg:grid-cols-[200px_1fr]">
      <Sidebar/>
      <Dashboard/>
    </div>
  )
}

export default App
