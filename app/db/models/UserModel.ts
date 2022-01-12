import { Column, Model, Table,PrimaryKey } from "sequelize-typescript";

@Table({ tableName: 'User'})
export default class User extends Model {
    @Column
    name!:string 

}