#! Node

const argv = process.argv.slice(2)
const readline = require('readline')

if (argv[0] === "--help") {
     console.log("Use magic init project to create a new project!");
     return;
   }
   if (argv[0] === "-v") {
     console.log(require("../package.json").version);
     return;
   }
   if (argv[0] !== "init") {
   console.warn(
     `You should use magic init to create you app, do not use magic ${
     argv[0]
     }`
   );
   return;
   }
const terminal = readline.createInterface({
   input: process.stdin,
   output: process.stdout
 });
terminal.question(
     "Floder is already exits, do you want override it ? yes/no ",
     answer => {
       if (answer === "yes" || answer === "y") {
         resolve(true);
         terminal.close();
       } else {
         process.exit();
       }
     }
   );
   
function traverse(templatePath, targetPath) {
  try {
    const paths = fs.readdirSync(templatePath);
    paths.forEach(_path => {
      const _targetPath = path.resolve(targetPath, _path);
      const _templatePath = path.resolve(templatePath, _path);
      console.log("creating..." + _targetPath);
      if (!fs.statSync(_templatePath).isFile()) {
        fs.mkdirSync(_targetPath);
        traverse(_templatePath, _targetPath);
      } else {
        copyFile(_targetPath, _templatePath);
      }
    });
  } catch (error) {
    console.log(error);
    return false;
  }
  return true;
}
function copyFile(_targetPath, _templatePath) {
  fs.writeFileSync(_targetPath, fs.readFileSync(_templatePath), "utf-8");
  //fs.createReadStream(_targetPath).pipe(fs.createWriteStream(_templatePath));
}