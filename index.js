const messagePromise = new Promise((resolve, _) => {
  resolve("This is a new message");
});

messagePromise
  .then((message) => {
    console.log(message);
  })
  .catch((err) => {
    console.error(err);
  });
