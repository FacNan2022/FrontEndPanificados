export class Persona {
    id?:number;
    nombre:String;
    presentacion:String;
    sobreNosotros:String;

    constructor(nombre:String, presentacion:String, sobreNosotros:String){
        this.nombre = nombre;
        this.presentacion = presentacion;
        this.sobreNosotros = sobreNosotros;

    }

}
