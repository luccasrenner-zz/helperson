const login = (() => {
  const axios = require("../vendor/axios/axios").default;
  const userAPI = require("../constants/userAPI");

  const {
       login
     } = userAPI;

  const submitForm = document.querySelector("#login-submit");

  if (submitForm !== null) {
    submitForm.addEventListener("submit", function (e) {
      e.preventDefault();
      submitData();
      return false;
    });
  }

  function submitData() {
    const email = document.querySelector("#login-email").value;
    const password = document.querySelector("#login-password").value;

    axios({
      method: "post",
      url: login,
      headers: {},
      data: {
        email: email,
        password: password,
      },
    }).then(function (response) {
        
        const { 
            data
        } = response;

        const { 
            session_id
        } = data;

      if (session_id) {
        window.location.assign("/main");
      }

    });
  }
})();

export default login;
