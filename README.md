/*Requerimiento*/

Escribe un programa que ayude a un cliente encontrar el hotel más barato. Se debe permitir
ingresar una o más fechas para un cliente regular o con recompensas. La salida debe regresar
el hotel más barato disponible entre el tipo de cliente y las fechas. En caso de empate, se debe
devolver el hotel con la calificación más alta. La respuesta debe destacar en la lista de hoteles.

/*Proceso*/

Se estable las variables a utilizar, mediante los métodos de selección de atributos para poder
captar los valores ingresados y seleccionados por el usuario. Seguido de un modelo de herencia o clase denominado "Hotel", donde se encuentran las propiedades; nombre del hotel, calificación y tarifa. 
Las cuales nos ayudaran en la creación del array llamado "hoteles" que contiene tres objetos, 
cada uno representando un hotel diferente con su nombre, calificación y estructura de precios. 
La estructura de precios se encuentra clasificada de acuerdo los días correspondientes de la semana y 
al tipo de cliente; como regular y recompensa. 
El array hoteles se encuentra dentro del evento escuchar, mediante el click que ejecuta, se almacena 
la información. 
Junto al método forEach recorremos los datos almacenados del array hoteles, ejecutamos la función "calcularPrecioTotal", donde a cada objeto de hotel se le calculará el precio total de su estadía en ese hotel, teniendo en cuenta las fechas y el tipo de cliente. Por ello se necesitó otro forEach para recorrer las fechas ingresadas por el usuario. Previamente se capta las fechas ingresadas y a través de la función split() se divide todas las fechas, estableciendo la coma como su separador y con la función map() se iteró sobre cada fecha del arreglo obtenido, con trim() se eliminó los espacios. Seguido se descompone la fecha en día, mes y año. Para lo cual se necesitó parseInt() convirtiendo un valor en un número entero, con map() se utilizó para iterar sobre cada fecha y aplicar el proceso de extracción y conversión, con dateParts[] para extraer las partes de una cadena o de cada fecha en este caso. Mediante la siguiente estructura se estableció los dígitos permitidos a ingresar por cada parte que compone una fecha (día/mes/año) = "(\d{2})(\w{3})(\d{4})".
Con cada parte ya extraída se crea un objeto llamado "Date" que representa una fecha específica, permitiendo utilizar el método getDay(), devolviendo el día de fecha en específico en función de la fecha local, determinando así con un operador si es fin de semana. Se aloja dicho resultado en la variable "isWeekend". Ahora con ayuda de este mismo operador se establece el siguiente condicionamiento, si en la variable tarifa es "true" se aplica la tarifa para fin de semana y si es "false" se aplica la tarifa de día de semana. 
Finalizando con estas tres condiciones presentes; el día correspondiente, la tarifa y el tipo de cliente al que aplica el usuario, se utiliza el mismo operador para reconocer si es regular, escoger la tarifa de regular o de lo contrario tarifa con recompensa, dicho resultado se aloja en la variable "total".
El total que se calcula por fecha se sumará creando un acumulado y se alojará en la variable "precioTotal" cumpliendo su retorno.
Logrando obtener el total acumulado, se crea un nuevo arreglo llamada "resultado", cada elemento de este nuevo arreglo es un objeto que contiene una referencia al array hoteles creado anteriormente, con map() se itera sobre cada elemento hotel del arreglo hoteles y aplica la función de flecha hotel a cada uno.
La función de flecha recibe como parámetro el elemento actual de hotel y devuelve un nuevo objeto.
El precio total calculado para ese hotel, considerando las fechas y el tipo de cliente. Una vez que se han calculado los precios totales para todos los hoteles, los resultados se ordenan utilizando la función sort(), en el cual se busca ordenar por el precio total de menor a mayor. En caso de que dos o más hoteles tengan el mismo precio total, se utiliza la calificación del hotel como segundo criterio de ordenamiento, de mayor a menor.

Finalmente cumpliendo con lo requerido se sustrae solo el nombre del hotel del resultado. 


