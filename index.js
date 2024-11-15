const fs = require("fs");

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

const createFile = (filename, data) => {
  return new Promise((resolve, reject) => {
    fs.writeFile(filename, data, (err) => {
      if (err) reject(err);
      resolve("File create successful!");
    });
  });
};

(async () => {
  const response = await createFile(
    "index.html",
    `<html><body><h1>This is html</h1></body></html>`
  );
  console.log(response);
})();
