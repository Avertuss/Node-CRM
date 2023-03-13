import { Filter, Page } from 'src/base';
import { ICustomRequest, ICustomResponse, ICustomService} from './types';
import { Repository } from './Repository';

export class Service implements ICustomService {
    roleRepository: Repository
    constructor(roleRepository: Repository) {
        this.roleRepository = roleRepository;
    }
    create(request: ICustomRequest): Promise<ICustomResponse> {
        throw new Error('Method not implemented.');
    }
    update(id: string, request: ICustomRequest): Promise<ICustomResponse> {
        throw new Error('Method not implemented.');
    }
    delete(id: string): Promise<ICustomResponse> {
        throw new Error('Method not implemented.');
    }
    getById(id: string): Promise<ICustomResponse> {
        throw new Error('Method not implemented.');
    }
    getAll(filter: Filter): Promise<Page<ICustomResponse>> {
        throw new Error('Method not implemented.');
    }
    
}