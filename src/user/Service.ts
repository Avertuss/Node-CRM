import { Filter, Page } from 'src/base';
import {IRoleRequest, IRoleResponse, IRoleService} from './types';
import {RoleRepository} from './Repository';
import {RoleEntity} from './Entity';
export class UserService 
{

}
export class RoleService implements IRoleService
{
    roleRepository: RoleRepository
    constructor(roleRepository: RoleRepository)
    {
        this.roleRepository = roleRepository;
    }
    
    getById(id: string): IRoleResponse {
        let entityt = this.roleRepository.getById(id);
        return {} as IRoleResponse;
    }
    getAll(filter: Filter): Page<IRoleResponse> {
        throw new Error('Method not implemented.');
    }
    create(request: IRoleRequest): IRoleResponse {
        throw new Error('Method not implemented.');
    }
    update(id: string, request: IRoleRequest): IRoleResponse {
        throw new Error('Method not implemented.');
    }
    delete(id: string): IRoleResponse {
        throw new Error('Method not implemented.');
    }
    private convertToIRoleResponse(entity: RoleEntity):IRoleResponse
    {   let response = entity;
        return 
    }
}