import { AuthService } from './auth.service';
export declare class AuthController {
    readonly authService: AuthService;
    constructor(authService: AuthService);
    getAuth(): string;
    getRegister(registerData: any): Promise<string>;
}
