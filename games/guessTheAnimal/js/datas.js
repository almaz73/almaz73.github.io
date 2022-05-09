angular.module('app').factory('datas', function () {

   var questions = [
      {id: 1, text: "Это домашнее животное", isAsk: true},
      {id: 2, text: "Кошка", isAsk: false},
      {id: 3, text: "Волк", isAsk: false}
   ];

   questions = JSON.parse(localStorage.getItem('Animals')) || questions; //если есть в кэше

   return {
      questions: questions,
      getDataById: function (id) {
         for (a in this.questions) {
            if (this.questions[a].id == id)return this.questions[a];
         }
         // return this.questions.find(el => el.id === id); // не подходит для IE
      },
      setNewAnimal: function (id, text, ask) {
         if(!text || !id) return;
         var element = this.getDataById(id);
         if (!element) {
            this.questions.push({id: id, text: text, isAsk: ask})
         } else {
            element.text = text;
            element.isAsk = ask;
            localStorage.setItem('Animals', JSON.stringify(this.questions)); // в кэш
         }
      }
   }
});