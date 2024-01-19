# ASSASSIN documentation

This is the place where ASSASSIN documentation is mainly stored.

## PDF generation

Most documentation files are generated from LaTeX.
I'm going to assume you are using Linux(Debian) because good luck using LaTeX on Windows.
In case you don't have necessary prerequisites to compile LaTeX installed on your system try running the [configure script](./configure).
It should install all the necessary apt packages.
For those that don't know how to compile LaTeX in console:

```bash
pdflatex <your .tex filename>
pdflatex opisSystemu.tex
```

## HTML generation

You can convert LaTeX to HTML files.
I even cooked up a convenient little bash script for this very purpose.
Just run [generateHTML.sh](./generateHTML.sh) and it should create a new directory with HTML and CSS file.

```bash
./generateHTML.sh <input filename with no extension>
./generateHTML.sh opisSystemu
```

Note the lack of extension in the provided filename.
This is to limit the unexpected behavior of the script.

## openapi

Backend documentation was created in the openapi format.
In order to convert this documentation to markdown use widdershins.

```bash
npm install -g widdershins
widdershins openapi.json --omitHeader -o openapi.md
```

## makefile

For my own convenience I created a makefile for doing all the cool things with the documentation.
In order to use the makefile you need to have [make](https://www.gnu.org/software/make/) installed.
Make is a tool for bundling together commands.
Once you have make installed you can call make targets using the following command:

```bash
make <target>
make opisSystemu.pdf
```

The one abstract make target there is, is the clean target.
It will clean out all the temp files created by latex.
