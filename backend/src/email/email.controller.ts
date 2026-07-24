import { Body, Controller, Post } from '@nestjs/common';
import { EmailService } from './email.service';
import { GenerateEmailDto } from './dto/generate-email.dto';



@Controller('email')
export class EmailController {


constructor(
private emailService:EmailService
){}



@Post('generate')
async generate(

@Body() dto:GenerateEmailDto

){


const reply =
await this.emailService.generateReply(

dto.subject,
dto.body,
dto.tone

);



return {

reply

};


}


}