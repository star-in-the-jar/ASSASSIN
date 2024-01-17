
openapi.md: openapi.json
	widdershins openapi.json --omitHeader -l -o openapi.md

backend.pdf: backend.tex
	pdflatex backend.tex

backend.html: backend.tex
	htlatex backend.tex

opisSystemu.pdf: opisSystemu.tex
	pdflatex opisSystemu.tex

opisSystemu.html: opisSystemu.tex
	htlatex opisSystemu.tex

clean:
	rm -f *.aux *.log *.out *.4ct *.4tc *.dvi *.idv *.lg *.tmp *.xref *.fdb_latexmk *.fls *.synctex.gz *.toc
