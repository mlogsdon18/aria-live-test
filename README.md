# aria-live Functionality Test

This project was created as an example implementation of aria-live within a React project. 

After much consultation with other developers, it was decided that the best implementation would be to have a separate aria-live component that would receive messages from other components and update as needed.

## AriaAnnouncer

The aria-announcer folder contains the two things needed to create a functioning aria-live component, the component itself, and a React Context and React Provider that allow it to be called from neighboring components through the use of the announcePolite function. 

`aria-live="polite"` is all that is currently implemented, as we did not have a use case for assertive.

The component references the messages array from the context. This is an array to allow for multiple messages to be announced if multiple form errors were to return at once

## FormControl

This component was added in as an example implementation from a developer on another component. It makes a fake AJAX call and then calls announcePolite to add a message to the AriaAnnouncer. In order for this to work properly, the entire App component has to be wrapped in the Provider so that it has access to the announcePolite function.

### `npm start`
To get started with this project, run npm start
