var coche1, coche2, coche3, coche4;
function cargarContenidoDemostrativo(){
    document.getElementById('Matricula').style.display = "inline";
    document.getElementById('SMatricula').style.display = "inline";
    conductor1= new Conductor();
    conductor2= new Conductor();
    conductor1.constructorConductor("Carlos", "626254788", "28937");
    conductor2.constructorConductor("Angel", "625478965", "25874");
    arrayConductores.push(conductor1,conductor2);

    coche1= new Coche();
    coche1.constructorCoche("4578 DGT","Opel","Astra",arrayConductores); 
    arrayConductores = [];
    conductor3= new Conductor();
    conductor4= new Conductor();
    conductor3.constructorConductor("Javier", "626254788", "28937");
    conductor4.constructorConductor("Gema", "625478965", "25874");
    arrayConductores.push(conductor3,conductor4);
    coche2= new Coche();
    coche2.constructorCoche("4848 ABC","Ford","Focus",arrayConductores); 
    arrayConductores = [];

    coche3= new Coche();
    coche3.constructorCoche("3562 FTV","Opel","Corsa",arrayConductores); 
    conductor5= new Conductor();
    conductor5.constructorConductor("Alfonso", "625478965", "25478");
    arrayConductores.push(conductor5);
    arrayConductores = [];

    coche4= new Coche();
    coche4.constructorCoche("3247 ADC","Audi","A8",arrayConductores);
    conductor6= new Conductor();
    conductor6.constructorConductor("Roberto", "625488788", "24789");
    conductor7= new Conductor();
    conductor7.constructorConductor("Lidia", "654789658", "21478");
    conductor8= new Conductor();
    conductor8.constructorConductor("Andrea", "624789858", "23589");
    arrayConductores.push(conductor6,conductor7,conductor8);
    
    garajeVehiculos.push(coche1,coche2,coche3,coche4);
    document.getElementById("cochesTotales").innerHTML = garajeVehiculos.length;
    arrayConductores = [];
}
