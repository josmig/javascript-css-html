const empleados = [
    {id:1,nombre:'Miguel'},
    {id:2,nombre:'Maria'},
    {id:3,nombre:'Rosa Mel Ano'}
]
const salarios = [
    {id:1,salario:1000},
    {id:2,salario:2000},    
]

const getEmpleado= (id, callback) =>{
    const empleado = empleados.find(e => e.id === id);
    if(empleado){
        /* return empleado; */
        callback(null,empleado.nombre);
    }else{
        /* return `Empleado con el id : ${id} no existe`; */
        callback(`Empleado con el id ${id} no existe!`)
    }
}

const getSalario = (id, callback) => {
    const sal = salarios.find(e => e.id === id)?.salario;

    if(sal){
        callback(null,sal);
    }else{
        callback(`Empleado con el id ${id} no tiene salario`);
    }
}

const id = 3;
getEmpleado(id, (err,empleado)=> {
    if(err){
        console.log('Error!');
        return console.log(err);
    }
    /* console.log('Empleado existe!');
    console.log(empleado); */    
    getSalario(id, (err, sal) => {
        if(err){
            console.log('Error!');
            return console.log(err);;
        }
        /* console.log('Salario existente');
        console.log(sal); */

        console.log('El empleado ' + empleado + ' tiene un salario de' + sal);
    });
});

