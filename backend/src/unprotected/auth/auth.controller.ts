import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { AuthCredentialsDTO, UpdatePasswordDTO } from './dto/auth-credentials.dto';
import { AuthService } from './auth.service';
import { Benutzer } from 'src/schemas/user.schema';
import { GetUser } from './get-user.decorator';
import { AuthGuard } from '@nestjs/passport';

@Controller('auth')
export class AuthController {

    constructor(private authService: AuthService) {}

    @Post('/signup')
    signUp(@Body() AuthCredentialsDTO:AuthCredentialsDTO): Promise<{message: string}> {
        return this.authService.createUser(AuthCredentialsDTO);
         
    }

    @Post('/signin')
    signIn(@Body() AuthCredentialsDTO:AuthCredentialsDTO): Promise<{accessToken: string}> {
        return this.authService.signIn(AuthCredentialsDTO);
    }

    @Post('/confirmEmail')
    confirmEmail(@Body('token') token: string): Promise<{message: string}> {
        return this.authService.confirmEmail(token);
    }

    @Post('/resetPassword')
    resetPassword(@Body('email') email: string): Promise<{message: string}> {
        return this.authService.resetPassword(email);
    }

    @Post('/changePassword')
    changePassword(@Body() updatePasswordDTO: UpdatePasswordDTO): Promise<{message: string}> {
        return this.authService.changePasswordForUser(updatePasswordDTO);
    }

    @Post('/changePasswordForUser')
    @UseGuards(AuthGuard())
    changePasswordForUser(@GetUser() user: Benutzer, @Body() updatePasswordDTO: UpdatePasswordDTO): Promise<{message: string}> {
        return this.authService.changePasswordForUser( updatePasswordDTO, user);
    }
}
