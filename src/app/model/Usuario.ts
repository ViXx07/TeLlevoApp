import { Auto } from "./Auto";

export interface Usuario {
    id?: string;
    rut: string;
    nombre: string;
    apellido: string;
    correoElectronico: string;
    genero: string;
    fecha_nac: Date | null;
    contrasena: string;
    //Sub colección de autos como array por si tiene mas de un auto 
    autos?: Auto[];

}