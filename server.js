const express = require("express");
const app = express();
const cors = require("cors");

app.listen(4000, () => {
  console.log("server is running on port 4000");
});

app.use(cors("*"));

app.use(express.json());

app.post("/bajaj-mahendra", (request, response) => {
  //const { user_id, email, roll_number, numbers, alphabets } =
  //request.body;
  const { data } = request.body;

  //const data = ["a","b"] ;
  var alphabets = [];
  var numbers = [];
  let k = 0;
  let j = 0;
  var status = false;
  if (data != undefined) {
    status = true;
    for (let i = 0; i < data.length; i++) {
      var result = parseInt(data[i]);
      // console.log(typeof result);
      if (isNaN(result)) {
        alphabets[j] = data[i];
        j++;
      } else {
        numbers[k] = data[i];
        k++;
      }
    }
  }

  var body = {
    is_success: status,
    user_id: "mahendrasonaniyams",
    email: "mahendrasonaniyams@gmail,com",
    roll_number: "PD1258",
    numbers: numbers,
    alphabets: alphabets,
  };

  response.send(body);
});
