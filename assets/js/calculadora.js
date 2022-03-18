window.addEventListener('load',()=> {


const display = document.querySelector('#linea1');
const display2 = document.querySelector('#linea2');
const teclas = document.getElementsByClassName('teclas'); 
const turnON = document.querySelector('#ON');
const turnOff = document.querySelector('#OFF');
const clear = document.querySelector('#clear');
let switche = "OFF";
let contador = [];





turnON.addEventListener('click',() =>{
    contador=[];
    switche = turnON.innerHTML;
    display.innerHTML = '';
    display2.innerHTML = '0';
    turnON.disable = true;
});

clear.addEventListener('click',() =>{
    contador=[];
    display.innerHTML = '';
    display2.innerHTML = '0';


});


turnOff.addEventListener('click',() =>{
    switche = turnOff.innerHTML;
    display.innerHTML = '';
    display2.innerHTML = '';
    
});


const teclasarray = Array.from(teclas); 
    teclasarray.forEach((teclas)=>{ 
           teclas.addEventListener('click',() =>{
                    calculadora(display, display2, teclas, switche, contador);
            });                              
        })
})

 

function calculadora(display,display2,teclas, switche,contador) {        
    switch (teclas.innerHTML) {
                    case '=':
                        calcular(display, display2, switche, contador);
                    break;
                    case 'DEL':
                        corregir( display, contador);
                    break;
                    default:
                        actualizar(display, display2, teclas, switche,contador)
    } 
}

function actualizar(display,display2,teclas,switche,contador){

    if(contador.length < 11 && contador[contador.length - 1] !== "="){
         if(switche === "ON"){
        contador.push(teclas.innerHTML);
        if(parseInt(contador[0]) === 0){
                contador.pop();
            }else{
                if(display.innerHTML === 0){
                    display.innerHTML = '';
                }
                let i = contador.length - 1;
                display.innerHTML += contador[i];
                display2.innerHTML = 0;
            }
        }else{
            display.innerHTML = 'Presione "ON"'
        }
    }else{
        
        display.innerHTML = 'Presione C'
        
    }
}


function corregir( display,contador){
    
   console.log('Este boton esta onfire');
   let newContador = "";
   contador.pop();
   for(let i = 0; i < contador.length ; i++){
       newContador += contador[i];
   }
   display.innerHTML = newContador;
}

function calcular(display, display2, switche, contador){
    if(switche === "ON"){
    display2.innerHTML = eval( display.innerHTML);
    display.innerHTML = "Resultado";
    contador.push('=');
    }else{
        display.innerHTML = 'Presione "ON"'
    }

}



