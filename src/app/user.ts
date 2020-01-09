export interface IUser{
    userId:number,
    name:string,
    phone:string,
    email:string
}

export class User implements IUser{
    userId: number;   
    name: string;
    phone: string;
    email: string;
}