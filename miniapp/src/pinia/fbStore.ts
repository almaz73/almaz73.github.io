import {defineStore} from "pinia";
import {database} from '../assets/firebase.ts';
import {ref, set, get} from "firebase/database";
import {onValue} from "firebase/database";


export const usefbStore = defineStore("fbStore", {
    state: () => ({
        userId: 0
    }),
    actions: {
        async getField(field: string) {
            const userRef = ref(database, field);
            return get(userRef).then((snapshot) => {
                if (snapshot.exists()) {
                    const userData = snapshot.val();
                    console.log(">>> Данные пользователя:", userData);
                    return userData
                } else {
                    console.log("Данные не найдены");
                }
            })
        },
        async setField(field: string, text: string) {
            const userRef = ref(database, field);
            return set(userRef, {text: text}).then(() => {
                console.log("Данные успешно записаны!");
            }).catch((error) => {
                console.error("Ошибка записи данных: ", error);
            });
        },
        async updateValue(field: string) {
            const userRef = ref(database, field);
            return new Promise((resolve)=>{
                onValue(userRef, (snapshot) => {
                    console.log("Данные обновлены:",  snapshot.val());
                    resolve(snapshot.val())
                });
            })
        }
    }
})
