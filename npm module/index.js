const chalk = require ('chalk')
const validator = require ('validator')

// console.log(chalk.yellow.inverse('Hello World!'))
const vr = validator.isEmail('zubairkhalid618@gmail.com')
console.log(vr ? chalk.green.inverse(vr) : chalk.red.inverse(vr))