export declare class UserService {
    getUser(): Promise<import(".prisma/client").user[]>;
    postUser(userData: any): Promise<string>;
}
