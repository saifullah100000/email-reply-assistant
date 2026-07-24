function ReplyBox({
reply,
category,
onRegenerate,
loading
}) {


if(!reply)
return null;



function copy(){

navigator.clipboard.writeText(reply);

alert("Reply copied!");

}



return (

<div className="ai-card">


<div style={{
display:"flex",
justifyContent:"space-between",
alignItems:"center"
}}>


<h2>
🤖 AI Generated Reply
</h2>


<span className="category-badge">

{category}

</span>


</div>



<p style={{
color:"#94a3b8",
marginTop:"10px"
}}>

Your AI-generated response is ready. You can copy or regenerate it.

</p>




<textarea

rows="10"

readOnly

value={reply}

/>



<div style={{
display:"flex",
gap:"15px",
flexWrap:"wrap"
}}>


<button

onClick={copy}

>

📋 Copy Reply

</button>



<button

onClick={onRegenerate}

disabled={loading}

>

{

loading

?

"🤖 Generating..."

:

"🔄 Regenerate"

}


</button>



</div>



</div>

);


}


export default ReplyBox;