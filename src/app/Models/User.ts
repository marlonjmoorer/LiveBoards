export class User{
    constructor(
        public username:string,
        public password:string,
        public create_date?:Date,
        public id?:number,
    ){}

}