var coche1, coche2, coche3, coche4, coche5, coche6, coche7, coche8, coche9, coche10;
function cargarContenidoDemostrativo(){
    
    
    coche1= new Coche();
    coche1.constructorCoche("4578 DGT","Opel","Astra",5,200,2,2000); 
    
    coche2= new Coche();
    coche2.constructorCoche("4848 ABC","Ford","Focus",5,300,3,3000); 
    
    coche3= new Coche();
    coche3.constructorCoche("6358 TXZ","Opel","Corsa",4,150,4,2560); 
    
    coche4= new Coche();
    coche4.constructorCoche("4896 FTG","Mercedes","Clase E Berlina",5,350,5,4500); 
    
    coche5= new Coche();
    coche5.constructorCoche("2589 KLT","Audi","A5",6,200,3,2650); 
    
    coche6= new Coche();
    coche6.constructorCoche("2871 TPO","Mercedes","Clase C Estate",4,150,5,4780); 
    
    coche7= new Coche();
    coche7.constructorCoche("2402 HTC","Renault","Clio",3,200,3,3500); 
    
    coche8= new Coche();
    coche8.constructorCoche("0695 VJT","Audi","A4 Avant",5,160,4,2630); 
    
    coche9= new Coche();
    coche9.constructorCoche("6589 TXZ","Opel","Adam S",3,200,2,1500); 
    
    coche10= new Coche();
    coche10.constructorCoche("2863 KFC","Range Rover","M",7,145,4,1980); 
    garajeVehiculos.push(coche1,coche2,coche3,coche4,coche5,coche6,coche7,coche8,coche9,coche10);
    document.getElementById("cochesTotales").innerHTML = garajeVehiculos.length;
    alert("El contenido demostrativo ya ha sido cargado");
}
