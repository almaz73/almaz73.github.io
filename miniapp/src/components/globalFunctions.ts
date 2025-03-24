import {UsefbStore} from "@/pinia/fbStore.ts";


export function toExit() {
    let fbStore = UsefbStore()

    fbStore.removeField('/list/' + fbStore.myId)
    fbStore.setField('/list/' + fbStore.opponentId, {left: fbStore.myName})
    fbStore.removeField('/games/' + fbStore.gameLink)

    setTimeout(() => location.reload(), 1000)
}