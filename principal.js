import cl_Articulo from "../Cl_Articulo";

/**
 * En una bodega se tiene el costo de varios articulos  y se le piensa ganar a cada uno el 50%..
 * Hacer un programa que calcule el total de ganancia que tendra la bodega al venderlos todos.
 * Ej. Costos varios articulos:10, 20, 14,6 y 4
 * La salida requerida presenta el siguiente formato:
 * la ganancia sera de Bs.27
 *
 */
import cl_Articulo from "../Cl_Articulo.js";
import cl_Bodega from "../cl._Bodega.js";

let articulos1 = new cl_Articulo("articulos", 10);
let articulos2 = new cl_Articulo("articulos", 20);
let articulos3 = new cl_Articulo("articulos", 14);
let articulos4 = new c1_Articulo("articulos", 6);
let articulos5 = new cl_Articulo("articulos", 4);

let Bodega = new cl_Bodega();

Bodega.procesararticulos(articulos1);
Bodega.procesararticulos(articulos2);
Bodega.procesararticulos(articulos3);
Bodega.procesararticulos(articulos4);
Bodega.procesararticulos(articulos5);

const gananciaTotal = Bodega.procesararticulos();
console.log(`La ganancia total es: ${gananciaTotal}`);
