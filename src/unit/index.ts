import RoleController from './RoleController';
import {RoleService} from './Service';
import {RoleRepository} from './Repository';
const path : string = "/role"
const repository = new RoleRepository();
const servise =  new RoleService(repository);

export const roleController =  RoleController(servise,path);