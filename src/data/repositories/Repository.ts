//Intermediario para interactuar con la fuente de datos y obtiene los datos del usuario a través del caso de uso. "GetUserCase.ts"
//Se encarga de estandarizar la información de los usuarios y retornarla en forma de promesa.
//*Nota: Cuando es archivo el import no va entre parentesis, solo cuando sea una función hereda de una función en React
import { User } from '../models/User';

export interface IUserRepository {
    getUser(): Promise<User>;
}

export class UserRepository implements IUserRepository {
    async getUser(): Promise<User> {
        // Simula una llamada a API o base de datos
        return new Promise ((resolve, reject)=> {
            setTimeout(() => {
                resolve({ id: 1, name: 'Jose Cob', email: 'jose@example.com', phone:'999-999-9999' });
            }, 1000);
        });
    }
}