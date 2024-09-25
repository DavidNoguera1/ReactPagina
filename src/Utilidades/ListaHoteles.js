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
    cinco estrellas son un indicativo clave, por lo que se realizó la siguiente consulta para identificar aquellos que
    superen las 4 estrellas de clasificación:`,
    consulta: `db.hoteles.find({ clasificacion_estrellas: { $gt: 4 } })`,
    imagen: consulta2,
    descripcion2: `La consulta devuelve una lista de hoteles de 5 estrellas, como el "Movich Hotel Las Lomas" y el "Hotel Almirante Cartagena".`,
  },
  {
    titulo: "Consulta 3",
    descripcion1: `Un viajero de negocios está interesado en reservar en hoteles con tarifas promedio superiores a 200 USD
    por noche, ya que busca una experiencia de lujo. Para ayudarlo a encontrar opciones, se realizó la siguiente consulta:`,
    consulta: `db.hoteles.find({ tarifa_promedio_usd: { $gte: 200 } })`,
    imagen: consulta3,
    descripcion2: `La consulta arroja resultados como el "Movich Hotel Las Lomas" y el "Hotel Almirante Cartagena", que cumplen con el criterio de tarifas por encima de 200 USD.`,
  },
  {
    titulo: "Consulta 4",
    descripcion1: `Se busca identificar hoteles pequeños, con un área total menor a 5000 metros cuadrados, para enfocarse
    en una campaña de marketing destinada a propiedades más íntimas y exclusivas. La consulta es la siguiente:`,
    consulta: `db.hoteles.find({ area_total_m2: { $lt: 5000 } })`,
    imagen: consulta4,
    descripcion2: `La consulta devuelve resultados como el "Hotel Boutique Casa del Coliseo", que tiene un área total menor a 5000 m².`,
  },
  {
    titulo: "Consulta 5",
    descripcion1: `Una familia está buscando hoteles que puedan acomodar a un grupo de 4 personas por habitación. Para
    encontrar opciones que satisfagan esta necesidad, se realizó la siguiente consulta:`,
    consulta: `db.hoteles.find({ capacidad_habitacion_personas: { $lte: 4 } })`,
    imagen: consulta5,
    descripcion2: `Se encuentran hoteles como el "Movich Hotel Las Lomas" que ofrecen habitaciones con capacidad para hasta 4 personas.`,
  },
  {
    titulo: "Consulta 6",
    descripcion1: `Una compañía de eventos busca hoteles en Medellín para organizar una conferencia. Para listar las opciones
    en esa ciudad, se realizó la siguiente consulta:`,
    consulta: `db.hoteles.find({ ubicacion: { $regex: "Medellín", $options: "i" } })`,
    imagen: consulta6,
    descripcion2: `La consulta devuelve opciones como el "Hotel Intercontinental Medellín" y el "Hotel Tryp Medellín".`,
  },
  {
    titulo: "Consulta 7",
    descripcion1: `Un inversor está interesado en hoteles que generen ingresos mensuales de 200,000, 500,000 o 700,000 USD
    para estudiar posibles adquisiciones. Se realizó la siguiente consulta:`,
    consulta: `db.hoteles.find({ ingresos_mensuales_usd: { $in: [200000, 500000, 700000] } })`,
    imagen: consulta7,
    descripcion2: `Los resultados muestran hoteles como el "Movich Hotel Las Lomas" con ingresos de 500,000 USD mensuales y el "Hotel Almirante Cartagena" con ingresos de 700,000 USD.`,
  },
  {
    titulo: "Consulta 8",
    descripcion1: `Un análisis está siendo realizado para descartar hoteles con bajos ingresos. Se busca excluir aquellos con
    ingresos mensuales de 100,000 o 200,000 USD. Para ello, se ejecutó la siguiente consulta:`,
    consulta: `db.hoteles.find({ ingresos_mensuales_usd: { $nin: [100000, 200000] } })`,
    imagen: consulta8,
    descripcion2: `Los resultados excluyen los hoteles de ingresos menores, proporcionando una lista de opciones más rentables.`,
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
