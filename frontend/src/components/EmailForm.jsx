import { useState } from "react";


function EmailForm({ onGenerate, loading }) {


const [subject, setSubject] = useState("");

const [body, setBody] = useState("");

const [tone, setTone] = useState("professional");

const [length, setLength] = useState("medium");



function submit(e) {

e.preventDefault();


onGenerate({

subject,
body,
tone,
length

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
e => setSubject(e.target.value)
}

placeholder="Email subject"

/>



<label>
Email Body
</label>


<textarea

rows="8"

maxLength="2000"

value={body}

onChange={
e => setBody(e.target.value)
}

placeholder="Paste customer email here"

/>


<p>
{body.length}/2000 characters
</p>



<label>
Tone
</label>


<select

value={tone}

onChange={
e => setTone(e.target.value)
}

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



<label>
Reply Length
</label>


<select

value={length}

onChange={
e => setLength(e.target.value)
}

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



<button

disabled={
loading || !subject || !body
}

>

{

loading

?

"AI is writing your reply..."

:

"Generate Reply"

}

</button>


</form>

);


}


export default EmailForm;