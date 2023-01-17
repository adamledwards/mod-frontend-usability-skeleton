# MOD.UK Frontend Usability

This skeleton project is for the use of MOD.UK Frontend usability participants.

## Getting started

```bash
# clone Repo
git clone https://github.com/adamledwards/mod-frontend-usability-skeleton.git

# change directory to the clone repo
cd mod-frontend-usability-skeleton

# install the dependencies with npm
npm install

# start the server on http://localhost:3000
npm start
```

## Development 

After you have the project started navigate to http://localhost:3000 and verify that the page loads.
The site is served from the `./public` folder.


## Useful commands

During the usability test you will be required to copy some files here are some snippets to help you along the way.

### Load the css

Add your css file to the document
```html
<link rel="stylesheet" href="/index.css">
```

macOS / Linux
```bash
cp node_modules/@moduk/frontend/dist/css/index.css public/
```

Windows (command prompt)
```cmd
copy node_modules\@moduk\frontend\dist\css\index.css public\
```

### Copy the images

macOS / Linux
```bash
cp -R node_modules/@moduk/frontend/dist/assets/images public/assets
```

Windows (command prompt)
```cmd
copy node_modules\@moduk\frontend\dist\assets\images public\assets
```

### Copy the JavaScript

macOS / Linux
```bash
cp node_modules/@moduk/frontend/dist/client/moduk-frontend.umd.js public/
```

Windows (command prompt)
```cmd
copy node_modules\@moduk\frontend\dist\client\moduk-frontend.umd.js public\
```

Insert the script js detection script
```html
  <script>
    document.body.className = ((document.body.className) ? document.body.className + ' js-enabled' : 'js-enabled');
  </script>
```
Load the moduk-frontend script
```html
<script src="/moduk-frontend.umd.js"></script>
  <script>
    window.MODUK.initAll()
  </script>
```

## Accordion Component

```html
<div class="govuk-accordion" data-module="govuk-accordion" id="accordion-default">
  <div class="govuk-accordion__section ">
    <div class="govuk-accordion__section-header">
      <h2 class="govuk-accordion__section-heading">
        <span class="govuk-accordion__section-button" id="accordion-default-heading-1">
          Writing well for the web
        </span>
      </h2>
    </div>
    <div id="accordion-default-content-1" class="govuk-accordion__section-content" aria-labelledby="accordion-default-heading-1">
      <p class='govuk-body'>This is the content for Writing well for the web.</p>
    </div>
  </div>
  <div class="govuk-accordion__section ">
    <div class="govuk-accordion__section-header">
      <h2 class="govuk-accordion__section-heading">
        <span class="govuk-accordion__section-button" id="accordion-default-heading-2">
          Writing well for specialists
        </span>
      </h2>
    </div>
    <div id="accordion-default-content-2" class="govuk-accordion__section-content" aria-labelledby="accordion-default-heading-2">
      <p class='govuk-body'>This is the content for Writing well for specialists.</p>
    </div>
  </div>
  <div class="govuk-accordion__section ">
    <div class="govuk-accordion__section-header">
      <h2 class="govuk-accordion__section-heading">
        <span class="govuk-accordion__section-button" id="accordion-default-heading-3">
          Know your audience
        </span>
      </h2>
    </div>
    <div id="accordion-default-content-3" class="govuk-accordion__section-content" aria-labelledby="accordion-default-heading-3">
      <p class='govuk-body'>This is the content for Know your audience.</p>
    </div>
  </div>
  <div class="govuk-accordion__section ">
    <div class="govuk-accordion__section-header">
      <h2 class="govuk-accordion__section-heading">
        <span class="govuk-accordion__section-button" id="accordion-default-heading-4">
          How people read
        </span>
      </h2>
    </div>
    <div id="accordion-default-content-4" class="govuk-accordion__section-content" aria-labelledby="accordion-default-heading-4">
      <p class='govuk-body'>This is the content for How people read.</p>
    </div>
  </div>
</div>
```