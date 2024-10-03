

export interface Usuario {
    id?: string;
    rut: string;
    nombre: string;
    apellido: string;
    correoElectronico: string;
    genero: string;
    fecha_nac: Date | null;
    contrasena: string;

}