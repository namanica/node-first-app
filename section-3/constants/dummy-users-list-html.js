const DUMMY_USERS = ["User 1", "User 2", "User 3", "User 4", "User 5"];

export const DUMMY_USERS_LIST_HTML = `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Users</title>
  </head>
  <body>
    <h1>Users</h1>
    <ul>
      ${DUMMY_USERS.map((user) => `<li>${user}</li>`).join("\n      ")}
    </ul>
  </body>
</html>
`;
