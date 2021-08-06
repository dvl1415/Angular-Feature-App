export class User {
    id?: number
    name?: string
    email?: string
    address?: {
        city?:string 
        zipcode?:string
    } 
    phone? :string
    website?: string

    company?: {
        name? : string
    }
}
