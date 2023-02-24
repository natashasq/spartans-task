import fs from "fs";
import { exec } from "child_process";

fs.writeFile(
  "textFile.txt",
  "Text added to the file using fs node module.",
  function (err) {
    if (err) throw err;
    console.log("File successfully created.");
  }
);

exec("ls", (error, stdout, stderr) => {
  if (error) {
    console.error(`exec error: ${error}`);
    return;
  }
  if (stderr) {
    console.error(`stderr: ${stderr}`);
  }
  console.log(`Files in this directory: ${stdout}`);
});
