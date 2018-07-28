import React from 'react';

const Html = ({body}) => (
  <html>
  <head>
    <title>Тратата</title>
  </head>
  <body style="margin:0">
  <div id="app">${body}</div>
  </body>
  </html>
)
export default Html;