import {useState} from "react";


function EmailForm({onGenerate, loading}){


const [subject,setSubject]=useState("");

const [body,setBody]=useState("");

const [tone,setTone]=useState("professional");



function submit(e){

e.preventDefault();


onGenerate({

subject,
body,
tone

});


}



return (

<form onSubmit={submit}>


<h2>
AI Email Reply Assistant
</h2>



<label>
Subject
</label>


<input

value={subject}

onChange={
e=>setSubject(e.target.value)
}

placeholder="Email subject"

/>



<label>
Email Body
</label>


<textarea

rows="8"

value={body}

onChange={
e=>setBody(e.target.value)
}

placeholder="Paste customer email here"

/>



<label>
Tone
</label>


<select

value={tone}

onChange={
e=>setTone(e.target.value)
}

>


<option>
professional
</option>


<option>
friendly
</option>


<option>
formal
</option>


<option>
apologetic
</option>


</select>



<button disabled={loading}>

{
loading ?
"Generating..."
:
"Generate Reply"
}

</button>


</form>


);


}


export default EmailForm;