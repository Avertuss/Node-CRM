import { ICurdRepository, Page} from '../../base'
import {RoleEntity} from './Entity';
import { Bulder, IShema, PageableByFilter , Pageable } from '../../json-sql'

export class  RoleRepository implements ICurdRepository<number, RoleEntity<number>>
{
    cache: Map<number,RoleEntity<number>>;
    sequins :number;
    private shema: IShema;
    private builder: Bulder;
    constructor(shema: IShema)
    {
        this.shema = shema;
        this.builder = new Bulder(shema);
        this.cache = new Map()
        this.cache.set(1,{"id": 1,
            "name": "manager","permission": new Set([
                {
                    "id": 1,
                    "code": "contact",
                    "name": "Контакты",
                    "lvl": 3
                },
                {
                    "id": 2,
                    "code": "role",
                    "name": "Роли",
                    "lvl": 1
                }
            ])
        });
        this.sequins = 2;
    }
    create(entity: RoleEntity): Promise<RoleEntity> {
        
        return new Promise((resolve)=>{
            let key = ++this.sequins
            this.cache.set(key,entity);
            resolve(this.cache.get(key));
        });
    }
    update(entity: RoleEntity): Promise<RoleEntity> {
        return new Promise((resolve)=>{

        });
    }
    delete(id: number): Promise<RoleEntity> {
        return new Promise((resolve)=>{

        });
    }
    getById(id: number): Promise<RoleEntity> {

        let sql = this.builder.select().byId(id).build();
        console.log(sql);
        return new Promise((resolve)=>{
            resolve(this.cache.get(id));
        });
    }
    getAll(pageable:Pageable): Promise<Array<RoleEntity>> {
        let sql = this.builder.select().byPage(pageable).build();
        console.log(sql);
        return new Promise((resolve)=>{
            resolve(Array.from<RoleEntity>(this.cache.values()));
        });
    }
    getPageableByFilter(filter:PageableByFilter):Promise<Array<RoleEntity>>
    {
        let sql = this.builder.select().where(filter).build();
        console.log(sql);
        return new Promise((resolve)=>{
            resolve(Array.from<RoleEntity>(this.cache.values()));
        });
    }

}