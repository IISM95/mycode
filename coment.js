const todoList = {
	items: [
	  {
		 text: 'Завершить текущий челлендж',
		 completed: false,
	  },
	  {
		 text: 'Отдохнуть во время перерыва',
		 completed: false,
	  },
	  {
		 text: 'Помочь напарнику понять код',
		 completed: false,
	  },
	  {
		 text: 'Выиграть в мафию',
		 completed: true,
	  },
	],
 
	printAll: function() {
		for(let i=0; i<this.items.length; i++){
			console.log(this.print(i));
		}
	},
 
	add: function(text) {
			this.items.unshift(text); 
	},    
 
	remove: function(index) {
		this.items.splice(index,1)
	},
 
	print: function(index) {
		if(todoList.items[index].completed == false){
			console.log(`[ ] ${this.items[index].text}`);
		} else{
			console.log(`[X] ${this.items[index].text}`);
		}
		
	},
 
	complete: function(index) {
		this.items[index].completed = true
		todoList.printAll()
	},
 };
 todoList.complete(2)
 todoList.printAll()
 todoList.add({text: 'Перейти к следующему реализу',completed: false})
 todoList.remove(0)
 todoList.remove(1)
 todoList.print(3)

