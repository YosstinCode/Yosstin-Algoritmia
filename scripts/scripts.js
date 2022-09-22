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

      $("#botonbasica").click(function () {
         
          var n1 = parseInt(prompt('Ingresa el primer numero '));
          var n2 = parseInt(prompt('Ingresa el segundo numero '));

          var suma=n1+n2;
          var resta=n1-n2;
          var multiplicacion=n1*n2;
          var division=n1/n2;

          alert(n1+" + " + n2 +" = "+ suma);
          alert(n1+" - " + n2 +" = "+ resta);
          alert(n1+" x " + n2 +" = "+ multiplicacion);
          alert(n1+" / " + n2 +" = "+ division);

       });

       $('#botonEjercicio1').click(function(){

        let num1 = +(prompt("Usuario ingrese el numero 1: "))
        let num2 = +(prompt("Usuario ingrese el numero 2: "))

        alert(num1 + num2)
       })

       $('#botonEjercicio2').click(function(){

          let base = +(prompt("Ingrese la base: "))
          let altura= +(prompt("Ingrese la altura: "))
          alert(`El area del rectangulo es: ${base * altura}`)

       })

       $('#botonEjercicio3').click(function(){
          let corte1 = +(prompt("Ingresa la nota del 1 corte: "))
          let corte2 = +(prompt("Ingresa la nota del 2 corte: "))
          let corte3 = +(prompt("Ingresa la nota del 3 corte: "))
          
          alert(`La nota definitiva del estudiante: ${(corte1 * 0.3+corte2 * 0.3+corte3 * 0.40)}`)

       })

       $('#botonEjercicio4').click(function(){
          let radio = +prompt("Ingresa el radio: ")
          const PI = 3.1416

          alert("El area es: "+ PI*(radio**2))
       })

       $('#botonEjercicio5').click(function(){

        let A = +prompt("Ingresa el lado A: ")
        let B = +prompt("Ingresa el lado B: ")
        let C = +prompt("Ingresa el lado C: ")
      
        //area de rectangulo
        
        let areaRectangulo = B*C
        // console.log(`El area del rectangulo es: ${areaRectangulo}`)
        let areaTriangulo = (B*(A-C))/2 
        // console.log(`El area del triangulo es: ${areaTriangulo}`)
        alert("El area total es: " + (areaRectangulo + areaTriangulo))
        

       })
       $('#botonEjercicio6').click(function(){
        let R = prompt("Ingresa el valor del radio: ")
        let H = prompt("Ingresa el valor de la hipotenusa: ")

        if(R<H){
            let radio_2 = R*R
            let hipotenusa_2 = H*H
            
            let adyacente = Math.sqrt(hipotenusa_2 - radio_2)
            
            areaTriangulo = Math.pow((adyacente*R)/2, 2)
            areaSemicirculo = (Math.PI * radio_2)/2
            
            alert("El area total es: "+ areaTriangulo + areaSemicirculo)
        }else{
            alert("El radio no puede ser mayor que la hipotenusa")
        }
       })
       $('#botonEjercicio7').click(function(){

        let litros = prompt("Ingresa la cantidad de los litros de leche: ")
        let precio = prompt("Ingresa el valor del precio de la leche: ")
        let pedido = prompt("Ingresa el valor del pedido en galones: ")
        let pedidoLitros = pedido * 3.78541
        let total = pedidoLitros * precio

        alert("El valor de los litros de leche producidos en el dia de hoy es: "+ litros * precio)
        alert("El valor del pedido en litros es: "+ pedidoLitros)
        alert("El valor total del pedido es: "+ total)



       })
       $('#botonEjercicio8').click(function(){
        let x1 = +prompt("ingrese punto x1: ")
        let x2 = +prompt("ingrese punto x2: ")
        let y1 = +prompt("ingrese punto y1: ")
        let y2 = +prompt("ingrese punto y2: ")
        let distancia = 0

        if(x1 !== x2 && y1 !== y2 ){
            distancia=Math.sqrt(x2-1)*2 + (y2-y1)*2
        }else if(x1 === x2){
            distancia = y1-y2
        }else{
            distancia = x1 - x2
        }
        alert("La distancia entre los dos punto es: "+distancia)



       })
       $('#botonEjercicio9').click(function(){
        let medidas = +prompt("ingrese las medidas en metros que requiere: ")
        let b = medidas * 39.3701

        alert("Los metros son: "+ medidas+ "En pulgadas son: "+ b)
       })

       $('#botonEjercicio10').click(function(){

        let Altura= +prompt("Ingrese la altura de la alberca: ")
        let Largo= +prompt("Ingrese el largo de la alberca: ")
        let Ancho= +prompt("Ingrese el ancho de la alberca: ")
        let v= Altura*Largo*Ancho
        let metroCubico= prompt("Ingrese el costo de metroCubico")
        alert("El volumen en metros cubicos es: "+ v)
        alert("El costo del metroCubico es: "+ metroCubico * v)


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


  











