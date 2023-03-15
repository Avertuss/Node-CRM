import fs from 'fs';
import VerifyRouter from './VerifyRouter';
import path from 'path';

var pubCert : Buffer = fs.readFileSync(path.join(__dirname, '../../secret/pub.pem'));

const route =  VerifyRouter(pubCert)

export default route;