# About GithubApp
I chose angular, angular material for the UI framework as this is the web framework I am most familiar with.
Libraries used - I am using RxJS to compose async code and lodash for general helper utilities.
High level design follows the MVC pattern. The app component calls into a service to make the REST call and do the required post processing
of the data. The component sets up some state information which is then reflected in the UI through data binding.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.0.7.
Most of the code I wrote is in `app.component.ts`, `app.component.html` and `git-hub.service.ts`.
I have tested on Windows, Chrome browser

## Running the app

Please follow the steps below to run the app (please install the latest version of node first).

1. Unzip and run `npm install` in the root directory(github-app)
2. Run `npm install @angular/cli -g`
3. Run `ng serve` and navigate to `http://localhost:4200/`

## Running unit tests

Run `ng test` in the root directory to execute the unit tests.

## Limitations and enhancements

- Fix sorting of repos -  The repos are sorted by fork_count but since i did not have enough time to verify the link header processing, the sorting     is done on the data set returned by the first page only. Need to traverse all the 'next' links of the response for the sort metric to be meaningful
- Fix the UI page shift bug - UI shifts a little when results are displayed
- Make Date display more useful (show commit was made 'x hours/minutes' ago)
- Support pagination UI (next/previous links) to view all commits
- Show more details about commit on demand (details view)
- Improve error handling. Check the HTTP error code and display appropriate error message
- Support localization
- Validate input
- Support branch selection
- Show visual timeline of commit history
- Improve unit test coverage - Added some unit tests for the service but would like to add more. Also need to add unit tests for component

