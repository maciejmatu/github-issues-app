## Github Issues App

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
- navigation__item
- navigation__item--active
- navigation__icon
- navigation__text
- navigation__additional-text
##### List
- list
- list--with-dates
- list__item