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
            if (location.href.includes('localhost:')) {
                this.userName = this.userName || 'Ищущий_Игрок'
                this.userId = this.userId || '1111111'

                console.log('this.nickname = ', this.nickname)
            }


            const userRef = ref(database, 'readyToPlay/' + this.gameId + '/' + this.userId);
            set(userRef, {name: (this.nickname || this.userName)}).then(() => {


                log("Игрок активировался! удалился из ждущих");
            }).catch((error) => {
                console.error("Ошибка активирования: ", error);
            });
        },
        acceptInvitation(opponent: any) {
            if (location.href.includes('localhost:')) {
                this.userName = this.userName || 'ПРИНИМАЮЩИЙ_ИГРОК'
                this.userId = this.userId || '2222222'
            }

            let firstPlayerId = this.userId > opponent.id ? this.userId : opponent.id
            let secondPlayerId = this.userId <= opponent.id ? this.userId : opponent.id

            const userRef = ref(database, this.gameId + '/' + firstPlayerId + '::' + secondPlayerId);
            return new Promise((resolve) => {
                set(userRef, {
                    start: [opponent.id + '::' + opponent.name, this.userId + '::' + this.userName],
                    ask: this.userId
                }).then(() => {
                    log("Предложено играть");
                    resolve('start')
                })
            })
        },
        setGameStages(gameLink: string, gamers: any, stage: number) {
            console.log('gameLink=',gameLink)
            const userRef = ref(database, this.gameId + '/' + gameLink);
            return new Promise((resolve) => {
                set(userRef, {
                    gamers: gamers,
                    stage: stage
                }).then(() => {
                    if (stage) this.removeField(this.opponentId)
                    resolve('игра')
                })
            })
        },
    }
})


const log = (val: any) => console.log("%c " + val, "color: green") // цветное логирование


