import React, { useEffect, useState } from 'react';

import Message from './Message';
import WithMessageLoading from './WithMessageLoading';

function App() {
  const MessageLoading = WithMessageLoading(Message)
  const [appState, setAppState] = useState({
    loading: false,
    message: null
  });

  useEffect(() => {
    setAppState({ loading: true });
    const apiUrl = `http://localhost:3000/api/v1/healthcheck`;
    fetch(apiUrl)
    .then((response) => {
      response.json()
        .then((result) => { 
          setAppState({ loading: false, message: result.message })
      })
    })
  }, [setAppState]);

  return (
    <MessageLoading isLoading={appState.loading} message={appState.message} />
  );
};

export default App;