import {AuthResponse, AuthRequest, IAuthService} from './types';

import AuthData from './AuthData.json';

export class AuthService implements IAuthService{
    cert:  Buffer
    jwtSing: Function
    constructor(jwtSing : Function , cert :  Buffer)
    {
      this.login = this.login.bind(this)  
      this.jwtSing = jwtSing;
      this.cert = cert;
    }
    login(auth : AuthRequest) : AuthResponse
    {
        const payload = {
            sub:auth.username
        }
        let token : string = this.jwtSing(payload, this.cert, { algorithm: 'RS256', expiresIn: 120 });
        
        return {
            idToken:token,
           ...AuthData[auth.username]
        };
    }
}