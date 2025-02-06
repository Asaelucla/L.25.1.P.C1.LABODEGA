export default class cl_Articulo {
  constructor(costo) {
    this.costo = costo;
  }
  calcularGanancia() {
    const porcentajeGanancia = 0.5;
    return this.costo * porcentajeGanancia;
  }
  set costo(costo) {
    this._costo = +costo;
  }
  get costo() {
    return this._costo;
  }
  ganancia() {
    return this.costo / 2;
  }
}
