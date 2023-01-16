class Persona_A {
    nombre = null;
    Apellido_P = null;
    Apellido_M = null;
    F_Nacimient = null;
    Curp = null;
    
   constructor(name, surname, lastname, date, dni){
        this.nombre = name;
        this.Apellido_P = surname;
        this.Apellido_M = lastname;
        this.F_Nacimiento = date;
        this.Curp = dni;
}
    saludar = function(amigo){
        return "Hola, soy " + this.nombre + this.Apellido_P + this.Apellido_M + "naci el " + this.F_Nacimiento +"y mi curp es: " + this.Curp
    }
    
}
    var Persona1 = new Persona_A("Aram", "Rojas", "Silva",14/02/2004,"ROSA040214HMCJLRA2");