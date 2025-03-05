import React from 'react'
import { useParams } from 'react-router-dom';
function Login() {
    let {newuser}=useParams()


    return (

        <div>
            <h1> Login Page - {newuser}</h1>
        </div>

    )


}
export default Login;
