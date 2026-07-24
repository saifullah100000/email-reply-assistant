import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import Groq from 'groq-sdk';


@Injectable()
export class EmailService {

private client: Groq;


constructor(
private configService: ConfigService
){

const apiKey =
this.configService.get<string>('GROQ_API_KEY');


if(!apiKey){
  throw new Error('GROQ_API_KEY missing');
}


this.client = new Groq({
  apiKey,
});

}



async generateReply(
subject:string,
body:string,
tone:string
){


try {


const prompt = `

You are a professional email assistant.

Generate a ${tone} email reply.

Subject:
${subject}

Customer Email:
${body}

Rules:
- Be polite
- Be concise
- Do not invent information
- Maximum 150 words
- Include greeting and closing

`;



const completion =
await this.client.chat.completions.create({

model: "llama-3.3-70b-versatile",

messages:[
{
role:"user",
content:prompt
}
],

});


return completion
.choices[0]
.message
.content;



}
catch(error){

console.error(error);

throw new Error(
"AI reply generation failed"
);

}


}
}