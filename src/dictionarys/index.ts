import CustomController from './Controller';
import {Service} from './Service';
import {Repository} from './Repository';
import Contact from './data/contact.json';
import {IShema} from '../json-sql';
const repository = new Repository(Contact as IShema);
const servise =  new Service(repository);

export const Controller =  CustomController(servise);