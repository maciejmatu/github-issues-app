## Github Issues App

#### Description
Support from ie10. Normally I don't put build files in repo, but this is an exception. Date element in issues list, is put every 3 items, since I only wanted to display it to show styling. The only needed files (e.g. to upload on a server) are index.html, styles.html and assets folder. issues.json file is only used to generate static template. Also, those are real issues from redux repository.

#### Building
To develop you must first install the packages with `npm install`.
There are three commands available:
- `npm run watch` - starts watching template and scss for changes
- `npm run watch:scss` - starts watching only scss for changes
- `npm run render` - renders html template, passing issues.json into it
- `npm run build` - builds both scss and html

To automate rendering, and keep the html file clean, I used render-cli.

#### Browser differences
- Blurred out background behind sider works only in safari browsers from version 9 up, because of limited support to `-webkit-backdrop-filter` property. On other browsers it falls back to transparent background.

#### Changes
- I didn't use the 'Proxima Nova' font (used in issues number in menu), because it is not open source.

#### Available BEM classes

##### App
- app
- app__sider
- app__content
##### Window Buttons
- window-buttons
- window-buttons__button
- window-buttons__button--close
- window-buttons__button--minimize
- window-buttons__button--maximize
##### Navigation
- navigation
- navigation__wrapper
- navigation__item
- navigation__item--active
- navigation__icon
- navigation__text
- navigation__additional-text
##### List
- list
- list--without-dates
- list__item
- list__item__title
- list__date
##### Star
- star
- star__toggle
- star__inside
- star__outside