 # Hola, bienvenidos a mi Challenge para Yaydoo
 
Hola! Mi nombre es Manuel Bruña y este es mi Challenge para Yaydoo.
Ante todo, gracias por el tiempo que dedican en esta revisión de prueba y por la oportunidad que me han dado.
Fue muy agradable el “first screen” que tuve de su empresa y realmente quedé interesado no solo por la posibilidad de programar sino también por el ambiente cálido que supo transmitir la entrevistadora.
 
## Prueba de Lógica
Elegí usar React para esta lógica ya que me pareció agradable que se pueda apreciar también los conocimientos respecto a este lenguaje y a los usos y costumbres asumidos.
En el código agregue pruebas unitarias con Jest, donde puede corroborar el comportamiento de cada componente, webhook o helper que se ha generado para este proyecto.
 
Para instalar la prueba logica, revise el README.md que se encuentra en la carpeta `yaydoo_examen_algoritmos_manuelbrunia`
 
## Patrones de Diseño
 
### Problema 1
Dada la situación en que necesitamos generar dos estrategias de negocios para realizar el envío de Emails y que no hablamos de tipos distintos y formatos distintos, excluimos el uso de los patrones Factory Method y Adapter.
Factory Method no lo necesitamos porque basados en el requerimiento, siempre hablamos de un mismo tipo de objeto, solo necesita cambiar el cliente de envio de forma dinámica según la lógica del ususario.
Adapter es un paso posible en caso de precisar que la composición de estos mails tengan que adaptarse para poder entregarlos al servicio de envío. Podría ser útil en caso de necesitar enviar emails con formatos distintos, como cuando se recibe un webhook en formato XML para procesar un email ADF. De igual manera estaríamos hablando de un paso previo al uso del servicio que enviaría el email.
En este caso planteamos múltiples estrategias para el uso del envío en cuestión. Por eso pienso que Strategy es el patrón necesario para negociar, incluso sin condicionales IF, usando SWITCHES o ENDPOINTS destinados a cada tipo de usuario, con distintas estrategias.
Quisiera agregar que mi respuesta es 100% aplicada a resolver el tema actual de las estrategias de negocio, pero entiendo que para crear una clase Mail podríamos usar un Factory Method ante la posibilidad futura de ampliar los tipos de productos y el Abstract (como ya mencione) para adaptar la información recibida dependiendo de los tipo de servicios que se utilicen para el envío o recepción de los mismos.
 
### Problema 2
Para comenzar, ambos son del mismo grupo: Patrones creacionales.
Como menciono en el punto anterior, Factory Method es el que se encarga de generar con una misma clase, distintos tipos de productos en su creación para mutar el tipo de objeto destinado a una misma clase y una misma funcionalidad. Al realizar esta extensión, el sistema logra procesar a los productos de su clase creadora como un tipo A o un tipo B (etc..), pero sigue manteniendo las mismas reglas de proceso, mismas funcionalidades. Los productos que se crean son siempre de la misma familia y  comparten por igual sus funciones, pero en caso de comenzar a ampliar nuestro código con funciones que podrían repetirse entre familias, estamos hablando de Abstract factory. Acá estamos hablando de algo más elaborado, donde tendremos múltiples clases de creación para tipos de productos donde podrán pertenecer a distintas familias pero compartir funcionalidades entre sí.
 
Para el caso de Factory Method, podemos crear dos tipos de muebles: Un sillón y una silla. Ambos comparten las mismas características, pero estas se diferencian por el tipo nada más. Cada producto se entiende como distinto pero poseen las mismas funcionalidades.
Claramente, el tipo de comercio invita a la creación de nuevos productos como podrían ser mesas y estas tener un estilo Moderno y otro Luis XVI. En este caso empezamos a compartir familiar por los estilos, grupos de muebles (sillas, mesas y sillones) pero empiezan a diferenciar, por consecuencia, sus características. En este caso, estamos ante una situación de Abstract Factory, donde las familias son varias y comparten distintos creadores. Pueden usar variantes de sus estilos en cada familia y sus grupos no se cruzaran para, de este modo, tener una coherencia entre sí.