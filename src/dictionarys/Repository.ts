
import { Bulder, IShema, PageableByFilter } from '../json-sql';
import { ICurdRepository, Page, IBaseEntity } from '../base';
import { IDictionaryEntity } from './types';
import {Pageable }from '../json-sql';

export class Repository implements ICurdRepository<any, IDictionaryEntity>
{
    private builder: Bulder;
    constructor(shema: IShema) {
        this.builder = new Bulder(shema);
    }
    getPageableByFilter(filter: PageableByFilter): Promise<IDictionaryEntity[]> {
        throw new Error('Method not implemented.');
    }
    create(entity: IDictionaryEntity): Promise<IDictionaryEntity> {
        throw new Error('Method not implemented.');
    }
    update(entity: IDictionaryEntity): Promise<IDictionaryEntity> {
        throw new Error('Method not implemented.');
    }
    delete(id: any): Promise<IDictionaryEntity> { 
        throw new Error('Method not implemented.');
    }
    getById(id: any): Promise<IDictionaryEntity> {
        throw new Error('Method not implemented.');
    }
    getAll(filter: Pageable): Promise<Array<IDictionaryEntity>> {
        let select = this.builder.select().build();
        throw new Error('Method not implemented.');
    }

}