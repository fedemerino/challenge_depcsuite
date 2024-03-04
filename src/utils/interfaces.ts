export interface Curso {
    id: number,
    nombre: string, 
    descripcion: string,
    significado: string,
    informacion: string,
    url_imagen: string,
    duracion: string,
    habilidades_a_adquirir: string,
    disponible: boolean,
    tipo_de_curso_id: number,
    precio?: number
    porcentaje_descuento?: number
}   

export interface Tecnologia {
    id: number,
    nombre: string,
    url_imagen: string
}

export interface Unidad {
    id: number,
    numero: number,
    titulo: string,
    descripcion: string,
    clases: number,
    horas: number,
    curso_id: number
    tecnologias?: Tecnologia[]
}

export interface HorarioCursado {
    id: number,
    comision_id: number,
    dias: string,
    hora_inicio: string,
    hora_fin: string,
    fecha_inicio: Date,
    fecha_fin: Date
}

export interface Moneda {
    id: number,
    nombre: string,
    descripcion: string
}

export interface MedioDePago{
    id: number,
    nombre: string,
    url_imagen: string
}

export interface Pais{
    id: number,
    nombre: string,
    moneda_id: number,
    moneda?: Moneda
    medios_de_pago?: MedioDePago[]
    otros_medios_de_pago?: MedioDePago[]
}