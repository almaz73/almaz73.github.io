import {defineStore} from "pinia";
import {database} from '../assets/fb.ts';
import {get, onValue, ref, set, remove} from "firebase/database";


export const UsefbStore = defineStore("fbStore", {
    state: () => ({
        userId: '',
        userName: '',
        nickname: '',
        opponentId: '',
        opponentName: '',
        gameId: ''
    }),
    actions: {
        async getField(field: string) {
            // {'id1::id2':{id1:name1:id2:name2},'id1::id2':{id1:name1:id2:name2}}  // 'game
            // {'id1':{name},'id2':{name}}                                         // 'readToPlay
            const userRef = ref(database, field);
            return get(userRef).then((snapshot): any => {
                if (snapshot.exists()) {
                    const userData = snapshot.val();
                    log(">>> Данные пользователя:" + userData);
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
        async removeField(field: string) {
            console.log(field)
            const userRef = ref(database, field);
            remove(userRef).then(() => {
                log(`Данные ${field} удалены!`);
            })
        },
        async updateValue(field: string) {
            const userRef = ref(database, field);
            return new Promise((resolve): void => {
                onValue(userRef, (snapshot) => {
                    log(`Данные ${field} на прослушке`);
                    console.log(`${field}=`, snapshot.val())
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
        async setReadyToPlay() {
            this.userName = this.userName || 'Аллигатор'
            this.userId = this.userId || '88776655'

            const userRef = ref(database, 'readyToPlay/' + this.gameId + '/' + this.userId);
            set(userRef, {name: (this.nickname || this.userName)}).then(() => {
                log("Игрок активировался!");
            }).catch((error) => {
                console.error("Ошибка активирования: ", error);
            });
        },
        acceptInvitation(opponent: any) {
            this.userName = this.userName || 'Аллигатор222'
            this.userId = this.userId || '112233'

            let firstPlayerId = this.userId > opponent.id ? this.userId : opponent.id
            let secondPlayerId = this.userId <= opponent.id ? this.userId : opponent.id

            const userRef = ref(database, this.gameId + '/' + firstPlayerId + '::' + secondPlayerId);
            return new Promise((resolve) => {
                set(userRef, {
                    start: [opponent.id + '::' + opponent.name, this.userId + '::' + this.userName],
                    ask: this.userId}).then(() => {
                    log("Предложено играть");
                    resolve('start')
                })
            })
        },
        // setGame(game: string, id1: string, id2: string) {
        //     let games = localStorage.getItem('games')
        //     if (games) {
        //         let el = JSON.parse(games)
        //         log(el)
        //         el[game] = [id1, id2]
        //         localStorage.setItem('games', JSON.stringify(el))
        //     }
        // },
        // deleteGame(game: string, id1: string, id2: string) {
        //     let games: string = localStorage.getItem('games')
        //     if (games) {
        //         let el = JSON.parse(games)
        //         delete el[game]
        //         localStorage.setItem('games', JSON.stringify(el))
        //     }
        // }
    }
})


const log = (val: any) => console.log("%c " + val, "color: green") // цветное логирование


