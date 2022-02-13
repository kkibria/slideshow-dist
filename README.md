# What is Slideshow?

**Slideshow** is markdown based tool to build presentations that can viewed with a modern web browser.
Markdown is just a text file with easy to understand formatting capabilities
As Markdown is widely used because of its simplicity, authoring presentation becomes quick and simple.
If you are new to Markdown, check this [tutorial](https://commonmark.org/help/tutorial/) to get upto
speed on Markdown formatting capabilities.

Check the online [documentation and demo](https://kkibria.github.io/slideshow-dist/) site for more
information.

## Why and how was this tool built?

In the past I have used a Markdown based tool called [remark](https://github.com/gnab/remark).
for my own use and liked Markdown's simplicity. Around mid 2019, I got interested in
[Svelte](https://svelte.dev/) and switched to for developing web applications since then.
So recently I decided develop a slideshow that meets my following needs better using svelte and this is
the first stab at it.
- I did not like using a nonstandard extended Markdown format as remark does. I wanted to keep most of it Markdown compliant.
- I wanted to do pagination based on top level heading, so that restructuring of heading level (which I do often) does not require manual pagination as remark does.
- I wanted to do some other automated way of structuring slide contents moving forward.

Don't get me wrong, I did like remark. I liked it that much that I actually have retained
it's style by using it's css file in this app. 
# How to install

1. You need to have [nodejs](https://nodejs.org/en/) installed from the site before you can use this tool. 
2. Copy the files from my repository to your computer using one of the following methods into a
directory of your choice. Let's assume the directory is ``my_slides`` for example here but
you can have any directory name you wish.

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
npm update
```

# Start slideshow
Go to ``my_slides`` directory. Now start the application,

```
npm start
```

Now open your browser and goto <http://localhost:5000/> which will show you a slide.
To edit the slide go to ``public/md`` directory and
edit the markdown file. This is the directory that will hold all the markdown files. As you
save the updated markdown file, the browser will
live refresh the updates in the slide view in your browser.
# Publishing slideshow to the internet
Go to ``my_slides`` directory. Now prepare the files,

```
npm run publish
```

When completed, simply copy all the files and folders in ``public`` directory to your
web server. 

# If you have github account
This is very convenient, as you can keep your ``my_slides`` content in github repo for
version management and github will also host your web server. `Slideshow` has the necessary
helper scripts to automate publishing to your github web server.

## Create your repo in github
Just go to <https://github.com/kkibria/slideshow-dist/generate> and fill out the name you
want. Then clone the repo to your computer.
```
git clone https://github.com/YOUR_USER_NAME/YOUR_REPO_NAME.git
```
Now you can follow [Setup the directory](#setup-the-directory) section all the way to
[publishing](t#publishing-slideshow-to-the-internet).  

## Deploy to github pages hosted site  
github hosted web server is called `github pages`. To deploy,

```
npm run deploy
```
Which will push your content to the site. Now you have to tell the server where your
content is in your repo.

Note the deploying will only push to the web site, any editing you do to your content
must be separately committed and pushed to github  (`main` branch) for version control. 
## Setup web server
Go to your repo settings, scroll down to github pages section
and just edit `source` setting to select `gh-pages` branch and set folder to `/root` for
your site and press `save` to save the setting. You will see the URL to access
your site right above the `source` setting, save the URL to share to your viewers.
Normally it takes a few minutes for your contents to become live.

Check <https://pages.github.com/> and select **project** for more information.

# Content styling
`dev/index.css` has the style for your slides. You can edit this file to control the look.