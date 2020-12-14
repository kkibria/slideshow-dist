# What is Slideshow?

**Slideshow** is markdown based tool to build presentations that can viewed with a modern web browser.
Markdown is just a text file with easy to understand formatting capabilities
As Markdown is widely used because of its simplicity, authoring presentation becomes quick and simple.
If you are new to Markdown, check this [tutorial](https://commonmark.org/help/tutorial/) to get upto
speed on Markdown fomatting capabilities.

Check the online [documntation and demo](https://kkibria.github.io/slideshow-dist/) site for more
information.

# Why and how was this tool built?

In the past I have used a Markdown based tool called [remark](https://github.com/gnab/remark).
for my own use and liked Markdown's simplicity. Around mid 2019, I got interested in
[Svelte](https://svelte.dev/) and switched to for developing web applications since then.
So recently I decided develop a slideshow that meets my following needs better using svelte and this is
the first stab at it.
- I did not like using a nonstandard extended Markdown format as remark does. I wanted to keep most of it Markdown complient.
- I wanted to do pagination based on top level heading, so that restructuring of heading level (which I do often) does not require manual pagination as remark does.
- I wanted to do some other automated way of structuring slide contents moving forward.

Don't get me wrong, I did like remark. I liked it that much that I actually have retained
it's style by using it's css file in this app. 
# How to install

1. You need to have [nodejs](https://nodejs.org/en/) installed from the site before you can use this tool. 
2. Copy the files from my repositary to your computer using one of the following methods into a directory of your choice. Let's assume the directory is ``my_slides``.

## Using git
```
git clone https://github.com/kkibria/slideshow-dist.git my_slides
```

## Using degit
```
npx degit https://github.com/kkibria/slideshow-dist#main my_slides
```

## Using zip file
[Download zip using this link](https://github.com/kkibria/slideshow-dist/archive/main.zip)  and expand in ``my_slides`` directory.

# Setup the directory
After download,
```
cd my_slides
npm install
```

# Start slideshow
Go to ``my_slides`` directory. Now start the application,

```
npm start
```

Now open your browser and goto <http://localhost:5000/> which will show you a slide. To edit the slide go to ``public/md`` directory and
edit the markdown file. This is the directory that will hold all the markdown files. As you
save the updated markdown file, the browser will
live refresh update the slide view.
