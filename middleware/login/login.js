var needle = require("needle");

const login = (request, response) => {
  console.log(request.body);

  var data = {
    email: request.body.email,
    password: request.body.password,
  };

  needle.post(
    "http://grupormaker.com/dev/helperson-api/public/auth",
    data,
    { multipart: true },
    function (err, resp, body) {
      let { session_id, expiration } = body;

      response.json(body);
    }
  );
};

module.exports = login;
