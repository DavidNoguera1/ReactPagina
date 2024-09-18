db.productos.insertMany(
    [
    {"producto_id": 1, "nombre": "Muuu", "marca": "Colombina", "tipo": "helado_vaso", "disponibilidad_Locales": 240, "prodMensual": 22000, "precioUMP": 2000, "precioUMA": 2000, "porVenMP": 60, "porVenMA": 75},
    {"producto_id": 2, "nombre": "Vaso Rico", "marca": "Don Rico", "tipo": "helado_vaso", "disponibilidad_Locales": 107, "prodMensual": 10000, "precioUMP": 1700, "precioUMA": 1700, "porVenMP": 55, "porVenMA": 62},
    {"producto_id": 3, "nombre": "Sundae", "marca": "Colombina", "tipo": "helado_vaso", "disponibilidad_Locales": 225, "prodMensual": 24000, "precioUMP": 3500, "precioUMA": 4000, "porVenMP": 57, "porVenMA": 40},
    {"producto_id": 4, "nombre": "Kulfi mini", "marca": "D1", "tipo": "helado_vaso", "disponibilidad_Locales": 160, "prodMensual": 17000, "precioUMP": 3000, "precioUMA": 3900, "porVenMP": 60, "porVenMA": 65},
    {"producto_id": 5, "nombre": "Aloha", "marca": "CremHelado", "tipo": "paleta_agua", "disponibilidad_Locales": 277, "prodMensual": 26000, "precioUMP": 1400, "precioUMA": 1450, "porVenMP": 80, "porVenMA": 80},
    {"producto_id": 6, "nombre": "Ricoleta", "marca": "Don Rico", "tipo": "paleta_agua", "disponibilidad_Locales": 75, "prodMensual": 11000, "precioUMP": 1300, "precioUMA": 1200, "porVenMP": 62, "porVenMA": 75},
    {"producto_id": 7, "nombre": "Fruly", "marca": "Colombina", "tipo": "paleta_agua", "disponibilidad_Locales": 100, "prodMensual": 18000, "precioUMP": 1450, "precioUMA": 1450, "porVenMP": 40, "porVenMA": 43},
    {"producto_id": 8, "nombre": "PaleFruta", "marca": "TreeFruit", "tipo": "paleta_agua", "disponibilidad_Locales": 114, "prodMensual": 9000, "precioUMP": 1900, "precioUMA": 1850, "porVenMP": 60, "porVenMA": 61},
    {"producto_id": 9, "nombre": "Platillo", "marca": "CremHelado", "tipo": "sandwich_helado", "disponibilidad_Locales": 80, "prodMensual": 12000, "precioUMP": 3500, "precioUMA": 3200, "porVenMP": 77, "porVenMA": 80},
    {"producto_id": 10, "nombre": "Cometa", "marca": "Don Rico", "tipo": "sandwich_helado", "disponibilidad_Locales": 111, "prodMensual": 14000, "precioUMP": 2500, "precioUMA": 2500, "porVenMP": 85, "porVenMA": 90},
    {"producto_id": 11, "nombre": "Mini", "marca": "Dos pinos", "tipo": "sandwich_helado", "disponibilidad_Locales": 140, "prodMensual": 16000, "precioUMP": 2700, "precioUMA": 2600, "porVenMP": 75, "porVenMA": 55},
    {"producto_id": 12, "nombre": "Helado de paila", "marca": "De mi pueblo", "tipo": "casero", "disponibilidad_Locales": 70, "prodMensual": 7500, "precioUMP": 2300, "precioUMA": 2200, "porVenMP": 70, "porVenMA": 74},
    {"producto_id": 13, "nombre": "Cream Casero", "marca": "CremHelado", "tipo": "casero", "disponibilidad_Locales": 85, "prodMensual": 8500, "precioUMP": 2000, "precioUMA": 1900, "porVenMP": 64, "porVenMA": 69},
    {"producto_id": 14, "nombre": "Lechado", "marca": "Entre Olivos", "tipo": "casero", "disponibilidad_Locales": 73, "prodMensual": 7000, "precioUMP": 2100, "precioUMA": 2150, "porVenMP": 50, "porVenMA": 55},
    {"producto_id": 15, "nombre": "Coco", "marca": "Green", "tipo": "casero", "disponibilidad_Locales": 90, "prodMensual": 9700, "precioUMP": 2200, "precioUMA": 2000, "porVenMP": 60, "porVenMA": 61},
    {"producto_id": 16, "nombre": "Boccato", "marca": "CremHelado", "tipo": "boccone", "disponibilidad_Locales": 177, "prodMensual": 18000, "precioUMP": 5500, "precioUMA": 5100, "porVenMP": 80, "porVenMA": 84},
    {"producto_id": 17, "nombre": "Maxilatto", "marca": "Colombina", "tipo": "boccone", "disponibilidad_Locales": 120, "prodMensual": 16000, "precioUMP": 4700, "precioUMA": 4800, "porVenMP": 76, "porVenMA": 80},
    {"producto_id": 18, "nombre": "Capricho", "marca": "Dos pinos", "tipo": "paleta_crema", "disponibilidad_Locales": 150, "prodMensual": 13000, "precioUMP": 1500, "precioUMA": 3450, "porVenMP": 77, "porVenMA": 79},
    {"producto_id": 19, "nombre": "Pasion", "marca": "Tosh", "tipo": "paleta_crema", "disponibilidad_Locales": 123, "prodMensual": 11000, "precioUMP": 1600, "precioUMA": 1100, "porVenMP": 30, "porVenMA": 40},
    {"producto_id": 20, "nombre": "Paleta Gourmet", "marca": "Popsi", "tipo": "paleta_crema", "disponibilidad_Locales": 140, "prodMensual": 10000, "precioUMP": 3000, "precioUMA": 3500, "porVenMP": 71, "porVenMA": 72},
    {"producto_id": 21, "nombre": "Jet", "marca": "CremHelado", "tipo": "paleta_chocolate", "disponibilidad_Locales": 210, "prodMensual": 25000, "precioUMP": 3900, "precioUMA": 3800, "porVenMP": 90, "porVenMA": 87},
    {"producto_id": 22, "nombre": "Chocolatada", "marca": "De mi pueblo", "tipo": "paleta_chocolate", "disponibilidad_Locales": 76, "prodMensual": 9000, "precioUMP": 1200, "precioUMA": 1200, "porVenMP": 65, "porVenMA": 69},
    {"producto_id": 23, "nombre": "Choco Snack", "marca": "Dos Pinos", "tipo": "paleta_chocolate", "disponibilidad_Locales": 130, "prodMensual": 11000, "precioUMP": 1600, "precioUMA": 1650, "porVenMP": 80, "porVenMA": 81},
    {"producto_id": 24, "nombre": "Polo Barra", "marca": "Entre Olivos", "tipo": "paleta_chocolate", "disponibilidad_Locales": 108, "prodMensual": 9500, "precioUMP": 1100, "precioUMA": 1200, "porVenMP": 60, "porVenMA": 65},
    {"producto_id": 25, "nombre": "Dracula", "marca": "CremHelado", "tipo": "paleta_chocolate", "disponibilidad_Locales": 189, "prodMensual": 18000, "precioUMP": 4400, "precioUMA": 4500, "porVenMP": 80, "porVenMA": 90},
    {"producto_id": 26, "nombre": "Gourmet Envase", "marca": "Popsi", "tipo": "tarro _helado", "disponibilidad_Locales": 94, "prodMensual": 14000, "precioUMP": 34000, "precioUMA": 36000, "porVenMP": 70, "porVenMA": 67},
    {"producto_id": 27, "nombre": "Kulfi Bandeja", "marca": "D1", "tipo": "tarro _helado", "disponibilidad_Locales": 143, "prodMensual": 16000, "precioUMP": 12500, "precioUMA": 13000, "porVenMP": 88, "porVenMA": 86},
    {"producto_id": 28, "nombre": "Colombina Envase", "marca": "Colombina", "tipo": "tarro _helado", "disponibilidad_Locales": 81, "prodMensual": 12000, "precioUMP": 32000, "precioUMA": 33500, "porVenMP": 60, "porVenMA": 62},
    {"producto_id": 29, "nombre": "Mimo Antojo", "marca": "Mimos", "tipo": "cono crema", "disponibilidad_Locales": 197, "prodMensual": 22000, "precioUMP": 4400, "precioUMA": 4500, "porVenMP": 84, "porVenMA": 87},
    {"producto_id": 30, "nombre": "Mimo Antojo Sencillo", "marca": "Mimos", "tipo": "cono crema", "disponibilidad_Locales": 112, "prodMensual": 22000, "precioUMP": 3600, "precioUMA": 3500, "porVenMP": 81, "porVenMA": 83},
    {"producto_id": 31, "nombre": "Conito", "marca": "De mi pueblo", "tipo": "cono crema", "disponibilidad_Locales": 60, "prodMensual": 6500, "precioUMP": 1850, "precioUMA": 1750, "porVenMP": 76, "porVenMA": 79},
    {"producto_id": 32, "nombre": "Mini Cono", "marca": "San Fermin", "tipo": "cono crema", "disponibilidad_Locales": 67, "prodMensual": 7200, "precioUMP": 2000, "precioUMA": 1900, "porVenMP": 60, "porVenMA": 65},
    {"producto_id": 33, "nombre": "BonIce Sencillo", "marca": "BonIce", "tipo": "hielitos", "disponibilidad_Locales": 150, "prodMensual": 17000, "precioUMP": 700, "precioUMA": 750, "porVenMP": 70, "porVenMA": 73},
    {"producto_id": 34, "nombre": "BonIce Doble", "marca": "BonIce", "tipo": "hielitos", "disponibilidad_Locales": 170, "prodMensual": 19000, "precioUMP": 1000, "precioUMA": 950, "porVenMP": 75, "porVenMA": 78},
    {"producto_id": 35, "nombre": "BonIce Mega", "marca": "BonIce", "tipo": "hielitos", "disponibilidad_Locales": 110, "prodMensual": 12000, "precioUMP": 2000, "precioUMA": 2200, "porVenMP": 60, "porVenMA": 67},
    {"producto_id": 36, "nombre": "Kulfi torta helada", "marca": "D1", "tipo": "tarta_helado", "disponibilidad_Locales": 90, "prodMensual": 9700, "precioUMP": 14500, "precioUMA": 14600, "porVenMP": 50, "porVenMA": 57},
    {"producto_id": 37, "nombre": "Popsi Torta helada", "marca": "Popsi", "tipo": "tarta_helado", "disponibilidad_Locales": 120, "prodMensual": 10500, "precioUMP": 51150, "precioUMA": 51000, "porVenMP": 70, "porVenMA": 72},
    {"producto_id": 38, "nombre": "Tarta helada familiar", "marca": "San Fermin", "tipo": "tarta_helado", "disponibilidad_Locales": 73, "prodMensual": 9000, "precioUMP": 32000, "precioUMA": 31000, "porVenMP": 80, "porVenMA": 79},
    {"producto_id": 39, "nombre": "Batilado", "marca": "Quala", "tipo": "helado_polvo", "disponibilidad_Locales": 88, "prodMensual": 8900, "precioUMP": 5200, "precioUMA": 5350, "porVenMP": 73, "porVenMA": 77},
    {"producto_id": 40, "nombre": "HeladoYA", "marca": "Deiman", "tipo": "helado_polvo", "disponibilidad_Locales": 103, "prodMensual": 9200, "precioUMP": 5000, "precioUMA": 5200, "porVenMP": 67, "porVenMA": 68},
    {"producto_id": 41, "nombre": "Batilado light", "marca": "Quala", "tipo": "helado_polvo", "disponibilidad_Locales": 88, "prodMensual": 8900, "precioUMP": 5000, "precioUMA": 4900, "porVenMP": 70, "porVenMA": 80},
    {"producto_id": 42, "nombre": "Gelatto de Chicle", "marca": "San Fermin", "tipo": "gelatto", "disponibilidad_Locales": 69, "prodMensual": 8500, "precioUMP": 3200, "precioUMA": 3150, "porVenMP": 89, "porVenMA": 70},
    {"producto_id": 43, "nombre": "Platanatto", "marca": "Entre Olivos", "tipo": "gelatto", "disponibilidad_Locales": 50, "prodMensual": 9300, "precioUMP": 2500, "precioUMA": 2900, "porVenMP": 57, "porVenMA": 55},
    {"producto_id": 44, "nombre": "Gelatto Basico", "marca": "CremHelado", "tipo": "gelatto", "disponibilidad_Locales": 144, "prodMensual": 12300, "precioUMP": 4000, "precioUMA": 3800, "porVenMP": 67, "porVenMA": 70},
    {"producto_id": 45, "nombre": "Malteada Clásica", "marca": "Popsi", "tipo": "malteada", "disponibilidad_Locales": 140, "prodMensual": 15000, "precioUMP": 3500, "precioUMA": 3600, "porVenMP": 80, "porVenMA": 85},
    {"producto_id": 46, "nombre": "Malteada Tropical", "marca": "Green", "tipo": "malteada", "disponibilidad_Locales": 125, "prodMensual": 13500, "precioUMP": 3300, "precioUMA": 3400, "porVenMP": 75, "porVenMA": 78},
    {"producto_id": 47, "nombre": "Malteada Chocolate", "marca": "Colombina", "tipo": "malteada", "disponibilidad_Locales": 110, "prodMensual": 12000, "precioUMP": 3000, "precioUMA": 3100, "porVenMP": 70, "porVenMA": 73},
    {"producto_id": 48, "nombre": "Postre Frío", "marca": "Frutos", "tipo": "otros", "disponibilidad_Locales": 95, "prodMensual": 8500, "precioUMP": 2700, "precioUMA": 2650, "porVenMP": 65, "porVenMA": 68},
    {"producto_id": 49, "nombre": "Postre Basico", "marca": "Nieves", "tipo": "otros", "disponibilidad_Locales": 100, "prodMensual": 9000, "precioUMP": 2900, "precioUMA": 3000, "porVenMP": 60, "porVenMA": 62},
    {"producto_id": 50, "nombre": "Rollo de coco helado", "marca": "D1", "tipo": "otros", "disponibilidad_Locales": 80, "prodMensual": 7500, "precioUMP": 2500, "precioUMA": 2600, "porVenMP": 68, "porVenMA": 70}
]

);

// db.productos.find({$and: [{"marca": "Don Rico"}, {"disponibilidad_Locales": {$gt: 100}}]}) Encuentra productos "Don Rico" disponibles en 100 locales o mas
// db.productos.find({"prodMensual": {$gte: 20000, $lte: 30000}}) Encunetra productos cuya produccion mensual este entre 20000 y 30000 unidades
// db.productos.find({"marca": "Colombina", "$expr": {$gt: ["$porVenMP", "$porVenMA"]}}) Encuentra productos de la marca Colombina donde se compara si su porVenMP es mayor al porVenMA
// db.productos.find({"$and": [{"disponibilidad_Locales": {$not: {$eq: 100}}}, {"disponibilidad_Locales": {$lt: 70}}]}) Encuentra productos que NO poseen una disponibilidad_Locales de 100 y son menores a 80
// db.productos.find({"porVenMA": {$in: [80, 82, 84, 86, 88, 90]}}) Encuentra productos con un porVenMA de 80-90 en rangos de 2 en 2
// db.productos.find({"$and": [{"tipo": "paleta_chocolate"},{"prodMensual": {$gt: 6000, $lt: 10000}}]}) Encuentra productos de paleta de chocolate con producciones mensuales de 6000 a 10000
// db.productos.find({"producto_id": {$in: [49, 50]}}) 
// db.productos.find({"$or": [{"marca": "BonIce"},{"precioUMA": {$lt: 1000}}]}) Encuntra productos de BonIce O aquellos que tengan precios inferiores a 1000
// db.productos.find({"$and": [{"disponibilidad_Locales": {$gt: 200}}, {"marca": {$in: ["Colombina", "CremHelado"]}}]}) Mustra productos con disponibilidad en locales mayor a 200 de las marcas Colombina y CremHelado
// db.productos.find({"$or": [{"porVenMP": {$lt: 50}}, {"porVenMA": {$lt: 50}}]}) Muestra productos cuyos porVenMP y porVenMA sean inferiores a 50
// db.productos.find({"$nor": [{"marca": "Colombina"}, {"marca": "CremHelado"}, {"disponibilidad_Locales": {$lt: 180}}]})
// db.productos.find({ "tipo": "hielitos", "marca": { $ne: "BonIce" } }) Muestra productos del tipo "hielitos" pero que no sean de la marca "BonIce"
// db.productos.find({ "precioUMA": { $gte: 30000, $lte: 55000 } }) Muestra productos cuyo precio actual este entre los 30000 y 55000
// db.productos.find({ "tipo": "tarta_helado", "precioUMA": { $lte: 30000 } }) Muestra productos del tipo "tarta_helado" cuyo precio unitario actual este por debajo 30000 pesos
// db.productos.find({ "$and": [ { "tipo": "cono crema" }, { "precioUMP": { $gte: 1500, $lte: 2500 } }, { "porVenMP": { $lt: 70 } } ] }) Muestra productos del tipo cono crema que cuesten entre 1500-2500 y su porcentaje de ventas el mes pasado sea menor a 70
//db.productos.find({ "$and": [ { "marca": { $in: ["Colombina", "CremHelado"] } }, { "prodMensual": { $lt: 15000 } }, { "porVenMA": { $lt: 65 } } ] })
//db.productos.find({ $expr: { $gt: ["$porVenMA", "$porVenMP"] }, disponibilidad_Locales: { $lt: 70 } })
//db.productos.find({ $and: [ { disponibilidad_Locales: { $lte: 50 } }, { porVenMA: { $lte: 60 } } ] })
//db.productos.find({ "producto_id": { $in: [1, 7, 8, 44] } })




