import React, { useEffect } from 'react';

const App = () => {
  useEffect(() => {
    const accessToken =
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzE2NTM4NjUwLCJpYXQiOjE3MTYzNjU4NTAsImp0aSI6ImVlNmEzYmRjMTZjZjQ3NmQ5MGExMzBiNGEwNDgyYzIzIiwidXNlcl9pZCI6NjF9.LHLG2ia7XiuvAReyqz47AyNRogIr9HXMNQSPxhZVRLI';

    const parts = accessToken.split('.');
    const decodedPayload = atob(parts[1]);

    const parsedPayload = JSON.parse(decodedPayload);
    console.log("response",parsedPayload)

    const { exp } = parsedPayload;

    const currentTime = Math.floor(Date.now() / 1000);
    console.log("current time",currentTime)

    if (exp && currentTime >= exp) {
      console.log('Token has expired. Perform logout action.');
    } else {
      console.log('Token is still valid.');
    }
  }, []);

  return (
    <div>
      <h1>Decode JWT Example</h1>
      <p>Check the console for the decoded token.</p>
    </div>
  );
};

export default App;
