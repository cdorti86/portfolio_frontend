interface Persona{
    Nombre: string;
    Apellido: string;
    Acercade: string;
    Titulos: [string,string];
}

let pofolio:Persona = {
    Nombre: "",
    Apellido: "",
    Acercade: "",
    Titulos: ["",""],
}

function GetNombre(nombre:string):void {
    const nombre1 = document.getElementById("Nombre");
    nombre1.textContent=nombre;
}

function GetApellido(apellido:string):string {
    const a = document.getElementById("Apellido");
    a.textContent=apellido;
    return pofolio.Apellido=apellido;
}

function GetAcercade(acercade:string):string {
    const acerca = document.getElementById("Acercade");
    acerca.textContent=acercade;
}

function GetTitulos(titulo1:string, titulo2:string):string{
    const a = document.getElementById("Titulos");
    a.textContent=titulo1, titulo2;
    return pofolio.Titulos[0]=titulo1, pofolio.Titulos[1]=titulo2;
}

function showFile1(input): void {
    let file = input.files[0];
    //alert('File name: ${file.name}') ; // e.g my.png
    //alert('Last modified: ${file.lastModified}'); // e.g 1552830408824

    let reader = new FileReader();
    reader.readAsText(file);
    reader.onload = function(progressEvent){
        var s=reader.result?.toString();
        console.log(s);
        var arr = s.split('\n'); // esto significa hasta la tecla enter
        GetAcercade(arr[0]);
        GetNombre(arr[1]);
        GetApellido(arr[2]);
        GetTitulos(arr[3], arr[4]);
        };

}