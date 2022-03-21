const axios = require('axios')

axios
  .get('https://reqres.in/api/users?page=2')
  .then(res => {
    console.log(`statusCode: ${res.status}`)
    console.log(res)
  })
  .catch(error => {
    console.error(error)
  })
