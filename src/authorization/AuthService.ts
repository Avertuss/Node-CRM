export interface IAuthService
{
    login(username : String ,password: String) : String;
}
export class AuthService implements IAuthService{
    cert:  Buffer
    jwtSing: Function
    constructor(jwtSing : Function , cert :  Buffer)
    {
      this.login = this.login.bind(this)  
      this.jwtSing = jwtSing;
      this.cert = cert;
    }
    login(username : String ,password: String) : String
    {
        const payload = {
            sub:username
        }
        let token : String = this.jwtSing(payload, this.cert, { algorithm: 'RS256', expiresIn: 120 });
        return token;
    }
}