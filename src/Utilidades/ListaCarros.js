import consulta1 from "../assets/assets3/consulta1.jpg"
import consulta2 from "../assets/assets3/consulta2.jpg"
import consulta3 from "../assets/assets3/consulta3.jpg"
import consulta4 from "../assets/assets3/consulta4.jpg"
import consulta5 from "../assets/assets3/consulta5.jpg"
import consulta6 from "../assets/assets3/consulta6.jpg"
import consulta7 from "../assets/assets3/consulta7.jpg"
import consulta8 from "../assets/assets3/consulta8.jpg"
import consulta9 from "../assets/assets3/consulta9.jpg"
import consulta10 from "../assets/assets3/consulta10.jpg"


export const ListaCarros = [
  {
    titulo: "Consulta 1",
    descripcion1: `Un hombre ingresa al concesionario y menciona lo siguiente "soy un taxista y para ahorrarme el precio de pintura amarilla quiero averiguar
    si poseen algun vehiculo de dicho color", uno de los encargados se dirigio a la computadora y realizo entonces la siguiente consulta:`,
    consulta: `db.vehiculos.find({ color: { $eq: "Amarillo" } });`,
    imagen: consulta1,
    descripcion2: `Se confirma que existe un vehiculo en el inventario que es color amarillo y corresponde a un Picanto excelente para trafico urbano.`,
  },
  {
    titulo: "Consulta 2",
    descripcion1: `Durante una reunion con el equipo directivo del concesionaria un empleado aseguro que dentro del inventario hya menos de 3 vehiculos los cuales
    tengan un año de fabricacion mayor al 2023, en pocas palabras dice que no hay muchos vehiculos modernos y que deberia haber un enfoque hacia la compra de estos mismo
    . Para corroborar la afirmacion del empleado, el gerente encargorealizar la siguiente consulta:`,
    consulta: `db.vehiculos.find({ anioF: { $gt: 2023 } });`,
    imagen: consulta2,
    descripcion2: `En efecto los unicos vehiculos actuales que superan el año de produccion 2023 son el Logan StepWay y la Hummer H3, por tanto a futuro se 
    esperaria el enfoque a comprar mas autos modernos`,
  },
  {
    titulo: "Consulta 3",
    descripcion1: `Se quiere realizar subcategorias de estrato para los vehiculos y para ello se debe separarlos de acuerdo a su precio, los vehiculos con un coste igual 
    o de mas de 100 millones se categorizaran como "alto estrato", para saber cuales vehiculos se acomodaran en esta categoria se reliza la siguiente consulta:`,
    consulta: `db.vehiculos.find({ precio: { $gte: 100000000 } });`,
    imagen: consulta3,
    descripcion2: `Se dice entonces que existen unos 7 vehiuclos que entrarian dentro de la categoria "alto estrato" y que curiosamnte son todos camionetas.`,
  },
  {
    titulo: "Consulta 4",
    descripcion1: `Una pareja joven esta encontrar un vehiculo de menos de 4 pasajeros pues segun ellos no tienen hijos o amigos a los cuales
    transportar y no les importa el precio, para buscar un vehiculo que responda a este requerimiento el asesor de ventas hace la siguiente consulta:`,
    consulta: `db.hoteles.find({ area_total_m2: { $lt: 5000 } })`,
    imagen: consulta4,
    descripcion2: `La consulta encunetra 2 vehiculos con capacidades de transporte personal menores a 4 personas siendo la Ford 150 Semi y un lada Niva`,
  },
  {
    titulo: "Consulta 5",
    descripcion1: `Se planea realizar una subcategoria referente a las potencias de caballos de fuerza que los vehiculos ofrecen, como tal todos los vehiculos
    que tengan 80 o menos caballos de fuerza como potencia de motor seran subcategorizados como "BajaPotencia", se le dice al encargado de la base que realize una consulta
    para comenzar el filtrado y entonces se obtiene:`,
    consulta: `db.vehiculos.find({ potenciaMTR: { $lte: 80 } });`,
    imagen: consulta5,
    descripcion2: `Se encuentran que hay unos 5 vehiculos los cuales pertenecerian a futuro a la categoria "BajaPotencia".`,
  },
  {
    titulo: "Consulta 6",
    descripcion1: `Un cliente ingresa al concecionario y dice lo siguiente "toda mi familia tiene un Chevrolet, pero yo soy diferente, muestreme carros
    que no sean de esa marca", el encargo de ventas rapidamente digita el siguiente consulta en su computador:`,
    consulta: ` db.vehiculos.find({ marca: { $ne: "Chevrolet"} });`,
    imagen: consulta6,
    descripcion2: `Como se puede observar en los resultados hay un salto entre las ID de los vehiculo de Renault a Skoda, el espacio en blanco
    teniendo que ser ocupado por "Chevrolet" que obviamente se omitio a peteicion del cliente.`,
  },
  {
    titulo: "Consulta 7",
    descripcion1: `Siguiendo a la consulta anterior el cliente menciono que hay muchos carros y que mejor preferiria filtrar los vehiculos por marcas que a el
    le gustan, siendo "Skoda, Lada y Daewoo", el encargado nuevamente digita una consulta:`,
    consulta: `db.vehiculos.find({ marca: { $in: ["Skoda", "Lada", "Daewoo"] } });`,
    imagen: consulta7,
    descripcion2: `Los resultados muestran 6 vehiculos pertenecientes a las marcas solicitadas, satisfaciendo al cliente`,
  },
  {
    titulo: "Consulta 8",
    descripcion1: `Antes de acabar el dia en el consecionario un ultiomo cliente de apariencia curiosa entra y dice que quiere un auto sin "colores genericos"
    por lo que solicita a un encargado conocer cuales son los vehiuclos que NO son ""Negro", "Blanco", "Azul", "Rojo", "Plateado" y "Gris". Se realiza la siguiente consulta:`,
    consulta: `db.vehiculos.find({ color: { $nin: ["Negro", "Blanco", "Azul", "Rojo", "Plateado", "Gris"] } });`,
    imagen: consulta8,
    descripcion2: `El cliente observa los 4 resultados y decide que se llevara el Ford Fiesta porque es el mas barato`,
  },
  {
    titulo: "Consulta 9",
    descripcion1: `Tan pronto como se despacha al anterior cliente otro mas entra, un hombre de apariencia ranchera y adinerada pregunta por los vehiculos
    mas caros y potentes que haya exigiendo que la potencia de motor sea igual o supere los 250 caballos de fuerza, ademas menciona que su presupuesto es de mas 
    de 200 millones, el encargado realiza la siguiente consulta:`,
    consulta: `db.vehiculos.find({ precio: { $gte: 200000000 }, potenciaMTR: { $gte: 250 } });`,
    imagen: consulta9,
    descripcion2: `Se obtiene que hay 2 vehiculos que SI cumplen con los requerimientos del cliente.`,
  },
  {
    titulo: "Consulta 10",
    descripcion1: `Recapitulando a la primera consulta sobre color, el vehiuclo Picanto amarillo es vendido y por tanto es necesario eliminar su registro del inventario
    , se digita la siguiente consulta junto con una de confirmacion:`,
    consulta: `db.vehiculos.deleteOne({ modelo: "Picanto Vibrant" }); // db.vehiculos.find({ marca: { $in: ["Kia"] } });`,
    imagen: consulta10,
    descripcion2: `En efecto el programa anuncia que se a borrado un elemento y al hacer la consulta de los vehiuclos en la marca Kia, esta ya no mostrara
    al Picanto Vibran como su inicio (era la id 16).`,
  }
];
