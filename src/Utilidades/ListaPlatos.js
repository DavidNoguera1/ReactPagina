import consulta1 from "../assets/assets7/consulta1.jpg"
import consulta2 from "../assets/assets7/consulta2.jpg"
import consulta3 from "../assets/assets7/consulta3.jpg"
import consulta4 from "../assets/assets7/consulta4.jpg"
import consulta5 from "../assets/assets7/consulta5.jpg"
import consulta6 from "../assets/assets7/consulta6.jpg"
import consulta7 from "../assets/assets7/consulta7.jpg"
import consulta8 from "../assets/assets7/consulta8.jpg"
import consulta9 from "../assets/assets7/consulta9.jpg"
import consulta10 from "../assets/assets7/consulta10.jpg"


export const ListaPlatos = [
  {
    titulo: "Consulta 1",
    descripcion1: `Un cliente ingresa y tras ver que se sirven cuartos de pollos pregunta si venden el pollo asado completo, para resolver esta inquietud
     se realiza la siguiente consulta:`,
    consulta: `db.menu.find({ nombreP: { $eq: "Pollo asado completo" } })`,
    imagen: consulta1,
    descripcion2: `Efectivamente se confirma que dicho plato existe en el menu del restaurante.`,
  },
  {
    titulo: "Consulta 2",
    descripcion1: `El restaurante no acostumbra a servir platos muy costosos, entonces cuando un cliente solicito ver lo mas caro se encargo
     hacer una consulta para averiguar platos de mas de 20 mil pesos, la consulta empleada es la siguiente:`,
    consulta: `db.menu.find({ precio: { $gt: 20000 } })`,
    imagen: consulta2,
    descripcion2: `La consulta devuelve una lista de los que serian los 2 productos mas "caros" en le menu.`,
  },
  {
    titulo: "Consulta 3",
    descripcion1: `Una familia que estaba apunto de almorzar dice que tiene tiempo de sobra, entonces pide que la comida que se les ofrezca
     tarde mas de 20 minutos en preparse, la consulta a realizarce es la siguiente:`,
    consulta: `db.menu.find({ tiempoPM: { $gte: 20 } )`,
    imagen: consulta3,
    descripcion2: `Se dice entonces que hay 10 platos cuyo tiempo de preparacion mes mayor a minutos`,
  },
  {
    titulo: "Consulta 4",
    descripcion1: `Para realizar un restock en el almacen del restaurante, el gerente solicita conocer los platos cuya disponibilidad
    sea menor a 10 para mandar a compar sus ingrediente de inmediato, la consulta a realizarce es la siguiente:`,
    consulta: `db.menu.find({ disponibilidad: { $lt: 10 } })`,
    imagen: consulta4,
    descripcion2: `Como tal se obtiene que hay 5 productos los cuales necesitarian dicho restock de inmediato.`,
  },
  {
    titulo: "Consulta 5",
    descripcion1: `Siguiendo con la solicitud anterior del gerente, ahora necesita saber si hay productos cuya populariad se menor o igual 50
    para evaluar si deben quedarse en el menu o no, la consulta a realizarce es la siguiente:`,
    consulta: `db.menu.find({ popularidad: { $lte: 50 } })`,
    imagen: consulta5,
    descripcion2: `Se encuentran 5 productos cuya popularidad es menor o igual a 50, siendo la mayoria entradas.`,
  },
  {
    titulo: "Consulta 6",
    descripcion1: `Una cliente entra al restaurante pero la primera cosa que pide es platos cuyo nivel de picante NO sea "ninguno"
     osea que quiere algo picante, la consulta a realizarce es la siguiente:`,
    consulta: `db.hoteles.find({ ubicacion: { $regex: "Medellín", $options: "i" } })`,
    imagen: consulta6,
    descripcion2: `Se encuentran 6 productos con niveles de picosidad mayores a ninguno, ya que el restaurante no acostumbra a manejar picante.`,
  },
  {
    titulo: "Consulta 7",
    descripcion1: `Un cliente llega al restaurante y dada su dieta solo puede pedir platos con calorias de 130, 150 y 200, para ver que platos
    puede consumir se realiza la siguiente consulta:`,
    consulta: `db.menu.find({ calorias: { $in: [130, 150, 200] } })`,
    imagen: consulta7,
    descripcion2: `Los resultados muestran hoteles como el "Movich Hotel Las Lomas" con ingresos de 500,000 USD mensuales y el "Hotel Almirante Cartagena" con ingresos de 700,000 USD.`,
  },
  {
    titulo: "Consulta 8",
    descripcion1: `Un cliente peculiar entra al restaurante y dice que NO esta interesado en comprar "Bebidas Frías", "Bebidas Calientes", "Sopas", "Plato Principal", "Entrada Caliente"
    entonces pide que se le muestre lo que sobra, la consulta es la siguiente:`,
    consulta: `db.menu.find({ categoria: { $nin: ["Bebidas Frías", "Bebidas Calientes", "Sopas", "Plato Principal", "Entrada Caliente"] } })`,
    imagen: consulta8,
    descripcion2: `Los resultados excluyen las condiciones anteriores, resultando en mostrar postres y ensaladas.`,
  },
  {
    titulo: "Consulta 9",
    descripcion1: `Un cliente entra apresurado al restaurante y pide conocer que platos tienen un tiempo de preparacion menor a 5 minutos para
     pedir uno para llevar, la consulta para resolver la orden es la siguiente:`,
    consulta: `db.menu.find({ tiempoPM: {$lt: 5 }})`,
    imagen: consulta9,
    descripcion2: `Los resultados muestran que hay 2 platos que cumplen con la condicion del cleinte para ordenar.`,
  },
  {
    titulo: "Consulta 10",
    descripcion1: `Antes de acabar el mes se pide actualziar la informacion referente al agua de panela, aumentado su precio por 500 pesos
    y su popularidad por un 5 adicional, entonces se obtiene la siguientes consultas para editar y comprobar :`,
    consulta: `db.menu.updateOne( { nombreP: "Agua de Panela" },{ $set: { precio: 2500, popularidad: 95 } }) // db.menu.find({ nombreP: { $eq: "Agua de Panela" } })`,
    imagen: consulta10,
    descripcion2: `La operación elimina correctamente el registro del "Hotel Almirante Cartagena" de la base de datos.`,
  }
];
