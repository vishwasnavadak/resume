# 🚀 Resume with Markdown

This is a simple tool that generates a print-ready resume from the data you put in as markdown. Check out the demo [here](https://vishwas.tech/resume/)
![Resume with Markdown](https://repository-images.githubusercontent.com/201768335/acb96900-c764-11e9-83b6-452bd2d23f47)

## Usage

Fork this repo, edit the `Resume.md` file under the folder src. This is built using React, so clone the forked report and run `npm install` to install all dev and prod dependencies.

### Changing the styles

CSS is written according to the default markdown elements like headers and lists. The styling is still work in progress, feel free to suggest changes. To insert a page break for the print version, add a `<hr>` tag or markdown notation `---` to the file.

## Deployment

You can use deploy this as a GitHub page by running `npm run deploy` (provided you have your git credentials configured) which will be deployed at _githubusername.github.io/resume_ (or if you have a custom domain then _vishwas.tech/resume/_ ).

Or you can use sites like Netlify or Zeit to deploy from your Github repo.

## Show ❤️ to

1. Font Awesome icons (https://fontawesome.com)
2. MDX-loader (https://github.com/frontarm/mdx-util/tree/master/packages/mdx-loader)
