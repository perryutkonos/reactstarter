import React from 'react';

const Html = ({markup, styleTags}) => {

  return (
    <html>
    <head>
      <title>Тратата</title>
      {styleTags}
    </head>
    <body>
    <div id="app" dangerouslySetInnerHTML={{ __html: markup }} />
    <script src="/client.js"/>
    </body>
    </html>
  )
}
export default Html;