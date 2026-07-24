import { Body, Controller, Post, Get } from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';
import { UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from './guards/jwt-auth.guard';


@Controller('auth')
export class AuthController {


constructor(
private authService:AuthService
){}



@Post('register')
register(
@Body() data:RegisterDto
){

return this.authService.register(data);

}
@Get('profile')
@UseGuards(JwtAuthGuard)
profile(){

return {
message:"You are authenticated"
};

}



@Post('login')
login(
@Body() data:LoginDto
){

return this.authService.login(data);

}


}