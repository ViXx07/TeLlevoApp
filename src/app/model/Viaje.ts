import { Pasajero } from "./Pasajero";

export interface Viaje {
    uid?: string;
    destino: string;
    chofer: string;
    pasajeros: Pasajero[] | null;
    hora_inicio: string   | null;
    punto_encuentro: string;
    valor: number | null;
    numPasajeros: number | null; 
} 

export function viajeVacio(): Viaje {
    return {    
        uid: '',
        destino: '',
        chofer: '',
        pasajeros: null,
        hora_inicio: null,
        punto_encuentro: '',
        valor: null ,
        numPasajeros: null,
    };
}; 
