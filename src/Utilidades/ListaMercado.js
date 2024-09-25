import consulta1 from "../assets/assets4/consulta1.jpg"
import consulta2 from "../assets/assets4/consulta2.jpg"
import consulta3 from "../assets/assets4/consulta3.jpg"
import consulta4 from "../assets/assets4/consulta4.jpg"
import consulta5 from "../assets/assets4/consulta5.jpg"
import consulta6 from "../assets/assets4/consulta6.jpg"
import consulta7 from "../assets/assets4/consulta7.jpg"
import consulta8 from "../assets/assets4/consulta8.jpg"
import consulta9 from "../assets/assets4/consulta9.jpg"
import consulta10 from "../assets/assets4/consulta10.jpg"


export const ListaMercado = [
  {
    titulo: "Consulta 1",
    descripcion1: `Un cliente pregunta si el invenatiro de la tienda posee registrado a la "Mantequilla Clarificada Ghee", pues no puede encontrar ninguna
    en los estantes y teme que no se venda en este local, para responder estas dudas uno de los cajeros realiza una busqueda con la siguiente consulta:`,
    consulta: `db.mercado.find({ nombreP: { $eq: "Mantequilla Clarificada Ghee" } })`,
    imagen: consulta1,
    descripcion2: `El cajero entonces le confirma que la tienda si posee dicha mantequilla y que en un momento encargara que la pongan en los estantes`,
  },
  {
    titulo: "Consulta 2",
    descripcion1: `La tienda desea implementar una pequeña pantalla donde los clientes podran buscar y observas productos en venta registrados en el local
    , una de las funciones claves se enfoca en realizar filtraciones por precios y para ello el gerente quiere observar como se realizaria con productos cuyo
    precio sea mayor a 50000, para ello se digita la siguiente consulta:`,
    consulta: `db.collection.find({ precio: { $gt: 50000 } })`,
    imagen: consulta2,
    descripcion2: `Se obtiene que dentro de la tienda hay 2 productos que cestan mas de 50 mil pesos, siendo una bebida alcoholica y creatina`,
  },
  {
    titulo: "Consulta 3",
    descripcion1: `El gerente de la tienda tiene una conversacion con el encargado de logistica y le solicita que por favor obtenga un reporte de todos
    aquellos productos cuya disponibilidad en el inventario sea mayor o igual a 50, pues aquellos prodcutos no necesitaran un restock para las 2 proximas semanas
    el encargado de logistica habla con otro encargado del sistema y entonces para generar el reporte se digita la siguiente consulta:`,
    consulta: `db.mercado.find({ dispInv: { $gte: 10005 } })`,
    imagen: consulta3,
    descripcion2: `Se dice entonces que existen unos 5 producos los cuales no necesitarian de restock para la sigueinte semana, de todas formas el encargado de logistica
    sugiere al gerente tener en cuenta las unidades vendidas solo por si acaso`,
  },
  {
    titulo: "Consulta 4",
    descripcion1: `Al estar acomodando algunos productos en los estantes un empleado se percata que la informacion de varios producto no se a impreso correctamente
    en la etiqueta y como unica pista solo sabe que el producto que les siguie tiene el numero de modelo "10005". Se le dice al encargadoq ue por favor encuentre los
    productos anteriores a este numero y se diita la siguiente consulta:`,
    consulta: `db.mercado.find({ dispInv: { $gte: 10005 } })`,
    imagen: consulta4,
    descripcion2: `Gracias a la consulta se descubre que los productos de informacion incompleta eran nada mas que la seccion inicial de dulces que dan inicio
    a esta seccion de la base de datos.`,
  },
  {
    titulo: "Consulta 5",
    descripcion1: `La tienda no es necesaraimente conocida por vender productos con pesos en kilos muy grandes por lo que la mayoria de sus productos estaran por debajo
    de un kilo. Siendo este el caso se dese cargar un camion con mercancia y para ello se solicita que "todos lo productos con un peso inferior o igual a 0.2 Kg sean cargados
    de ultimos para que no se dañen", para averiguar que productos deberan ser los  ultimos en cargarse, se realiza la siguiente consulta:`,
    consulta: `db.mercado.find({ pesoK: { $lte: 0.2 } })`,
    imagen: consulta5,
    descripcion2: `Se encuentran que hay unos 9 productos los cuales deberan ser cargados de ultmios en el camion, siendo la gran mayoria enlatados y de higiene personal".`,
  },
  {
    titulo: "Consulta 6",
    descripcion1: `Como era de esperarse en la tienda hay productos que se venden mucho mas que otros, el gerente del local le pide al encargado del sistema de la base
    de datos obtener aquellos productos que hayan vendido una cantidad diferente de 20 para realizar un analisis de compra y venta, se digita entonces la sigueinte consulta:`,
    consulta: `db.mercado.find({ unidadesV: { $ne: 50 } })`,
    imagen: consulta6,
    descripcion2: `Los resultados como al son tantos que realizar un analisis empleando la consulta con la condicion anterior no es del todo apta, el encargado le sugiere al 
    gerente que seria mejor obtar por rangos intermedios de numeros d eunidades vendidad, pero para corroborar que la anterior consulta si funciono se muestra
    una seccion donde el producto con el numero "10014" se ignora ya que posiblemente habia vendido 50 unidades`,
  },
  {
    titulo: "Consulta 7",
    descripcion1: `Siguiendo a la consulta anterior el gerente consideraria el uso de rangos para unidades vendidad, pero antes de retirarse solicitaria ver a los 
    productos con las mejores valoraciones, osea aquellos que tengan "4.8, 4.9 y 5", para encontrar estos productos se digita la siguiente consulta:`,
    consulta: `db.mercado.find({ valoracion: { $in: [4.8, 4.9, 5] } })`,
    imagen: consulta7,
    descripcion2: `Se obtiene entonces unos 10 productos cuyas valoraciones son excelentes al entrar en este rango`,
  },
  {
    titulo: "Consulta 8",
    descripcion1: `Se acaba de contratar un nuevo empleado para ayudar a manjear la base de datos del local, el nuevo empoleao entonces solicita un
    ejemplo de como se usaria "nin" para filtrar informacion, entonces un empleado mas viejo en el cargo digita la siguinte consulta como ejemplo`,
    consulta: `db.mercado.find({ numeroMod: { $nin: [10001, 10003] } })`,
    imagen: consulta8,
    descripcion2: `En este caso hipotetico se ignora los productos cuyo numero de modelo sea 10001 y 10003.`,
  },
  {
    titulo: "Consulta 9",
    descripcion1: `El encargado de logistica esta realizando una revision sobre el inventario de productos del local y a decidido darle prioridad
    a todos aquellos productos con un precio entre 4000 a 10000 pesos, pero, cuyas unidades disponibles son menores a 10, lo que significa que necesitan un restock
    tan pronto como sea popsible. Se realiza entonces la sigueinte consulta:`,
    consulta: `db.mercado.find({ precio: { $gte: 4000, $lte: 10000 }, dispInv: { $lt: 10 } })`,
    imagen: consulta9,
    descripcion2: `Se obtiene que hay 2 productos los cuales estan en ese rango de precios y que necesitarian un restock tan pronto como sea posible.`,
  },
  {
    titulo: "Consulta 10",
    descripcion1: `Prosiguiendo con la consulta anterior se decide realizar una compra de mas unidades de jabon Protex y tambien de subir su precio por 500 pesos
    mas, el ecnargado de la base de datos debe actualizar y confirmar los valores del produco mediante la siguiente consulta:`,
    consulta: `db.mercado.updateOne({ numeroMod: 10041 }, { $set: { precio: 9000, inventario: 30 } }) // db.mercado.updateOne({ numeroMod: 10041 }, { $set: { precio: 9000, inventario: 30 } })`,
    imagen: consulta10,
    descripcion2: `Como tal el compilador infromara sobre la actualizacion de un producto y al realizar una consulta mas especifica, este se encontrara modificado.`,
  }
];
