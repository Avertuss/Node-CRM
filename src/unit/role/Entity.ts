export type PermissionEntity =
{
    id:number,
    name:string,
    code:string,
    lvl:number,
}
export type RoleEntity<T = number> = 
{
    id:T,
    name:string,
    permission:Set<PermissionEntity>
}

export type UserEntity<T = number> =
{
    id:T,
    username:string,
    password:string,
    isLocked:boolean,
    roles:Set<RoleEntity<T>>
}
