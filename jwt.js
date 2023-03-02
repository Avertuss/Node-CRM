let jwt = require('jsonwebtoken');
const fs = require('fs');
var cert = fs.readFileSync('C:\\Work\\core\\certificate.pem');
const payload = {"exp":1674656346,"iat":1674652746,"auth_time":1674652746,"jti":"92abd9d1-ed15-4259-9e4c-262bf7d4af77","iss":"https://auth-alpha-dev.delta.sbrf.ru/auth/realms/alpha","aud":"CI02889902","sub":"test_user_oidc","typ":"ID","azp":"CI02889902","nonce":"53dd61ce2cf84c47af1bc40110ffc146","session_state":"9c690b75-5775-4aa4-8e38-4c3a0b15f4c3","at_hash":"JUReTUly8HC_DIq2ggkjgw","acr":"1","sid":"9c690b75-5775-4aa4-8e38-4c3a0b15f4c3"}
/*let token = jwt.sign(payload, 'tsYqPqOpYzycv07x1w2qdNgvAkjI5eQ7');

console.log(token)
*/
token = "eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICIyeUZmRWJ3dnFrbW5aYW5uZ2JPZFA2bU9RckhtbHlmZmRhcFBrVktGX2ZvIn0.eyJleHAiOjE2NzQ2NTYzNDYsImlhdCI6MTY3NDY1Mjc0NiwiYXV0aF90aW1lIjoxNjc0NjUyNzQ2LCJqdGkiOiI5MmFiZDlkMS1lZDE1LTQyNTktOWU0Yy0yNjJiZjdkNGFmNzciLCJpc3MiOiJodHRwczovL2F1dGgtYWxwaGEtZGV2LmRlbHRhLnNicmYucnUvYXV0aC9yZWFsbXMvYWxwaGEiLCJhdWQiOiJDSTAyODg5OTAyIiwic3ViIjoidGVzdF91c2VyX29pZGMiLCJ0eXAiOiJJRCIsImF6cCI6IkNJMDI4ODk5MDIiLCJub25jZSI6IjUzZGQ2MWNlMmNmODRjNDdhZjFiYzQwMTEwZmZjMTQ2Iiwic2Vzc2lvbl9zdGF0ZSI6IjljNjkwYjc1LTU3NzUtNGFhNC04ZTM4LTRjM2EwYjE1ZjRjMyIsImF0X2hhc2giOiJKVVJlVFVseThIQ19ESXEyZ2dramd3IiwiYWNyIjoiMSIsInNpZCI6IjljNjkwYjc1LTU3NzUtNGFhNC04ZTM4LTRjM2EwYjE1ZjRjMyJ9.BBp9ocVGyxZ-Vks6WFpMeNkcFXBrQzVY1Ry7GnimrmoJ-I9AKd3IYDJQupXVkUzrQV3Y_TvxOf6q91WYKkIFUA-DCe3qbYjUlD1yAxeJOEqBG1CwYIS0bhvugoH4ZGH7zVdvsu9c_tFdPZPol44J2ZT7PSQ_qYmt53OHCFz5imlB2QpFqpE67B-ZGqUBam5J1gWaHPZyHlPJM-McuBS7a_3qzv2JU6gveZOYk2CMrs02jSCnTVVD0a3O8WWMuRVDNEC5wwI2Z56OI1RkPIYbFaM3DMPQZnT3JyrZwzwvW72JUFCbFj0gUU_O4feMUYaUJPkVWSzFH8R8QjvSaDkowg"

jwt.verify(token, cert, function(err, decoded) {
    if(err==null)
    {
        console.log(decoded); // bar
   
    }   
    console.error(err); 
}

);