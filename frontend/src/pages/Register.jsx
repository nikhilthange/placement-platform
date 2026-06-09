import {useState} from "react";
import axios from "axios";

function Register(){
    const [formData,setformData]=useState({
        name:"",
        email:"",
        password:""
    });
    const handleChange=(e)=>{
        setformData({
            ...formData,
            [e.target.name]:e.target.value,
        });
    };
    const handleSumbit=async(e)=>{
        e.preventDefault();
        try{
            const res=await axios.post("http://localhost:5000/api/auth/register",formData);
           
            alert("Registration successful");
        }catch(error){
            console.error(error);
            alert("Registration failed");
        }
    };
    return(
        <div>
            <h1>Register</h1>
            <form onSubmit={handleSumbit}>
                <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} required/>
                <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required/>
                <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} required/>
                <button type="submit">Register</button>
            </form>
        </div>
    );
}
export default Register;