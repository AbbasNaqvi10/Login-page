import LogForm from './logForm';
import { useEffect } from 'react';


function App() {

  var md5 = require("md5");
  console.log(md5("message"));

  useEffect(() => {
    const https = require("https");
    const agent = new https.Agent({
      rejectUnauthorized: false
    })
    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2MjQ0NjgyOTksImlzcyI6IlRlc3QuY29tIiwiYXVkIjoiVGVzdC5jb20ifQ.vgPOBOv2gegPj7cNCfv7pl6DblByVf-da5McyN4uSWk'
      },
      body: JSON.stringify({
        "username": "admin",
        "EmailAddress": "admin@admin.com",
        "password": "33354741122871651676713774147412831195"
      })
    };

    fetch("http://45.148.31.218:6863/api/Login", {agent}, requestOptions)
      .then(res => res.json())
      .then(
        (result) => {
          console.log('Request succeeded with JSON response', result);
        },
        (error) => {
          console.log('Request Not succeeded with JSON response', error);
        }
      )
  }, [])
  return (
    <LogForm />
  );
}

export default App;
