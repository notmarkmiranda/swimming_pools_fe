import React from 'react';

const Message = (props) => {
  const { message } = props;
  if (!message) return <p>Nope!</p>
  return (
    <div id="healthcheck-message">{message}</div>
  )
}

export default Message;