document.addEventListener('DOMContentLoaded', () => {
    
    //Declariones de variables
    
    let encendida = false;
    let valores = [];
    let operaciones = [];
    const op = ['%','x','/','-', '+']
    
    
    let buttons = document.getElementsByTagName('button')
    let result = document.getElementById('mostrarValor')
    let valorPantalla = '0';
    
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', ()=> {
            let boton = buttons[i].innerHTML
            type(boton)
        })
        
    }


    //Metodos
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
                valorPantalla=''
                result.innerHTML=''
            }
            if(result.innerHTML == '0') {
                valorPantalla=valorBoton
                result.innerHTML=valorBoton 
            }else{
            valorPantalla+=valorBoton
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
            valores.push(parseFloat(valorPantalla)) 
            valorPantalla=''
            result.innerHTML=valorBoton
            operaciones.push(valorBoton)
            return;
        }


        //Borrado
        if(valorBoton === 'CE') {
            result.innerHTML='0'
            valorPantalla = '0'

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
            valores.push(parseFloat(valorPantalla)) 
            realizarOperacion()
        }

    }

    //Obtener resultado de la operacion
    const realizarOperacion = () => {
       operaciones = operaciones.sort((a, b) => a - b);
        let valorActual = valores[0]
        for (let i = 1, o = 0; i < valores.length; i++, o++) {
            if(operaciones.includes('x') && operaciones.lastIndexOf('x') > operaciones.lastIndexOf('/')){
                let num2 = valores[operaciones.lastIndexOf('x') +1]      
                let num1 = valores[operaciones.lastIndexOf('x')]
                valores.splice(operaciones.lastIndexOf('x'), 2,  num1 * num2)
                operaciones.slice(operaciones.lastIndexOf('x'),0)
            }
            if(operaciones.includes('/') && operaciones.lastIndexOf('x') < operaciones.lastIndexOf('/')){
                let num2 = valores[operaciones.lastIndexOf('/') +1]      
                let num1 = valores[operaciones.lastIndexOf('/')]
                valores.splice(operaciones.lastIndexOf('/'), 2,  num1 / num2)
                operaciones.slice(operaciones.lastIndexOf('/'),0)
            }
            switch (operaciones[o]) {
                case '+':
                    valorActual+=valores[i]
                    break;
                case '-':
                    valorActual-=valores[i]
                    break;

                case '%':
                    valorActual%=valores[i]
                    break;
            }
        }
        result.innerHTML=valorActual
        valores = []
        operaciones= []
        valorPantalla =valorActual+""
    }



})