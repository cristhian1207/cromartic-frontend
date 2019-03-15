export class User {
    constructor(
        public username: string,
        public name: string,
        public pat_lastname: string,
        public mat_lastname: string,
        public email: string,
        public image: string,
        public created_date: Date,
        public updated_date: Date
    ){}    
}
