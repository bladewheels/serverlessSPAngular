# serverlessSPAngular

#### Chrome Extension (for : Page, not Browser) that only applies to *www.example.org*

Replaces BODY content (i.e. DIV) and Style (i.e. from HEAD) and overwrites TITLE before adding a bit of Angularness to the page.

Chrome Extensions can do cross-domain AJAX so this Angular SPA is serverless, could use HTML5 or Chrome storage mechanisms (even Bookmarks as a simple data:// store).

Google will sync data across instances if you login to Chrome (w/Google ID) from those instances.

(rough) Install notes:
install Node, Bower, gulp~~, maybe yeoman?~~

* npm install
* bower install
* gulp watch

1. goto URL: chrome://extensions
2. Load unpacked extension...
3. Choose app dir in project
4. Click on 'background page' to view Chrome DevTools: Elements, Source of background.js
5. Browse to www.example.org and view Chrome DevTools: Elements, Source of contentscript.js
