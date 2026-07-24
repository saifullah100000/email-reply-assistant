import axios from "axios";


const API = axios.create({

baseURL:"http://localhost:3000"

});


export const generateReply = async(data)=>{

const response =
await API.post(
"/email/generate",
data
);


return response.data;

};