

export interface Pasajero {
    id: string;
    rut: string;
    nombre: string;
    apellido: string;
    correoElectronico: string;
    genero: string;
    fecha_nac: Date | null;
    tipo:string;
}