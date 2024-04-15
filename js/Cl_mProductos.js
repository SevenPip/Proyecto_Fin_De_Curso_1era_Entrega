export default class Cl_mProductos {
    constructor(
        codigo = 0,
        departamento = 0,
        nombre = "",
        cantidad = 0,
        precio = 0,
    ) {
        this._codigo = codigo;
        this._departamento = departamento;
        this._nombre = nombre;
        this._cantidad = cantidad;
        this._precio = precio;
      
    }
    set codigo(n) {
        this._codigo = +n;
    }
    get codigo() {
        return this._codigo;
    }
    set departamento(n) {
        this._departamento = +n;
    }
    get departamento() {
        return this._departamento;
    }
    set nombre(n) {
        this._nombre = +n;
    }
    get nombre() {
        return this._nombre;
    }
    set cantidad(n) {
        this._cantidad = +n;
    }
    get cantidad() {
        return this._cantidad;
    }
    set precio(n) {
        this._precio = +n;
    }
    get precio() {
        return this._precio;
    }

}

  