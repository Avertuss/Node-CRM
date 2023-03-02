import fs from 'fs';
import VerifyRouter from './VerifyRouter';

var pubCert : Buffer = fs.readFileSync('C:\\Work\\core\\secret\\pub.pem');

const route =  VerifyRouter(pubCert)

export default route;