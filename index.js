require('dotenv').config();

const shell = require('shelljs');
const {argv} = require('yargs');

shell.exec(`${argv._.join(' ')}`);
