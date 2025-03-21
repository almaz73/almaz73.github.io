import {defineStore} from "pinia";
import {database} from "@/assets/fb.ts";
import {get, set, onValue, ref, remove} from 'firebase/database'

export const UsefbStore = defineStore('fbStore2', {
    state: () => ({
        gameId: '', // g1 - первая игра, g2 - вторая игра
        myId: 953446309,
        myName: '',
        nickName: <string | null>'',
        opponentId: 0,
        opponentName: '',
        lookField: null,
        stage: 4,  // 1 - смотрю желающих, записываюсь там,
        // 2 - добавился в список - прослушивание look,
        // 3 - Выбрал игрока, жду отклика  - прослушивание look,
        // 4 - Меня выбрали, принимаю приглашение,
        // 5 - беру данные игры, если есть,
        // 6 - удалил игру,
        // 7 - выбираю между играми
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
                }
            })
        },
        async setField(field: string, obj: object) {
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
                this.lookField = snapshot.val()
            });
        },
        // async onValue(field: string) {
        //     const userRef =  ref(database, field);
        //     onValue(userRef, (snapshot) => {
        //         log(`########### ########## Данные ${field} на прослушке`);
        //         console.log(`${field}=`, snapshot.val())
        //         return await snapshot.val()
        //     });
        // },
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