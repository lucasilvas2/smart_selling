const unities = {
  1: {
    unity: "g",
    state: "solid",
  },
  2: {
    unity: "Kg",
    state: "solid",
  },
  3: {
    unity: "mL",
    state: "liquid",
  },
  4: {
    unity: "L",
    state: "liquid",
  },
};

class DetailsIngredients {
  constructor(name, unityTotal, value, quantityTotal, unityUsed, quantityUsed) {
    this.name = name;
    this.unityTotal = unityTotal;
    this.unityUsed = unityUsed;
    this.price = value;
    this.quantityTotal = quantityTotal;
    this.quantityUsed = quantityUsed;
  }

  priceUsed() {
    let price = stringMoneyToNumber(this.price);
    return parseFloat((this.quantityUsed * price) / this.quantityTotal).toFixed(2);
  }
}


function stringMoneyToNumber(money) {
    return Number(money.replace('.', '').replace(',', '.'));
}