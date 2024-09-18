import consulta1 from "../assets/assets2/consulta1.jpg"
import consulta2 from "../assets/assets2/consulta2.jpg"
import consulta3 from "../assets/assets2/consulta3.jpg"
import consulta4 from "../assets/assets2/consulta4.jpg"
import consulta5 from "../assets/assets2/consulta5.jpg"
import consulta6 from "../assets/assets2/consulta6.jpg"
import consulta7 from "../assets/assets2/consulta7.jpg"
import consulta8 from "../assets/assets2/consulta8.jpg"
import consulta9 from "../assets/assets2/consulta9.jpg"
import consulta10 from "../assets/assets2/consulta10.jpg"
import consulta11 from "../assets/assets2/consulta11.jpg"
import consulta12 from "../assets/assets2/consulta12.jpg"
import consulta13 from "../assets/assets2/consulta13.jpg"
import consulta14 from "../assets/assets2/consulta14.jpg"
import consulta15 from "../assets/assets2/consulta15.jpg"
import consulta16 from "../assets/assets2/consulta16.jpg"
import consulta17 from "../assets/assets2/Consulta17.jpg"
import consulta18 from "../assets/assets2/consulta18.jpg"
import consulta19 from "../assets/assets2/consulta19.jpg"
import consulta20 from "../assets/assets2/consulta20.jpg"

export const ListaTarea = [
  {
    titulo: "Consulta 1",
    descripcion1: `La marca de helados "Don Rico" es bastante nueva en el mercado con solo un mes de salida,
    para confirmar sus éxitos se le solicitó a MercaHelado verificar cuáles de sus 3 productos se encuentran
    disponibles en más de 100 locales. Entonces se realizo la siguiente consulta:`,
    consulta: `db.productos.find({$and: [{"marca": "Don Rico"}, {"disponibilidad_Locales": {$gt: 100}}]})`,
    imagen: consulta1,
    descripcion2: `Se obtiene entonces que los productos de la marca que se encuentran disponibles en mas de 100 locales
    son el "Vaso Rico" y el sandwich de helado "Cometa"`,
  },
  {
    titulo: "Consulta 2",
    descripcion1: `Durante una reunion con las marcas asociadas uno de los encargados solicita conocer los productos con
    mayor produccion mensual y para ello supone un rango entre continuo 20000 y 30000 unidades de produccion. Entonces se realizo
    la siguiente consulta:`,
    consulta: `db.collection.find({"prodMensual": {$gte: 20000, $lte: 30000}})`,
    imagen: consulta2,
    descripcion2: `Se obtiene entonces que hay 6 productos cuya produccion mensual esta entre los 20000 y 30000 unidades, dichos productos podrian considerarse
    categorias de "alat demanda" y ademas que pertenecen a marcas reconocidas siendo CremHelado, Colombina y Mimos,"`,
  },
  {
    titulo: "Consulta 3",
    descripcion1: `MercaHelado a decido que implementara alunas categorias de "alcance comercial" para los productos de acuerdo a su
    disponibilidad en locales, la categoria "municipal" aplicaria para productos los cuales NO poseen una disponibilidad
    de 100 locales pero a su vez poseen una disponibilidad de menos de 70 locales. Entonces se realizo la siguiente consulta:`,
    consulta: `db.productos.find({"$and": [{"disponibilidad_Locales": {$not: {$eq: 100}}}, {"disponibilidad_Locales": {$lt: 70}}]})`,
    imagen: consulta3,
    descripcion2: `Se obtiene entonces que hay 3 productos los cuales podrian catalogarse como productos de alcance comercial "municipal",
    ademas, sus marcas "San Farmin" y "De mi pueblo" no son necesariamente reconocidas a niveles regionales grandes o nacionales`,
  },
  {
    titulo: "Consulta 4",
    descripcion1: `La marca de Colombina han notado que existe la posibilidad de que algunos de sus productos esten poseyendo, un
    porcentaje de venta actual inferior al del mes pasado, se colicita encontrar cuales de sus productos poseen un procentaje
    de venta del mes pasado superior al actual. Entonces se realizo la siguiente consulta: `,
    consulta: `db.productos.find({"marca": "Colombina", "$expr": {$gt: ["$porVenMP", "$porVenMA"]}})`,
    imagen: consulta4,
    descripcion2: `Se obtiene entonces que de sus productos, el unico que a reducido su procentaje de ventas es el "Sundae", al ver 
    su informacion podria deducirse que es por el incremento de su precio de 3500 a 4000 pesos`,
  },
  {
    titulo: "Consulta 5",
    descripcion1: `Por simple curiosidad durante una de las reuniones, uno de los encargados le interesa conocer, cual es la informacion sobre
    los 2 ultimo productos añadidos a la base de datos, entonces, se realiza la siguiente consulta:`,
    consulta: `db.productos.find({"producto_id": {$in: [49, 50]}})`,
    imagen: consulta5,
    descripcion2: `Se obtiene que los productos son el "Postre Basico" y "Rollo de coco helado" en la categoria de otros (pendientes por categorizar o sin
    categoria especifica). En este caso una buqueda por rango limitado si seria adecuado pues obtenemos resultados mas exactos de acuerdo a lo solicitado`,
  },
  {
    titulo: "Consulta 6",
    descripcion1: `Se sabe que hay 50 productos registrados dentro de MercaHelado de diversos asociados, y se desea notificar las marcas
    distribuidoras cuyos productos tengan un porcentaje de venta actual entre 80-90, uno de los encargados jefes ordena que la consulta se
    haga en rangos de 2 en 2. Entonces se realizo la siguiente consulta: `,
    consulta: `db.productos.find({"porVenMA": {$in: [80, 82, 84, 86, 88, 90]}})`,
    imagen: consulta6,
    descripcion2: `Se obtiene entonces que hay 8 productos los cuales podrian considerarse un rotundo exito de ventas de los cuales la 
    mitad son de "Crem Helado" y el esto son de marcas mas varias. Sin embargo, esta consulta por rango limitado resultaria no tan pracita
    pues se le advierte al encargado que numeros impares podrian ser omitidos en los resultados y seria mejor emplear un rango continuo`,
  },
  {
    titulo: "Consulta 7",
    descripcion1: `Se sabe que las paletas de chocolate el producto con mayores registros en la base de Mercahelado, habiendo 5 de ellos
    , se desea conocer cuales de estas poseen producciones mensuales medias y se propone un rango continuo de 6000-10000. Se realiza la siguiente consulta: `,
    consulta: `db.productos.find({"$and": [{"tipo": "paleta_chocolate"},{"prodMensual": {$gt: 6000, $lt: 10000}}]})`,
    imagen: consulta7,
    descripcion2: `Se obtiene entonces que hay 2 paletas cuyas producciones mensuales superan las 6000 unidades pero no las 10000 y que pertecen a marcas no tan
    reconocidas.`,
  },
  {
    titulo: "Consulta 8",
    descripcion1: `Durante una reunion con las marcas asociadas el encagado de BonIce lanzo la siguiente afirmacion, "...con la constante inflacion de precios ya casi
    no se encuentra productos cuyos precios unitarios actuales a sean inferiores a 1000 pesos, creo que los unicos productos por debajo de este precio son los de mi
    marca a excepcion del "BonIce mega" porque es mucho mas grandes, creo". Para confirmar si la afirmacion es cierta se realizo la siguiente consulta`,
    consulta: `db.productos.find({"$or": [{"marca": "BonIce"},{"precioUMA": {$lt: 1000}}]})`,
    imagen: consulta8,
    descripcion2: `Se obtienen entonces los productos registrados de BonIce y al observas sus precios efectivamente el unico cuyo precio unitario actual esta por encima
    de 1000 pesos es el "BonIce" mega, la afirmacion del encargado resulta cierta al no haer otros productos que no fueran de BonIce con precios inferiores a los 1000 pesos`,
  },
  {
    titulo: "Consulta 9",
    descripcion1: `Las marcas Colombina y CremHelado han sido las mas dominanates el mercado de productos congelados dulces a base de agua o lacteos, por lo que es facil
    suponer que la disponibilidad de algunos de sus productos esta por encima de los 200 locales. De manera amistosa dos encargados de la marca apuestan para ver cual marca
    posee una mayor cantidad de productos con dicha disponibilidad en locales. La mayoria piensa que CremHelado sera la marca con mas productos bajo estas condiciones. Se 
    realiza la siguiente consulta para corroborar la afirmacion`,
    consulta: `db.productos.find({"$and": [{"disponibilidad_Locales": {$gt: 200}}, {"marca": {$in: ["Colombina", "CremHelado"]}}]})`,
    imagen: consulta9,
    descripcion2: `Se obtiene que hay un empate entre las 2 marcas al poseer una misma cantidad de productos con disponibilidad superior a 200,por lo que la  
    afirmacion realizada por la mayoria es incorrecta.`,
  },
  {
    titulo: "Consulta 10",
    descripcion1: `Las anterior consulta demostro que algunos productos tanto de Colombina como CremHelado demustran una clara superioridad en disponibilidad, esto despierta
    el interes de un encargado quien solicita conocer que otros productos tienen disponibilidades similares, pero, bajo las condiciones que no pertenezcan a estas 2 marcas previas
    o tengan una disponibilidad en locales menor a 180. Para brindar informacion al encargado se relaiza la siguiente consulta`,
    consulta: `db.productos.find({"$nor": [{"marca": "Colombina"}, {"marca": "CremHelado"}, {"disponibilidad_Locales": {$lt: 180}}]})`,
    imagen: consulta10,
    descripcion2: `Se obtiene que solamente hay UN producto el cual no pertence a ni a Colombina ni a CremHelado cuya disponibilidad sea NO menor a 180 locales, 
    el cual es el cono crema "Mimo antojo" de la marca Mimos, puede suponerse que este unico producto es el mas comercializado en su categoria y en futuros meses
    lograra superar la disponibilidad en locales con mas de 200.`,
  },
  {
    titulo: "Consulta 11",
    descripcion1: `Como plataforma puente de distirbucion de productos MercaHelado debe alertar a sus marcas asociadas cuando un producto tiene procentajes de venta menores al 50%
    tanto en un mes pasado como en el mes actual, para informr sobre posibles recuperaciones o perdidas. La consulta a aplicarse para estos casos es la siguiente:`,
    consulta: `db.productos.find({"$or": [{"porVenMP": {$lt: 50}}, {"porVenMA": {$lt: 50}}]})`,
    imagen: consulta11,
    descripcion2: `Se obtiene entonces que hay 3 productos los cuales estan por debajo del 50% de ventas, donde la paleta de agua "Fruly" aparentan tener una recuperacion bastante lenta 
    mientras que la paleta de crema "Pasion" consiguio alzar un 10%, por su parte, el "Sundae" tubo una perdida de 17%`,
  },
  {
    titulo: "Consulta 11",
    descripcion1: `Como plataforma puente de distirbucion de productos MercaHelado debe alertar a sus marcas asociadas cuando un producto tiene procentajes de venta menores al 50%
    tanto en un mes pasado como en el mes actual, para informr sobre posibles recuperaciones o perdidas. La consulta a aplicarse para estos casos es la siguiente:`,
    consulta: `db.productos.find({"$or": [{"porVenMP": {$lt: 50}}, {"porVenMA": {$lt: 50}}]})`,
    imagen: consulta11,
    descripcion2: `Se obtiene entonces que hay 3 productos los cuales estan por debajo del 50% de ventas, donde la paleta de agua "Fruly" aparentan tener una recuperacion bastante lenta 
    mientras que la paleta de crema "Pasion" consiguio alzar un 10%, por su parte, el "Sundae" tubo una perdida de 17%`,
  },
  {
    titulo: "Consulta 12",
    descripcion1: `Continuando una reunion previa, un encargado de las marcas asociadas afirma que existe la gran posibilidad de que todos productos de tipo "hielitos" 
    sean solo de la marca BonIce y que de ser cierto representa una gran oportunidad para otras marcas para entrar en competencia. Para ver si esta posibilidad es una verdad
    se realiza la siguiente consulta:`,
    consulta: `db.productos.find({ "tipo": "hielitos", "marca": { $ne: "BonIce" } })`,
    imagen: consulta12,
    descripcion2: `Se obtiene entonces que no hay otros productos de tipo "hielitos" que no sean de BonIce, por lo que la posibilidad mencionada se convierte en una verdad ,
    pero, tambien podria significar que BonIce monopolizo este tipo de producto la punto de no haber espacio para un competidor mas en esta categoria`,
  },
  {
    titulo: "Consulta 13",
    descripcion1: `En un descuido accidentalemnte se borran algunos informes sobre los precios unitarios actuales mas caros, como la reunion es proxima en 5 
    minutos, rapidamente se solicita a los encargados de la base de datos un pequeño reporte con los productos regitrados con un precio unitario actual entre
    los 30000 y 55000 pesos, la consulta que se elabora es la siguiente:`,
    consulta: `db.productos.find({ "precioUMA": { $gte: 30000, $lte: 55000 } })`,
    imagen: consulta13,
    descripcion2: `Se obtiene entonces hay 3 productos cuyos precios actuales estan en el rango definido, donde 2 pertenecen al tipo  "tarta_helada"
    y uno a "helados_envase" `,
  },
  {
    titulo: "Consulta 14",
    descripcion1: `A raiz de la consulta anterior se da cuenta de que los productos de los tipos "tarta_helada" pueden ser muy caros para un comprador casual, en respuesta
    a esta situacion se encarga ahora buscar productos de este tipo cuyo precio actual este por debajo de los 0000 pesos, para darle mayor apoyo publcitario, 
    la consulta que se elabora es la siguiente:`,
    consulta: `db.productos.find({ "tipo": "tarta_helado", "precioUMA": { $lte: 30000 } })`,
    imagen: consulta14,
    descripcion2: `Se obtiene entonces hay un solo del tipo  "tarta_helada cuyo precio esta por debajo de los 30000 pesos, al darle un mayor bono publicitario
    existira la posibilidad de icrementar su porcentaje de venta para el siguiente mes.`,
  },
  {
    titulo: "Consulta 15",
    descripcion1: `Se propone realizar una clasificacion de los productos de acuerdo al numero de produccion mensual, la categoria "produccion municipal" corresponderia
    a aquellos productos que no lograsen superar las 7000 unidades, se elabora la siguiente consulta para encontrar los productos a clasificarse en esta categoria:`,
    consulta: `db.productos.find({ "prodMensual": { $lte: 7000 } })`,
    imagen: consulta15,
    descripcion2: `Se obtiene entonces hay un solo del tipo  "tarta_helada cuyo precio esta por debajo de los 30000 pesos, al darle un mayor bono publicitario
    existira la posibilidad de icrementar su porcentaje de venta para el siguiente mes.`,
  },
  {
    titulo: "Consulta 16",
    descripcion1: `Se ha identificado que hay productos los cuales no estan vendiendo tan "positivamente " como deberian, para ello se aplica una posible promoción especial 
    para elevar las ventas del producto y este apliaca solo si el porcentaje de ventas del mes pasado  de dicho producto haya sido inferior al 70%. Se solicita hacer una revision
    de este estilo para productos de tipo "cono_crema" cuyo precio unitario del mes pasado estuviera en el rango de 1500 a 2500`,
    consulta: `db.productos.find({ "$and": [ { "tipo": "cono crema" }, { "precioUMP": { $gte: 1500, $lte: 2500 } }, { "porVenMP": { $lt: 70 } } ] })`,
    imagen: consulta16,
    descripcion2: `Se obtiene entonces hay un solo un producto del tipo "cono crema" el cual calificaria para la promocion espacial.`,
  },
  {
    titulo: "Consulta 17",
    descripcion1: `Las marcas Colombina y CremHelado esta considerando reducir la produccion mensual de productos cuya cantidad a producirse sea menor a 15000 y 
    su porcentaje de venta actual este por debajo del 65, para ello le solicitan a MercaHelado una consulta con los anteriores parametros, la consulta es la siguiente`,
    consulta: `db.productos.find({ "$and": [ { "marca": { $in: ["Colombina", "CremHelado"] } }, { "prodMensual": { $lt: 15000 } }, { "porVenMA": { $lt: 65 } } ] })`,
    imagen: consulta17,
    descripcion2: `Se obtiene entonces hay un solo un producto correspondiente a Colombina el cual posiblemente vera su produccion reducida por su porcentaje de ventas
    y numero d eproduccion.`,
  },
  {
    titulo: "Consulta 18",
    descripcion1: `Para optimizar estrategias de promoción y distribución, se busca identificar productos con un porcentaje de venta mensual actual superior al porcentaje de venta del mes pasado 
    y disponibilidad local menor a 70. Estos productos podrían estar ganando popularidad rápidamente y necesitan un análisis para evitar desabastecimientos en tiendas locales.`,
    consulta: `db.productos.find({ $expr: { $gt: ["$porVenMA", "$porVenMP"] }, disponibilidad_Locales: { $lt: 70 } })`,
    imagen: consulta18,
    descripcion2: `Los productos obtenidos en la consulta fueron: 'Mini cono' y el 'Conito'. Como se mencionó anteriormente, 
    estos productos podrían estar ganando popularidad rápidamente y es importante asegurarse de que la distribución se ajuste a la demanda.`,
  },
  {
    titulo: "Consulta 19",
    descripcion1: `Para evaluar productos que no cumplen con al menos uno de los dos criterios específicos de disponibilidad y rendimiento en ventas, se busca identificar aquellos productos que no están 
    disponibles en menor o igual a 50 locales y que tienen un porcentaje de venta mensual actual menor o igual al 60%.`,
    consulta: `db.productos.find({ $and: [ { disponibilidad_Locales: { $lte: 50 } }, { porVenMA: { $lte: 60 } } ] })`,
    imagen: consulta19,
    descripcion2: `Se obtiene como tal un unico producto al cual su marca distribuidora pordia brindarla mas atencion, pues de considerar que los numeros de los parametros
    no suban entonces el "Plannatto" de la marca Entre Olivos podria estancarse.`,
  },
  {
    titulo: "Consulta 20",
    descripcion1: `Por simple curiosidad un encargado quiere ver los productos bajo el producto_id "1, 7, 8, y 44", un encargado de la base de datos le hace el favor 
    con la siguiente consulta:`,
    consulta: `db.productos.find({ "producto_id": { $in: [1, 7, 8, 44] } })`,
    imagen: consulta20,
    descripcion2: `Se obitene que los prodcutos en estas IDs son: El healdo de vaso Muuu, las paletas de agua Fruly y PaleFruta, y el Gellato basico`,
  },
];
