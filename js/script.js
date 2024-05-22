document.addEventListener('DOMContentLoaded', () => {
    
    //Declariones de variables
    let encendida = false;
    const op = ['%','x','/','-', '+']
    let i = 1;
    
    let buttons = document.getElementsByTagName('button')
    let result = document.getElementById('mostrarValor')
    let valorPantalla = '0';
    
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', ()=> {
            let boton = buttons[i].innerHTML
            type(boton)
        })
        
    }


    //Metodos y funciones
    const type = (valorBoton) => {

        //Calculadora encendida o apagada
        if(valorBoton == 'On') {
            encendida= true
            result.style.background='#baf2f2'
            valorPantalla = '0'
            result.innerHTML='0'
        }
        if(valorBoton == 'OFF'){
             encendida= false;
             result.style.background='rgb(115, 117, 119)'
             valorPantalla = ''
             result.innerHTML=''
             valores = []
             operaciones= []
        }
        if (!encendida) return;

        //Valores  Numericos
        if(parseInt(valorBoton) || valorBoton === '0' || valorBoton === '00'){

            if(op.includes(result.innerHTML) ){
                result.innerHTML=''
            }

            if(result.innerHTML == '0' && valorPantalla.length ===1) {
                valorPantalla=valorBoton
                result.innerHTML=valorBoton 
            }else{
                if(result.innerHTML === '0'){
                    result.innerHTML=''; 
                }
            result.innerHTML+=valorBoton
            return;
            }

        }
        //Decimales con Punto

        if(valorBoton == '.'){
           if(valorPantalla.indexOf('.') >=0)  return;
            valorPantalla+='.'
            result.innerHTML+='.'
        }

        //Operaciones
        if(op.includes(valorBoton)){
            if(i % 2 === 0){
                valorPantalla+=result.innerHTML;
                result.innerHTML=valorBoton;
                valorPantalla+=valorBoton
                i++;
                return;
                
            }
            valorPantalla+=valorBoton
            result.innerHTML=valorBoton
            i++;
            return;
        }


        //Borrado
        if(valorBoton === 'CE') {
            result.innerHTML='0';
        }

        //Memoria Calculadora
        if(valorBoton === 'M+'){
            if(valorPantalla.length == 0) {
                return ;
            }
            localStorage.setItem('valorGuardado', valorPantalla)
        }
        if(valorBoton === 'MC'){
                localStorage.clear();
        }
        if(valorBoton === 'MR'){
            if (!localStorage.getItem('valorGuardado')) {
                return;
            }
            if(op.includes(result.innerHTML) ){
                valorPantalla=''
                result.innerHTML=''
            }
            let valorMemoria = localStorage.getItem('valorGuardado')
            valorPantalla = valorMemoria
            result.innerHTML=valorMemoria
        }
        //Resultado de operacion
        if(valorBoton == '='){
            valorPantalla+=result.innerHTML
            realizarOperacion()
        }

    }

    //Obtener resultado de la operacion
    const realizarOperacion = () => {
        let regex = /x/g;
        valorPantalla = valorPantalla.replace(regex, '*');
        result.innerHTML= eval(valorPantalla);
        i = 1
    }



})