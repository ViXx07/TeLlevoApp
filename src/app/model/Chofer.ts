

export interface Chofer {
    uid: string;
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

export function ChoferVacio(): Chofer {
    return {uid: '',
    rut: '',
    nombre: '',
    apellido: '',
    correoElectronico: '',
    genero: '',
    fecha_nac: null,
    tipo:'',
    patente:'',
    modelo:'',
    };
}; 