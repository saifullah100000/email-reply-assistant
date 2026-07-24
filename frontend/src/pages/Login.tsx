import { useState, FormEvent } from "react";
import api from "../api/axios";
import { useNavigate } from "react-router-dom";


export default function Login(){


const navigate = useNavigate();


const [form,setForm] = useState({

email:"",
password:""

});


const [loading,setLoading] = useState(false);

const [error,setError] = useState("");



const handleSubmit = async(
e: FormEvent<HTMLFormElement>
)=>{


e.preventDefault();


try {


setLoading(true);

setError("");



const res = await api.post(
"/auth/login",
form
);



localStorage.setItem(
"token",
res.data.access_token
);



navigate("/");



}
catch(error){


setError(
"Invalid email or password"
);


}
finally{

setLoading(false);

}


};



return (

<div className="auth-container">


<div className="auth-card">


<div className="auth-logo">

🤖

</div>



<h1>
Welcome Back
</h1>


<p className="auth-subtitle">

Login to your AI Email Assistant

</p>





{
error &&

<div className="error-box">

{error}

</div>

}






<form onSubmit={handleSubmit}>


<label>
Email
</label>


<input

type="email"

placeholder="Enter your email"

value={form.email}

onChange={(e)=>

setForm({

...form,

email:e.target.value

})

}

/>





<label>
Password
</label>


<input

type="password"

placeholder="Enter your password"

value={form.password}

onChange={(e)=>

setForm({

...form,

password:e.target.value

})

}

/>





<button disabled={loading}>


{

loading

?

"Logging in..."

:

"Login"

}


</button>



</form>



<p className="auth-footer">

Don't have an account?

<span
onClick={()=>navigate("/register")}
>

 Register

</span>


</p>



</div>


</div>

);

}