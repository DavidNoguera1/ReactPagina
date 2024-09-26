db.materias.insertMany([
  {nombre: "Fundamentos matematicos", codigo: "84001", Descripcion: "Es una materia en la que se ve los fundamentos de las matematicas tales como conjuntos numericos, operaciones y funciones matematicas y tiene como objetivo reforzar temas ya vistos en el colegio para poder continuar con los demas cursos", Créditos: 1, horast: 1, horasp: 1, Profesor:"Marcela Gomez", Aula:"306SJ", Prerrequisitos:"N/A", Promedio: 4.2},
  {nombre: "Logica matematica", codigo: "84002", Descripcion: "Es una materia en la que se aprende la logica y solucion de problemas desde la logica computacional haciendo uso de variables, condicionales y ciclos", Créditos: 2, horast: 2, horasp: 1, Profesor:"Alejandra Zuleta", Aula:"601MI", Prerrequisitos:"N/A", Promedio: 4.5},
  {nombre: "Algoritmos y programación 1", codigo: "84003", Descripcion: "Es una materia en la que se aprende la logica de la programacion y solucion de problemas desde un lenguaje de programacion como Java haciendo uso de variables, condicionales, ciclos y adentrandonos en uno de los paradigmas de la programacion, la programacion orientada a objetos(POO)", Créditos: 3, horast: 2, horasp: 2, Profesor:"Alvaro Martínez", Aula:"601MI", Prerrequisitos:"N/A", Promedio: 4.0},
  {nombre: "Introduccion a la ingeniería", codigo: "84004", Descripcion: "Es una materia en la que se aprende el contexto de la ingeniería de sistemas, de que se trata el programa, sus diferentes ramas, y en general, las posibilidades u opciones de los ingenieros de sistemas en el campo laboral", Créditos: 1, horast: 1, horasp: 1, Profesor:"Magda ", Aula:"604MI", Prerrequisitos:"N/A", Promedio: 4.7},
  {nombre: "Lectoescritura Investigativa", codigo: "84005", Descripcion: "Es una materia en la que se aprende a analizar textos, hacer resumenes, se desarrolla pensamiento critico en la lectura de textos de cualquier tipo e identificar palabras clave ", Créditos: 1, horast: 1, horasp: 1, Profesor:"Javier Poveda", Aula:"206SJ", Prerrequisitos:"N/A", Promedio: 4.3},
  {nombre: "Pensamiento Filosófico", codigo: "84006", Descripcion: "Es una materia en la que se aprende acerca de la historia de la universidad Mariana, y su filosofía y la historia de las universidades en america latina", Créditos: 2, horast: 2, horasp: 0, Profesor:"Eyner Chamorro", Aula:"206SJ", Prerrequisitos:"N/A", Promedio: 4.5},
  {nombre: "Contenidos digitales", codigo: "84007", Descripcion: "Es una materia en la que se aprende a crear contenidos digitales tales como imagenes, videos y diferentes archivos con diferentes herramientas informaticas", Créditos: 2, horast: 1, horasp: 1, Profesor:"Mauricio Lopez", Aula:"601MI", Prerrequisitos:"N/A", Promedio: 4.8},
  {nombre: "Electrónica interactiva", codigo: "84008", Descripcion: "Es una materia en la que se aprende los fundamentos de la electrónica y la electricidad, construyendo circuitos basicos y faciles en donde se puede ver en funcionamiento algunos de los componentes electronicos mas importantes", Créditos: 2, horast: 1, horasp: 2, Profesor:"Nancy Legarda", Aula:"Laboratorio de fisica, Alvernia", Prerrequisitos:"N/A", Promedio: 4.5},
  {nombre: "Curso de desarrollo humano", codigo: "84009", Descripcion: "Es un curso complementario en el que los estudiantes pueden aprender de diferentes temas que no tienen relacion con su carrera pero puede servirles en algun momento de sus vidas dependiendo del curso que hayan elegido", Créditos: 1, horast: 1, horasp: 1, Profesor:"Jhon Cardenas", Aula:"307SF", Prerrequisitos:"N/A", Promedio: 4.7},
  {nombre: "Matemáticas discretas", codigo: "84018", Descripcion: "Es una materia en la que se aprende algunos temas especificos de la matematica como conjuntos, compuertas logicas y otras cosas que le pueden servir mas adelante en los proximos cursos del programa", Créditos: 2, horast: 1, horasp: 1, Profesor:"Martha Carrillo Obando", Aula:"107MI", Prerrequisitos:"N/A", Promedio: 4.1},
  {nombre: "Calculo diferencial", codigo: "84011", Descripcion: "Es una materia en la que se aprende conceptos mas especificos del calculo diferencial como lo es la derivada y las diferentes reglas de esta para poder entender fenomenos fisicos del mundo", Créditos: 2, horast: 1, horasp: 1, Profesor:"Nancy Legarda ", Aula:"205SF", Prerrequisitos:"Fundamentos matematicos", Promedio: 4.2},
  {nombre: "Algebra lineal", codigo: "84010", Descripcion: "Es una materia en la que se aprende conceptos del algebra como lo son ecuaciones lineales, sistemas para resolver sistemas de ecuaciones y otros metodos aparte ue se utilizan para resolver sistemas de ecuaciones orientado a problemas de la ingenieria de sistemas", Créditos: 2, horast: 1, horasp: 1, Profesor:"Nancy Legarda", Aula:"205SF", Prerrequisitos:"N/A", Promedio: 4.3},
  {nombre: "Algoritmos y programacion 2", codigo: "84012", Descripcion: "Es una materia en la que se aprende mas conceptos de la programacion desde un lenguaje de programacion como Java, se profundiza mas en la programacion orientada a objetos, se practica las interfaces graficas en java con un entorno de desarrollo, en sus diferentes pilares y porsupuesto, la solucion de problemas desde la programacion", Créditos: 3, horast: 2, horasp: 2, Profesor:"Mauricio Lopez", Aula:"601MI", Prerrequisitos:"Algoritmos y programacion 1", Promedio: 4.5},
  {nombre: "Mecánica", codigo: "84013", Descripcion: "Es una materia en la que se aprende  conceptos de la fisica basica, es un repaso de la fisica que nos dictaron desde el colegio y recordamos conceptos del movimiento, como la velocidad, el tiempo, la gravedad y diferentes temas de la fisica mecanica", Créditos: 3, horast: 2, horasp: 2, Profesor:"Favio Nicolas Rosero ", Aula:"Laboratorio de fisica, Alvernia", Prerrequisitos:"N/A", Promedio: 4.5},
  {nombre: "Epistemologia especifica", codigo: "84014", Descripcion: "Es una materia en la que se introduce al tema de investigacion y proyectos, en el que los estudiantes dan sus ideas de proyectos para socializarlos con la comunidad universitaria", Créditos: 1, horast: 1, horasp: 1, Profesor:"Alejandra Zuleta", Aula:"105MI", Prerrequisitos:"N/A", Promedio: 4.6},
  {nombre: "Humanismo Cristiano", codigo: "84015", Descripcion: "Es una materia complementaria de la universidad en la que se aprende mas de la filosofia de la universidad, personajes importantes y testimonios de vida desde el contexto espiritual y sus creencias", Créditos: 2, horast: 2, horasp: 0, Profesor:"Eyner Chamorro", Aula:"105MI", Prerrequisitos:"N/A", Promedio: 4.6},
  {nombre: "Cloud Computing Foundations 1", codigo: "84016", Descripcion: "Es una materia en la que se introduce al mundo de la computacion en la nube (cloud computing), ventajas y desventajas del cloud computing, herramientas de este y un poco acerca de la programacion en la nube con google cloud plataform", Créditos: 2, horast: 1, horasp: 1, Profesor:"Maria Fernanda Granda", Aula:"604MI", Prerrequisitos:"N/A", Promedio: 4.3},
  {nombre: "Delitos informaticos", codigo: "84017", Descripcion: "Es una materia en la que se aprende de los diferentes delitos y riesgos que existen en el mundo de la informatica, mas conocido como malware que son software dañinos para computadores y los diferentes ataques informaticos el redes informaticas y algunas medidas de proteccion ", Créditos: 2, horast: 1, horasp: 1, Profesor:"Madeline Narvaez", Aula:"602MI", Prerrequisitos:"N/A", Promedio: 4.5},
  {nombre: "Etica profesional", codigo: "84018", Descripcion: "Es una materia en la que se aprende las diferentes reglas, normativa e instituciones que rigen y vigilan el ejercicio de la ingeniería en colombia y las consecuencias legales que puede pasar si ejercemos la ingenieria de forma incorrecta o no etica", Créditos: 2, horast: 2, horasp: 0, Profesor:"Juan Pablo Arcos", Aula:"107MI", Prerrequisitos:"N/A", Promedio: 4.2},
  {nombre: "Calculo integral", codigo: "84019", Descripcion: "Es una materia en la que se aprende se enfoca en el concepto de la integración, es decir, la acumulación o suma continua de cantidades. Mientras que el cálculo diferencial trata sobre las tasas de cambio (derivadas), el cálculo integral se utiliza para calcular áreas bajo curvas, volúmenes de sólidos de revolución, y otras cantidades acumulativas.", Créditos: 2, horast: 1, horasp: 1, Profesor:"Marcela Gomez", Aula:"107MI", Prerrequisitos:"Calculo diferencial", Promedio: 3.7},
  {nombre: "Algoritmos y programacion 3", codigo: "84021", Descripcion: "Es una materia en la que se aprende mas conceptos de la programacion desde un lenguaje de programacion como Java, se profundiza mas en la programacion orientada a objetos con un entorno de desarrollo, en sus diferentes pilares y porsupuesto, la solucion de problemas y algoritmos desde la programacion", Créditos: 3, horast: 2, horasp: 2, Profesor:"Daniel Fernando Arteaga", Aula:"601MI", Prerrequisitos:"Algoritmos y programacion 2", Promedio: 4.3},
  {nombre: "Metodos Numericos", codigo: "84020", Descripcion: "Es una materia en la que trata de técnicas matemáticas utilizadas para aproximar soluciones a problemas que no pueden resolverse de manera exacta mediante métodos analíticos tradicionales. Estos métodos son esenciales cuando las soluciones exactas son difíciles o imposibles de obtener debido a la complejidad de las ecuaciones.", Créditos: 2, horast: 1, horasp: 1, Profesor:"Mauricio Lopez", Aula:"107MI", Prerrequisitos:"N/A", Promedio: 4.6},
  {nombre: "Diseño de interfaz de usuario", codigo: "l4193", Descripcion: "Es una materia en la que trata de todas las características y normas con las que debe cumplir una interfaz de usuario ya sea de una app web o app movil y todos los software que hacen uso de una interfaz de usuario", Créditos: 2, horast: 1, horasp: 1, Profesor:"Maria Fernanda Granda", Aula:"604MI", Prerrequisitos:"N/A", Promedio: 4.4},
  {nombre: "Electricidad y magnetismo", codigo: "84022", Descripcion: "Es una materia en la que trata otras ramas o temas de la fisica, la electricidad y el magnetismo son dos aspectos interrelacionados de un fenómeno físico conocido como electromagnetismo. La electricidad se refiere a la presencia y flujo de cargas eléctricas, lo que genera corrientes eléctricas y campos eléctricos. El magnetismo, por su parte, está asociado con el comportamiento de los materiales en presencia de un campo magnético, generado por corrientes eléctricas o imanes", Créditos: 2, horast: 1, horasp: 2, Profesor:"Favio Nicolas Rosero", Aula:"604MI", Prerrequisitos:"Laboratorio de fisica, Alvernia", Promedio: 4.3},
  {nombre: "Aplicaciones moviles", codigo: "i4157", Descripcion: "Es una materia en la que se aprende a desarrollar aplicaciones para dispositivos moviles desde un entorno de desarrollo como android studio, junto con las diferentes caracteristicas de las aplicaciones móviles ", Créditos: 2, horast: 1, horasp: 2, Profesor:"Gustavo Sánchez", Aula:"604MI", Prerrequisitos:"N/A", Promedio: 4.3},
  {nombre: "Probalilidas y estadistica descriptiva", codigo: "84025", Descripcion: "Es una materia que se divide en 2 partes, por un lado la estadistica descriptiva que trata de las técnicas utilizadas para organizar, resumir y describir un conjunto de datos y la propabilidad que es una rama de las matemáticas que estudia la posibilidad de que ocurra un evento. Se expresa como un valor entre 0 y 1, donde 0 significa que un evento es imposible y 1 significa que es seguro", Créditos: 3, horast: 2, horasp: 1, Profesor:"Marcela Gomez", Aula:"602MI", Prerrequisitos:"N/A", Promedio: 4.2},
  {nombre: "Interaccion hombre maquina", codigo: "84026", Descripcion: "Es una materia que se refiere al estudio y diseño de cómo las personas interactúan con las maquinas, sistemas computacionales y otras tecnologías. El objetivo principal es crear interfaces que sean eficientes, intuitivas y fáciles de usar para mejorar la experiencia del usuario.", Créditos: 3, horast: 1, horasp: 2, Profesor:"Mauricio Lopez", Aula:"604MI", Prerrequisitos:"N/A", Promedio: 4.6},
  {nombre: "Constitucion y democracia", codigo: "84027", Descripcion: "Es una materia complementaria que se refiere al estudio de la constitucion politica de colombia, normas, derechos y deberes, instituciones del estado, conformacion y estructura del estado y gobierno colombiano", Créditos: 1, horast: 2, horasp: 0, Profesor:"Javier Villalba", Aula:"604MI", Prerrequisitos:"N/A", Promedio: 4.6},
  {nombre: "Maquinas electricas", codigo: "84028", Descripcion: "Es una materia que cubre los principios fundamentales de funcionamiento, diseño y aplicaciones de los diferentes tipos de máquinas eléctricas.", Créditos: 3, horast: 1, horasp: 2, Profesor:"Favio Nicolas Rosero", Aula:"604MI", Prerrequisitos:"Electricidad y magnetismo", Promedio: 4.5},
  {nombre: "Ecuaciones Diferenciales", codigo: "84029", Descripcion: "Es una materia que se enfoca en el estudio de ecuaciones que relacionan una función desconocida con sus derivadas. Estas ecuaciones son fundamentales para describir fenómenos en ciencias e ingeniería, como el movimiento, el crecimiento poblacional, y la transferencia de calor", Créditos: 2, horast: 1, horasp: 2, Profesor:"Marcela Gomez", Aula:"604MI", Prerrequisitos:"Calculo integral", Promedio: 4.2},
  {nombre: "Cloud Computing Foundations 2", codigo: "84030", Descripcion: "Es una materia en la que teniendo como base los conocimientos adquiridos en el curso de cloud computing foundations 1, en esta materia ya se profundiza mas en el cloud computing aprendiendo a programar aplicaciones web en la nube haciendo uso de servidor de base de datos de google (Google Firebase)", Créditos: 2, horast: 1, horasp: 1, Profesor:"Gustavo Sánchez", Aula:"601MI", Prerrequisitos:"Cloud Computing Foundations I", Promedio: 4.3}, 
  {nombre: "Estructuras de datos 1", codigo: "84031", Descripcion: "La materia de estructuras de datos enseña cómo organizar, almacenar y gestionar datos de manera eficiente para facilitar su procesamiento y análisis en programas informáticos con listas enlazadas y archivos. Es fundamental para el desarrollo de algoritmos y optimización de software.", Créditos: 3, horast: 2, horasp: 2, Profesor:"Fabian Parra", Aula:"603MI", Prerrequisitos:"Algoritmos y programacion 3", Promedio: 4.1},
  {nombre: "Electronica digital", codigo: "84032", Descripcion: "La materia de electronica digital es una rama de la electrónica que se enfoca en el estudio y diseño de circuitos que operan con señales digitales, es decir, aquellas que solo tienen dos estados posibles: 0 y 1 (bajo y alto, o falso y verdadero). Estos circuitos son la base de dispositivos electrónicos modernos, como computadoras, teléfonos móviles y sistemas de comunicación.", Créditos: 2, horast: 1, horasp: 2, Profesor:"Javier Villalba", Aula:"Laboratorio de electrónica, Alvernia", Prerrequisitos:"N/A", Promedio: 4.2},
  {nombre: "Estadistica Inferencial", codigo: "84033", Descripcion: "La materia de estadistica inferencial es un complemento del anterior curso de estadística que utiliza datos de una muestra para hacer estimaciones, predicciones o generalizaciones sobre una población más grande. A diferencia de la estadística descriptiva, que solo resume los datos observados, la inferencial permite extraer conclusiones sobre un grupo más amplio, incluso cuando solo se cuenta con una pequeña parte de la información.", Créditos: 3, horast: 1, horasp: 2, Profesor:"Marcela Gomez", Aula:"603MI", Prerrequisitos:"Probalilidas y estadistica descriptiva", Promedio: 4.2},
  {nombre: "Estructuras de datos 2", codigo: "84034", Descripcion: "En esta materia, teniendo como base los conocimientos adquiridos en el anterior curso de estructuras 1, en este se sigue con lo mismo, solo cambia que la gestion de los datos es hecha por una base de datos relacional SQL en este caso ", Créditos: 3, horast: 2, horasp: 2, Profesor:"Fabian Parra", Aula:"603MI", Prerrequisitos:"Estructuras de datos 1", Promedio: 4.3},
  {nombre: "Teoria de base de datos", codigo: "84035", Descripcion: "En esta materia se centra en el uso de SQL, un lenguaje de programación estándar para gestionar y manipular bases de datos relacionales. SQL permite realizar diversas operaciones sobre los datos, como consultas, inserciones, actualizaciones y eliminación", Créditos: 3, horast: 1, horasp: 2, Profesor:"Danny Cardenas", Aula:"601MI", Prerrequisitos:"N/A", Promedio: 4.5},
  {nombre: "Procesos de investigacion 1", codigo: "84036", Descripcion: "En esta materia se centra en todo lo relacionado al proyecto de grado de los estudiantes, investigacion de los diferetes proyetos de grado y los documentos necesarios", Créditos: 1, horast: 1, horasp: 2, Profesor:"Alejandra Zuleta", Aula:"603MI", Prerrequisitos:"N/A",Promedio: 4.45},
  {nombre: "Formulacion y gestion de proyectos", codigo: "84037", Descripcion: "En esta materia se centra en todo lo relacionado al proyecto de grado de los estudiantes, desde el contexto de todas las instituciones y normas que intervienen en los proyectos de grado", Créditos: 2, horast: 1, horasp: 1, Profesor:"Wilson Andres Castillo", Aula:"603MI", Prerrequisitos:"N/A", Promedio: 4.5},
  {nombre: "Lectura y escritura aplicada a la ingeniería", codigo: "84038", Descripcion: "Esta materia de preparacion para las pruebas saber pro trata toda la parte de lectura critica, analisis de textos y Estructura y redaccion de textos argumentativos", Créditos: 1, horast: 1, horasp: 1, Profesor:"Alejandra Zuleta", Aula:"601MI", Prerrequisitos:"N/A", Promedio: 4.6},
  {nombre: "Python Foundations", codigo: "84039", Descripcion: "En esta materia se introduce al lenguaje de promgramacion python, teniendo como base los conocimientos adquiridos en los anteriores lenguajes vistos en anteriores cursos, en esta materia se ve lo mismo pero en python toda la parte de variables, ciclos, condicionales y algunas estructuras de datos ", Créditos: 2, horast: 1, horasp: 1, Profesor:"Mauricio Lopez", Aula:"601MI", Prerrequisitos:"N/A", Promedio: 4.7},
]);

//consultas

//db.materias.find({ nombre: { $eq: "Curso de desarrollo humano" } });
//db.materias.find({ Créditos: { $gt: 2 } });
//db.materias.find({ horast: { $gte: 3 } });
//db.materias.find({ horasp: { $lt: 2 } });
//db.materias.find({ codigo: { $lte: "84005" } });
//db.materias.find({ Profesor: { $ne: "Nancy Legarda" } });
//db.materias.find({ Aula: { $in: ["601MI", "206SJ"] } });
//db.materias.find({ horasp: { $nin: [1, 2, 3] } });
//db.materias.find();
//db.materias.remove({ nombre: "Mecánica" });
