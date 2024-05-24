import React, { useEffect } from 'react';

const App = () => {
  useEffect(() => {
    const accessToken =
      'YOUR_TOKEN_HERE';

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
