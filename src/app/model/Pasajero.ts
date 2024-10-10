

export interface Pasajero {
    uid: string;
    rut: string;
    nombre: string;
    apellido: string;
    correoElectronico: string;
    genero: string;
    fecha_nac: Date | null;
    tipo:string;
}

export function PasajeroVacio(): Pasajero {
    return {uid: '',
    rut: '',
    nombre: '',
    apellido: '',
    correoElectronico: '',
    genero: '',
    fecha_nac: null,
    tipo:'',
    };
}; 