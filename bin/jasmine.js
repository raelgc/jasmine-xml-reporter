#!/usr/bin/env node

var path = require('path'),
    Command = require('jasmine/lib/command.js'),
    Jasmine = require('jasmine/lib/jasmine.js');

var jasmine = new Jasmine({ projectBaseDir: path.resolve('jasmine') });
var examplesDir = path.resolve('jasmine-core', 'example', 'node_example');
var command = new Command(path.resolve(), examplesDir, console.log);

require('jasmine-xml-reporter/boot.js');

command.run(jasmine, process.argv.slice(2));
