


# Getting started with Wicked.Fish



## **Pre-requisites**
**Development Environment**
Visual Studio Code is the prefered method of doing dev work on Opl.Web. It is not a requirement though. However, it does provide the most robust set of tools for modern web development to get the job done.

If you wish to use VS Code, consider the following plugins to futher ease the development process.

 - [Babel ES6/ES7](https://marketplace.visualstudio.com/items?itemName=dzannotti.vscode-babel-coloring)
 - [Beautify css/sass/scss/less](https://marketplace.visualstudio.com/items?itemName=michelemelluso.code-beautifier)
 - [Close HTML/XML tag](https://marketplace.visualstudio.com/items?itemName=Compulim.compulim-vscode-closetag)
 - [Docker](https://marketplace.visualstudio.com/items?itemName=PeterJausovec.vscode-docker)
 - [Fold Plus](https://marketplace.visualstudio.com/items?itemName=dakara.dakara-foldplus)
 - [IntelliSense for CSS class names in HTML](https://marketplace.visualstudio.com/items?itemName=Zignd.html-css-class-completion)
 - [React PropTypes Intellisense](https://marketplace.visualstudio.com/items?itemName=OfHumanBondage.react-proptypes-intellisense)
 - [SCSS IntelliSense](https://marketplace.visualstudio.com/items?itemName=mrmlnc.vscode-scss)
 - [YML (Yseop Markup Language) support extension](https://marketplace.visualstudio.com/items?itemName=Yseop.vscode-yseopml)

**For now development only:**
If you haven't done so yet, download the latest version of [Node.js](https://nodejs.org/en/). Install it.

**Later, deployment:**
[Docker daemon](https://docs.docker.com/docker-for-windows/install/)
[Docker toolkit (Windows 7 & 8 users)](https://docs.docker.com/toolbox/overview/)

Make sure your antivirus is disabled before running through the *Setup* section of this readme. For Windows 10 & Defender follow these steps:

1. Click start
2. Type & select ***Windows Defender Security Center***
3. Click on ***Virus & threat protection***
4. Under ***Real-time protection***, toggle to ***Off***
5. Remember to undo the above when done with Setup

## **Setup**
First clone to the repo to a local folder.

Then open ***Powershell*** in the directory for Opl.Web as ***Administrator***. Run:

	$ npm prune
	$ npm dedupe
	$ npm install
	$ npm shrinkwrap --dev

Note: `prune` and `dedupe` are simply for good hygiene and isn't required to be run after cloning the repository.

Now you are done with the setup. Remember to re-enable your antivirus!

## **Extra Credit - Setup**
Follow the above steps **After** running the following command

	$ npm cache clean --force

Now you are really done with the setup.

## **Run the application**
To run the application locally `webpack-dev-server` is used. A script to get the code running an `livereload` is already setup.

	$ npm run-script local-server

## **Deployment**
Expect this section to change quite a bit for now.

Possible Errors

 - [npm install on python2 not found error](https://github.com/JeremyEnglert/JointsWP/issues/317)

