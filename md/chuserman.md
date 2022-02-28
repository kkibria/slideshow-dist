```$
title: "SlideShow User's Manual"
layout: Title
aspectratio: 16x9
```
# {{title}}

<img class="s25" src="images/favicon.svg">

Press `Right-Arrow`.

```$
title: "SlideShow User's Manual"
layout: TwoColumn
book: True
```
# {{title}}
### Introduction

Although some knowledge of Markdown is a good starting
point, good grasp of Markdown format will allow
you to be fluent in creating effective presentations.

This user's manual does not try to educate on details of
Markdown format.
Users are expected to know Markdown.

The good part is, Markdown is extremely simple.
Learning Markdown is trivial. You can find many tutorials
on Markdown in the internet. This 
[tutorial](https://commonmark.org/help/tutorial/)
is a good one to try.

### Navigating thru the Manual

This manual is also a SlideShow content that uses `book` layout.
Left pane of this manual contains title of all the topics.
Right pane contains the content of the selected topic. 
You can sequentially move thru the content by using
`Up-Arrow` or `Down-Arrow`. You can also go to
a topic directly by simply clicking on a title in the left pane.

## Install for Windows 

### Windows
Most convenient way to install,
1. Download the installer, [`slideshow-win-setup`](https://github.com/kkibria/slideshow-dist/releases/latest/download/slideshow-win-install.ps1) script.
2. `Right-click` on the `slideshow-win-setup` file in windows explorer and select **Run with powershell**.

The installer will download and install the latest released executable on your machine.

*Make a note that the installed command is* `slideshow-win`.

> If you instead like to setup manually, you can download the latest released executable,
> [`slideshow-win.exe`](https://github.com/kkibria/slideshow-dist/releases/latest/download/slideshow-win.exe)
> and place it a folder where the PowerShell or command line can find it.

## Install for MacOs
### MacOs
You can download the latest released executable,
[`slideshow-macos`](https://github.com/kkibria/slideshow-dist/releases/latest/download/slideshow-macos)
in a folder where the shell can find it. Usually `/usr/local/bin` is a folder you can use
conveniently.

*Make a note that the installed command is* `slideshow-macos`.

## Install for Linux
### Linux
You can download the latest released executable,
[`slideshow-linux`](https://github.com/kkibria/slideshow-dist/releases/latest/download/slideshow-linux)
in a folder where the shell can find it. Usually `/usr/local/bin` is a folder you can use
conveniently.

*Make a note that the installed command is* `slideshow-linux`.

## Running the software

SlideShow is a CLI (Command Line Interface) tool.

You will need to open a shell like PowerShell, Command (Windows), zsh (MacOs), bash (linux) first to run the CLI. 

Create a folder somewhere. Create a file named
"`chindex.md`" in that folder containing a line of text of your choice. Let's say the path to
the folder is `c:\my_slides`.

For example in Windows PowerShell, type in:
```
slideshow-win open c:\my_slides
```

It will try to open its url in browser to render `chindex.md` contents.
In case browser did not open the url, copy the url provided
by the CLI manually. 
You should be seeing the text you typed in `chindex.md` file
rendered in the browser window. Keep this
window open.

Note that, `open` is a subcommand of the CLI tool.
You can get list of all the subcommands by typing,

```
slideshow-win help
```

## Live refresh

The CLI tool watches the folder it serves. When any file is updated,
it triggers a refresh in the browser.

Now open the file, `chindex.md` with the text editor, notepad or any other
editor you like and add
some more content. Save the content. Now take a look
in the browser window see the refreshed content.

> The recommended practice in favor of productivity is to resize
> the editor and the browser to display
> them side by side and build the SildeShow content.

## File naming rules

To identify a SlideShow presentation file, the tool follows a
rigid naming convention.

The first two characters of the file name must be "`ch`" and the file extension must
be "`.md`".

This is necessary so that when the tool packages the presentation files
for a web server it knows which files are to be packaged.

For instance `chreport22.md` is a valid name but `report22.txt` is not.

## Rendering presentations

The SlideShow files must be served to be rendered in a browser and you need to
specify which presentation is to be rendered to the server with an url.

It is done by
constructing the url in an opinionated, rigid way.
Let's assume the base url for the server
is `https://mydomain.org`.

To render `chreport22.md`
the url needs to be,
```
https://mydomain.org?ch=report22
```

Notice that,
we simply have to append `?ch=report22` to the base url.

The files are served locally when you are running the CLI tool to author a 
presentation. The base url for the local server is something like `http://localhost:5000`.
All the same rules we discussed above still apply. 

> The `?ch=` stands for chapter where the
> presentations are perceived as chapters of a whole set.

## Use relative links

A relative link is a url like "`?ch=report22`" without the base
url part in it.
This particular url can be used to load a presentation
named `chreport22.md`.

As such, following markdown text will render the link,
```
[chreport22.md](?ch=report22)
```
Relative links in the content are actually imperative,
because then content
will always function no matter what site they are served from.
If you use hard link, they will break if the content is served
from another site.

In fact, you will develop presentations locally on your machine.
Later you may end up
deploying the content to the cloud and you'll need to do it without breaking
the content when you deploy.

## The default presentation

The default presentation file name is `chindex.md`.
If you provide only the base url, something like `https://mydomain.org`, the server
will automatically send the default presentation file.

### The commonly used pattern
If you have only one presentation, then you can save it in `chindex.md`.

If you have several presentations then you can save relative links
to all your presentations in `chindex.md` somewhere so that it can
be to used
as a navigator slide. For instance, let's say you have three SlideShow
presentations, namely `chroadmap.md`, `chreport.md` and
`chmarket.md`. Then your `chindex.md` could contain following
markdown text snippet in a slide,

```
* [Future Roadmap](?ch=roadmap)
* [Quarterly Report](?ch=report)
* [Market Analysis](?ch=market)
```

## Authoring a presentation

You already can gather enough ideas to build your first presentation by just
examining the 
<a target="_blank" rel="noopener noreferrer" href="md/chindex.md">source</a>
of the [demo](?) presentation. As such
it will be a good idea to copy the text from the browser and paste it in your
text editor as a starter content and then modify them.

The 
<a target="_blank" rel="noopener noreferrer" href="md/chuserman.md">source</a>
of this user manual is also a good file to examine.

Once you start to collect the parts that are most useful
to you, you can save them for later use as your own starter
templates.

## SlideShow content organization

Slides in a SlideShow file are organized in the following manner.

<img style="height: 300px; " src="images/frontmatter.svg">

* Each SlideShow document consists of one or more Slide Groups.
* Each Slide Group consists of a Front Matter followed by one or more Slides.
* The Front Matter contains directives to control layout and
other properties for all the slides in the group.

## Front Matter
Front Matter is just a piece of text that looks like the following,

    ```$
    title: "Say Something Nice"
    logo: logo.jpg
    layout: TwoColumn
    myname: "Henry Bay"
    ```

### Front Matter directives

Each line in the Front matter contains a directive.

Check the
<a target="_blank" rel="noopener noreferrer" href="?ch=frontmatter">Front Matter Reference Manual</a>
to learn function of these directives and how they are used.
