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


  











