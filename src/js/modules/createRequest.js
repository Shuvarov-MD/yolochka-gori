const createRequest = data => fetch('./php/server.php', {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(data)
});
