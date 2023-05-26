export class Persona {
    id?:number;
    nombre:String;
    apellido: String;
    email:String;
    telefono:String;
    direccion:String;
    imagen:String;
    descripcion:String;
    presentacion:String;
    sobreNosotros:String;

    constructor(nombre:String, apellido:String, email:String, telefono: String, direccion:String, imagen:String, descripcion:String, presentacion:String, sobreNosotros:String){
        this.nombre = nombre;
        this.apellido=apellido;
        this.email=email;
        this.telefono=telefono;
        this.direccion=direccion;
        this.imagen=imagen;
        this.descripcion=descripcion;
        this.presentacion = presentacion;
        this.sobreNosotros = sobreNosotros;

    }

}