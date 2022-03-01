```$
title: "Front Matter Reference Manual"
layout: Title
aspectratio: 16x9
```
# {{title}}

<img class="s25" src="images/favicon.svg">

Press `Right-Arrow`.

```$
layout: TwoColumn
book: True
```
# Front Matter Reference Manual

Slides in a SlideShow file are organized in the following manner.

<img style="height: 300px; " src="images/frontmatter.svg">

* Each SlideShow document consists of one or more Slide Groups.
* Each Slide Group consists of a Front Matter followed by one or more Slides.
* The Front Matter contains directives to control layout and
other properties for all the slides in the group.

## Front Matter format

Each line in Front Matter allows to use a variable name and assign a value 
to the variable in the following
format,
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

Here variable `title` is assigned a string value "`Say Something Nice`".
Similarly, `layout` is assigned a value `TwoColumn` here.
Values could be are strings, numbers, True or False.

You can define any variable name. All variables can be used for templates.
However some variables have
preassigned purposes. For instance `layout` is used for controlling
layout of the slide.

## Preassigned variables
In next few sections we will describe the preassigned variables.
We will use following convention to describe.

```
preAssignedVariable: option1|option2|option3
preAssignedVariable: <string> 
preAssignedVariable: <number>
preAssignedVariable: pattern

```
* You are allowed to use only one option from list of options that are separated by `|`.
* You can enclose the string between double quotes (") for
readability but double quotes are optional.
* We will specify what kind of number.
* Pattern will specify a sequence of numbers and characters in some way.
For instance, &lt;`abc:number`&gt;`hello` is a pattern,
in which case `123hello` could be used as a value. SlideShow will extract `abc` as 123
and use it for the intended function.  

## Using Templates
```
template: True|False
```
Default value: `True`.

When `True`, template function is enabled. When `False`, template function is disabled.

Templates are very useful feature which allows you to make a slide
with place holders and the fill the place holder at render time.
For instance, you can have the following template in a slide,
```
\{{ artist }} is a good singer. However \{{ artist }}'s
drummer gets pretty nervous when he is performing in
front of a microphone.  
```

To use this template we can define a variable named `artist` with value `John`.
As a result, all instances of \{{ `artist` }}
will be replaced by `John` at slide render time.
This way, you can reuse the same template at different places
while applying different values.

## Configuration variables
```
aspectratio: <width:number>x<height:number>
```
Default value: `16x9`

Sets the aspect ratio of the slides. This can be set only once per file.
`width` and `height` are positive integers.

---

```
title: <string>
```
Sets title for the browser page. The string could be any text string.
You set a different title in each front matter.

---

```
layout: Title|SingleColumn|TwoColumn|AutoList|Book
```
Default value : `SingleColumn`

Sets the Slide Group layout mode.

We will describe each layout mode in the following sections.

## Title layout
This layout is active when following is set,
```
layout: Title
```

TODO.
title segment never breaks pages using the first level header.

## Single column layout
This layout is active when following is set,
```
layout: SingleColumn
```

TODO.

In this mode following variable can be used,

```
nobreak: True|False
```
in a single column page do not break pages using the first level header.
treats the entire segment as one slide till the next front matter appears.
Default is False.
## Split content layout
This layout is active when following is set,
```
layout: TwoColumn
```
TODO.
By default we split half and half unless a split point is given
```
split: <number>
```
## Autolist layout
This layout is valid when following is set,
```
layout: AutoList
```
left pane contains the top level headings of the page

```
sectionlistintro: <string>
```
- smart list body as the first item before autolist items.

TODO.



## Book layout
This layout is valid when following is set,
```
layout: Book
```
TODO.

sectionlistintro: <string>

Left pane contains title of all the topics.
Right pane contains the content of the selected topic. 
You can sequentially move thru the content by using
`Up-Arrow` or `Down-Arrow`. You can also go to
a topic directly by simply clicking on a title in the left pane.

## Footnotes
TODO.
```
footnote: True|False
```
True enables rendering fooynotes. all footnotes are collected from slide, rendered at the bottom of the slide.
By default footnote is False. 

```
>- This is a footnote.
```

>- This is a footnote.

## Templating 
template: boolean
uses content as handlebar template and applied variable defined in front matter 

