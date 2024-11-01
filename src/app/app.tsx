import { BrowserRouter } from "react-router-dom"
import AppRouter from "./app-router"
import {Toaster} from "@/components/ui/sonner.tsx";

function App() {


  return (
    <BrowserRouter>
      <AppRouter />
      <Toaster position='top-center'/>
    </BrowserRouter>
  )
}

export default App
