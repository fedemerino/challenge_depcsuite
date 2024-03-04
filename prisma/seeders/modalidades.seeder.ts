import { PrismaClient } from "@prisma/client";
import { PROGRAMACION_WEB_FULLSTACK, TIPO_DE_MODALIDAD_EN_VIVO, TIPO_DE_MODALIDAD_GRABADO } from "../constants";

const getCursoId = async (prisma: PrismaClient, nombre: string) => {
    const curso = await prisma.cursos.findFirst({
        where: {
            nombre
        }
    })
    return curso?.id
}



export async function createModalidades(prisma: PrismaClient) {
    try {
        const cursoId = await getCursoId(prisma, PROGRAMACION_WEB_FULLSTACK)
        if (!cursoId) throw new Error("No se encontró el curso")
        const modalidades = [
            {
                tipo: TIPO_DE_MODALIDAD_EN_VIVO,
                titulo: "Curso con docente en vivo + 1 clase de consulta",
                subtitulo: "Incluye 40 clases. 100 h totales.",
                items: "Clases con docente 100% online en vivo.|Clase grupal de consultas semanal en vivo.|Campus virtual + ejercicios resueltos + diapositivas con material teórico y práctico + foro de consultas + videos de las clases grabadas.|Desarrollo de ejercicios y proyecto integrador del tipo ecommerce.|Certificado de desarrollo profesional, verificable con código QR.|Alta en nuestra bolsa laboral IT donde tenemos convenio con consultoras y multinacionales.|Charla extra con especialistas de RRHH en el mundo IT.|Acompañamiento pedagógico desde la oficina de alumnos para guiarte en este nuevo mundo.",
                curso_id: cursoId
            },
            {
                tipo: TIPO_DE_MODALIDAD_GRABADO,
                titulo: "Clases grabadas + 2 clases de consulta por semana",
                subtitulo: "Incluye 40 clases. 100 h totales. <b>Inicio Inmediato.</b>",
                items: "Clase grupal de consultas semanal en vivo.|Campus virtual + ejercicios resueltos + diapositivas con material teórico y práctico + foro de consultas + videos de las clases grabadas.|Desarrollo de ejercicios y proyecto integrador del tipo ecommerce.|Certificado de desarrollo profesional, verificable con código QR.|Alta en nuestra bolsa laboral IT donde tenemos convenio con consultoras y multinacionales.|Charla extra con especialistas de RRHH en el mundo IT.|Acompañamiento pedagógico desde la oficina de alumnos para guiarte en este nuevo mundo.",
                curso_id: cursoId
            }
        ]
        await prisma.modalidades.createMany({
            data: modalidades
        })
    } catch (error) {
        console.log(error)
    }
}