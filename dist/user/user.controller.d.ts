import { UserService } from './user.service';
export declare class UserController {
    private userService;
    constructor(userService: UserService);
    getPost(userData: any): Promise<string>;
    userGet(): Promise<import(".prisma/client").user[]>;
    userCheck(userData: any): string;
}
