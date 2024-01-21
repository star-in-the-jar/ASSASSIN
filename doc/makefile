
documentation: backend.pdf backend.html opisSystemu.pdf opisSystemu.html openapi.html userManual.html userManual.pdf

openapi.md: openapi.json
	widdershins openapi.json --omitHeader -l -o openapi.md

%.pdf: %.tex
	pdflatex $<

%.html: %.tex
	htlatex $<

openapi.html: openapi.md
	markdown openapi.md > openapi.html

index.html: documentation
	markdown index.md > index.html

clean:
	rm -f *.aux *.log *.out *.4ct *.4tc *.dvi *.idv *.lg *.tmp *.xref *.fdb_latexmk *.fls *.synctex.gz *.toc
