export interface JwtPayload {
    isAdmin: boolean;
    _id: string;
    isPrivate: boolean;
    firstLogin: boolean;
}