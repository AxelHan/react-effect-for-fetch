import AdviceSection from './sections/Advice'
import ArtsSection from './sections/Art'
import UsersSection from './sections/Users'
import './App.css'
import {useState } from "react"

function App() {
  const[baseUrl, setbaseUrl] = useState("https://boolean-api-server.fly.dev/")

  return (
    <div className="main-layout">
      <ArtsSection baseUrl={baseUrl}/>
      <UsersSection baseUrl={baseUrl}/>
      <AdviceSection />
    </div>
  )
}



export default App
