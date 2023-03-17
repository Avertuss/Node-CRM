import { IRepository, Page} from '../../base'
import {RoleEntity} from './Entity';
import {PageableByFilter , Pageable} from '../../json-sql';
export class  RoleRepository implements IRepository<string, RoleEntity>
{
    cache: Map<String,RoleEntity>;
    constructor()
    {
        this.cache = new Map();
    }
    create(entity: RoleEntity): RoleEntity {
        this.cache.set(entity.id,entity);
        return entity;
    }
    update(entity: RoleEntity): RoleEntity {
        this.cache.set(entity.id,entity);
        return entity;
    }
    delete(id: string): RoleEntity {
        let entity = this.cache.get(id);
        this.cache.delete(id);
        return entity;
    }
    getById(id: string): RoleEntity {
        return this.cache.get(id);
    }
    getAll(filter: Pageable): Page<RoleEntity> {
        throw new Error('Method not implemented.');
    }

}