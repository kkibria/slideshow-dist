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

Press Down-Arrow to go to the next slide.
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
We use simple and practical ways to break the content
into multiple slides.

- Use Top level headings to create a new slide.
- Use front matter to create a new slide.

## Navigating thru the slide show is simple
You can use followings to navigate between the pages:  
- `PageUp`, `↑` (`Up-Arrow`), `←` (`Left-Arrow`) keys to go backward.  
- `PageDown`, `↓` (`Down-Arrow`), `→` (`Right-Arrow`) keys to go forward.  
- `MouseWheel` to go in both directions.

# Why and how do I get it?
Like it what you have seen so far?

## What are the benefits?
* You can immediately start building your slides with a text file using any text
editor you have.
* You can build site like this easily and share it with people. Any update to your
content will immediately be visible to everyone you shared it with thru the website.
No need to physically send them slideshow files.

## Installing
You can install and start building your slideshow
right now. Please visit our [github](https://github.com/kkibria/slideshow-dist) repository
to get installation instructions. 
# Front Matter
In front of a slide or group of slides we can attach front matter. In the front
matter you can set values to some predefined properties to control aspects of slide generation.

properties in front matter

examples of different layout

footnote