import Cl_mProductos from "./Cl_mProductos.js";
import { ArrProductos } from "./Ventas.js";

export default class Cl_mTienda {
    constructor() {
        this.acumTotal = 0;
        this.acumCantTotal = 0;
        this.ventaTodosVestidos = 0;
        this.muebleMasCaro = "";
        this.acumTotalRopa = 0;
        this.conTotalSabanasYToallas = 0;
        this.acumHogar = 0;
        this.contHogar = 0;
        this.contTotalCamisasYCorbatas = 0;
        this.contTotalZapatosYPlayeras = 0;

        this.productos = [];
    }
    /* AgregarProducto(
        codigo = 0,
        departamento = 0,
        nombre = "",
        cantidad = 0,
        precio = 0,
    ) {
        let producto = new Cl_mProductos({ codigo, departamento, nombre, cantidad, precio });
        this.productos.push(producto);
        this.setLocalData(this.producto);
    }*/


    PrecioTotal() {
        for (let i = 0; i < ArrProductos.length; i++) {
            this.acumTotal += ArrProductos[i].precio * ArrProductos[i].cantidad;
        }
        return Math.round(this.acumTotal * 100) / 100;
    }

    DepartamentoMenorValor() {
        let valorDepartamento = {
            "Damas": 0,
            "Caballeros": 0,
            "Niños": 0,
            "Lencería": 0,
            "Hogar": 0,
            "Muebles": 0
        };

        for (let producto of ArrProductos) {
            const valorTotal = producto.cantidad * producto.precio;
            valorDepartamento[producto.departamento] += valorTotal;
        }

        let MenorValor = Object.keys(valorDepartamento).reduce((previo, actual) => valorDepartamento[previo] < valorDepartamento[actual] ? previo : actual);
        return MenorValor;
    }
    ValorPromedioDepartamento() {
        let valorDepartamento = {
            1: { total: 0, cantidad: 0 },
            2: { total: 0, cantidad: 0 },
            3: { total: 0, cantidad: 0 },
            4: { total: 0, cantidad: 0 },
            5: { total: 0, cantidad: 0 },
            6: { total: 0, cantidad: 0 }
        };

        for (let producto of ArrProductos) {
            const valorTotal = producto.cantidad * producto.precio;
            valorDepartamento[producto.departamento].total += valorTotal;
            valorDepartamento[producto.departamento].cantidad++;
        }

        let PromedioPorDepartamento = [];
        for (let i = 1; i <= 6; i++) {
            if (valorDepartamento[i].cantidad > 0) {
                const promedio = Math.round((valorDepartamento[i].total / valorDepartamento[i].cantidad) * 100) / 100;
                PromedioPorDepartamento.push(promedio);
            } else {
                PromedioPorDepartamento.push(0);
            }
        }

        let htmlPromedio = '';
        for (let promedio of PromedioPorDepartamento) {
            htmlPromedio += `Departamento= ${promedio}<br/>`;
        }
        ;
        return htmlPromedio;
    }
    cantidadTotalArticulos() {
        for (let i = 0; i < ArrProductos.length; i++) {
            this.acumCantTotal += ArrProductos[i].cantidad;
        }
        return this.acumCantTotal;
    }
    VentaTodosVestidos() {
        for (let i = 0; i < ArrProductos.length; i++) {
            if (ArrProductos[i].nombre == "Vestido") {
                this.ventaTodosVestidos += ArrProductos[i].precio * ArrProductos[i].cantidad;
            }

        }
        return this.ventaTodosVestidos;
    }
    MuebleMasCaro() {
        this.muebleMasCaro = ArrProductos.filter(producto => producto.departamento == 6);
        this.muebleMasCaro.sort((a, b) => b.precio - a.precio);

        return this.muebleMasCaro.length > 0 ? this.muebleMasCaro[0].nombre : 'No hay muebles en el departamento 6';
    }
    PrecioTotalRopa() {
        for (let i = 0; i < ArrProductos.length; i++) {
            if (ArrProductos[i].departamento == 1 || ArrProductos[i].departamento == 2 || ArrProductos[i].departamento == 3 || ArrProductos[i].departamento == 4) {
                this.acumTotalRopa += ArrProductos[i].precio * ArrProductos[i].cantidad;
            }
        }
        return Math.round(this.acumTotalRopa * 100) / 100
    }
    CantTotalSabanasYToallas() {
        for (let i = 0; i < ArrProductos.length; i++) {
            if (ArrProductos[i].nombre == "Sábanas" || ArrProductos[i].nombre == "Toallas") {
                this.conTotalSabanasYToallas += ArrProductos[i].cantidad;
            }
        }
        return this.conTotalSabanasYToallas

    }
    PromedioHogar() {
        for (let i = 0; i < ArrProductos.length; i++) {
            if (ArrProductos[i].departamento == 5) {
                this.acumHogar += ArrProductos[i].precio;
                this.contHogar++;
            }
        }
        return Math.round((this.acumHogar / this.contHogar) * 100) / 100
    }
    CantTotalCamisasYCorbatas() {
        for (let i = 0; i < ArrProductos.length; i++) {
            if (ArrProductos[i].nombre == "Camisa" || ArrProductos[i].nombre == "Corbata") {
                this.contTotalCamisasYCorbatas += ArrProductos[i].cantidad;
            }
        }
        return this.contTotalCamisasYCorbatas
    }
    CantTotalZapatosYPlayeras() {
        for (let i = 0; i < ArrProductos.length; i++) {
            if (ArrProductos[i].nombre == "Zapatos" || ArrProductos[i].nombre == "Playera") {
                this.contTotalZapatosYPlayeras += ArrProductos[i].cantidad;
            }
        }
        return this.contTotalZapatosYPlayeras
    }
    
     UnidadesPorArticuloEnMuebles() {
        let unidadesPorArticulo = {};
        for (let i = 0; i < ArrProductos.length; i++) {
            if (ArrProductos[i].departamento == 6) {
                let nombreArticulo = ArrProductos[i].nombre;
                if (!unidadesPorArticulo[nombreArticulo]) {
                    unidadesPorArticulo[nombreArticulo] = 0;
                }
                unidadesPorArticulo[nombreArticulo] += ArrProductos[i].cantidad;
            }
        }
        let htmlUnidadesPorArticulo = '';
        let hayMuebles = false;
        for (let Articulo in unidadesPorArticulo) {
            htmlUnidadesPorArticulo += `Articulo: ${Articulo}, Unidades: ${unidadesPorArticulo[Articulo]}<br/>`;
            hayMuebles = true;
        }
        if (!hayMuebles) {
            htmlUnidadesPorArticulo = 'No hay muebles en el departamento 6.';
        }
        return htmlUnidadesPorArticulo;
    }






    VerArreglo() {

        let salida = document.getElementById("salida");
        let Tienda = new Cl_mTienda();
        for (let i = 0; i < ArrProductos.length; i++) {
            salida.innerHTML += `Codigo: ${ArrProductos[i].codigo} <br> Departamento: ${ArrProductos[i].departamento} <br> Nombre: ${ArrProductos[i].nombre} <br> Cantidad: ${ArrProductos[i].cantidad} <br> Precio: ${ArrProductos[i].precio} <br> //////////////////////////////////////////// <br>`;
        }

        salida.innerHTML += `El valor total de la Mercancía es: ${Tienda.PrecioTotal()}<br>`
        salida.innerHTML += `El Departamento con el menor valor es: ${Tienda.DepartamentoMenorValor()}<br>`
        salida.innerHTML += `El valor promedio por Departamento de los productos es: ${Tienda.ValorPromedioDepartamento()}`
        salida.innerHTML += `La cantidad total de cada producto es: ${Tienda.cantidadTotalArticulos()}<br>`
        salida.innerHTML += `La venta de todos los vestidos es: ${Tienda.VentaTodosVestidos()}<br>`
        salida.innerHTML += `El mueble mas caro es: ${Tienda.MuebleMasCaro()}<br>`
        salida.innerHTML += `El precio total de la ropa es: ${Tienda.PrecioTotalRopa()}<br>`
        salida.innerHTML += `Las unidades de sábanas y toallas son: ${Tienda.CantTotalSabanasYToallas()}<br>`
        salida.innerHTML += `El promedio de articulos en el departamento de hogar: ${Tienda.PromedioHogar()}<br>`
        salida.innerHTML += `Las unidades de camisas y corbatas son: ${Tienda.CantTotalCamisasYCorbatas()}<br>`
        salida.innerHTML += `Las unidades de Zapatos y Playeras son: ${Tienda.CantTotalZapatosYPlayeras()}<br>`
        salida.innerHTML += `Las unidades de cada articulo en el mueble son: <br> ${Tienda.UnidadesPorArticuloEnMuebles()}`
    }


}
