export interface IAuthService
{
    login(auth : AuthRequest) : AuthResponse;
}

export interface AuthResponse
{
    idToken:string,
    username:string,
    roles:Array<any>,
    permission:Array<any>
}
export interface AuthRequest
{
    username:string,
    password:string
}