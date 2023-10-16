import inquirer from "inquirer";
import { image } from "qr-image";
import fs from "fs";

inquirer
  .prompt([
    {
      message: "Enter your website url",
      name: "url",
    },
  ])
  .then((answers) => {
    let answer = answers.url;
    let qr_png = image(answer, { type: "png" });
    qr_png.pipe(fs.createWriteStream("qr_image.png"));
    fs.writeFile("url.txt", answer, (err) => {
      if (err) throw err;
    });
    console.log(answers);
  })
  .catch((error) => {
    if (error.isTtyError) {
      console.log(error);
    } else {
      console.log("Your image was created!");
    }
  });
