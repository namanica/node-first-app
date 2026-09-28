export const GREETING_HTML = `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Node First App</title>
  </head>
  <body>
    <h1>Hello from Node.js! 👋</h1>
    <p>The server is up and running.</p>

    <form action="/create-user" method="POST">
      <label for="username">Username</label>
      <input type="text" id="username" name="username" required />
      <button type="submit">Create user</button>
    </form>
  </body>
</html>
`;
