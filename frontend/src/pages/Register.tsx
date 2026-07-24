import { useState } from "react";
import api from "../api/axios";
import { useNavigate } from "react-router-dom";


export default function Register(){

const navigate = useNavigate();


const [form,setForm]=useState({

name:"",
email:"",
password:""

});



const handleSubmit=async(e:any)=>{

e.preventDefault();


try{

await api.post("/auth/register",form);


alert("Account created");

navigate("/login");


}catch(error){

alert("Registration failed");

}


};



return (

<div>

<h1>Register</h1>


<form onSubmit={handleSubmit}>


<input
placeholder="Name"
onChange={(e)=>
setForm({...form,name:e.target.value})
}
/>


<input
placeholder="Email"
type="email"
onChange={(e)=>
setForm({...form,email:e.target.value})
}
/>


<input
placeholder="Password"
type="password"
onChange={(e)=>
setForm({...form,password:e.target.value})
}
/>


<button>
Register
</button>


</form>


</div>

)

}