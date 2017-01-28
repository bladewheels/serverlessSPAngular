# serverlessSPAngular

Chrome Extension (for : Page, not Browser) that only applies to www.example.org
Wipes out BODY content and Style (from HEAD) and overwrites TITLE before adding a bit of Angularness to the page.
Chrome Extensions can do cross-domain AJAX so this Angular SPA is serverless, could use HTML5 or Chrome storage mechanisms (even Bookmarks as a simple data:// store).
Chrome will sync data across instances if you login to Chrome from those instances.

(rough) Install notes:
install Node, Bower, gulp, maybe yeoman?
npm install
bower install
gulp watch

goto URL: chrome://extensions
Load unpacked extension...
Choose app dir in project
Click on 'background page' to view Chrome DevTools: Elements, Source of background.js
Browse to www.example.org and view Chrome DevTools: Elements, Source of contentscript.js
