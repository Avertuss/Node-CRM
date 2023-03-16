import RoleController from './RoleController';
import {RoleService} from './Service';
import {RoleRepository} from './RoleRepository';
import shema from './shema.json';
import { IShema } from '../../json-sql';
const path : string = "/role"
const repository = new RoleRepository(shema as IShema);
const servise =  new RoleService(repository);

export const roleController =  RoleController(servise,path);