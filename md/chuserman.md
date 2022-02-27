```$
title: "SlideShow User Manual"
layout: Title
aspectratio: 4x3
```
# {{title}}

<img class="s25" src="images/favicon.svg">

Press `Rigth-arrow`.

```$
title: "SlideShow User Manual"
layout: TwoColumn
book: True
```
# {{title}}
Under Construction.
## Running the software
hjhjhj



## Presentation file name

To identify a SlideShow presentation file, the tool follows a naming convention.
The first two characters of the file name must be `ch` and the file extension must
be `.md`. This is necessary so that when the tool packages file for a web server
it knows which files are to be packaged. For instance `chreport22.md` is a valid
name but `report22.txt` is not.

## Accessing the presentations

If the files are served in a server called `https://mydomain.org` then you need to
specify which presentation is to be rendered to the server. It is done by
constructing the URL in a specific way. for instance to render `chreport22.md`
the url should be `https://mydomain.org?ch=report22`. Notice that,
we simply have to append `?ch=report22` to the base url. This is done so that
the browser will only request the file instead loading all the resources that are
already loaded in the browser from the server and can be reused.

The files are served locally when you are running the tool when you are making
the presentation. The base url for the local server is, `http://localhost:5000`.
All the same rules we discussed above still applies. 

## The default presentation

If you just provide
the base url `https://mydomain.org`, the server will send a default presentation
file `chindex.md`.

If you have only one presentation then you can save it
as `chindex.md`.

If you have several presentations then you can save links
to all your presentations in `chindex.md` and use it as a navigator.

Note that,
you can simple save a relative link in `chindex.md` since the base url will be
same. For instance a link like `?ch=report22` will do fine for
loading `chreport22.md`.

## Building the source
You already have seen gathered enough ideas to build your first presentation by just
examining the [source](md/chindex.md) of the demo presentation. As such
it will be a good idea to copy the text from the browser and paste it in your
text editor as a starter file.


