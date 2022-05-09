var app = angular.module('app', []);

app.controller('askControl', function($scope){});

app.controller('game', function ($scope, datas) {

   $scope.startGame = function () {
      var el = datas.getDataById(1);

      $scope.questions = [];
      $scope.questions.push({notLast: false, verify: undefined, text: el.text, id: el.id, isAsk: el.isAsk});
      hideAll();
      $scope.hideStart = 'hide';
   };


   function hideAll(){
      $scope.hideInputName = 'hide'; // держим скрытым панель для ввода названия нового животного
      $scope.hideInputQuestion = 'hide'; // держим скрытым панель для ввода отличия
      $scope.hideNextGame = 'hide';
      $scope.hideWin = 'hide';
   }

   hideAll();

   $scope.selected = function (val) {
      var num;
      var lastQuestion = $scope.questions[$scope.questions.length - 1];
      lastQuestion.verify = val;
      lastQuestion.notLast = true;

      var id = lastQuestion.id;
      if (val) {
         num = id * 2;
      } else {
         num = id * 2 + 1;
      }

      if (datas.getDataById(num)) {
         return addNextQuestion(num);
      }

      if (!lastQuestion.isAsk && val) {
         myWin(lastQuestion);
      } else {
         $scope.preNumber = id;
         gameOver(lastQuestion, num)
      }
   };

   // Переход к следующему вопросу
   function addNextQuestion(number) {
      var newEl = datas.getDataById(number);
      $scope.questions.push({notLast: false, verify: undefined, text: newEl.text, id: number, isAsk: newEl.isAsk});
      // $scope.questions.shift(); // можно убрать предыдущие вопросы
   }

   // ПОБЕДА!
   function myWin(lastQuestion) {
      $scope.hideWin = '';
   }

   // Дошли до конца, нужно добавить название животного или отличие
   function gameOver(lastQuestion, number) {
      $scope.questions = [];
      $scope.currentNumber = number;

      if (!lastQuestion.isAsk) {
         $scope.hideInputName = '';
      } else {
         $scope.hideInputQuestion = '';
      }
   }

   $scope.addAnimalName = function () {
      datas.setNewAnimal($scope.currentNumber, $scope.nameAnimal, false);
      $scope.firstAnimal = datas.getDataById($scope.preNumber).text;
      $scope.secondAnimal = datas.getDataById($scope.currentNumber).text;
      $scope.hideInputName = 'hide';
      $scope.hideInputQuestion = '';
      $scope.nameAnimal = '';
   };

   $scope.addOthernessText = function () {
      datas.setNewAnimal($scope.preNumber * 2, $scope.firstAnimal, false);
      datas.setNewAnimal($scope.preNumber, $scope.textOtherness, true);
      $scope.hideInputQuestion = 'hide';
      $scope.hideNextGame = '';
      $scope.textOtherness = '';
   };

   // отработка Enter на инпутах
   $scope.myFunct = function (event) {
      if (event.key === 'Enter') {
         if (event.target.id == "NAME") {
            $scope.addAnimalName()
         } else {
            $scope.addOthernessText()
         }
      }
   }

   $scope.endingWord = function(val){
      if(!val)return
      var lastChar = val.slice(-2);
      switch (lastChar){
         case "ца":  return val.slice(0, val.length-1)+"ы" ;
         case "ва":  return val.slice(0, val.length-1)+"ы" ;
         case "ка":  return val.slice(0, val.length-1)+"и" ;
         case "ла":  return val.slice(0, val.length-1)+"и" ;
         case "дь":  return val.slice(0, val.length-1)+"и" ;
         case "ля":  return val.slice(0, val.length-1)+"и" ;
         case "сь":  return val.slice(0, val.length-1)+"я" ;
         case "дь":  return val.slice(0, val.length-1)+"я" ;
         case "нь":  return val.slice(0, val.length-1)+"я" ;
         case "рь":  return val.slice(0, val.length-1)+"я" ;
         default: return val+"а";
      }
   }

});
