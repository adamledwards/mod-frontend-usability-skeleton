# MOD.UK Frontend Usability Test

This skeleton project is for the use of MOD.UK Frontend usability participants.

## Getting started

```bash
# clone Repo
git clone [url]

# change directory to the clone repo
cd mod-frontend-usability-test-skeleton

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

### Copy the css

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
