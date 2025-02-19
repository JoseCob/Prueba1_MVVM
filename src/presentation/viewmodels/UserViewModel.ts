//Aqui se crea la logica de la UI(interfaz) para "WelcomeScreen.tsx"
//*Nota: Cuando es archivo el import no va entre parentesis, solo cuando una función es heredera de React
import { useState, useEffect } from "react";
import { User } from "../../data/models/User";
import { UserRepository } from "../../data/repositories/Repository";
import { GetUserCase } from "../../domain/useCases/GetUserCase";

export const useUserViewModel = () => {
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState(true); //Se agrega el estado de carga
    const userRepository = new UserRepository();
    const getUserCase = new GetUserCase(userRepository);

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const data = await getUserCase.execute();
                setUser(data);
            } catch (error) {
                console.error("Error al obtener el usuario:", error);
            } finally {
                setLoading(false); //Se cambia el estado de carga a false, haciendo que este se actualice o termina la carga
            }
        };
        fetchUser(); //Se llama a la función para obtener el usuario al iniciar la vista del modelo de vista de usuario
    },[]);

    return { user, loading };
};