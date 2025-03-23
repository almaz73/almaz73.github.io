import {defineStore} from "pinia";
import {database} from "@/assets/fb.ts";
import {get, set, onValue, ref, remove} from 'firebase/database'

export const UsefbStore = defineStore('fbStore2', {
    state: () => ({
        gameId: '', // g1 , g2
        gameNames: <any>{'g1': 'Камень ножницы бумага', 'g2': 'Крестики нолики', 'g3': 'Морской бой'},
        myId: 0,
        myName: '',
        opponentId: 0,
        opponentName: '',
        lookField: null,
        stage: -1,  // 1 - смотрю желающих, записываюсь там,
        // 2 - добавился в список - прослушивание look,
        // 3 - Выбрал игрока, жду отклика  - прослушивание look,
        // 4 - Меня выбрали, принимаю приглашение,
        // 5 - беру данные игры, если есть,
        // 6 - удалил игру,
        // 7 - выбираю между играми
        playNumber: <number>0, // слушая его изменения, переключаемся на игру
        gameLink: <string>'',
        myPlaceInLine: <number>-1, // -1 не определен, 0 на первом месте, 1 на втором месте
        scoreMy: <number>-100,
        scoreOpp: <number>-100,
    }),

    actions: {
        async getField(field: string) { // получаю содержимое любого поля
            // path : 'g1/play', 'g1/look'
            // bd: '{id:{name}}'/'{id:{name, name2, id2}}'
            const userRef = ref(database, field);
            return get(userRef).then((snapshot): any => {
                if (snapshot.exists()) {
                    const data = snapshot.val();
                    log(`>>> Данные по ${field} = ` + JSON.stringify(data));
                    return data
                } else {
                    log(field + " : данные не найдены");
                    return 'empty'
                }
            })
        },
        async setField(field: string, obj: object | number | string) {
            const userRef = ref(database, field);
            return set(userRef, obj).then(() => {
                log(field + " -  данные записаны");
            }).catch((error) => {
                console.error("Ошибка записи данных: ", error);
            });
        },
        async onValue(field: string) {
            const userRef = ref(database, field);
            onValue(userRef, (snapshot) => {
                log(`########### ########## Данные ${field} на прослушке`);
                // console.log('??? snapshot.val()', snapshot.val())

                let ans = snapshot.val()

                if (typeof ans === 'string') {
                    let scores = ans.split('::')
                    if (this.myPlaceInLine == 0) {
                        this.scoreMy = +scores[0]
                        this.scoreOpp = +scores[1]
                    }
                    if (this.myPlaceInLine == 1) {
                        this.scoreMy = +scores[1]
                        this.scoreOpp = +scores[0]
                    }
                } else {
                    this.lookField = snapshot.val()
                }
            });
        },
        async removeField(field: string) {
            console.log(field)
            const userRef = ref(database, field);
            remove(userRef).then(() => {
                log(`Данные ${field} удалены!`);
            })
        },
    }
})

const log = (val: any) => console.log("%c " + val, "color: darkgreen") // цветное логирование