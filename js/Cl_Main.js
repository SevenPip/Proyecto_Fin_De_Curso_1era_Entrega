/*Respuestas que debe ofrecer el programa:

1*  ¿Qué precio total tiene la mercancía? -
2*  ¿Cuál es el departamento con menor valor en mercancía?-
3*  ¿Cuál es el valor promedio por departamento de los productos?-
4*  ¿Cuál es la cantidad total de cada artículo en la tienda?-
5*  ¿Cuánto dinero se obtendría si se vendieran todos los vestidos disponibles?-
6*  ¿Cuál es el producto más caro en el departamento de muebles?
7*  ¿Cuánto se necesitaría para comprar toda la mercancía disponible en el departamento de ropa?
8*  ¿Cuántas unidades de sábanas y toallas se tienen en existencia en total?
9*  ¿Cuál es el promedio de precios de los artículos en el departamento de accesorios para el hogar?
10* ¿Cuánto costaría comprar toda la ropa disponible en la tienda?
11* ¿Cuántas unidades de camisas y corbatas están disponibles en total?
12* ¿Cuántas unidades de zapatos y playeras hay en total?
13* ¿13Cuántas unidades de cada artículo hay en el departamento de muebles?
*/
import Cl_mTienda from "./Cl_mTienda.js";
import Cl_vProductos from "./Cl_vProductos.js";
import Cl_vTienda from "./Cl_vTienda.js";
import Cl_vReportar from "./Cl_vReportar.js";
import Cl_mProductos from "./Cl_mProductos.js";


export default class Cl_Main {
    constructor() {
        this.app = {};
        this.app.mTienda = new Cl_mTienda();
        this.app.vProductos = new Cl_vProductos(this.app);
        this.app.vTienda = new Cl_vTienda(this.app);
        this.app.vReportar = new Cl_vReportar(this.app);
    
        this.app.mTienda.VerArreglo();
    
    
    }   
}
let producto = new Cl_mProductos
console.log(producto.codigo)