new Vue({
    el: '#vue-div',
    name: 'eee',
    data() {
        return {
            aValue: null,
            bValue: null,
            cValue: null
        }
    },
    methods: {
        sum() {
            if (this.aValue && this.bValue) {
                this.cValue = +this.aValue + (+this.bValue)
            }
        }
    }
});