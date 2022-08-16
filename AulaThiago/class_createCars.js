class Car {
    constructor(carBrand, year, Km, color, isSubscribed) {
      this.carBrand = carBrand;
      this.year = year;
      this.Km = Km;
      this.color = color;
      this.isSubscribed = isSubscribed;
    }
  }  

let fiatUno = new Car('Fiat',1989,21000,'Vermelho',true);
let hondaCivic = new Car('Honda',2018,21000,'Vermelho',false);

let cars = [];
cars.push(fiatUno);
cars.push(hondaCivic);

cars.forEach(carro => {
    console.log(`O ${carro.carBrand} selecionado possui a cor ${carro.color} e é do ano ${carro.year}`);
});