let supermarket = {
  name: "Хрен",
  beginningWork: 8,
  endWork: 23,
  address: "ул.Хреновая, д.1",
  workers: 3,
  product: {
    meat: 25,
    crisps: 87,
    juice: 54,
  },
};

let todoList = {
  staff: [
    {
      nameEmployee: "Шуди",
      pointForSale: 0,
    },
    {
      nameEmployee: "Шапа",
      pointForSale: 0,
    },
    {
      nameEmployee: "Маша",
      pointForSale: 0,
    },
  ],
  HowMuchSold: function () {
    for (let i = 0; i < todoList.staff.length; i++) {
		if(this.staff[i].pointForSale>=5){
			console.log(this.staff[i].nameEmployee + ' Можешь идти домой');
		} else{
			console.log(
				`Имя работника:${todoList.staff[i].nameEmployee}  баллы:${todoList.staff[i].pointForSale}`
			 );
		}
      
    }
  },
  sellMeat: function (index) {
    supermarket.product.meat -= 1;
    this.staff[index].pointForSale += 1;
  },
  sellCrisps: function (index) {
    supermarket.product.crisps -= 1;
    this.staff[index].pointForSale += 1;
  },
  sellJuice: function (index) {
    supermarket.product.juice -= 1;
    this.staff[index].pointForSale += 1;
  },

};

todoList.sellMeat(1);
todoList.sellMeat(1);
todoList.sellMeat(1);
todoList.sellMeat(1);
todoList.sellCrisps(1)
todoList.HowMuchSold();
