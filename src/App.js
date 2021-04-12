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

    const apiUrl = `${process.env.REACT_APP_SP_API}/api/v1/healthcheck`;
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