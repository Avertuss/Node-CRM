import { Filter, Page } from '../../base';
import { IRoleRequest, IRoleResponse, IRoleService, IPermission } from './types';
import { RoleRepository } from './RoleRepository';
import { RoleEntity } from './Entity';



export class RoleService implements IRoleService {
    roleRepository: RoleRepository
    constructor(roleRepository: RoleRepository) {
        this.roleRepository = roleRepository;
    }
    
    async getById(id: string): Promise<IRoleResponse>{

      let entity  = await this.roleRepository.getById((Number(id) as number));

        return this.convertToIRoleResponse(entity);
    }
    async getAll(filter: Filter): Promise<Page<IRoleResponse>> {
        let elements =  await this.roleRepository.getAll(filter);
        let page = { data : elements.map(e=>this.convertToIRoleResponse(e)), count: elements.length}
        return page;
    }
    create(request: IRoleRequest): Promise<IRoleResponse> {
        throw new Error('Method not implemented.');
    }
    update(id: string, request: IRoleRequest): Promise<IRoleResponse> {
        throw new Error('Method not implemented.');
    }
    delete(id: string):  Promise<IRoleResponse> {
        throw new Error('Method not implemented.');
    }
    
    private convertToIRoleResponse(entity: RoleEntity):IRoleResponse {
  
    
        return {id:entity.id,name:entity.name, permission: Array.from(entity.permission.values()) }
    }
}