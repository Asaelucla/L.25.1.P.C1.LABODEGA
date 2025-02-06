export default class cl_Bodega {
  constructor() {
    this.acGanancia = 0;
    this.articulos = [];
  }
  agregarArticulos(articulos) {
    let totaldeGanancia = 0;
    this.articulos.forEach((articulos) => {
      totaldeGanancia += articulos.calcularGanancia();
    });
    return totaldeGanancia;
  }
  procesararticulos(a) {
    this.acGanancia = this.acGanancia + this.acGanancia();
  }
  totaldeGanancia() {
    return this.acGanancia;
  }
}
