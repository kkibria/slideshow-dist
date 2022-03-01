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

Each line in Front Matter allows to use a variable name and assign a value to it in the following
format,
```
<variable name>: <value> 
```

Example:

    ```$
    title: "Say Something Nice"
    logo: logo.jpg
    layout: TwoColumn
    myname: "Henry Bay"
    ```

Here variable `title` is assigned a string value "`Say Something Nice`".
Similarly, `layout` is assigned a value `TwoColumn`.
Values could be are strings, numbers, True or False.

You can define any variable name. All variables can be used for templates.
However some variable name have
preassigned purposes. For instance `layout` is used for controlling
layout of the slide. 

## Preassigned variables
In next few sections we will describe the preassigned variables.
We will use following convention to describe.

```
preAssignedVariable: option1|option2...
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
When `True`, template is enabled. When `False`, template is disabled.
By default template is enabled. 

Templates are very useful feature which allows you make a slide
with place holders and the fill the place holder at render time.   

For instance, you can have the following template in a slide,
```
\{{ artist }} is a good singer. However \{{ artist }}'s
drummer gets pretty nervous when he is performing in
front of a microphone.  
```

To use this template we can define variable `artist` with value `John`.
At render time, all instances of \{{ `artist` }}
will be replaced by `John`. In another place you can reuse the template
and apply a different value.

## Configuration variables
```
aspectratio: <width:number>x<height:number>
```
Sets the aspect ratio of the slides. This can be set only once per file.
`width` and `height` are positive integers.
Example: `aspectratio: 16x9`

---

```
title: <string>
```
Sets title for the browser page. The string could be any text string.
You set a different title in each front matter.

---

```
layout: Title|SingleColumn|TwoColumn
```
Sets the Slide Group layout mode.
`TwoColumn` has are three variants,
* Split content
* Autolist
* Book

 We will describe the layouts and variants in the following sections.


## Title layout
title segment never breaks pages using the first level header.

## Single column layout
nobreak:
in a single column page do not break pages using the first level header.
treats the entire segment as one slide till the next front matter appears.



## Split content layout
By default we split half and half unless a split point is given
split:
    integer

## Autolist layout
left pane contains the top level headings of the page

autolist: (smart lists only when layout is TwoColumn otherwise its just a variable with some value)
- if it is string then string added to smart list body as the first item before autolist items.
- if true then autolist items shows without it.

## Book layout
book: boolean
Left pane contains title of all the topics.
Right pane contains the content of the selected topic. 
You can sequentially move thru the content by using
`Up-Arrow` or `Down-Arrow`. You can also go to
a topic directly by simply clicking on a title in the left pane.

## Footnotes
footnote:
  - boolean value
if true all footnotes are collected from slide, rendered at the bottom of the slide.





## Templating 
template: boolean
uses content as handlebar template and applied variable defined in front matter 

