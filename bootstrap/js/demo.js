var coche1, coche2, coche3, coche4, coche5, coche6, coche7, coche8, coche9, coche10, fecha1;
function cargarContenidoDemostrativo(){
    
    
    coche1= new Coche();
    fecha1=new Date("11/9/2007");
    coche1.constructorCoche("4578DGT","Opel","Astra",fecha1,5,200,2,2000); 
    
    coche2= new Coche();
    fecha2=new Date("10/7/2014");
    coche2.constructorCoche("4848ABC","Ford","Focus",fecha2,5,300,3,3000); 
    
    coche3= new Coche();
    fecha3=new Date("01/9/2012");
    coche3.constructorCoche("6358TXZ","Opel","Corsa",fecha3,4,150,4,2560); 
    
    coche4= new Coche();
    fecha4=new Date("02/25/2015");
    coche4.constructorCoche("4896FTG","Mercedes","Clase E Berlina",fecha4,5,350,5,4500); 
    
    coche5= new Coche();
    fecha5=new Date("05/06/2011");
    coche5.constructorCoche("2589KLT","Audi","A5",fecha5,6,200,3,2650); 
    
    coche6= new Coche();
    fecha6=new Date("12/16/2015");
    coche6.constructorCoche("2871TPO","Mercedes","Clase C Estate",fecha6,4,150,5,4780); 
    
    coche7= new Coche();
    fecha7=new Date("9/11/2014");
    coche7.constructorCoche("2402HTC","Renault","Clio",fecha7,3,200,3,3500); 
    
    coche8= new Coche();
    fecha8=new Date("08/14/2015");
    coche8.constructorCoche("0695VJT","Audi","A4 Avant",fecha8,5,160,4,2630); 
    
    coche9= new Coche();
    fecha9=new Date("10/20/2013");
    coche9.constructorCoche("6589TXZ","Opel","Adam S",fecha9,3,200,2,1500); 
    
    coche10= new Coche();
    fecha10=new Date("06/07/2014");
    coche10.constructorCoche("2863KFC","Range Rover","M",fecha10,7,145,4,1980); 
    garajeVehiculos.push(coche1,coche2,coche3,coche4,coche5,coche6,coche7,coche8,coche9,coche10);
    document.getElementById("cochesTotales").innerHTML = garajeVehiculos.length;
    alert("El contenido demostrativo ya ha sido cargado");
}
