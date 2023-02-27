import https from "https"

const port = process.env.PORT || 8000;

const server = https.createServer((req, res) => {
  if (req.method !== "GET") {
    res.end(`{"error": "${https.STATUS_CODES[405]}"}`);
  } else {
    if (req.url === "/") {
      res.writeHead(200, { "Content-Type": "text/plain" });
      res.end(`<h1>Hello from Spartans Node.js httap task</h1>`);
    }
  }
  res.end(`{"error": "${https.STATUS_CODES[404]}"}`);
});

let url = "https://reqres.in/api/users?page=2";

https.get(url, (res) => {
  let rawData = "";

  res.on("data", (chunk) => {
    rawData += chunk;
  });

  res.on("end", () => {
    const parsedData = JSON.parse(rawData);
    const finalData = parsedData.data.map(
      (e) => `${e.first_name}, ${e.last_name}`
    );
    console.log(finalData);
  });
});

server.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
