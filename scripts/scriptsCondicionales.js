jQuery('document').ready(function($){
    var menuBtn = $('.menu-icon');
    var menu = $('.navigation ul');
    var cedulas = new Array();
    var estudiantes = new Array();
    var edades = new Array();
    var matrices=new Array();
    var objestudiantes=new Array();
    
    var formulario=document.getElementById('formulario');
           formulario.addEventListener('submit',function(e){
            e.preventDefault();
         })
    
       menuBtn.click(function(){
 
 
         if (menu.hasClass('show')) {
           menu.removeClass('show');
         }else{
           menu.addClass('show');
       
         };
       });

 
        $('#botonEjercicio1').click(function(){
 
            let num1 = +prompt('Ingrese el primer numero: ')
            let num2 = +prompt('Ingrese el segundo numero: ')

            alert('El numero mayor es: '+ (num1 > num2 ? num1 : num2))

        
        })
 
        $('#botonEjercicio2').click(function(){
 
            let num = +prompt('Ingrese un numero: ');

            if (num > 0) {
                alert('El numero es positivo');
            } else if (num < 0) {
                alert('El numero es negativo');
            } else {
                alert('El numero es cero');
            }
 
        })
 
        $('#botonEjercicio3').click(function(){
          
            const PRECIO_UNIDAD_1 = 1100
            const PRECIO_UNIDAD_2 = 1300
            
            let pencils = +prompt('Ingrese la cantidad de lapices: ')
            
            let costo =
              pencils > 1000 ? pencils * PRECIO_UNIDAD_1 : pencils * PRECIO_UNIDAD_2
            
            alert('El precio total es: $'+ costo)
            
        })
 
        $('#botonEjercicio4').click(function(){
            let precio_traje = +prompt('Ingrese el precio del traje: ')

            let aplica_descuento = precio_traje >= 25000
            let descuento = aplica_descuento ? precio_traje * 0.17 : precio_traje * 0.05
            
            alert('El precio del traje es: $'+ (precio_traje - descuento))
            alert('Su descuento es: '+ (aplica_descuento ? '17%' : '5%'))
            
        })
 
        $('#botonEjercicio5').click(function(){
 
            let cantidad_1 = +prompt('Ingrese la cantidad 1: ') 
            let cantidad_2 = +prompt('Ingrese la cantidad 2: ')
            let cantidad_3 = +prompt('Ingrese la cantidad 3: ')

            let mayor = Math.max(cantidad_1, cantidad_2, cantidad_3) 
            let menor = Math.min(cantidad_1, cantidad_2, cantidad_3)
            let medio = cantidad_1 + cantidad_2 + cantidad_3 - mayor - menor

            alert('La cantidad mayor es: '+ mayor)
            alert('La cantidad medio es: '+ medio)
            alert('La cantidad menor es: '+ menor)
 
        })
        $('#botonEjercicio6').click(function(){
            let precioPlato = 10000 // -> precio del plato

            let cantidadPersonas = +prompt('Ingrese la cantidad de personas: ') // -> leer cantidad de personas
            
            if (cantidadPersonas > 90 && cantidadPersonas <= 150) { // if -> es el si, && -> es el Y 
              precioPlato = 8500
            } else if (cantidadPersonas > 150) { // -> else if -> es el si no
              precioPlato = 7500
            }
            
            alert('El precio del plato es: $'+ precioPlato) // -> escribir el precio del plato
            alert('El banquete tiene un precio de: $'+ cantidadPersonas * precioPlato) // -> escribir el precio del banquete
            
        })

        $('#botonEjercicio7').click(function(){
 
            let numeroCita = +prompt('Ingrese el número de cita: ')
            let costoCita = 0
            let costoTratamiento = 0

            for (let i = 1; i <= numeroCita; i++) {
                if (i <= 3) {
                    costoCita = 100000
                    costoTratamiento += 100000
                } else if (i <= 5) {
                    costoCita = 80000
                    costoTratamiento += 80000
                } else if (i <= 8) {
                    costoCita = 70000
                    costoTratamiento += 70000
                } else if (i > 8) {
                    costoCita = 50000
                    costoTratamiento += 50000
                }
            }

            alert('El costo de la cita es: $'+ costoCita)
            alert('El costo del tratamiento es: $'+ costoTratamiento)

 
        })
 
 
       $("#botoncondicional").click(function () {
 
           var edad = parseInt(prompt('Ingresa la edad '));
           var nombre = prompt('Ingresa el nombre ');
           if (edad>=18){
             alert("su nombre es " + nombre +" y es mayor de edad porque tiene "+ edad);
           }else{
             alert("su nombre es " + nombre +" y es menor de edad porque tiene "+ edad);
           }    
       });
 
 
 
        $("#botonswitch").click(function () {
  
           var estrato = parseInt(prompt('Ingresa el estrato '));
           var nombre = prompt('Ingresa el nombre ');
           switch( estrato )
           {
                case 1:
                   alert(nombre+" por ser estrato "+ estrato + " Sale gratis");
                   break;
               case 2:
                   alert(nombre+" por estrato "+ estrato + " debe pagar 10 mil");
                  break;
              case 3:
                   alert(nombre+" por ser estrato "+ estrato + " debe pagar 30 mil");
                  break;
              case 4:
                  alert(nombre+" por ser estrato "+ estrato + " debe pagar 50 mil");
                  break;
              case 5:
                   alert(nombre+" por ser estrato "+ estrato + " debe pagar 60 mil");
                  break;
              case 6:
                   alert(nombre+" por ser estrato "+ estrato + " debe pagar 70 mil");
                 break;
              
               default:
                 alert(nombre+ " el estrato debe ser entre 1 y 6");
                }
          
         });
 
 
 
 });