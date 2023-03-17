import {  Page, IBaseEntity } from '../base';
import { IDictionaryEntity, IDictionaryRequest, IDictionaryResponse, IDictionaryService} from './types';
import { Repository } from './Repository';
import { PageableByFilter, Pageable } from 'json-sql';

export class Service implements IDictionaryService {
    roleRepository: Repository
    constructor(roleRepository: Repository) {
        this.roleRepository = roleRepository;
    }
    getPageableByFilter(filter: PageableByFilter): Promise<Page<IDictionaryResponse>> {
        throw new Error('Method not implemented.');
    }
    create(request: IDictionaryRequest): Promise<IDictionaryResponse> {
        throw new Error('Method not implemented.');
    }
    update(id: string, request: IDictionaryRequest): Promise<IDictionaryResponse> {
        throw new Error('Method not implemented.');
    }
    delete(id: string): Promise<IDictionaryResponse> {
        throw new Error('Method not implemented.');
    }
    getById(id: string): Promise<IDictionaryResponse> {
        throw new Error('Method not implemented.');
    }
    async getAll(filter: Pageable): Promise<Page<IDictionaryResponse>> {
       let entitys : Array<IDictionaryEntity> = await this.roleRepository.getAll(filter);
       return { "data":entitys.map(this.convertEntityToResponse) ,"count":entitys.length}
    }

    private convertEntityToResponse(entity: IBaseEntity<any>):IDictionaryResponse
    {
        return entity as IDictionaryResponse;
    }
}