import { useState } from "react";


function EmailForm({ onGenerate, loading }) {


const [subject,setSubject] = useState("");

const [body,setBody] = useState("");

const [tone,setTone] = useState("professional");

const [length,setLength] = useState("medium");



function submit(e){

e.preventDefault();


onGenerate({

subject,

body,

tone,

length

});


}



return (

<div className="ai-card">


<h2>
✉️ Generate AI Reply
</h2>


<p style={{color:"#94a3b8"}}>
Paste the customer's email and let AI create the perfect response.
</p>



<form onSubmit={submit}>


<label>
Email Subject
</label>


<input

value={subject}

onChange={(e)=>setSubject(e.target.value)}

placeholder="Example: Delayed order issue"

/>




<label>
Customer Email
</label>


<textarea

rows="8"

maxLength="2000"

value={body}

onChange={(e)=>setBody(e.target.value)}

placeholder="Paste customer email here..."

/>


<p style={{color:"#64748b"}}>

{body.length}/2000 characters

</p>





<div>


<label>
Reply Tone
</label>


<select

value={tone}

onChange={(e)=>setTone(e.target.value)}

>


<option value="professional">
Professional
</option>


<option value="friendly">
Friendly
</option>


<option value="formal">
Formal
</option>


<option value="apologetic">
Apologetic
</option>


</select>


</div>





<div>


<label>
Reply Length
</label>


<select

value={length}

onChange={(e)=>setLength(e.target.value)}

>


<option value="short">
Short
</option>


<option value="medium">
Medium
</option>


<option value="detailed">
Detailed
</option>


</select>


</div>





<button

disabled={
loading || !subject || !body
}

>


{

loading

?

"🤖 AI is thinking..."

:

"✨ Generate Reply"

}


</button>




</form>


</div>

);


}


export default EmailForm;