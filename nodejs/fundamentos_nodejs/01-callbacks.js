//funcion que se ejecuta "despues" , en pocas palabras función dentro de otra función
const getUsuarioById = (id, pollo) => {
    const usuario = {
        /* id:id */
        id,
        nombre:'Miguel'
    }
    setTimeout(()=>{
        pollo(usuario)
    }, 1500)
}

getUsuarioById(10, (usuario)=> {
    console.log(usuario);
})