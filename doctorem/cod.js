function toBasket(val, price) {
    let tovar = localStorage.getItem('TOVAR')
    tovar = JSON.parse(tovar)

    let exist = tovar && tovar.findIndex(el => el.name === val) + 1
    if (exist) {
        tovar[exist - 1].count = tovar[exist - 1].count + 1
    } else {
        if (!tovar) tovar = []
        tovar.push({name: val, price: price, count: 1})
    }

    localStorage.setItem('TOVAR', JSON.stringify(tovar))
}


function toDetail() {
    console.log("toDetail",)
}