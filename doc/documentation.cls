\NeedsTeXFormat{LaTeX2e}
\ProvidesClass{documentation}[]
\LoadClass{article}
\usepackage{varwidth}
\usepackage[a4paper, total={6in, 10in}]{geometry}
\usepackage{graphicx} % Required for inserting images
\graphicspath{ {./figures/} }
\usepackage[dvipsnames]{xcolor}
\definecolor{subsectionColor}{RGB}{32, 67, 98}
\usepackage{listings}
\usepackage{titlesec}
\usepackage[T1]{fontenc}
  
%larger skip definitions
\newcommand{\hugeskip}{
    \bigskip
    \bigskip
}

\newcommand{\HUGEskip}{
    \hugeskip
    \hugeskip
}
%set the font
\renewcommand{\familydefault}{\sfdefault}
%custom title page
\renewcommand{\maketitle}[0]{
    
    \hrulefill

    \bigskip 
    \begin{flushright}
    \huge
    \textbf{\@title}
    
    \HUGEskip
    
    \Large
    \textbf{\@author}
    
    \HUGEskip
    \HUGEskip
    
    \normalsize
    \@date
    \end{flushright}
}

%code look
\usepackage{xparse}

\NewDocumentCommand{\codeword}{v}{%
\texttt{#1}%
}

%custom footer
\usepackage{fancyhdr}
%\pagestyle{fancy} IT JUST DOESNT WORK so i gave up

\fancyfoot{}
\fancyfoot[L]{\hrulefill\\}
\fancyfoot[R]{\\\bfseries\thepage}

\fancyhead{}
\fancyhead[L]{\@title}
\fancyhead[R]{Part \thechapter}

%clickable table of contents

\usepackage{hyperref}
\hypersetup{
  colorlinks,
  citecolor=black,
  filecolor=black,
  linkcolor=black,
  urlcolor=black
}
