#!/usr/bin/node

var _ = require('underscore'),
    marked = require('marked'),
    fs = require('fs'),
    renderer = new marked.Renderer(),
    toc = [];

renderer.heading = function(text, level) {
    var escapedText = text.toLowerCase().replace(/[^\w]+/g, '-');

    if (level <= 2) {
        toc.push({text: text, name: escapedText});
    }

    return '<h' + level + '><a name="' +
                    escapedText +
                     '" class="anchor" href="#' +
                     escapedText +
                     '"><span class="header-link"></span></a>' +
                      text + '</h' + level + '>';
};

var content = marked(fs.readFileSync('README.md', 'utf8'), {smartypants: true, renderer: renderer});

fs.writeFileSync('index.html',
    _.template(fs.readFileSync('template._', 'utf8'))({
        toc: toc,
        content: content
    }));
