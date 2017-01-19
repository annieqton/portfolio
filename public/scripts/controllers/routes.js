'use strict';

// Configure routes for this app with page.js, by registering each URL your app can handle,
// linked to a a single controller function to handle it:
page('/', projectController.init);
page('/about', aboutController.init);

//function to call to activate page.js.  Fire it off now, to execute
page();
