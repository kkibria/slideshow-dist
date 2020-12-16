# SlideShow

<img class="s25" src="images/Schulprojekt_Hilden-001.jpg">

([Attribution](https://commons.wikimedia.org/w/index.php?curid=1592973))

## Definition

According to [wikipedia](https://en.wikipedia.org/wiki/Slide_show), "A slide show is a presentation
of a series of still images on a projection screen or electronic display device, typically in a
prearranged sequence". 

Press Down-arrow to go to the next slide.

```$
title: "Slide Show Demo"
layout: SingleColumn
nobreak: True
```
# The Source file

**The previous slide was made by simply typing the following content in a regulat text file,**

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

Press Down-arrow to go to the next slide.
```

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

Markdown has become quite popular lately and you can find plenty of sites providing tutorial in the internet. You can try this [site](https://www.markdownguide.org/basic-syntax/) to learn Markdown.

# Slides and Navigation
## But how do I make multiple slides in my slide show? Do I need to make one text file for each slide? That might be a lot of files!

A single Markdown file can contain all your slides.
We use a few simple and practical ways to break the content
into multiple slides.

- Use Top level headings to create a new slide.
- Use front matter to create a new slide.

## Navigating thru the slide show is simple
You can use, 
``↑`` [Up-Arrow],
``↓`` [Down-Arrow],
``→`` [Right-Arrow]	or
``←`` [Left-Arrow] keys to navigate.

# Front Matter
In front of a slide or group of slides we can attach front matter. In the front
matter you can set values to some predefined properties to control aspects of slide generation.

properties in front matter


examples of different layout

footnote