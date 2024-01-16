#!/bin/bash
mkdir -p "$1"HTML
htlatex $1.tex
cp $1.css $1.html $1*.svg $1*.log "$1"HTML
rm $1.css $1.html $1*.svg $1*.aux $1*.dvi $1*.idv $1*.lg $1*.log $1*.tmp $1*.xref $1*.4ct $1*.4tc
