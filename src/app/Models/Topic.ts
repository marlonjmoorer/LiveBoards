

export class Topic {
    constructor(
        public id:number,
        public title?:string,
        public created_by?:string,
        public replies?:string,
        public date_posted?:Date,
        public lastPostDate?:Date

    ){}

}