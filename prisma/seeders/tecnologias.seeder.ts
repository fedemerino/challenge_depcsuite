import { PrismaClient } from "@prisma/client";
import { TECNOLOGIA_APACHE, TECNOLOGIA_BOOTSTRAP, TECNOLOGIA_CSS, TECNOLOGIA_GIT, TECNOLOGIA_HTML, TECNOLOGIA_JAVASCRIPT, TECNOLOGIA_LARAVEL, TECNOLOGIA_MERCADOPAGO, TECNOLOGIA_MYSQL, TECNOLOGIA_PHP } from "../constants";

const tecnologias = [
    {
        nombre: TECNOLOGIA_HTML,
        url_imagen: "i_html5.svg"
    },
    {
        nombre: TECNOLOGIA_CSS,
        url_imagen: "i_css.svg"
    },
    {
        nombre: TECNOLOGIA_GIT,
        url_imagen: "i_git.svg"
    },
    {
        nombre: TECNOLOGIA_BOOTSTRAP,
        url_imagen: "i_bootstrap.svg"
    },
    {
        nombre: TECNOLOGIA_PHP,
        url_imagen: "i_php.svg"
    },
    {
        nombre: TECNOLOGIA_APACHE,
        url_imagen: "i_apache.svg"
    },
    {
        nombre: TECNOLOGIA_MYSQL,
        url_imagen: "i_mysql.svg"
    },
    {
        nombre: TECNOLOGIA_LARAVEL,
        url_imagen: "i_laravel.svg"
    },
    {
        nombre: TECNOLOGIA_MERCADOPAGO,
        url_imagen: "i_mercadopago.svg"
    },
    {
        nombre: TECNOLOGIA_JAVASCRIPT,
        url_imagen: "i_javascript.svg"
    }
]

export async function createTecnologias(prisma: PrismaClient){
    try {
        await prisma.tecnologias.createMany({
            data: tecnologias
        })
    } catch (error) {
        console.log(error)
    }
}