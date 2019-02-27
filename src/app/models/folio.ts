import { Empleado } from './empleado';
import { CatalogoGenerico } from './catalogo-generico';

export interface Folio {
    folio: number;
    faas: string;
    fechaCaptura: Date;
    telefonoAsignado: string;
    telefonoPortado: string;
    fechaCambioEstatus: Date;
    claveEmpresa: number;
    NombreEmpresa: string;
    facturacionTerceros: string;
    traficoVozEntrante: string;
    traficoVozSaliente: string;
    fechaTraficoVoz: string;
    traficoDatos: string;
    fechaTraficoDatos: string;
    fechaFacturacion: string;
    correo: string;
    fechaNacimiento: string;
    IDAux: string;
    terminal: string;
    distrito: string;
    telefonoCelular: string;
    entregoExpediente: boolean;
    tipoExpediente: string;
    fechaExpediente: string;
    observaciones: string;
    respuestaTelmex: string;
    estaValidado: boolean;
    // ordenes
    empleado: Empleado;
    area: CatalogoGenerico;
    estatus: CatalogoGenerico;
    estatusSIAC: CatalogoGenerico;
    linea: CatalogoGenerico;
    lineaContratada: CatalogoGenerico;
    division: CatalogoGenerico;
    tienda: CatalogoGenerico;
    paquete: CatalogoGenerico;
    servicio: CatalogoGenerico;
    campana: CatalogoGenerico;
    adeudo: CatalogoGenerico;
    cliente: CatalogoGenerico;
    entretenimiento: CatalogoGenerico;
    estrategia: CatalogoGenerico;
    gasto: CatalogoGenerico;
    giro: CatalogoGenerico;
    rechazo: CatalogoGenerico;
    traficoVoz: CatalogoGenerico;
    validacion: CatalogoGenerico;
    fechaCreacion: Date;
    fechaActualizacion: Date;
    fechaEliminacion: Date;

}
