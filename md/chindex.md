```$
title: "SlideShow Demo"
layout: Title
aspectratio: 4x3
```
# SlideShow - Super fast presentation builder

<img class="s25" src="images/favicon.svg">

Press `Down-arrow` to go to the next slide.

```$
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
title: "The Source file"
layout: SingleColumn
nobreak: true
```
# {{title}}

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
layout: TwoColumn
footnote: True
```
# Slides and Navigation
## How do I make multiple slides?  

Do I need to make one text file for each slide? That might be a lot of files!

Worry no more.

A single Markdown file can contain all your slides.
We use simple and practical ways to break the content
into multiple slides.

- Use Top level headings to create a new slide.
- Use Front Matter to create a new group of slides in a particular layout.

>- > Did you notice that we have switched, just now, the layout to a ***two column*** mode?
>- > It was done with ***Front Matter***.
## Navigating thru the SlideShow presentation is simple
You can use followings to navigate between the pages:  
- `PageUp`, `↑` (`Up-Arrow`), `←` (`Left-Arrow`) keys to go backward.  
- `PageDown`, `↓` (`Down-Arrow`), `→` (`Right-Arrow`) keys to go forward.  
- `MouseWheel` to go in both directions.

# Front Matter

## Document Organization

* Each SlideShow document consists of one or more Slide Groups.
* Each Slide Group consists of a Front Matter and followed by one or more Slides.
* The Front Matter contains directives to control layout and
other properties for all the slides in the group.

Front Matter is just a piece of text that looks like the following,

    ```$
    title: "Say Something Nice"
    logo: logo.jpg
    layout: TwoColumn
    myname: "Henry Bay"
    ```

    
## Structure

<img style="padding: 10px" src="images/frontmatter.svg">




```$
layout: TwoColumn
autolist: True
```
# What are the benefits?

## Simple and quick
Build your slides with a text file using any text editor you have.

Save your content as plain text, SlideShow will do the rest.
Watch your slide getting updated live in the browser, instantly.
No need to hit the refresh button.

Change the aspect ratio? Again SlideShow will update as soon as you
save, instantly. SildeShow will tirelessly monitor your file!

Single column? Two columns? No problem.

> Did you notice how we are using a progressive subheading layout in this slide?
> Heading to the left, content to the right. It's all automated. No need to
> create all these progressive slides separately and repeat the work.

## Adaptive
The slides are rendered with correct font size automatically to prevent contents from being clipped.

This is quite nice at times when you have to put a bit more text than a slide can fit!

## Easy to Collaborate
Build a website to share all your up-to-date presentations quickly.

Everyone has a browser, right?! Well, almost anyway.

## A picture is worth thousand words

You probably are wondering at this point how is this SlideShow presentation you are watching made? What does the text file actually look like?

Take a look at the 
<a target="_blank" rel="noopener noreferrer" href="md/chindex.md">`chindex.md`</a> 
 file.

This is the actual full Markdown source that created this presentation,

```$
title: "Getting Started"
layout: SingleColumn
```
# How do I get it? 

Like it what you have seen so far?

Want to give it a try?

## Getting started
You can start building your SlideShow presentation
right now. Visit our [github](https://github.com/kkibria/slideshow-dist) repository
to get installation instructions.


## User manual
Once you install, you can head over to the
<a target="_blank" rel="noopener noreferrer" href="?ch=userman">SlideShow User's Manual</a> 
to learn how to use the SlideShow tool.

---

### Questions, Feedback, Comments, Ideas
Visit our github [discussions](https://github.com/kkibria/slideshow-dist/discussions)
page to say what is in your mind and help build a community of users.
Your Questions are important, this is where they will be answered.
