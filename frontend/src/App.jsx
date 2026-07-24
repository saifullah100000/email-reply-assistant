import {useState} from "react";

import EmailForm from "./components/EmailForm";

import ReplyBox from "./components/ReplyBox";

import {generateReply} from "./services/api";



function App(){


const [reply,setReply]=useState("");

const [loading,setLoading]=useState(false);



async function handleGenerate(data){


try{


setLoading(true);


const result =
await generateReply(data);


setReply(result.reply);



}

catch(error){

alert(
"Failed to generate reply"
);


}


finally{

setLoading(false);

}


}



return (

<div>


<EmailForm

onGenerate={handleGenerate}

loading={loading}

/>


<ReplyBox

reply={reply}

/>


</div>

);


}


export default App;