import { useState } from "react";

import EmailForm from "./components/EmailForm";
import ReplyBox from "./components/ReplyBox";
import { generateReply } from "./services/api";


function Dashboard() {


const [reply,setReply] = useState("");

const [category,setCategory] = useState("");

const [loading,setLoading] = useState(false);

const [error,setError] = useState("");

const [lastRequest,setLastRequest] = useState(null);



async function handleGenerate(data){


try {


setLoading(true);

setError("");

setLastRequest(data);



const result = await generateReply(data);



setReply(result.reply);

setCategory(result.category);



}

catch(error){


setError(
"Unable to generate reply. Please try again."
);


}


finally{


setLoading(false);


}


}





async function handleRegenerate(){


if(!lastRequest)
return;


await handleGenerate(lastRequest);


}





return (

<div className="dashboard-container">


<div className="dashboard-header">


<h1>
AI Email Reply Assistant
</h1>


<p>
Generate professional customer email responses instantly using AI
</p>


</div>



<EmailForm

onGenerate={handleGenerate}

loading={loading}

/>




{
error &&

<div className="error-box">

{error}

</div>

}




<ReplyBox

reply={reply}

category={category}

onRegenerate={handleRegenerate}

loading={loading}

/>



</div>

);


}


export default Dashboard;