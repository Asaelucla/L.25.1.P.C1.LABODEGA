export default class Cl_bodega {
    constructor() {
      this.acGanancia = 0;
    }
    procesararticulo(a) {
      this.acGanancia+=this.totaldeGanancia();
    }
    totaldeGanancia() {
      return this.acGanancia;
    }

  }
