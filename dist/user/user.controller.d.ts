import { UserService } from './user.service';
export declare class UserController {
    private userService;
    constructor(userService: UserService);
    getPost(userData: any): string;
    userGet(): Promise<import(".prisma/client").user[]>;
}
