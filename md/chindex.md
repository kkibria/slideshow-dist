```$
title: "Slide Show Demo"
layout: Title
aspectratio: 4x3
```
# SlideShow - A simple presentation builder

<img class="s25" src="images/favicon.svg">

Press `Down-arrow` to go to the next slide.

```$
title: "Slide Show Demo"
layout: SingleColumn
```
# SlideShow

<img class="s25" src="images/Schulprojekt_Hilden-001.jpg">

([Attribution](https://commons.wikimedia.org/w/index.php?curid=1592973))

## Definition

According to [wikipedia](https://en.wikipedia.org/wiki/Slide_show), "A slide show is a presentation
of a series of still images on a projection screen or electronic display device, typically in a
prearranged sequence". 

Press `Down-arrow` to go to the next slide.

```$
title: "Slide Show Demo"
layout: SingleColumn
nobreak: true
```
# The Source file

**The previous slide was made by simply typing the following content in a regular text file,**

```
# SlideShow

<img class="s25" src="images/Schulprojekt_Hilden-001.jpg">

([Attribution](https://commons.wikimedia.org/w/index.php?curid=1592973))

## Definition

According to 
[wikipedia](https://en.wikipedia.org/wiki/Slide_show),
"A slide show is a presentation of a series of still
images on a projection screen or electronic display
device, typically in a prearranged sequence". 

Press `Down-Arrow` to go to the next slide.
```

**Feel free to cross check by going back to the previous slide by pressing `Up-Arrow`.**

Of course you can also use `Down-Arrow` to go to the next slide.

```$
title: "Slide Show Demo"
layout: SingleColumn
```

# Markdown Format

## The content in the text file is actually in a format called Markdown. 

Markdown is a lightweight and easy-to-use syntax for styling your writing.
You can control the display of the document such as, 
- Formatting words as **bold** or *italic*
- Adding images
- Creating lists

are just a few of the things we can do with Markdown.

### Mostly, Markdown is just regular text with a few non-alphabetic characters thrown in, like ``#`` or ``*``.

Markdown has become quite popular lately and you can find plenty of sites providing tutorial in the
internet. You can try this [site](https://www.markdownguide.org/basic-syntax/) to learn Markdown.

```$
title: "Slide Show Demo"
layout: TwoColumn
```
# Slides and Navigation
## How do I make multiple slides?  

Do I need to make one text file for each slide? That might be a lot of files!

Worry no more.

A single Markdown file can contain all your slides.
We use simple and practical ways to break the content
into multiple slides.

- Use Top level headings to create a new slide.
- Use front matter to create a new group of slides in a particular layout.

> Did you notice that we have switched just now the layout to a two column mode?
> It was done with *front matter*. 
## Navigating thru the slide show is simple
You can use followings to navigate between the pages:  
- `PageUp`, `↑` (`Up-Arrow`), `←` (`Left-Arrow`) keys to go backward.  
- `PageDown`, `↓` (`Down-Arrow`), `→` (`Right-Arrow`) keys to go forward.  
- `MouseWheel` to go in both directions.

```$
title: "Slide Show Demo"
layout: TwoColumn
autolist: True
```
# What are the benefits?

## Simple and quick
Build your slides with a text file using any text editor you have.

Single column? Two column? No problem.

> Did you notice how we are using a progressive subheading layout in this slide?
> Heading to the left, content to the right. It's all automated.

## Adaptive
The slides are rendered with correct font size automatically to prevent contents from being clipped.

This is quite nice at times when you have to put a bit more text than a slide can fit!

## Easy to Collaborate
Build a website to share all your up-to-date presentations quickly.

Everyone has a browser, right?!

## A picture is worth thousand words

You probably are wondering at this point how was this slideshow made? What does the text file look like?

Take a look at the [`chindex.md`](md/chindex.md) file.

This is the actual full Markdown source that created this presentation,

```$
title: "Slide Show Demo"
layout: SingleColumn
```
# How do I get it? 

Like it what you have seen so far?

Want to give it a try?

## Getting started
You can start building your slideshow
right now. Visit our [github](https://github.com/kkibria/slideshow-dist) repository
to get installation instructions. 

# Front Matter
In front of a slide or group of slides we can attach front matter. In the front
matter you can set values to some predefined properties to control aspects of slide generation.

TODO: properties in front matter

TODO: examples of different layout

TODO: footnote