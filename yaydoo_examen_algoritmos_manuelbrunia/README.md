## Prueba de Logica
Elegí usar React para esta logica ya que me parecio agradable que se pueda apreciar tambien los conocimientos respecto a este lenguaje y a los usos y costumbres asumidos.
En el codigo agregue pruebas unitarias con Jest, donde puede corroborarse el comportamiento de cada componente, webhook o helper que se ha generado para este proyecto.

Para instalar la prueba logica, revise el README.md que se encuentra en la carpeta `yaydoo_examen_algoritmos_manuelbrunia`

### Como iniciar la revisión
Para la prueba de logica se debe primero debemos ingresar ingresar los siguientes comando en consola para poder instalar los node_modules:

### `npm i`

Ahora debemos correr el comando start para poder ver el proyecto.

### `npm start`

Abrir [http://localhost:3000](http://localhost:3000) para verlo en nuestro navegador web.

En la pantalla inicial se pueden ver las explicaciones y con la barra superior (NavBar), se puede navegar entre secciones.

### Pruebas unitarias
Realice pruebas unitarias con Jest, para que se puedan corroborar el correcto comportamiento de cada component, para revisar estas pruebas debemos correr
el siguiente comando en consola.

### `npm test`

### Build y uso en producción
En caso de querer hacer un build para poder revisar el challenge como si fueramos a producción, debemos correr el siguiente comando:

### `npm run build`

Esto generará una carpeta llamada `build` donde estarán alojados los archivos finales.

En caso de querer revisar esta carpeta, para no tener que hacer una configuración de vhost, recomiendo instalar un modulo llamado `serve` con npm.

### `npm install -g serve`
### `serve -s build`

Abrir [http://localhost:3000](http://localhost:3000) para verlo en nuestro navegador web.


## Gracias por su tiempo :heart:!