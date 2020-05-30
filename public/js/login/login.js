const login = (() => {

    const axios = require('../vendor/axios/axios').default;
    const userAPI = require('../constants/userAPI');
    
    const { 
        login
    } = userAPI;


    axios({
        method: 'post',
        url: login,
        headers: {}, 
        data: {
            //post data
        }
    }).then(function (response) {
       //response es el return del pedido

    });

})();

export default login;
