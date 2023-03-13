
import {Bulder, IShema} from 'json-sql';
import {Filter, ICurdRepository, Page, IBaseEntity} from 'src/base';



export class  Repository  implements ICurdRepository<any,IBaseEntity<any>>
{
    private builder : Bulder;
    constructor(shema : IShema)
    {
       this.builder = new  Bulder(shema);
    }
    create(entity: IBaseEntity<any>): Promise<IBaseEntity<any>> {
        throw new Error('Method not implemented.');
    }
    update(entity: IBaseEntity<any>): Promise<IBaseEntity<any>> {
        throw new Error('Method not implemented.');
    }
    delete(id: any): Promise<IBaseEntity<any>> {
        throw new Error('Method not implemented.');
    }
    getById(id: any): Promise<IBaseEntity<any>> {
        throw new Error('Method not implemented.');
    }
    getAll(filter: Filter): Promise<IBaseEntity<any>[]> {
        let select = this.builder.select().build();
        console.log(select)
        return new Promise((e)=>[{name:"helloWorld"}]);
    }

}