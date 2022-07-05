
const axios = require('axios').default;

class Webhook {
    static itemStockChange(data) {
        // setTimeout(() => {
        //     console.log(data, "result solved")
        // }, 4000);
        axios.post('http://localhost:8000/stok_decrement', {
            data: data
        })
        // .then(function (response) {
        //     console.log(response, "dsadwad");
        // })
        // .catch(function (error) {
        //     console.log(error, "dsadwadwa");
        // });
        // return new Promise(_ => {
        //     axios.post('http://localhost:8000/stok_decrement', {
        //         data: data[0]
        //     }).then(function (response) {
        //         console.log(response);
        //     })
        //     .catch(function (error) {
        //         console.log(error.response);
        //     });
            
        // });
    }
}

module.exports = Webhook;