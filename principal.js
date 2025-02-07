/**
 * En una Bodega se tiene el costo de varios articulos y se le piensa ganar a cada uno del 50%
 * Hacer un programa que calcule el total de ganacia que tendra la bodega al vendedor todos,
 * Ej. costo varios articulos: 10,2,14,6 y 4
 * la Salida requerida presenta el siguiente formato:
 * la ganancia sera de Bs.27
 */
import Cl_articulo from "./Cl_articulo.js";
import Cl_bodega from "./Cl_bodega.js";

let articulo1 = new Cl_articulo("articulo 1", 10);
let articulo2 = new Cl_articulo("articulo 2", 20);
let articulo3 = new Cl_articulo("articulo 3", 14);
let articulo4 = new Cl_articulo("articulo 4", 6);
let articulo5 = new Cl_articulo("articulo 5", 4);

let bodega = new Cl_bodega();

bodega.procesararticulo(articulo1);
bodega.procesararticulo(articulo2);
bodega.procesararticulo(articulo3);
bodega.procesararticulo(articulo4);
bodega.procesararticulo(articulo5);

const gananciaTotal = bodega.totaldeGanancia();
console.log(`La ganancia total es: ${gananciaTotal}`);
