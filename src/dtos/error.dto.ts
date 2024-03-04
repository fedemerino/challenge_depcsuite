export function errorDto(message:string){
    return {
        status: "error",
        message: message
    }
}