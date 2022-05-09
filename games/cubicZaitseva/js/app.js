var UNICAL = [];
const PICTURES = {
   "ба,ра,ба,н": "baraban",
   "бе,ге,мо,т": "begemot",
   "ко,ма,р": "comar",
   "ка,та,ма,ра,н": "katamaran",
   "ма,ка,ро,ны": "makarony",
   "ма,ши,на": "mashina",
   "мо,ло,ко": "moloko",
   "т,ра,к,то,р": "tractor",
   "а,пе,ль,си,ны":"apelsiny",
   "а,р,бу,з":"arbuz",
   "ба,на,н":"banan",
   "г,ру,ша":"grusha",
   "я,б,ло,ко":"yabloko",
   "ка,р,ти,на":"kartina",
   "ка,р,то,ш,ка":"kartoshka",
   "пе,ре,ц":"perec",
   "по,ми,до,ры":"pomidory",
   "о,гу,ре,ц":"ogurec",
   "ды,ня":"dynya"
};
var WORDS = [
   "ма,ши,на",
   "мо,ло,ко",
   "ба,ра,ба,н",
   "бе,ге,мо,т",
   "ко,ма,р",
   "ка,та,ма,ра,н",
   "ма,ка,ро,ны",
   "т,ра,к,то,р",
   "а,пе,ль,си,ны",
   "а,р,бу,з",
   "ба,на,н",
   "г,ру,ша",
   "я,б,ло,ко",
   "ка,р,ти,на",
   "ка,р,то,ш,ка",
   "пе,ре,ц",
   "по,ми,до,ры",
   "о,гу,ре,ц",
   "ды,ня"
];
const SOUNDS = {

   "Д": "D",
   "ДЫ": "DY",
   "ДЕ": "DE",
   "ДА": "DA",
   "ДО": "DO",
   "ДУ": "DU",

   "Г": "G",
   "ГЫ": "GY",
   "ГЕ": "GE",
   "ГА": "GA",
   "ГО": "GO",
   "ГУ": "GU",
   "ГЬ": "Gg",
   "ГИ": "GI",
   "ГЯ": "GYA",
   "ГЁ": "GYO",
   "ГЮ": "GYU",

   "В": "V",
   "ВЫ": "VY",
   "ВЕ": "VE",
   "ВА": "VA",
   "ВО": "VO",
   "ВУ": "VU",
   "ВЬ": "Vv",
   "ВИ": "VI",
   "ВЯ": "VYA",
   "ВЮ": "VYU",
   "ВЁ": "VYO",

   "Б": "B",
   "БА": "BA",
   "БЕ": "BE",
   "БИ": "BI",
   "БЯ": "BYA",
   "БЮ": "BYU",
   "БЫ": "BY",
   "БО": "BO",
   "БУ": "BU",

   "З": "Z",
   "ЗА": "ZA",
   "ЗЕ": "ZE",
   "ЗО": "ZO",
   "ЗУ": "ZU",
   "ЗЫ": "ZY",

   "Ж": "ZH",
   "ЖА": "ZHA",
   "ЖЕ": "ZHE",
   "ЖИ": "ZHI",
   "ЖО": "ZHO",
   "ЖУ": "ZHU",

   "К": "K",
   "КА": "KA",
   "КО": "KO",
   "КУ": "KU",
   "КЫ": "KY",
   "КE": "KY",
   "КИ": "KI",
   "КЯ": "KYA",
   "КЮ": "KYU",
   "КЁ": "KYO",

   "ЛА": "LA",
   "ЛЕ": "LE",
   "ЛЬ": "Ll",
   "ЛИ": "LI",
   "ЛО": "LO",
   "ЛЯ": "LYA",
   "ЛЁ": "LYO",
   "ЛЮ": "LYU",
   "Л": "L",
   "ЛУ": "LU",

   "М": "M",
   "МЕ": "ME",
   "МУ": "MU",
   "МЫ": "MY",
   "МА": "MA",
   "МО": "MO",
   "МИ" : "MI",
   "МЯ" : "MYA",
   "МЁ" : "MYO",
   "МЮ" : "MYU",

   "А": "A",
   "Е": "E",
   "Э": "Ee",
   "И": "I",
   "О": "O",
   "У": "U",
   "Я": "YA",
   "Ё": "YO",
   "Ю": "YU",

   "Ч": "CH",
   "ЧА": "CHA",
   "ЧЕ": "CHE",
   "ЧИ": "CHI",
   "ЧУ": "CHU",
   "ЧЁ": "CHYO",

   "Ш": "SH",
   "ША": "SHA",
   "ШЕ": "SHE",
   "ШИ": "SHI",
   "ШО": "SHO",
   "ШУ": "SHU",
   "ШЯ": "SHYA",
   "ШЁ": "SHYO",
   "ШЮ": "SHYU",

   "Т": "T",
   "ТА": "TA",
   "ТО": "TO",
   "ТУ": "TU",

   "ТЕ": "TE",
   "ТИ": "TI",
   "ТЁ": "TYO",
   "ТЬ": "Tt",
   "ТЫ": "TY",
   "ТЯ": "TYA",
   "ТЮ": "TYU",

   "Ф": "F",
   "ФА": "FA",
   "ФЕ": "FE",
   "ФИ": "FI",
   "ФО": "FO",
   "ФЫ": "FY",
   "ФЯ": "FYA",
   "ФЁ": "FYO",
   "ФЮ": "FYU",

   "С": "S",
   "СА": "SA",
   "СЕ": "SE",
   "СИ": "SI",
   "СО": "SO",
   "СЬ": "Ss",
   "СУ": "SU",
   "СЫ": "SY",
   "СЯ": "SYA",
   "СЁ": "SYO",
   "СЮ": "SYU",

   "РЬ": "Pp",
   "Р": "R",
   "РА": "RA",
   "РЕ": "RE",
   "РИ": "RI",
   "РО": "RO",
   "РУ": "RU",
   "РЫ": "RY",
   "РЯ": "RYA",
   "РЁ": "RYO",
   "РЮ": "RYU",

   "Н": "N",
   "НА": "NA",
   "НЕ": "NE",
   "НИ": "NI",
   "НЬ": "Nn",
   "НО": "NO",
   "НУ": "NU",
   "НЫ": "NY",
   "НЯ": "NYA",
   "НЁ": "NYO",
   "НЮ": "NYU",

   "П": "P",
   "ПА": "PA",
   "ПЕ": "PE",
   "ПО": "PO",
   "ПУ": "PU",
   "ПЫ": "PY",
   "ПЯ": "PYA",
   "ПЮ": "PYU",
   "ПИ": "PI",

   "Щ": "CSH",
   "Х": "H",
   "Ц": "TC",
   "В": "V",

};
const SOUNDS_QUESTION ={
   "ба,ра,ба,н": "BARABAN",
   "бе,ге,мо,т": "BEGEMOT",
   "ко,ма,р": "KOMAR",
   "ка,та,ма,ра,н": "KATAMARAN",
   "ма,ка,ро,ны": "MAKARONY",
   "ма,ши,на": "MASHINA",
   "мо,ло,ко": "MOLOKO",
   "т,ра,к,то,р": "TRAKTOR",
   "а,пе,ль,си,ны":"APELSINY",
   "а,р,бу,з":"ARBUZ",
   "ба,на,н":"BANAN",
   "г,ру,ша":"GRUSHA",
   "я,б,ло,ко":"YABLOKO",
   "ка,р,ти,на":"KARTINA",
   "ка,р,то,ш,ка":"KARTOSHKA",
   "пе,ре,ц":"PEREC",
   "по,ми,до,ры":"POMODORY",
   "о,гу,ре,ц":"OGUREC",
   "ды,ня":"DYNYA"
}


// пермешиваем массив
function randomWordds(){
   WORDS = WORDS.sort(function (a, b) {
      return Math.random() - 0.5;
   });
}

WORDS.map(function (el) {
   el.split(",").map(function (txt) {
      var txt = txt.toUpperCase();
      if (UNICAL.indexOf(txt) == -1) {
         UNICAL.push(txt);
      }
   });
});

function getDATA(wordNumber = 0, count = 0) {
   var
      trueTxt,
      newDATA = [],
      i = 0,
      randomTxt,
      howMany = parseInt(Math.random() * 2) + 3,
      randomSpace = parseInt(Math.random() * howMany),
      allCount = UNICAL.length;

   if (wordNumber[count]) {
      trueTxt = wordNumber[count].toUpperCase();
   } else {
      return [];
   }


   while (i < howMany - 1) {
      randomTxt = UNICAL[parseInt(Math.random() * allCount)];
      if (randomTxt != trueTxt && newDATA.indexOf(randomTxt) == -1) {
         newDATA.push(randomTxt);
         i++;
      }
   }
   newDATA.splice(randomSpace, 0, trueTxt);
   return newDATA;
}


class App extends React.Component {
   constructor(props) {

      super(props);

      randomWordds();

      var
         startWord = WORDS[0].split(",");
      this.state = {
         count: 0,
         word: WORDS[0].split(","),
         know: 0,
         wordQuection: getDATA(WORDS[0].split(",")),
         win: false,
         error: false,
         start: true,
         finish:false
      };
   }



   check(val) {
      var
         self = this,
         nextWord,
         next;

      if (self.state.know == self.state.word.length) return;
      nextWord = self.state.word[self.state.know];

      if (nextWord.toUpperCase() == val.toUpperCase()) {
         next = self.state.know + 1;

         var
            word = self.state.word,
            wordQuection = getDATA(word, next);

         self.setState({
            know: next,
            wordQuection: wordQuection
         });
         if (self.state.know == self.state.word.length - 1) {
            self.setState({win: true});
         }

      } else {
         self.setState({error: true});
         setTimeout(function () {
            self.setState({error: false});
         }, 500)
      }


   }

   handlerWin() {
      var
         self = this,
         count = self.state.count + 1,
         newWord = WORDS[count];


      if(!newWord){ // если задания кончились начнем сначала
         count=0;
         //newWord = WORDS[count];
         self.setState({finish: true});
         return;
      }
      self.setState({
         count: count,
         word: newWord.split(","),
         win: false,
         error: false,
         know: 0,
         wordQuection: getDATA(WORDS[count].split(","), 0),
      });
   }

   goGame(){

      randomWordds();

      this.setState({
         count: 0,
         word: WORDS[0].split(","),
         know: 0,
         wordQuection: getDATA(WORDS[0].split(",")),
         win: false,
         error: false,
         start: false,
         finish:false});
   }


   render() {
      let modalPanel = this.state.win || this.state.error;

      let template=
         <div className="rootDiv">
            <ContainerUp arr={this.state.word} know={this.state.know}/>
            <div className="picArea">
               <PicArea props={this}/>
            </div>
            <ContainerDown props={this} checkClick={this.check.bind(this)}/>

            {modalPanel && <WinBoard props={this} onClick={this.handlerWin.bind(this)}/>}
         </div>;

      if(this.state.start) template = <StartTitul props={this} onHandleStart={this.goGame.bind(this)}/>;
      if(this.state.finish) template = <FinishTitul props={this} onHandleFinish={this.goGame.bind(this)}/>;

      return template;
   }
}

function StartTitul(props){
   return(
      <div className="rootDiv">
         <img  src="img/picture/titul.jpg" />
         <div className="titulDiv">
            <h1> ИГРА </h1>
            <h1> "Набери слово"</h1>
            <button onClick={props.onHandleStart}> ИГРАТЬ </button>
         </div>
      </div>
   )
}

function FinishTitul(props){
   return(
      <div className="rootDiv">
         <img  src="img/picture/finish.jpg" />
         <div className="titulDiv">
            <button className="finish" onClick={props.onHandleFinish}> Может еще поиграем?  </button>
         </div>
      </div>
)
}



/*поле с рисунком*/
function PicArea(self) {
   var
      word = self.props.state.word,
      imageUrl = "img/" + PICTURES[word.join(",")] + ".jpg";

   console.log(" self.props.state = ", self.props.state);

   if (self.props.state.know == 0 && !self.props.state.error) {
      setTimeout(function () {soundQuestion("naberiSlovo")}, 300);
      setTimeout(function () {soundQuestion()}, 1800);
   }

   function soundQuestion(val) {
      var url =(val=="naberiSlovo")?"naberiSlovo":SOUNDS_QUESTION[self.props.state.word],
         soundQuestionUrl = "mp3/questions/" + url + ".mp3";
      new Audio(soundQuestionUrl).play();
   }

   return (
      <img
         src = {imageUrl}
         onClick = {soundQuestion} />
      )
}

function WinBoard(self) {
   let text = (self.props.state.win) ? 'МОЛОДЕЦ!' : 'ОШИБКА';

   return (
      <div
         className="winBoard"
         style={{background: (self.props.state.win) ? "green" : "red"}}
         onClick={self.onClick || self.onClick()}
      >
         {text}
      </div>
   )
}

function ContainerUp(props) {
   return (
      <div className="containerUp">
         {
            props.arr.map(function (el, index) {
               var text = props.know > index ? el.toUpperCase() : "?";
               if (index > props.know)text = "_";
               return (
                  <WordCubic
                     key={index}
                     value={text}/>
               )
            })
         }
      </div>
   )
}

function WordCubic(props) {
   function handleSound(e){
      var val = e.target.innerText,
         mp3 = SOUNDS[val]+".mp3";
      if (mp3 !== undefined) {
         new Audio('mp3/echo/' + mp3).play();
      }
   }
   return (
      <div className="cubic"  onMouseOver={handleSound}>{props.value}</div>
   )
}

function ContainerDown(props) {
   function handle(val) {
      if (props.checkClick) {
         props.checkClick(val)
      }
   }

   var
      wordQuection = props.props.state.wordQuection,
      len = wordQuection.length,
      style = len ? "containerDown" : "";
   return (
      <div className={style}>
         {
            wordQuection.map(function (el, index) {
               return <Cubic key={index} props={props} onChoiceSimbol={handle} txt={el}/>
            })
         }
      </div>
   )
}

function Cubic(props) {
   function handleClick(e) {
      var val = e.target.innerText;
      if (props.onChoiceSimbol) {
         props.onChoiceSimbol(val);
      }

      var val = e.target.innerText,
         mp3 = SOUNDS[val];
      if (mp3 !== undefined) {
         new Audio('mp3/echo/' + mp3+".mp3").play();
      }
   }

   return (
      <div className="cubic" onClick={handleClick}>{props.txt.toUpperCase()} </div>
   )
}


ReactDOM.render(<App />, document.getElementById("root"));