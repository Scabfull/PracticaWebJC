var coche1, coche2, coche3, coche4, coche5, coche6, coche7, coche8, coche9, coche10;
function cargarContenidoDemostrativo(){
    
    
    coche1= new Coche();
    conductor1= new Conductor();
    conductor1.constructorConductor("Carlos", "626254788", "28937");
    coche1.constructorCoche("4578 DGT","Opel","Astra",conductor1); 
    
    coche2= new Coche();
    conductor2= new Conductor();
    conductor2.constructorConductor("Angel", "625478965", "25874");
    coche2.constructorCoche("4848 ABC","Ford","Focus",conductor2); 

    coche3= new Coche();
    conductor3= new Conductor();
    conductor3.constructorConductor("Sergio", "625478963", "41547"); coche3= new Coche();
    coche3.constructorCoche("6358 TXZ","Opel","Corsa",conductor3); 
    
    coche4= new Coche();
    conductor4= new Conductor();
    conductor4.constructorConductor("Maria", "655478321", "25478");
    coche4.constructorCoche("4896 FTG","Mercedes","Clase E Berlina",conductor4); 
    
    coche5= new Coche();
    conductor5= new Conductor();
    conductor5.constructorConductor("Gema", "600254789", "21457");
    coche5.constructorCoche("2589 KLT","Audi","A5",conductor5); 
    
    garajeVehiculos.push(coche1,coche2,coche3,coche4,coche5);
    document.getElementById("cochesTotales").innerHTML = garajeVehiculos.length;
}
