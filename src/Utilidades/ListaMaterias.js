import consulta1 from "../assets/assets6/consulta1.png";
import consulta2 from "../assets/assets6/consulta2.png";
import consulta3 from "../assets/assets6/consulta3.png";
import consulta4 from "../assets/assets6/consulta4.png";
import consulta5 from "../assets/assets6/consulta5.png";
import consulta6 from "../assets/assets6/consulta6.png";
import consulta7 from "../assets/assets6/consulta7.png";
import consulta8 from "../assets/assets6/consulta8.png";
import consulta9 from "../assets/assets6/consulta9.png";
import consulta10 from "../assets/assets6/consulta10.png";

export const ListaMaterias = [
  {
    titulo: "Consulta 1",
    descripcion1: `La materia "Curso de desarrollo humano" es fundamental para los estudiantes que buscan fortalecer su crecimiento personal. Para asegurarse de que los datos de este curso están correctamente almacenados, se realizó la siguiente consulta:`,
    consulta: `db.materias.find({ nombre: { $eq: "Curso de desarrollo humano" } });`,
    imagen: consulta1,
    descripcion2: `Se confirma que la materia "Curso de desarrollo humano" está correctamente registrada en la base de datos.`,
  },
  {
    titulo: "Consulta 2",
    descripcion1: `Se desea identificar qué materias tienen una carga de créditos significativa, mayor a 2, para gestionar mejor los horarios. La siguiente consulta ayuda a encontrar las materias con más de 2 créditos:`,
    consulta: `db.materias.find({ Créditos: { $gt: 2 } });`,
    imagen: consulta2,
    descripcion2: `La consulta devuelve todas las materias que tienen más de 2 créditos, que en total son 11, facilitando la planificación de recursos académicos.`,
  },
  {
    titulo: "Consulta 3",
    descripcion1: `Los administradores de la Universidad Mariana desean conocer cuáles materias tienen más de 3 horas teóricas por semana para asignar adecuadamente las aulas grandes. La siguiente consulta ayuda a identificar dichas materias:`,
    consulta: `db.materias.find({ horast: { $gte: 3 } });`,
    imagen: consulta3,
    descripcion2: `Con esta consulta, se identifican hay solo una materia con al menos 2 horas de clases teóricas siendo estadistica inferencial , ayudando a planificar los espacios.`,
  },
  {
    titulo: "Consulta 4",
    descripcion1: `Algunos cursos tienen un enfoque más práctico que teórico, por lo que es útil conocer qué materias tienen menos de 2 horas prácticas por semana. La siguiente consulta ayuda a obtener esta información:`,
    consulta: `db.materias.find({ horasp: { $lt: 2 } });`,
    imagen: consulta4,
    descripcion2: `La consulta muestra todas las materias que tienen menos de 2 horas prácticas por semana, siendo en mas 20, (Imagen solo muestr 12 dado que los resultados de la consulta son muchos y el compilador solo imprime hasta 20)`,
  },
  {
    titulo: "Consulta 5",
    descripcion1: `Para revisar si los cursos de los primeros semestres (códigos más bajos) están debidamente registrados en la base de datos, se realiza la siguiente consulta, que busca materias con códigos menores o iguales a 84005:`,
    consulta: `db.materias.find({ codigo: { $lte: "84005" } });`,
    imagen: consulta5,
    descripcion2: `La consulta verifica que todas las materias de código igual o inferior a 84005 estén correctamente almacenadas en la base de datos.`,
  },
  {
    titulo: "Consulta 6",
    descripcion1: `El decano está interesado en verificar todas las materias que NO están bajo la responsabilidad de la profesora Nancy Legarda, para distribuir la carga académica de forma equitativa. La siguiente consulta muestra estas materias:`,
    consulta: `db.materias.find({ Profesor: { $ne: "Nancy Legarda" } });`,
    imagen: consulta6,
    descripcion2: `Esta consulta ayuda a identificar las materias cuyo responsable no es Nancy Legarda, permitiendo una mejor distribución de la carga docente actual (Nuevamente en la 
    imagen solo se puso un numero para demostrar la consulta, dado el tamaño de esta solo se imrpimirian hasta 20).`,
  },
  {
    titulo: "Consulta 7",
    descripcion1: `Para organizar las clases, el equipo académico está interesado en saber qué materias se imparten en las aulas 601MI y  602MI
     para poder organizar de mejor manera el uso de espacios y ver si otras materias caben. Se realizó la siguiente consulta para verificar las materias asignadas a estas aulas:`,
    consulta: `db.materias.find({ Aula: { $in: ["601MI", "602MI" } });`,
    imagen: consulta7,
    descripcion2: `Con esta consulta, se identifican que hay 9 materias asignadas a los salones 601MI y 602M1, permitiendo organizar mejor el uso de los espacios a futuro.`,
  },
  {
    titulo: "Consulta 8",
    descripcion1: `Los administrativos de la Universidad Mariana han solicitado que "todas las materias cuyas horas practias NO sean 1, 2, o 3 deberan incrementar por lo menos a 1 hora practica"
    viendo este mensaje se realiza una consulta para averiguar que materias deberan incrementar sus horas practicas:`,
    consulta: `db.materias.find({ horasp: { $nin: [1, 2, 3] } });`,
    imagen: consulta8,
    descripcion2: `La consulta devuelve 4 materias las cuales deberan incrementar su numero de horas practicas por lo menos a una, siendo la mayoria de estas complementarias.`,
  },
  {
    titulo: "Consulta 9",
    descripcion1: `Durante una pequeña reunion el docente Mauricio Lopez accidentalmente pierde hojas impresas con la informacion de las materias a las cuales dicta. Para no perder el tiempo
    rapidamente digita una consulta para averiguar que materias le correspondian:`,
    consulta: `db.materias.find({ Profesor: { $in: ["Mauricio Lopez"] } });`,
    imagen: consulta9,
    descripcion2: `Esta consulta devuelve todas las materias que le corresponden al profe Maau.`,
  },
  {
    titulo: "Consulta 10",
    descripcion1: `El curso "Mecánica" será eliminado del plan de estudios para el próximo semestre, por lo que se necesita remover su registro de la base de datos. La siguiente consulta permite eliminar la materia de forma segura:`,
    consulta: `db.materias.remove({ nombre: "Mecánica" });`,
    imagen: consulta10,
    descripcion2: `La consulta elimina el curso "Mecánica" de la base de datos, asegurándose de que ya no esté disponible para los estudiantes.`,
  },
];
