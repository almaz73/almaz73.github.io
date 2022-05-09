
function myApp(text, dictin){
	function myReplace(obj){
		for(var a in obj){			
			text = text.replace(obj[a], '<a href="javascript:void(0)"  class="droppable" name="'+obj[a]+'" title="Перетащите слово"> _ _ _ </a>');
		}
	}
	myReplace(dictin);


	DragManager.onDragCancel = function(dragObject) {
      dragObject.avatar.rollback();
    };

    DragManager.onDragEnd = function(dragObject, dropElem) {

    	var check = (dragObject.avatar.textContent ===  dropElem.name);

	    dragObject.avatar.setAttribute("check", check ); 
	    dragObject.elem.style.position = 'inherit';
	    dragObject.avatar.className='drag';

      dropElem.text='';
      dropElem.appendChild(dragObject.avatar);
    };

    
    var words = '';
    dictin.map(item=>{
    	var rand = (Math.random()*2);
    	if(rand>1){
			words ='<div class="draggable drag">'+item+'</div>'+words;
    	}else{
			words +='<div class="draggable drag">'+item+'</div>'
    	}
    	
    })


	document.getElementById('myText').innerHTML = text;
	document.querySelector('.area.mycenter').innerHTML = words;
}