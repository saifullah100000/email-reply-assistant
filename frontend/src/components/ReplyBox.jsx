function ReplyBox({reply}){


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


<textarea

rows="10"

readOnly

value={reply}

/>


<button onClick={copy}>

Copy Reply

</button>


</div>

);


}


export default ReplyBox;