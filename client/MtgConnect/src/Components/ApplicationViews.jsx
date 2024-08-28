import { Route, Routes } from "react-router-dom"
import { Login } from "./Pages/Login.jsx"
import { Register } from "./Pages/Register.jsx"
import { Authorized } from "./Authorized.jsx"
import { Home } from "./Pages/Home.jsx"
import { AllPosts } from "./Pages/AllPosts.jsx"

export const ApplicationViews = () => {
    return (
      <Routes>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register />} />
        <Route element={<Authorized/>}>
          <Route path="/" element={<Home/>}/>
            <Route path="allposts">
            <Route index element={<AllPosts/>}/>
          </Route>
        </Route>
      </Routes>
    )
}