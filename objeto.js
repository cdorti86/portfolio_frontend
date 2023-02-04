var pofolio = {
    Nombre: "",
    Apellido: "",
    Acercade: "",
    Titulos: ["", ""]
};
function GetNombre(nombre) {
    var nombre1 = document.getElementById("Nombre");
    nombre1.textContent = nombre;
}
function GetApellido(apellido) {
    var a = document.getElementById("Apellido");
    a.textContent = apellido;
    return pofolio.Apellido = apellido;
}
function GetAcercade(acercade) {
    var acerca = document.getElementById("Acercade");
    acerca.textContent = acercade;
    return pofolio.Acercade = acercade;
}
function GetTitulos(titulo1, titulo2) {
    var a = document.getElementById("Titulos");
    a.textContent = titulo1, titulo2;
    return pofolio.Titulos[0] = titulo1, pofolio.Titulos[1] = titulo2;
}
function showFile1(input) {
    var file = input.files[0];
    //alert('File name: ${file.name}') ; // e.g my.png
    //alert('Last modified: ${file.lastModified}'); // e.g 1552830408824
    var reader = new FileReader();
    reader.readAsText(file);
    reader.onload = function (progressEvent) {
        var _a;
        var s = (_a = reader.result) === null || _a === void 0 ? void 0 : _a.toString();
        console.log(s);
        var arr = s.split('\n'); // esto significa hasta la tecla enter
        GetAcercade(arr[0]);
        GetNombre(arr[1]);
        GetApellido(arr[2]);
        GetTitulos(arr[3], arr[4]);
    };
}
