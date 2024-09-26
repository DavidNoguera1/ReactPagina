import consulta1 from "../assets/assets5/consulta1.png"
import consulta2 from "../assets/assets5/consulta2.png"
import consulta3 from "../assets/assets5/consulta3.png"
import consulta4 from "../assets/assets5/consulta4.png"
import consulta5 from "../assets/assets5/consulta5.png"
import consulta6 from "../assets/assets5/consulta6.png"
import consulta7 from "../assets/assets5/consulta7.png"
import consulta8 from "../assets/assets5/consulta8.png"
import consulta9 from "../assets/assets5/consulta9.png"
import consulta10 from "../assets/assets5/consulta10.png"



export const ListaHoteles = [
  {
    titulo: "Consulta 1",
    descripcion1: `El "Movich Hotel Las Lomas" es uno de los más prestigiosos en Rionegro, y su equipo de administración
    está interesado en realizar un seguimiento detallado de su rendimiento. Para ello, se necesita verificar si la
    información del hotel está correctamente almacenada en la base de datos. Entonces se realizó la siguiente consulta:`,
    consulta: `db.hoteles.find({ nombre: { $eq: "Movich Hotel Las Lomas" } })`,
    imagen: consulta1,
    descripcion2: `Se confirma que la información del hotel "Movich Hotel Las Lomas" está correctamente almacenada en la base de datos.`,
  },
  {
    titulo: "Consulta 2",
    descripcion1: `El departamento de turismo quiere hacer una lista de hoteles de lujo en el país. Los hoteles de
    cinco estrellas son un indicativo clave de calidad y lujo, por lo que se realizó la siguiente consulta para identificar aquellos que
    superen las 4 estrellas de clasificación y solo muestren hoteles d e5 estrellas:`,
    consulta: `db.hoteles.find({ clasificacion: { $gt: 4 } })`,
    imagen: consulta2,
    descripcion2: `La consulta devuelve una lista de todos hoteles colombianos asociados de 5 estrellas, como el "Senda Watapuy" y el "Hotel San Fernando PLaza" (Por motivos de
    espacio no pudimos colocar la lisat completa pero en total hay 17 hoteles con categoria de 5 estrellas).`,
  },
  {
    titulo: "Consulta 3",
    descripcion1: `Un empresario extrajero está interesado en reservar en hoteles con tarifas promedio superiores a 250 USD
    por noche, ya que busca una experiencia de lujo. Para ayudarlo a encontrar opciones, se realizó la siguiente consulta:`,
    consulta: `db.hoteles.find({ tarifaprom: { $gte: 250 } })`,
    imagen: consulta3,
    descripcion2: `La consulta arroja resultado al "Hotel Grand Hyatt", que cumplen con el criterio de tarifas por encima de 200 USD.`,
  },
  {
    titulo: "Consulta 4",
    descripcion1: `Se busca clasificar a los hoteles asociados por subcategorias segun sus tamaños, hoteles con un área total menor a 4000 metros cuadrados
    seran categorizados como "pequeños", para poder conocer que hoteles perteneceran a esta categoria se realiza la siguiente consulta`,
    consulta: `db.hoteles.find({ areat: { $lt: 4000 } })`,
    imagen: consulta4,
    descripcion2: `La consulta devuelve 9 resultados de hoteles que tienen un área total menor a 4000 m² y que por tanto de los clasificara como "pequeños"`,
  },
  {
    titulo: "Consulta 5",
    descripcion1: `Una pareja recien casada en medio de su luna de miel solicitan que se les de una lista de hoteles cuya capacidad de alojo de personas por cuarto
    se menor o igual a 2, ya que consideran que "no es necesario la compañia de mas personas que la de su pareja", para darles la lista se realizó la siguiente consulta:`,
    consulta: `db.hoteles.find({ capacidadhcion: { $lte: 2 } })`,
    imagen: consulta5,
    descripcion2: `Se encuentran como tal 3 hoteles de los caules 2 tienen muy buenas clasificaciones en "estrellas" que podrian ser del agrado de la pareja.`,
  },
  {
    titulo: "Consulta 6",
    descripcion1: `Una compañía extranjera esta busca hoteles en "Teusaquillo" porque es un punto de encuentro cercano para organizar una conferencia con sus socios. Para listar las opciones
    en esa ciudad, se realizó la siguiente consulta:`,
    consulta: `db.hoteles.find({ ubicacion: { $regex: "Teusaquillo", $options: "i" } })`,
    imagen: consulta6,
    descripcion2: `La consulta devuelve 3 hoteles que la compañia extranjera podria utilizar para reunirse con sus socios.`,
  },
  {
    titulo: "Consulta 7",
    descripcion1: `Un inversor está interesado en hoteles que generen ingresos mensuales de 500,000 o 700,000 USD
    para estudiar posibles adquisiciones. Se realizó la siguiente consulta:`,
    consulta: `db.hoteles.find({ ingresosmen: { $in: [500000, 700000] } })`,
    imagen: consulta7,
    descripcion2: `Los resultados muestran 6 hoteles como "Movich Hotel Las Lomas" y  "Hotel de los Recuerdos" cuyos ingresos mensuales son de 500,000 o 700,000 exactamente`,
  },
  {
    titulo: "Consulta 8",
    descripcion1: `El departamento de turismo quiere hacer un llamado de atencion a hoteles asociados que NO esten en clasificacion
    de tres, cuatro o cinco estrellas, pues esto indicaria una baja calidad de servicios. Se realizó la siguiente consulta para identificar aquellos que
    NO esten en el rango establecido:`,
    consulta: `db.hoteles.find({ clasificacion: { $nin: [ 3, 4, 5,] } })`,
    imagen: consulta8,
    descripcion2: `Se dice entonces que el "Hotel Express Medellin" y "Hotel Cielo" van a tener que recibir un llamado de atencion por baja calidad dada
    su clasifiacion`,
  },
  {
    titulo: "Consulta 9",
    descripcion1: `Una empresa busca hoteles de 5 estrellas exclusivamente en Bogotá para alojar a sus empleados. Para ello,
    se realizó la siguiente consulta:`,
    consulta: `db.hoteles.find({ ubicacion: { $regex: "Bogotá", $options: "i" }, clasificacion_estrellas: 5 })`,
    imagen: consulta9,
    descripcion2: `Los resultados incluyen hoteles como el "Grand Hyatt Bogotá", que cumplen con el requisito de estar en Bogotá y tener una clasificación de 5 estrellas.`,
  },
  {
    titulo: "Consulta 10",
    descripcion1: `El "Hotel Almirante Cartagena" ha cerrado sus operaciones y se necesita eliminar su registro de la base de datos.
    Se realizó la siguiente consulta para eliminarlo:`,
    consulta: `db.hoteles.deleteOne({ nombre: "Hotel Almirante Cartagena" })`,
    imagen: consulta10,
    descripcion2: `La operación elimina correctamente el registro del "Hotel Almirante Cartagena" de la base de datos.`,
  }
];
