const Html = (body) => (
  `<html>
  <head>
    <title>Тратата</title>
  </head>
  <body style="margin:0">
  <div id="app">${body}</div>
  <script src="/client.js"></script>
  </body>
  </html>`
)
export default Html;