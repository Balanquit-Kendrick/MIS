import Dashboard from "./components/dashboard"
import Sidebar from "./components/sidebar"

function App() {
  return (
    <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
      <Sidebar/>
      <Dashboard/>
    </div>
  )
}

export default App
