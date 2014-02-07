## mdwut

A Markdown template for the University of Portsmouth Final Year Project, that uses Grunt to stitch compile and concatenate files together. Template written by @ear1grey, converted to Markdown by @40thieves.

### Installation

Clone down the repo:

	git clone git@github.com:portsoc/mdwut.git

Install `grunt` and the associated plugins using npm:

	npm install

### Usage

Grunt will watch for changes on the Markdown files and automatically compile and concatenate them into an HTML file. This is located in `public/index.html`.

To start the Grunt task, run the following command:

	grunt