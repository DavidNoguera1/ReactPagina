import consulta1 from "../assets/assets6/consulta1.png"
import consulta2 from "../assets/assets6/consulta2.png"
import consulta3 from "../assets/assets6/consulta3.png"
import consulta4 from "../assets/assets6/consulta4.png"
import consulta5 from "../assets/assets6/consulta5.png"
import consulta6 from "../assets/assets6/consulta6.png"
import consulta7 from "../assets/assets6/consulta7.png"
import consulta8 from "../assets/assets6/consulta8.png"
import consulta9 from "../assets/assets6/consulta9.png"
import consulta10 from "../assets/assets6/consulta10.png"


export const ListaMaterias = [
    {
        titulo: "Consulta 1",
        descripcion1: `El curso "Curso de desarrollo humano" es fundamental para los estudiantes que buscan fortalecer su crecimiento personal. Para asegurarse de que los datos de este curso están correctamente almacenados, se realizó la siguiente consulta:`, 
        consulta: `db.materias.find({ nombre: { $eq: "Curso de desarrollo humano" } }).pretty();`,
        imagen: consulta1,
        descripcion2: `Se confirma que la materia "Curso de desarrollo humano" está correctamente registrada en la base de datos.`,
    },
    {
        titulo: "Consulta 2",
        descripcion1: `Se desea identificar qué materias tienen una carga de créditos significativa, mayor a 2, para gestionar mejor los horarios. La siguiente consulta ayuda a encontrar las materias con más de 2 créditos:`, 
        consulta: `db.materias.find({ Créditos: { $gt: 2 } }).pretty();`,
        imagen: consulta2,
        descripcion2: `La consulta devuelve todas las materias que tienen más de 2 créditos, facilitando la planificación de recursos académicos.`,
    },
    {
        titulo: "Consulta 3",
        descripcion1: `Los administradores de la universidad desean conocer cuáles materias tienen más de 2 horas teóricas por semana para asignar adecuadamente las aulas grandes. La siguiente consulta ayuda a identificar dichas materias:`, 
        consulta: `db.materias.find({ horas_clase_teoricas: { $gte: 2 } }).pretty();`,
        imagen: consulta3,
        descripcion2: `Con esta consulta, se identifican las materias con al menos 2 horas de clases teóricas, ayudando a planificar los espacios.`,
    },
    {
        titulo: "Consulta 4",
        descripcion1: `Algunos cursos tienen un enfoque más práctico que teórico, por lo que es útil conocer qué materias tienen menos de 2 horas prácticas por semana. La siguiente consulta ayuda a obtener esta información:`, 
        consulta: `db.materias.find({ horas_clase_practicas: { $lt: 2 } }).pretty();`,
        imagen: consulta4,
        descripcion2: `La consulta muestra todas las materias que tienen menos de 2 horas prácticas por semana, útil para entender el balance práctico-teórico en los cursos.`,
    },
    {
        titulo: "Consulta 5",
        descripcion1: `Para revisar si los cursos de los primeros semestres (códigos más bajos) están debidamente registrados en la base de datos, se realiza la siguiente consulta, que busca materias con códigos menores o iguales a 84005:`, 
        consulta: `db.materias.find({ codigo: { $lte: "84005" } }).pretty();`,
        imagen: consulta5,
        descripcion2: `La consulta verifica que todas las materias de código igual o inferior a 84005 estén correctamente almacenadas en la base de datos.`,
    },
    {
        titulo: "Consulta 6",
        descripcion1: `El decano está interesado en verificar todas las materias que no están bajo la responsabilidad de la profesora Nancy Legarda, para distribuir la carga académica de forma equitativa. La siguiente consulta muestra estas materias:`, 
        consulta: `db.materias.find({ Profesor_responsable: { $ne: "Nancy Legarda" } }).pretty();`,
        imagen: consulta6,
        descripcion2: `Esta consulta ayuda a identificar las materias cuyo responsable no es Nancy Legarda, permitiendo una mejor distribución de la carga docente.`,
    },
    {
        titulo: "Consulta 7",
        descripcion1: `Para organizar las clases, el equipo académico está interesado en saber qué materias se imparten en las aulas 601, 602, y 305. Se realizó la siguiente consulta para verificar las materias asignadas a estas aulas:`, 
        consulta: `db.materias.find({ Aula_asignada: { $in: ["601MI", "602MI", "305sSJ"] } }).pretty();`,
        imagen: consulta7,
        descripcion2: `Con esta consulta, se identifican las materias asignadas a los salones 101, 202 y 305, permitiendo organizar mejor el uso de los espacios.`,
    },
    {
        titulo: "Consulta 8",
        descripcion1: `Al planificar los horarios, se quiere evitar que ciertas materias se impartan en los salones 601, 602 y 305, ya que esos salones estarán en mantenimiento. La siguiente consulta busca materias que no estén asignadas a esas aulas:`, 
        consulta: `db.materias.find({ Aula_asignada: { $nin: ["601MI", "602MI", "305SJ"] } }).pretty();`,
        imagen: consulta8,
        descripcion2: `La consulta devuelve todas las materias que no están asignadas a los salones 101, 202 y 305, ayudando a reorganizar los horarios durante el mantenimiento.`,
    },
    {
        titulo: "Consulta 9",
        descripcion1: `La universidad quiere obtener una lista de todas las materias registradas en la base de datos de ingenieria de sistemas para revisar su estado. La siguiente consulta se utiliza para recuperar todos los registros de la colección "materias":`, 
        consulta: `db.materias.find().pretty();`,
        imagen: consulta9,
        descripcion2: `Esta consulta devuelve todos los documentos en la colección "materias", proporcionando una vista completa de todas las materias registradas.`,
    },
    {
        titulo: "Consulta 10",
        descripcion1: `El curso "Mecánica" será eliminado del plan de estudios para el próximo semestre, por lo que se necesita remover su registro de la base de datos. La siguiente consulta permite eliminar la materia de forma segura:`, 
        consulta: `db.materias.remove({ nombre: "Mecánica" });`,
        imagen: consulta10,
        descripcion2: `La consulta elimina el curso "Mecánica" de la base de datos, asegurándose de que ya no esté disponible para los estudiantes.`,
    }
];
