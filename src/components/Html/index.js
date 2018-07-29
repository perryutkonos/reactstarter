import React from 'react';

const Html = ({component}) => {

  return (
    <html>
    <head>
      <title>Тратата</title>
      <link rel="stylesheet" href="/style.css"/>
    </head>
    <body>
    <div id="app">
      {component}
    </div>
    <script src="/app.js"/>
    </body>
    </html>
  )
}
export default Html;