import React from 'react'
import {useSelector} from "react-redux"
import {Navigate, useLocation} from "react-router-dom"
import { selectUserEmail, selectUserName } from '../features/userSlice';

const ProtectedRoute = ({children}) => {
    const user = useSelector(selectUserEmail)
    const auth = useSelector((store) => store.isAuthenticated);
<<<<<<< HEAD
    const id = localStorage.getItem("user")
    let location = useLocation();

    // if(!auth) {
        if(!id){
=======
    let location = useLocation();

    if(!auth) {
>>>>>>> 3afa2417c934e9a1b90de23bf33910d40927d2bb
        return <Navigate to="/signin" state={{ from: location}} replace />
    }
 return children

};

export default ProtectedRoute;