```$
title: "Front Matter Reference Manual"
layout: Title
aspectratio: 16x9
```
# {{title}}

<img class="s25" src="images/favicon.svg">

Press `Right-Arrow`.

```$
layout: Book
footnote: True
```
# Front Matter Reference Manual

Slides in a SlideShow file are organized in the following
manner.

<img style="height: 300px; " src="images/frontmatter.svg">

* Each SlideShow document consists of one or more Slide
  Groups.
* Each Slide Group consists of a Front Matter followed by
  one or more Slides.
* The Front Matter contains directives to control layout and
  other properties for all the slides in the group.

## Front Matter format

Each line in Front Matter allows to use a variable name and
assign a value to the variable in the following format,
```
<variable-name>: <value> 
```

Example:

    ```$
    title: "Say Something Nice"
    logo: logo.jpg
    layout: TwoColumn
    myname: "Henry Bay"
    ```

Here variable `title` is assigned a string value `Say
Something Nice`. Similarly, `layout` is assigned a value
`TwoColumn` here. Values could be are strings, numbers, True
or False.

You can define any variable name. All variables can be used
for templates.
However some variables have *preassigned* purposes. 
For instance `layout` is used for controlling layout of the
slide.

## Preassigned variables
In next few sections we will describe the preassigned
variables.
We will use following convention to describe.

```
preAssignedVariable: option1|option2|option3
preAssignedVariable: <string> 
preAssignedVariable: <number>
preAssignedVariable: pattern

```
* You are allowed to use only one option from list of
  options that are separated by `|`.
* You can enclose the string between double quotes (") for
  readability but double quotes are optional.
* We will specify what kind of number.
* Pattern will specify a sequence of numbers and characters
  in some way.

For instance, &lt;`abc:number`&gt;`hello` is a pattern, in
which case `123hello` could be used as a value. 
SlideShow will extract `abc` as 123 and use it for the
intended function.  

## Using Templates
```
template: True|False
```
Default value: `True`.

When `True`, template function is enabled. When `False`,
template function is disabled.

Templates are a useful feature which allows you to make a
slide with place holders and the fill the place holder at
render time.
For instance, you can have the following template in a
slide,
```
\{{ artist }} is a good singer. However \{{ artist }}'s
drummer gets pretty nervous when he is performing in
front of a microphone.  
```

To use this template we can define a variable named `artist`
with value `John`.
As a result, all instances of \{{ `artist` }} will be
replaced by `John` at slide render time. 

This way, you can reuse the same template at different
places with different values applied.
## Configuration variables
```
aspectratio: <width:number>x<height:number>
```
Default value: `16x9`

Sets the aspect ratio of the slides. This can be set only
once per file.
`width` and `height` are positive integers.

---

```
title: <string>
```
Sets title for the browser page. The string could be any
text string.
You can set a different title in each Front Matter.

---

```
layout: Title|SingleColumn|TwoColumn|AutoList|Book
```
Default value : `SingleColumn`

Sets the Slide Group layout mode.

We will describe each layout mode in the following sections.

## Title layout
`Title` layout is active when the following is set,
```
layout: Title
```

This layout centers its contents both vertically and
horizontally. 
Also it does not create a new slide for every top level
heading. 
As such, In this Slide Group there will be only one slide.

## Single column layout
`SingleColumn` layout is active when the following is set,
```
layout: SingleColumn
```

This layout produces a single column which spans the entire
width of the slide.

Following variable is used to control how a top level heading is used in this layout, 

```
nobreak: True|False
```
Default value : `False`

If `False` it will create a new slide for every top level heading. 

If `True` it does not create a new slide for every top level
heading.
In this case the Slide Group will contain only one slide
rendering everything inside it.

## Two column layout
`TwoColumn` layout is active when the following is set,
```
layout: TwoColumn
```

This layout arranges the content using two columns of equal width side by side.

By default, half of the second level headings and their contents are displayed in the left pane and the rest in the right pane. This split point can be changed by using the following variable,

```
split: <number>
```

The value is a positive integer. 
For instance, if the value is `3` then the first 3 second
level headings and their contents will be rendered in the
left pane and the remaining will be placed in the right
pane.

This can be useful to balance the content in a  visually
pleasing way when some headings contains more content than
others.

## Autolist layout

`AutoList` layout is valid when the following is set,
```
layout: AutoList
```

The algorithm for this layout creates a variable,
`sectionlist`, and gathers the top level heading and all the
following second level headings in a list called *section
list* which becomes the value of the variable. This variable
can be applied to templates as any other Front Matter
variable. 

This layout contains two columns.
For each second level heading it creates a new slide where
the content under this second level heading is placed in the
right pane while the left pane holds the *section list*. 
The left pane is shaded to give visual cue as slides advance.

If there is no text between the top level heading and the immediate following second level heading then SlideShow will insert following the default content between those two headings,

```
\{{ sectionlistintro }}
\{{ sectionlist }}
```
You can assign `sectionlistintro` in the Front Matter if you like. 
## Book layout

`Book` layout is valid when the following is set,
```
layout: Book
```

The `Book` layout is exactly same as `AutoList` layout with
the following exception.

All the headings in the left pane are clickable hyperlink.
You can navigate to a topic directly by simply clicking on a
title in the left pane.

## Footnotes
Footnote generation is controlled by the following,
```
footnote: True|False
```
Default value : `False`

`True` enables rendering footnotes. All footnote markups
will be collected from slide and will be rendered at the
bottom of the slide.

`False` disables footnote rendering and the markup will be
rendered as regular content in-place.

Footnote markup looks like following,

    >- This is a footnote.

>- This is a footnote.

When enabled it is rendered as regular text as you see at
the very bottom of this slide.
When footnote is disabled, this is rendered as,

> - This is a footnote.


## Advanced Templating 

In the Front Matter, variable and value assignments we
use are actually in a widely used format called `YAML`.
There are plenty of information and tutorial about this
format you can find in the internet.
Here is a
[cheatsheet](https://lzone.de/cheat-sheet/YAML)
that you can check.

SlideShow uses 
[handlebars](https://handlebarsjs.com/) 
for template processing. 
A `YAML` parser is used to convert the Front Matter to a
data structure that feeds `handlebars` the information for
replacing the place holders.

`handlebars` is very rich in features. 
You can use those features to develop powerful time saving
data driven contents when you need it.