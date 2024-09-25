db.vehiculos.insertMany([
  { id: 1, marca: 'Renault', modelo: 'Logan Sedan Full 2022', anioF: 2022, precio: 48000000, consumoCOM: 5.8, color: "Rojo", capacidadP: 4, tipoTransmision: "Automatica", potenciaMTR: 102, sistemaSEG: "Airbag" },
  { id: 2, marca: 'Renault', modelo: 'Logan Stepway', anioF: 2024, precio: 55000000, consumoCOM: 6.0, color: "Plateado", capacidadP: 4, tipoTransmision: "CVT", potenciaMTR: 113, sistemaSEG: "Airbag, Sensores" },
  { id: 3, marca: 'Renault', modelo: 'Koleos 2', anioF: 2017, precio: 78500000, consumoCOM: 4.6, color: "Azul", capacidadP: 5, tipoTransmision: "CVT", potenciaMTR: 129, sistemaSEG: "Sensores" },
  { id: 4, marca: 'Renault', modelo: 'Renault25', anioF: 1988, precio: 16000000, consumoCOM: 8.9, color: "Blanco", capacidadP: 4, tipoTransmision: "Manual", potenciaMTR: 110, sistemaSEG: "Ninguno" },
  { id: 5, marca: 'Chevrolet', modelo: 'Joy 1.4', anioF: 2022, precio: 42000000, consumoCOM: 6.5, color: "Plateado", capacidadP: 4, tipoTransmision: "Manual", potenciaMTR: 97, sistemaSEG: "Airbag, Sensores" },
  { id: 6, marca: 'Chevrolet', modelo: 'D-Max', anioF: 2014, precio: 72000000, consumoCOM: 6.5, color: "Blanco", capacidadP: 5, tipoTransmision: "Manual", potenciaMTR: 190, sistemaSEG: " Control de Tracción, Inmovilizador" },
  { id: 7, marca: 'Chevrolet', modelo: 'Optra', anioF: 2010, precio: 21000000, consumoCOM: 8.3, color: "Negro", capacidadP: 4, tipoTransmision: "Manual", potenciaMTR: 127, sistemaSEG: "Airbag, Freno ABS, Sensores" },
  { id: 8, marca: 'Chevrolet', modelo: 'Sprint', anioF: 2010, precio: 14800000, consumoCOM: 8.3, color: "Plateado", capacidadP: 4, tipoTransmision: "Manual", potenciaMTR: 127, sistemaSEG: "Airbag, Freno ABS, Sensores," },
  { id: 9, marca: 'Skoda', modelo: 'Felicia Lxi', anioF: 1999, precio: 17500000, consumoCOM: 5.6, color: "Blanco", capacidadP: 4, tipoTransmision: "Manual", potenciaMTR: 67, sistemaSEG: "Ninguno" },
  { id: 10, marca: 'Skoda', modelo: 'Fabia Combi', anioF: 2012, precio: 26000000, consumoCOM: 6.5, color: "Plateado", capacidadP: 6, tipoTransmision: "Manual", potenciaMTR: 108, sistemaSEG: "Ninguno" },
  { id: 11, marca: 'Toyota', modelo: 'Corolla Se-g', anioF: 2018, precio: 75000000, consumoCOM: 6.0, color: "Blanco", capacidadP: 5, tipoTransmision: "Manual", potenciaMTR: 132, sistemaSEG: "Airbag, Freno ABS, Inmovilizador" },
  { id: 12, marca: 'Toyota', modelo: 'Yaris Xs', anioF: 2020, precio: 67000000, consumoCOM: 5.7, color: "Gris", capacidadP: 5, tipoTransmision: "Automatica", potenciaMTR: 107, sistemaSEG: "Airbag, Sensor Reversa" },
  { id: 13, marca: 'Toyota', modelo: 'Hilux 4x4', anioF: 2017, precio: 90000000, consumoCOM: 8.5, color: "Rojo", capacidadP: 5, tipoTransmision: "Manual", potenciaMTR: 150, sistemaSEG: "Airbag, Control de Estabilidad, Inmovilizador" },
  { id: 14, marca: 'Toyota', modelo: 'Fortuner Diesel', anioF: 2016, precio: 130000000, consumoCOM: 7.0, color: "Negro", capacidadP: 7, tipoTransmision: "Automatica", potenciaMTR: 177, sistemaSEG: "Airbag, Control de Tracción, Frenos de Disco" },
  { id: 15, marca: 'Toyota', modelo: 'RAV4 Hybrid', anioF: 2019, precio: 160000000, consumoCOM: 4.5, color: "Verde", capacidadP: 5, tipoTransmision: "Automatica", potenciaMTR: 219, sistemaSEG: "Freno ABS, Sensor de Colisión" },
  { id: 16, marca: 'Kia', modelo: 'Picanto Vibrant', anioF: 2019, precio: 43000000, consumoCOM: 5.0, color: "Amarillo", capacidadP: 4, tipoTransmision: "Manual", potenciaMTR: 83, sistemaSEG: "Ninguno" },
  { id: 17, marca: 'Kia', modelo: 'Picanto Emotion', anioF: 2022, precio: 47600000, consumoCOM: 5.0, color: "Plateado", capacidadP: 4, tipoTransmision: "Manual", potenciaMTR: 85, sistemaSEG: "Airbag, Inmovilizador" },
  { id: 18, marca: 'Kia', modelo: 'Seltos EX', anioF: 2020, precio: 93000000, consumoCOM: 6.8, color: "Azul", capacidadP: 5, tipoTransmision: "Automatica", potenciaMTR: 123, sistemaSEG: "Airbag, Control de Estabilidad, Sensor Reversa" },
  { id: 19, marca: 'Kia', modelo: 'Sportage LX', anioF: 2021, precio: 111000000, consumoCOM: 7.2, color: "Blanco", capacidadP: 6, tipoTransmision: "Automatica", potenciaMTR: 184, sistemaSEG: "Airbag, Control de Tracción, Frenos de Disco" },
  { id: 20, marca: 'Mitsubishi ', modelo: 'Montero', anioF: 1996, precio: 45000000, consumoCOM: 10, color: "Plateado", capacidadP: 6, tipoTransmision: "Manual", potenciaMTR: 148, sistemaSEG: "Ninguno" },
  { id: 21, marca: 'Mitsubishi', modelo: 'Eclipse Cross', anioF: 2020, precio: 85000000, consumoCOM: 7.5, color: "Rojo", capacidadP: 5, tipoTransmision: "Automatica", potenciaMTR: 152, sistemaSEG: "Control de Estabilidad" },
  { id: 22, marca: 'Mitsubishi', modelo: 'Outlander', anioF: 2010, precio: 90000000, consumoCOM: 8.0, color: "Negro", capacidadP: 7, tipoTransmision: "Automatica", potenciaMTR: 165, sistemaSEG: "Airbag" },
  { id: 23, marca: 'Jeep', modelo: 'Wrangler Sport', anioF: 2020, precio: 202000000, consumoCOM: 12.0, color: "Verde", capacidadP: 5, tipoTransmision: "Automatica", potenciaMTR: 270, sistemaSEG: "Control de Estabilidad, Sensor de Colisión" },
  { id: 24, marca: 'Jeep', modelo: 'Cherokee Limited', anioF: 2018, precio: 145000000, consumoCOM: 10.5, color: "Azul", capacidadP: 4, tipoTransmision: "Automatica", potenciaMTR: 271, sistemaSEG: "Airbag, Freno ABS, Control de Tracción" },
  { id: 25, marca: 'Jeep', modelo: 'Renegade', anioF: 2019, precio: 96000000, consumoCOM: 8.0, color: "Gris", capacidadP: 5, tipoTransmision: "Manual", potenciaMTR: 170, sistemaSEG: "Airbag, Freno ABS" },
  { id: 26, marca: 'Daihatsu', modelo: 'Feroza', anioF: 1992, precio: 26000000, consumoCOM: 10.0, color: "Plateado", capacidadP: 5, tipoTransmision: "Manual", potenciaMTR: 84, sistemaSEG: "Freno ABS, Control de Estabilidad, Control de Tracción" }, 
  { id: 27, marca: 'Daihatsu', modelo: 'Sirion 1.3', anioF: 2007, precio: 20800000, consumoCOM: 6.9, color: "Negro", capacidadP: 4, tipoTransmision: "Manual", potenciaMTR: 90, sistemaSEG: "Control de Estabilidad, Control de Tracción" }, 
  { id: 28, marca: 'Ford', modelo: 'F150 Semi', anioF: 2001, precio: 36900000, consumoCOM: 14.0, color: "Blanco", capacidadP: 2, tipoTransmision: "Manual", potenciaMTR: 304, sistemaSEG: "Frenos, ABS, Control de Estabilidad, Control de Tracción" }, 
  { id: 29, marca: 'Ford', modelo: 'F150 Raptor', anioF: 2017, precio: 227000000, consumoCOM: 19.0, color: "Rojo", capacidadP: 4, tipoTransmision: "Automatica", potenciaMTR: 450, sistemaSEG: "Freons, ABS, Control de Estabilidad, Control de Tracción" }, 
  { id: 30, marca: 'Ford', modelo: 'Fiesta LX', anioF: 1998, precio: 9800000, consumoCOM: 6.9, color: "Vino", capacidadP: 4, tipoTransmision: "Manual", potenciaMTR: 60, sistemaSEG: "Ninguno" }, 
  { id: 31, marca: 'GMC', modelo: 'Hummer H2', anioF: 2009, precio: 137000000, consumoCOM: 20.0, color: "Gris", capacidadP: 4, tipoTransmision: "Manual", potenciaMTR: 242, sistemaSEG: "Control de Estabilidad, Sensor de Colisión" }, 
  { id: 32, marca: 'GMC', modelo: 'Hummer H3', anioF: 2024, precio: 750000000, consumoCOM: 17.0, color: "Gris", capacidadP: 4, tipoTransmision: "Manual", potenciaMTR: 242, sistemaSEG: "Control de Estabilidad, Sensor de Colisión" }, 
  { id: 33, marca: 'Hafei', modelo: 'Zhongyi', anioF: 2008, precio: 17000000, consumoCOM: 5.0, color: "Blanco", capacidadP: 8, tipoTransmision: "Manual", potenciaMTR: 48, sistemaSEG: "Ninguno" }, 
  { id: 34, marca: 'Karry', modelo: 'Yoyo', anioF: 2020, precio: 40000000, consumoCOM: 5.0, color: "Blanco", capacidadP: 7, tipoTransmision: "Manual", potenciaMTR: 57, sistemaSEG: "Airbag" }, 
  { id: 35, marca: 'Lada', modelo: 'Niva 2121', anioF: 1979, precio: 19000000, consumoCOM: 8.0, color: "Rojo", capacidadP: 2, tipoTransmision: "Manual", potenciaMTR: 75, sistemaSEG: "Freno ABS" }, 
  { id: 36, marca: 'Daewoo', modelo: 'Cielo', anioF: 1999, precio: 10200000, consumoCOM: 6.7 , color: "Plateado", capacidadP: 5, tipoTransmision: "Manual", potenciaMTR: 100, sistemaSEG: "Freno ABS" }, 
  { id: 37, marca: 'Daewoo', modelo: 'Espero', anioF: 2003, precio: 12000000, consumoCOM: 7.2, color: "Rojo", capacidadP: 5, tipoTransmision: "Manual", potenciaMTR: 108, sistemaSEG: "Airbag" },
  { id: 38, marca: 'Daewoo', modelo: 'Lanos', anioF: 2000, precio: 9000000, consumoCOM: 7.0, color: "Azul", capacidadP: 5, tipoTransmision: "Manual", potenciaMTR: 92, sistemaSEG: "Ninguno" },
  { id: 39, marca: 'Hyundai', modelo: 'Accent', anioF: 2018, precio: 45000000, consumoCOM: 6.5, color: "Negro", capacidadP: 5, tipoTransmision: "Automatica", potenciaMTR: 132, sistemaSEG: "Airbag, Freno ABS" },
  { id: 40, marca: 'Nissan', modelo: 'Versa', anioF: 2021, precio: 58000000, consumoCOM: 7.0, color: "Blanco", capacidadP: 5, tipoTransmision: "Manual", potenciaMTR: 100, sistemaSEG: "Airbag, Control de Estabilidad" }
  
]);

//db.vehiculos.find({ color: { $eq: "Amarillo" } });
//db.vehiculos.find({ anioF: { $gt: 2023 } });
//db.vehiculos.find({ precio: { $gte: 100000000 } });
//db.vehiculos.find({ capacidadP: { $lt: 4 } });
//db.vehiculos.find({ potenciaMTR: { $lte: 80 } });
//db.vehiculos.find({ marca: { $ne: "Chevrolet"} });
//db.vehiculos.find({ marca: { $in: ["Skoda", "Lada", "Daewoo"] } });
//db.vehiculos.find({ color: { $nin: ["Negro", "Blanco", "Azul", "Rojo", "Plateado", "Gris"] } });
//db.vehiculos.find({ precio: { $gte: 200000000 }, potenciaMTR: { $gte: 250 } });
//db.vehiculos.deleteOne({ modelo: "Picanto Vibrant" });
//db.vehiculos.find({ marca: { $in: ["Kia"] } });