/*
todo
    Сперва ищем в таблице игр
    потом в списке пар

  // тут смотрим в памяти нет ли игры
  // Если есть запускаем - играем
  // Если нет предлагается перечень игр
  // ВЫбирая игру ищем желающих играть
  // Если находим - пишем о запуске игры<br>
  // (оба соперника получают сообщение - игра началась)
 */

import {usefbStore} from "@/pinia/fbStore.ts";


function searchOpponent() {
    console.log('searchOpp searchOpp searchOpp searchOpp')
    usefbStore().getField(usefbStore().gameId).then(res=>{
        console.log('res=', res)
        let games = ''
        try{
            games = JSON.parse(res.text)
        }catch (err){
            // console.error(err)
        }
        console.log('games', games)
        if(!games) getActiveList()

    })
}

function getActiveList(){
    usefbStore().getField('readyToPlay').then(res=>{
        console.log('READY TO PLAY res=', res)
        // if(!res) setActive()
        setActive()
    })
}

function setActive(){
    // {'id1':{name},'id2':{iname}}
    let link = `{${usefbStore().userId}: ${usefbStore().userName}}`

    link = {129121831921:'Маша'}
    console.log(link)
    usefbStore().setActive(link).then(res=>{
        console.log('active res=', res)
    })

}

export {searchOpponent}