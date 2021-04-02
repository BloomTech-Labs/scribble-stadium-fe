# About Developer Mode

## What to Know:
Developer mode is a feature that was implemented and fleshed out as recently as Labs 32.  Because the game has (and is intended to have more) view-related restrictions (day of week, time of day, etc.), developer mode was implemented to allow developers to bypass game restrictions and view various components, as well as to keep the production database safe from any API calls while in developer mode.

Please note that Developer mode will only protect the production database if API calls are created correctly, according to the pre-existing trends (calling a function for getting the API URL as opposed to hard-coding one in).

As of April 3rd, 2021 there are a number of bugs and unfinished areas with developer mode that will be addressed in this readme (please see the "Bugs and TODO" section). Regardless, developer mode offers a method of spoofing certain days and tasks, spoofing day of the week, protecting the production database, and reading about various game stages.

## How it Works:
Upon activating developer mode, the redux store updated isDevModeActive to be true.  While this is true, any API calls that utilize getApiUrl will:
     1. see if developer mode is active
     2. see if node_env is production
If both of these are true, the API url will shift to hit the staging database.  For this reason, it is also important to keep the staging database updated by first merging back-end pushes to "staging," and proceeding to merge "staging" to "main" when the changes are deemed sufficient/bug-free

Developer mode functions are similar to the main game's functions and api calls, but sometimes require additional steps/modifications, and for this reason there is a /dev/ api endpoint on the back-end.

While dev mode is true, a selection menu is unlocked to view particular game stages, and the UI changes to demonstrate that developer mode is active. Upon selecting a menu option, developers are taken to a corresponding view that describes the game at that stage, offers "game-stage manipulation" features, and offers a "simulate" button that will take developers to the specified game stage to "simulate" it.

It is intended that developer mode gets fleshed out, allowing developers to test all game stages.

## Bugs and TODO:

Please update this section as development continues. Updated as of 4/2/21

There are a few bugs in the game right now that prevent us from including full functionality into developer mode.  Adding these features requires some background information for how the game works. The first bug is likely the most preventative bug:

In order to view Wednesday properly, a function needs to be added to the "simulate" button to add the current user to a team, allowing them to view the component and their corresponding team member.  This is likely done through the "Generate clusters" button and function. This function could be quickly added to the simulate button, but in order for it to work, the user must have "submissions" in the database.  This is because generate clusters does not generate clusters by looping through children, but rather by looping through all submissions and trying to find the corresponding children.  There is currently a function being called on Sat-Mon "simulate" that initializes a children's tasks and adds faker submissions depending on the booleans that are passed in.  This function's corresponding logic on the back-end would likely have to be utilized in some way while spoofing "generating clusters," meaning a new dev mode API endpoint and FE function will need to be created.  Additionally, there seems to be a bug in the "generate clusters" and "create face-offs" buttons, but it is uncertain as of Labs32 what is causing this.

To view Thursday and Friday, the same issue applies (see above).  The main issue with viewing these days is related to what is happening with generate clusters and generate face-offs.  Note that clusters and face-offs can not be created for the current child if the child has no corresponding submissions in the database.  There is logic in the /dev/ back-end API folder that could be useful here.  Additionally, even if generate clusters and generate face-offs is run with submissions, there appears to be an issue that gives a white screen sometimes.  We are uncertain what causes this, but resolving the bug would be greatly beneficial for fleshing out developer mode.  We go into this bug and demonstrate it partially in the Labs32 final product review.

Bugs and technical details aside, be sure to have fun with this codebase, and have a great time in labs!

- Labs 32