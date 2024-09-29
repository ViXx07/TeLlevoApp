import { Auto } from "./Auto";

export interface Usuario {
    id?: string;
    rut: string;
    nombre: string;
    apellido: string;
    contrasena: string;
    correo: string;
    genero: string;
    fecha_nac: Date;
    //Sub colección de autos como array por si tiene mas de un auto 
    autos?: Auto[];

}