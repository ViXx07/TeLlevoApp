export interface Viaje {
    id?: string;
    destino: string;
    hora_inicio: number | null;
    punto_encuentro: string;
    valor: number | null;
}