export type PermissionEntity =
{
    id:string,
    name:string
}
export type RoleEntity = 
{
    id:string,
    name:string,
    permission:Set<PermissionEntity>
}

export type UserEntity =
{
    id:string,
    username:string,
    password:string,
    isLocked:boolean,
    roles:Set<RoleEntity>
}
