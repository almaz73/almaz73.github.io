function js0_3(){
   var
      arr=document.getElementById('m1_3').getElementsByTagName('li'),
      answer = {"0":"d", "1":"f", "2":"e", "3":"a", "4":"c", "5":"b"},
      text='',
      correct='',
      incorrect='';
   for(var a=0; a<6; a++){
      var
         A = arr[a].getElementsByTagName('input')[0].value,
         B = answer[a]
      if(A==B){
         correct+='(' + (a+1) + ' ' + A + ')'
      } else{
         incorrect+='(' + (a+1) + ')';
      };

   }
   document.getElementById('d1_3').innerHTML = " <br><span style='color:yellow'>Correct: "+correct+"</span><br><span style='color:red'> Incorrect:"+incorrect+"</span>";
}

function js2_3(){
   var
      arr=document.getElementById('m1_3').getElementsByTagName('li'),
      answer = {"0":"d", "1":"f", "2":"b", "3":"a", "4":"c", "5":"e"},
      text='',
      correct='',
      incorrect='';
   for(var a=0; a<6; a++){
      var
         A = arr[a].getElementsByTagName('input')[0].value,
         B = answer[a]
      if(A==B){
         correct+='(' + (a+1) + ' ' + A + ')'
      } else{
         incorrect+='(' + (a+1) + ')';
      };

   }
   document.getElementById('d1_3').innerHTML = " <br><span style='color:yellow'>Correct: "+correct+"</span><br><span style='color:red'> Incorrect:"+incorrect+"</span>";
}

function js3_3(){
   var
      arr=document.getElementById('m1_3').getElementsByTagName('li'),
      answer = {"0":"c", "1":"d", "2":"f", "3":"a", "4":"e", "5":"b"},
      text='',
      correct='',
      incorrect='';
   for(var a=0; a<6; a++){
      var
         A = arr[a].getElementsByTagName('input')[0].value,
         B = answer[a]
      if(A==B){
         correct+='(' + (a+1) + ' ' + A + ')'
      } else{
         incorrect+='(' + (a+1) + ')';
      };

   }
   document.getElementById('d1_3').innerHTML = " <br><span style='color:yellow'>Correct: "+correct+"</span><br><span style='color:red'> Incorrect:"+incorrect+"</span>";
}

function js4_3(){
   var
      arr=document.getElementById('m1_3').getElementsByTagName('li'),
      answer = {"0":"f", "1":"b", "2":"h", "3":"d", "4":"a", "5":"e", "6":"i", "7":"j", "8":"g", "9":"c"},
      text='',
      correct='',
      incorrect='';
   for(var a=0; a<10; a++){
      var
         A = arr[a].getElementsByTagName('input')[0].value,
         B = answer[a]
      if(A==B){
         correct+='(' + (a+1) + ' ' + A + ')'
      } else{
         incorrect+='(' + (a+1) + ')';
      };

   }
   document.getElementById('d1_3').innerHTML = " <br><span style='color:yellow'>Correct: "+correct+"</span><br><span style='color:red'> Incorrect:"+incorrect+"</span>";
}

function js4_6(){
   var
      arr=document.getElementById('m4_6').getElementsByTagName('li'),
      answer = {"0":"1", "1":"5", "2":"2", "3":"6", "4":"4", "5":"7", "6":"3", "7":"8"},
      text='',
      correct='',
      incorrect='';
   for(var a=0; a<8; a++){
      var
         A = arr[a].getElementsByTagName('input')[0].value,
         B = answer[a]
      if(A==B){
         correct+='(' + (a+1) + ' ' + A + ')'
      } else{
         incorrect+='(' + (a+1) + ')';
      };

   }
   document.getElementById('d4_6').innerHTML = " <br><span style='color:yellow'>Correct: "+correct+"</span><br><span style='color:red'> Incorrect:"+incorrect+"</span>";
}



function js0_2_root(){
		var text = "<li>Logistics means that you manage the procurement and movement of goods and the  storage of inventory.\
<li>It means the delivery of the goods the customer needs at the right time, in the right place, and of the right quality.\
<li>My definition of logistics is this: it’s to plan, organize, and manage operations that provide services and goods.\
<li>Logistics - that’s the purchasing, distribution , and replacement of material and staff.\
<li>Logistics is the planning and support of operations such as warehousing, inventory, transport, procurement, supply,\
and maintenance.";
		myApp(text, ["provide", "storage", "delivery", "distribution", "support", "maintenance"])
}

function js2_3_root(){
var text = "<li>How long would it take by barge? - Normally	about six days, but it often takes longer\
if the weather’s bad.<li>It’s cheap - it’s actually the cheapest of all the transport options.\
<li>It would only take four days to ship by truck, but the cost would be about 50% higher than by barge.\
<li>Rail would definitely be faster than the truck option if we use the express service that takes three days.\
<li>But it would also be more expensive than shipping by road - transport costs are about 40% higher.\
<li>And then perhaps we’d have to use the standard train, which is much slower .";
		myApp(text, ["longer", "cheapest", "higher", "faster", "more expensive", "slower"])
}

function js3_2_root(){
   var text = "<li>I’m calling about the train options described on your website.\
<li>could you tell me a bit more about them?\
<li>What would be the best rail option for us?\
<li>For large volumes, I would recommend using block train transport.\
<li>If you want to ship smaller quantities, the single-wagon option would be more suitable.\
<li>If flexibility is important, I would suggest that you book the flexitrain block train option.\
<li>As an alternative, I can suggest single-car transport, which is even more flexible.\
<li>In that case we should also consider the other block train options.\
<li>how much time would we have for loading?\
<li>At least 7 hours, but we could arrange longer loading times if you like.";
   myApp(text, ["calling about", "could you", "would be", "recommend", "more suitable", "suggest that", "an alternative", "also consider", "how much", "if you like"]);
}

function js4_5_root(){
   var text = "<li>An automated guided vehicle is a driverless truck which is controlled by computer and electrically powered.\
      <li>IBCs (intermediate bulk containers) made of metal or plastic are rigid, but there are also ones made of canvas, which are collapsible.\
   <li>Cage and box pallets are fitted with corner-posts and sides. They are usually stackable.\
   <li>In palletized storage APR, i.e adjustable pallet racking, is used.\
   <li>Some products are not suitable for palletization e.g. expensive electronic items or large and bulky items.\
   <li>mobile shelving is often used for smaller products in non-palletized systems."
   myApp(text, ["stackable", "mobile", "adjustable","suitable", "bulky", "driverless", "rigid", "collapsible"]);
}

