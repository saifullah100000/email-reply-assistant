function ReplyBox({
reply,
category,
onRegenerate,
loading
}){


if(!reply)
return null;



function copy(){

navigator.clipboard.writeText(reply);

alert("Copied!");

}



return (

<div>


<h2>
Generated Reply
</h2>


<p>

Category:

<strong>
{category}
</strong>

</p>



<textarea

rows="10"

readOnly

value={reply}

/>



<br/>


<button onClick={copy}>

Copy Reply

</button>



<button

onClick={onRegenerate}

disabled={loading}

>

{

loading

?

"Generating..."

:

"Regenerate Reply 🔄"

}


</button>



</div>

);


}


export default ReplyBox;