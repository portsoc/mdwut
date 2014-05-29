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

### Usage for real projects

It is recommended that you edit the files in the `src` directory - they will be automatically converted to the single HTML file. Plus, they're nicely split up into sections for you!

The `.gitignore` file ignores the generated `public/md/index.md` and `public/index.html` files. This is to stop unnecessary duplication in this repo. If you want to clone it for your actual Final Year Project, you may want to change this.

#### Adding new sections

To add a new section, simply create a new folder inside of `src`. 

*Note:* the `grunt watch` task compiles the folders and their contents in alphabetical order, so ensure the newly created folder is named appropriately. Beginning the folder name with a number is an easy way to ensure they are ordered correctly.

### Note on images

As the Markdown files are concatenated into a single file, the image paths are relative to this file. The path to the image directory (within the `src` folder) is `../../src/img/your_filename`.