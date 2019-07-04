export default body => `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>SSR</title>
</head>
<body>
<div id="app">${body}</div>
<script src="/bundle.js"></script>
</body>
</html>
`;
