const empleados = [
    {id:1,nombre:'Miguel'},
    {id:2,nombre:'Maria'},
    {id:3,nombre:'Rosa Mel Ano'}
]
const salarios = [
    {id:1,salario:1000},
    {id:2,salario:2000},    
]
const getEmpleado= (id) =>{
    
    return new Promise((resolve,reject) =>{
        const empleado = empleados.find(e => e.id === id)?.nombre;    

        empleado ? resolve(empleado) : reject(`No existe empleado con el id ${id}`);

        /* if(empleado){
            resolve(empleado)
        }else{
            reject(`No existe empleado con el id ${id}`);
        } */
    });    
}

const getSalario = (id) => {
    return new Promise((resolve,reject) =>{
        salario = salarios.find(e => e.id === id)?.salario;
        salario ? resolve(salario) : reject(`La persona con el id ${id}, no cuenta con salario`);
    });
}

//El async trasforma la funcion en asincrona, lo que hace es devolver la funcion en promesa

const getInfoUsuario = async(id) => {
    
    try{
        const empleado = await getEmpleado(id);
        const salario = await getSalario(id); 

        return `El salario del empleado ${empleado} es ${salario}`; 
    }catch (error){
        throw error
    }
    
}

const id=5;

getInfoUsuario(id)
    .then(msg => console.log(msg))
    .catch(err => console.log(err));

