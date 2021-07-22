
//Cuando no asignamos un tipo de dato automaticamente toma el valor Any(espera cualquier dato)

function tipoSoy(argumento){
  return argumento;
}

//Para evitarnos todo eso, podemos utilizar los genéricos(puede ser cualquier tipo de dato)
//Podemos utilizar cualquier tipo de letra pero es un estandar el uso de T
function queTipoSoy<T>( arg: T){
  return arg;
}

let soyUnString = tipoSoy('Hola mundo'); //Sigue siendo un any
let soyString2 = queTipoSoy('Hola amor'); //Toma el valorque se le asigna sea cual sea el tipo de dato.
let numero = queTipoSoy(123);
let arreglo = queTipoSoy([1,2,3,4,5,6]);
