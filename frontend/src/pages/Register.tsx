import { useState, FormEvent } from "react";
import api from "../api/axios";
import { useNavigate } from "react-router-dom";


export default function Register(){


const navigate = useNavigate();


const [form,setForm] = useState({

name:"",
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



await api.post(
"/auth/register",
form
);



navigate("/login");


}
catch(error){


setError(
"Registration failed. Try another email."
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

🚀

</div>



<h1>
Create Account
</h1>


<p className="auth-subtitle">

Start using your AI Email Assistant

</p>




{
error &&

<div className="error-box">

{error}

</div>

}





<form onSubmit={handleSubmit}>


<label>
Full Name
</label>


<input

placeholder="Enter your name"

value={form.name}

onChange={(e)=>

setForm({

...form,

name:e.target.value

})

}

/>





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

placeholder="Create a password"

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

"Creating Account..."

:

"Create Account"

}


</button>



</form>




<p className="auth-footer">

Already have an account?


<span
onClick={()=>navigate("/login")}
>

 Login

</span>


</p>



</div>


</div>

);

}