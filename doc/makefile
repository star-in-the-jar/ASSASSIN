
documentation: backend.pdf backend.html opisSystemu.pdf opisSystemu.html openapi.html userManual.html userManual.pdf jsdoc

openapi.md: ../backend/openapi.yaml
	widdershins ../backend/openapi.yaml --omitHeader -l -o openapi.md

%.pdf: %.tex
	pdflatex $<

%.html: %.tex
	htlatex $< "xhtml,charset=utf-8" " -cunihtf -utf8"

openapi.html: openapi.md
	markdown openapi.md > openapi.html

index.html: documentation
	markdown index.md > index.html

jsdoc: ../backend/*.js ../backend/*/*.js
	./node_modules/.bin/jsdoc --readme ../backend/README.md -d jsdoc ../backend -r

clean:
	rm -f *.aux *.log *.out *.4ct *.4tc *.dvi *.idv *.lg *.tmp *.xref *.fdb_latexmk *.fls *.synctex.gz *.toc
