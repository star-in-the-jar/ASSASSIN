# ASSASIN documentation

This is the place where ASSASIN documentation is mainly stored.

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