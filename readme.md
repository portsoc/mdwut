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

	grunt watch

### Note on images

As the Markdown files are concatenated into a single file, the image paths are relative to this file. The path to the image directory (within the `src` folder) is `../../src/img/your_filename`.

### Usage for real projects

The `.gitignore` file ignores the generated `public/md/index.md` and `public/index.html` files. This is to stop unnecessary duplication in this repo. If you want to clone it for your actual Final Year Project, you may want to change this.