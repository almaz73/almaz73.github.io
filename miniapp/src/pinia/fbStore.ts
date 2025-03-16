import {defineStore} from "pinia";
import {database} from '../assets/firebase.ts';
import {ref, set, get} from "firebase/database";
import {onValue} from "firebase/database";


export const usefbStore = defineStore("fbStore", {
    state: () => ({
        userId: '',
        userName: '',
        nickname: '',
        oppponentId: '',
        opponentName: '',
        gameId: ''
    }),
    // getters: {
    //   getMyId(state){
    //       return state.userId
    //   }
    // },
    actions: {
        async getField(field: string) {
            // {'id1::id2':{id1:name1:id2:name2},'id1::id2':{id1:name1:id2:name2}}  // 'game
            // {'id1':{name},'id2':{iname}}                                         // 'readToPlay
            const userRef = ref(database, field);
            return get(userRef).then((snapshot) => {
                if (snapshot.exists()) {
                    const userData = snapshot.val();
                    log(">>> Данные пользователя:", userData);
                    return userData
                } else {
                    log(field + " : данные не найдены");
                }
            })
        },
        async setField(field: string, text: string) {
            const userRef = ref(database, field);
            return set(userRef, {text: text}).then(() => {
                log("Данные успешно записаны!");
            }).catch((error) => {
                console.error("Ошибка записи данных: ", error);
            });
        },
        async setActive(link){
            const userRef = ref(database, 'readyToPlay/'+333);
            console.log('link=',link)
            set(userRef, {text: 999}).then(() => {
                //todo
                log("2222Данные успешно записаны!");
            }).catch((error) => {
                console.error("2222Ошибка записи данных: ", error);
            });
        },
        async updateValue(field: string) {
            const userRef = ref(database, field);
            return new Promise((resolve) => {
                onValue(userRef, (snapshot) => {
                    log("Данные обновлены:", snapshot.val());
                    resolve(snapshot.val())
                });
            })
        },
        getOpponent() {
            // {'g2':['id1::Almaz', 'id2::John'], 'g1':['id1::Nik', 'id2::Barby']}
            let games = localStorage.getItem('games')
            // log('games', games)
            if (games) {
                let game = this.gameId
                let el = JSON.parse(games)
                if (!el[game]) return null
                let findOpponent = el[game].findIndex((el: string) => !el.includes(this.userId))
                let opp = el[game][findOpponent].split('::')
                return {name: opp[1], id: opp[0]}
            } else return null
        },
        setGame(game: string, id1: string, id2: string) {
            let games = localStorage.getItem('games')
            if (games) {
                let el = JSON.parse(games)
                log(el)
                el[game] = [id1, id2]
                localStorage.setItem('games', JSON.stringify(el))
            }
        },
        deleteGame(game: string, id1: string, id2: string) {
            let games = localStorage.getItem('games')
            if (games) {
                let el = JSON.parse(games)
                delete el[game]
                localStorage.setItem('games', JSON.stringify(el))
            }
        }
    }
})

function log(val): void {
    // цветное логирование
    console.log("%c " + val, "color: green");
}
