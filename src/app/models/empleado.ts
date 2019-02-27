import { Gerente } from './gerente';

export interface Empleado {
    clave: number;
    nombre: string;
    RFC: string;
    estatus: string;
    gerente: Gerente;
    fechaCreacion: Date;
    fechaActualizacion: Date;
    fechaEliminacion: Date;
}
