import {Filter, ICurdRepository, Page, toPage} from '../base'
import {RoleEntity,PermissionEntity} from './Entity';


export class  RoleRepository implements ICurdRepository<number, RoleEntity<number>>
{
    cache: Map<number,RoleEntity<number>>;
    sequins :number;
    constructor()
    {
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
        return new Promise((resolve)=>{
            resolve(this.cache.get(id));
        });
    }
    getAll(filter: Filter): Promise<Array<RoleEntity>> {
        return new Promise((resolve)=>{
            resolve(Array.from<RoleEntity>(this.cache.values()));
        });
    }

}