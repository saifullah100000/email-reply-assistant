import React, {useState, FormEvent} from "react";
import api from "../api/axios";
import {useNavigate} from "react-router-dom";


export default function Login(){


const navigate=useNavigate();


const [form,setForm]=useState({

email:"",
password:""

});



const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {

e.preventDefault();

try {

const res = await api.post(
"/auth/login",
form
);

localStorage.setItem(
"token",
res.data.access_token
);

alert("Login successful");

navigate("/");

}
catch(error){

alert("Invalid credentials");

}

};



return (

<div>

<h1>Login</h1>


<form onSubmit={handleSubmit}>


<input

placeholder="Email"

type="email"

onChange={(e)=>
setForm({
...form,
email:e.target.value
})
}

/>


<input

placeholder="Password"

type="password"

onChange={(e)=>
setForm({
...form,
password:e.target.value
})
}

/>


<button>
Login
</button>


</form>


</div>

)


}