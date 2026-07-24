import { useState } from "react";

import EmailForm from "./components/EmailForm";

import ReplyBox from "./components/ReplyBox";

import { generateReply } from "./services/api";



function Dashboard()  {


const [reply,setReply] = useState("");

const [category,setCategory] = useState("");

const [loading,setLoading] = useState(false);

const [error,setError] = useState("");


// Store previous request
const [lastRequest,setLastRequest] = useState(null);



async function handleGenerate(data){


try {


setLoading(true);

setError("");


// Save request for regeneration
setLastRequest(data);



const result =
await generateReply(data);



setReply(result.reply);

setCategory(result.category);



}

catch(error){


setError(
"Failed to generate reply"
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

<div>


<EmailForm

onGenerate={handleGenerate}

loading={loading}

/>



{
error &&

<p>
{error}
</p>

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