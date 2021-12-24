 # CRUD Opciónal - Backend
 El backend esta generado en Node+NestJs

 Para poder probarlo se deben ingresar en la consola los siguientes comandos:

### `npm i`

Ahora debemos correr el comando start para poder ver el proyecto.

### `npm start`

La ruta del endpoint esta en [http://localhost:3005](http://localhost:3005), se cambio el defautl para evitar colisión con el fontend.

## Plantando la semilla
Para poder liberar los seed que generan 100 usuarios en nuestra base de datos, se debe tener instalado MongoDB previamente, se usaron los parametros basicos default de mongo.

En la consola correct el siguiente comando:

### `npm run seed`

Con esto se crearán dos tablas: Users y Userpersonalinformations con 100 items.
