

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

export function PasajeroVacio(): Pasajero {
    return {id: '',
    rut: '',
    nombre: '',
    apellido: '',
    correoElectronico: '',
    genero: '',
    fecha_nac: null,
    tipo:'',
    };
}; 