//Intermediario para interactuar con la fuente de datos y obtiene los datos del usuario a través del caso de uso. "GetUserCase.ts"
//Se encarga de estandarizar la información de los usuarios y retornarla en forma de promesa.
//*Nota: Cuando es archivo el import no va entre parentesis, solo cuando una función es heredera de React
import { User } from '../models/User';

export interface IUserRepository {
    getUser(): Promise<User>;
}

export class UserRepository implements IUserRepository {
    async getUser(): Promise<User> {
        // Simula una llamada a API o base de datos
        return new Promise ((resolve, reject)=> {
            setTimeout(() => {
                resolve (
                    { id: 1, name: 'Jose Gerardo Ortíz Dominguez', user:'XxJose50xX_Ortíz', email: 'jose@example.com', phone:'999-999-9999', city:'México', state:'Sinaloa'}
                );
            }, 1000);
        });
    }
}