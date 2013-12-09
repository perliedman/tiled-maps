#!/usr/bin/node

var _ = require('underscore'),
    marked = require('marked'),
    fs = require('fs');

var content = marked(fs.readFileSync('README.md', 'utf8'), {smartypants: true});

fs.writeFileSync('index.html',
    _.template(fs.readFileSync('template._', 'utf8'))({
        content: content
    }));
