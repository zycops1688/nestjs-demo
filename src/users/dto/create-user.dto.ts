import { IsNotEmpty, IsString, IsEmail, Matches, MinLength, MaxLength, IsNumber} from 'class-validator';

export class CreateUserDto {
    @IsString()
    @IsNotEmpty()
    username: string;

    @IsString()
    @IsNotEmpty()
    firstName: string;

    @IsString()
    @IsNotEmpty()
    lastName: string;

    @MinLength(8)
    @MaxLength(20)
    @IsString()
    @IsNotEmpty()
    @Matches(
    /^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})/,
    { message: 'Weak password' },
    )
    password: string;
}
