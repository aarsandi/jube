
const axios = require('axios').default;

class Webhook {
    static itemStockChange(data) {
        return new Promise(_ => {
            axios.post('http://localhost:8000/stok_decrement', {
                data: data[0]
            })
        });
    }
}

module.exports = Webhook;