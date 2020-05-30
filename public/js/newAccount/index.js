const newAccount = (() => {

    const axios = require('../vendor/axios/axios').default;

    const userAPI = require('../constants/userAPI');
    

    const submitForm = document.querySelector('#newaccount-submit');

    
    submitForm.addEventListener('submit', function( e ) {
        e.preventDefault();
        submitData();
        return false;
    });


    function submitData() {

        const name = document.querySelector('#newaccount-name').value;
        const email = document.querySelector('#newaccount-email').value;
        const password = document.querySelector('#newaccount-password').value;

        axios({
            method: 'post',
            url: userAPI.newUser,
            headers: {}, 
            data: {
                name : name,
                email : email,
                password : password
            }
        }).then(function (response) {
            const { data } = response;
            const {
                userStatus
            }  = data;
            
            
            if(userStatus === "newUser") {
                window.location.assign('/login')
            }

        });
    }


})();

export default newAccount;
