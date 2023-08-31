const { exec } = require('child_process');

// import { exec } from "child_process"  // for ES6 module type

const [inputPath, outputPath] = ["##input path here", "##output path here"]

// example
// input = "./src/input.css"
// output = "./dist.style.css"
// [inputPath, outputPath] = [input, output]

const command = `npx tailwindcss -i ${inputPath} -o ${outputPath} --watch`;

exec(command, (error, stdout, stderr) => {
  if (error) {
    console.error(`Error: ${error.message}`);
    return;
  }
  console.log(`Output:\n${stdout}`);
  console.error(`Errors:\n${stderr}`);
});