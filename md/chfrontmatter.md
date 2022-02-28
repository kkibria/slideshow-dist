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
template: False 
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

## Templates

You can build a generic slide that can acts as a template,
```
{{ artist }} is a good singer. However {{ artist }}'s
drummer gets pretty nervous when he is performing in
front of a microphone.  
```

To use this template we can define `artist` and assign a
value like `John`.
When this slide is rendered all instances of `artist`
will replaced by its value.

Now this slide can be reused in another place by simple
change the variable value. 


## Front Matter variables

aspectratio: &lt;width&gt;x&lt;height&gt;

Example: `aspectratio: 16x9`

title: "&lt;string&gt;"

title for the browser page


### Slide layout
layout: 
* Title
* SingleColumn
* TwoColumn

### TwoColumn variants
There are three variants,
* Split content
* Autolist
* Book


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

