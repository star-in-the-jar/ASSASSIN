#!/bin/bash
pdflatex $1.tex
dvisvgm --exact --zoom=-1 --font-format=woff2 --pdf $1.pdf
rm $1.pdf