

export interface Chofer {
    id: string;
    rut: string;
    nombre: string;
    apellido: string;
    correoElectronico: string;
    genero: string;
    fecha_nac: Date | null;
    patente:string;
    modelo:string;
    tipo:string;
}