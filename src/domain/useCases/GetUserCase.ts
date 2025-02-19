/*capa intermedia. Su función es contener la lógica de negocio y servir de puente entre la capa de datos 
(Repositorio) "Repository.ts", y la capa de presentación (ViewModel)"UserViewModel.ts"*/
//*Nota: Cuando es archivo el import no va entre parentesis, solo cuando una función es heredera de React
import { IUserRepository } from "../../data/repositories/Repository";
import { User } from '../../data/models/User';

export class GetUserCase {
    private userRepository: IUserRepository;

    constructor(userRepository: IUserRepository) {
        this.userRepository = userRepository;
    }

    async execute(): Promise<User>{
        return await this.userRepository.getUser(); 
    }
}