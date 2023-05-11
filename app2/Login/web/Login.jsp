<%-- 
    Document   : Login
    Created on : 14 abr. 2023, 16:12:01
    Author     : cdcorti
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>Login</title>
    </head>
    <body>
<h1>Alta Usuario</h1>
<form action= "SvUsuario" method= "POST">
<p><label>email:</label> <input type="text" name="email"></p>
<p><label>contraseña:</label> <input type="text" name="password"></p>
<button type="submit"><Crear></button>
</form>
<h1>Ingreso</h1>
<form action= "" method= "">
<p><label>email:</label> <input type="text" name="email"></p>
<p><label>contraseña:</label> <input type="text" name="password"></p>
<button type="submit"><Ingresar></button>
</form>
    </body>
</html>
