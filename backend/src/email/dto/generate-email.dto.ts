import { IsNotEmpty, IsString, MaxLength } from 'class-validator';

export class GenerateEmailDto {

  @IsString()
  @IsNotEmpty()
  @MaxLength(100)
  subject!: string;


  @IsString()
  @IsNotEmpty()
  @MaxLength(2000)
  body!: string;


  @IsString()
  @IsNotEmpty()
  tone!: string;

  @IsString()
@IsNotEmpty()
length!:string;
}