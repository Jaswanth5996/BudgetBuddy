import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";

const Form = () => {
    const [email,setEmail] = useState('')
    const [phone,setPhone] = useState('')
    const [password,setPassword] = useState('')

    const handleSubmit = (e) =>{
        e.preventDefault();
        try{
            const response = axios.post("",{email,phone,password})
            console.log("Login successful",response.data)
        }
        catch(error){
            console.log("Login failed")
        }
        console.log("Yes it is working :)")
    }
    

    return (
        <div>
        <form action="" className="flex flex-col text-white justify-between">
            <input type="text" name="email"/>
            <input type="text" name="name"/>
            <input type="text" name="phone" />
            <input type="text" name="password" />
            <button onClick={handleSubmit} type="submit">Submit</button>
        </form>
        </div>
    )
}

export default Form