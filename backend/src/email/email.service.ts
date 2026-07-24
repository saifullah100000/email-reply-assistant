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
tone:string,
length:string
){


try {


const prompt = `

# ROLE

You are an expert customer support email assistant.

Your job is to write professional, helpful, and empathetic email replies for businesses.



# TASK

Analyze the customer email and generate the best possible response.

Before writing the reply, understand:

- Customer intent
- Problem type
- Emotional tone
- Required action



# EMAIL INFORMATION


Subject:

${subject}


Customer Email:

${body}



# RESPONSE SETTINGS


Tone:

${tone}


Length:

${length}



# CATEGORY CLASSIFICATION


Classify the email into exactly ONE category:

- Complaint
- Refund Request
- Order Issue
- Product Inquiry
- Technical Support
- Feedback
- General Question



# WRITING RULES


Follow these rules:

1. Start with an appropriate greeting.

2. Acknowledge the customer's concern.

3. Show empathy when the customer has a problem.

4. Provide a helpful response.

5. Do not promise things that are impossible.

6. Do not invent order numbers, dates, refunds, or policies.

7. Keep the response focused on the customer's issue.

8. End with a professional closing.



# LENGTH RULES


Short:

- 40-60 words


Medium:

- 70-120 words


Detailed:

- 120-180 words



# OUTPUT FORMAT


Return ONLY valid JSON.

Do not include markdown.

Do not include explanations.


Format:


{
 "category":"Order Issue",
 "reply":"Dear Customer,\\n\\nThank you for contacting us..."
}

# EXAMPLES


Example 1:


Customer:

"My order is late and nobody contacted me."


Category:

Order Issue


Reply style:

Apologize, acknowledge delay, explain that the issue will be checked.



Example 2:


Customer:

"I want my money back because the product is damaged."


Category:

Refund Request


Reply style:

Express regret, acknowledge refund request, explain next steps.



`;



const completion =
await this.client.chat.completions.create({

model:"llama-3.3-70b-versatile",

temperature:0.6,

messages:[
{
role:"user",
content:prompt
}

]

});



const aiResponse =
completion.choices[0].message.content;



console.log(
"AI RESPONSE:",
aiResponse
);



if(!aiResponse){

throw new Error(
"No response received from AI"
);

}



// Remove markdown code blocks if AI adds them

const cleanJson = aiResponse

.replace(/```json/g,"")

.replace(/```/g,"")

.trim();



const result =
JSON.parse(cleanJson);



return result;



}


catch(error){


console.error(
"AI ERROR:",
error
);


throw new Error(
"AI reply generation failed"
);


}


}


}