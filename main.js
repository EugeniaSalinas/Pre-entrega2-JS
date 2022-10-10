/* El proyecto trata sobre una página donde las personas podrán completar un formulario con
materiales reciclables que tengan en sus hogares, a partir de esa acción se obtendran CRÉDITOS VERDES
que podrán cambiar en negocios sustentables adheridos.*/


function pedirUsuario(){
    let nombreUsuario = prompt ("Hola! Ingresa tu nombre de usuario");
    let respuestaBienvenida = `Bienvenido a Clasifica ${nombreUsuario}, presiona aceptar para continuar`;
    return alert (respuestaBienvenida);
}


/*Se definen los precios que pagan las recicladoras por los materiales
  Actualmente 1 CREDITO VERDE = 25$ 
  Por lo tanto dependiento del material juntado se obtendrá determinado crédito verde*/

let precioVidrio = 10
let precioPlastico = 8.5
let precioCarton = 15.5
let precioPapel = 9



//pedirUsuario();
//calcularCreditosVerdes();




/*let material;

while ((material !== "salir") || (material != null)){

    material = prompt(`Que material has juntado en tu domicilio? vidrio, carton, papel o plastico.\nPresiona cancelar para salir`);
    let cuantoMaterial = parseFloat(prompt(`Cuanto ${material.toLowerCase()} tienes en kg? Colocar solo el numero`));
    
}
*/


//CLASE CONSTRUCTORA
class Materiales {
    constructor(tipo,cuantoMaterial){
        this.tipo = tipo;
        this.cuanto = cuantoMaterial;
    }
    
}

//ARRAY DE MATERIALES
let listaMateriales = [];



//DECLARACION FUNCION PARA CONOCER LOS OBEJTOS DEL ARRAY

function conocerLista() {
    if (listaMateriales.length == 0) {
        alert("No has reciclado nigun material :(");
    }else{
        for(let i = 0 ; i < listaMateriales.length; i++){
            console.log (listaMateriales);
        }
      }
}

//FUNCION PARA AGREGAR MATERIALES
const agregarMaterial = () =>{
    let material = prompt(`Que material has juntado en tu domicilio? vidrio, carton, papel o plastico.\nPresiona cancelar para salir`);
    let cuantoEnKg = parseFloat(prompt(`Cuanto ${material.toLowerCase()} tienes en kg? Colocar solo el numero`));


        //FUNCION PARA SEGUIR AGREGANDO
        const respuestaMaterial = (opcionElegida)=> {
        
            opcionElegida = parseInt(prompt(`que deseas hacer ahora? selecciona la opcion
            1) Agregar mas material
            2) Conocer mi lista de materiales
            3) Salir`));
            switch (opcionElegida){
                case 1: agregarMaterial();
                    break;
                case 2: conocerLista();
                    break;
                case 3:
                    break;
                default: alert("debes elegir una opcion o 3 para salir")
                    break;
            }
        
           respuestaMaterial();
        }
        
        
        
let materialNuevo = new Materiales (material,cuantoEnKg);
listaMateriales.push(materialNuevo);

       
}



//MENU INICIO

const menuInicio = (opcion) =>{
do {
    opcion = parseInt(prompt(`Que deseas hacer: selecciona la opcion
    1) Agregar material
    2) Ver mi lista de materiales
    3) Salir`));
    switch (opcion){
        case 1: agregarMaterial();
            break;
        case 2: conocerLista();
            break;
        case 3:
            break;
        default: alert ("elige una opcion o 3 para salir")
            break;
    }
}
while (opcion != 3);
}

menuInicio();