import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from '../Pages/Login'
import Signup from '../Pages/Signup'
import Home from '../Pages/Home'
import JobDetails from '../Pages/JobDetails'
import PrivateRoute from '../Components/PrivateRoute'
import ApplyForm from '../Pages/ApplyForm'
import UserDetails from '../Pages/UserDetails'

const AllRoute = () => {
  return (
    <div>
        <Routes>
         <Route path='/' element={ <PrivateRoute><Home/></PrivateRoute> } />
            <Route path='/signin' element={<Login/>}/>
            <Route path='/signup' element={<Signup/>} />
            <Route path="/job/:id" element={<JobDetails/>} />
            <Route path="/apply" element={<ApplyForm/>} />
            <Route path="/user" element={<UserDetails/>} />

        </Routes>
    </div>
  )
}

export default AllRoute