export default class Cl_articulo {
  constructor(costo, nombre) {
    this.costo = costo;
    this.nombre = nombre;
  }
  calcularGanancia() {
    const porcentajeGanancia = 0.5;
    return this.costo * porcentajeGanancia;
  }
  setcosto(costo) {
    this.costo += costo;
  }
  getcosto() {
    return this.costo;
  }
  setnombre(nombre) {
    return this.nombre += nombre;
  }
  getnombre() {
    return this.nombre;
  }
  ganancia() {
    return this.costo / 2;
  }
  gananciaTotal(){
    return gananciaTotal;
  }
}
