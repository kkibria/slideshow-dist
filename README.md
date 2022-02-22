<img src="md/images/favicon.svg">

# What is Slideshow?

**Slideshow** is markdown based tool to build presentations that can viewed with a modern web browser.
Markdown is just a text file with easy to understand formatting capabilities.
Markdown is widely used because of its simplicity. Authoring presentations with markdown becomes quick and simple.
If you are new to Markdown, check this [tutorial](https://commonmark.org/help/tutorial/) to get upto
speed on Markdown formatting capabilities.

Check the online [documentation and demo](https://kkibria.github.io/slideshow-dist/) site for more
information.

# Getting started

> TODO: We will be generating CLI executable
> to make slideshow content authoring experience smooth for non-coder people. The current way
> is really targeted people who has knowledge of npm and node, which might be hard for people who
> just wants to use it.

# Install for npm 

1. You need to have [nodejs](https://nodejs.org/en/) installed from the site before you can use this tool. 
2. Copy the files from my repository to your computer using one of the following methods into a
directory of your choice. Let's assume the directory is ``my_slides`` for example here but
you can have any directory name you wish.

## Using degit
```
npx degit https://github.com/kkibria/slideshow-dist#main my_slides
```

## Using zip file
[Download zip using this link](https://github.com/kkibria/slideshow-dist/archive/main.zip) and expand in ``my_slides`` directory.

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

This will open your default browser and load <http://localhost:5000/>  which will show you a slide.
If your browser did not open automatically, you can manually open your browser and goto
<http://localhost:5000/>.
To edit the slide go to ``md`` directory and
edit `chindex.md`, the markdown file. `md` is the directory that will hold all the markdown files.
As you save the updated markdown file, the browser will
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
If you have an account in github, just go to <https://github.com/kkibria/slideshow-dist>
and fork the project. Then clone the forked repo to your computer.

```
git clone https://github.com/YOUR_USER_NAME/slideshow-dist.git
```
Now you can follow [Setup the directory](#setup-the-directory) section all the way to
[publishing](#publishing-slideshow-to-the-internet).  

## Deploy to github pages hosted site  
github hosted web server is called `github pages`. To deploy,

```
npm run deploy
```
Which will push your content to the site. Now you have to tell the server where your
content is in your repo.

> Deploying will only push content to the web site. Any editing you do to your content
> **must** be separately committed and pushed to github  (`main` branch) for version control.

## Setup web server
Go to your github repo settings, scroll down to github pages section
and just edit `source` setting to select `gh-pages` branch and set folder to `/root` for
your site and press `save` to save the setting. You will see the URL to access
your site right above the `source` setting, save the URL to share to your viewers.
Normally it takes a few minutes for your contents to become live.

Check <https://pages.github.com/> and select **project** for more information.

# Content styling
`dev/index.css` has the style for your slides. You can edit this file to control the look.

# Why and how was this tool built?

In the past I have used a very nice Markdown based tool called [remark](https://github.com/gnab/remark),
for my own use and liked Markdown's simplicity. Around mid 2019, I got interested in
[Svelte](https://svelte.dev/), and switched to svelte for developing web applications because
I liked it.

Subsequently, I decided to develop a slideshow tool that focuses on the followings,
- Use svelte to see how it helps in doing a project like this.
- Do not use any nonstandard Markdown format. Keep it Markdown compliant unless I need some thing absolutely necessary.
- Pagination based on top level heading, so that restructuring of heading levels (which I do often) does not require manual pagination.
- Provide layouts that slide contents in a variety of creative ways that we see in
modern websites via plug-ins.
- Add animation capabilities like desktop presentation tools does.
- Make it simple for people who are not html savvy or know much of web technology.
- Styling support for non CSS savvy people.
- Add REPL/playground capability.

The future road-map will follow these without a predetermined order.