
import { Bulder, IShema } from '../json-sql';
import { Filter, ICurdRepository, Page, IBaseEntity } from '../base';
import { IDictionaryEntity } from './types';


export class Repository implements ICurdRepository<any, IDictionaryEntity>
{
    private builder: Bulder;
    constructor(shema: IShema) {
        this.builder = new Bulder(shema);
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
    getAll(filter: Filter): Promise<Array<IDictionaryEntity>> {
        let select = this.builder.select().build();
        throw new Error('Method not implemented.');
    }

}