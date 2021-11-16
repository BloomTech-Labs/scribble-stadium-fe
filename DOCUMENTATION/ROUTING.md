# ROUTING NOTES
Last updated: 2020-11-16

## This document describes the routing of the application including current functional path and obsolete paths that are no longer used. 

Updated Whimsical Routing Guide can be found [here.](https://whimsical.com/scribble-stadium-site-flow-XDLc5WXBQYfbWdb2C4NTRa)

### CURRENT FUNCTIONAL PATHS

localhost:3000 - PARENT LANDING PAGE =>
    - /parent/faq  - FAQ PAGE - Functional with parent dashboard styling. All FAQs contain Lorem Ipsum text.
    Needs to be updated with actual content.
    - /parent/contact - CONTACT PAGE - Functional with parent dashboard styling. 
    Messaging systems needs to be hooked up to backend to handle messages.
    - /parent/add-child - ADD CHILD PAGE - Functional with parent dashboard styling. 
    Child information needs to be added to backend. Submit child button is needed
    - /parent/edit-players - EDIT PLAYERS PAGE - Rendering a holder page with no information. 
    Child information will need to be brought in from backend to be displayed.

GAME PLAY PATH FROM PLAY GAME BUTTON
- localhost:3000/dashboard - CHILD DASHBOARD - Functional with child dashboard styling. Child dashboard paths all point to proper pages.
- /change-avatar - Rendering change avatar choices. To be functional needs to be hooked up to backend.
- /gameplay/trophy-room - Rendering under construction page. Needs to be built out
- /leaderboard - Rendering leaderboard that needs styling update and to be hooked up to backend.
- /gamemode (Start of game play path) - Rendering page and styled. Both Single and Multiplayer mode buttons both point to the happy path. Logic needs to be implemented to determine whether they are continuing a game and takes them to the appropriate starting point for their current game status.
- /gameplay/mission/read - Rendering page and styled. Has a story that will need logic to change stories as needed. Perhaps a choice of story at this point would be a good time to implement in the long term. 
- /gameplay/mission/draw - Rendering page and styled. Accepts a drawing from the child that will need to be hooked up to the backend and saved to their profile and database.
- /gameplay/mission/write - Rendering page and styled. Accepts a story from the child that will need to be hooked up to the backend and saved to their profile and database.
- /child/next-steps - Rendering and styled page. Will need logic to render player and partner's names as well as partner's avatar.
- /child/match-up - Rendering and styled page. Will need logic to render all appropriate information for the match up. Point Share button will need to be styled and moved to a move visible and appropriate position on the page. 
- /child/point/share - Rendering and styled page. Points to be used is incrementing properly and will need to bbe hooked up to backend to be saved to the in-game database.
/child/winner - Rendering and styled page. Will need to render team information instead of just the individual player's name. This page returns to the dashboard to start a new game. 

### Current Non-functional or Obsolete paths that are not connected to the functioning paths at this time
These paths will need to be examined for potential future need and if not needed removed from the codebase. 

- /child/story - unfinished duplicate of the working /gameplay/mission/read page. OK to remove.

- /gallery - unfinished page with old styling that will need to be updated and connected to the application with connecting points in both the parent dashboard and the child dashboard along with logic to show the appropriate content. It's children gallery/:id and gallery/child/:id will need to be considered as /gallery should probably be rendering a gallery landing page where the user can choose which child gallery that they want and takes the user to gallery/child/:id. 

- /scoreboard - broken logic and I believe this is a redundant page. Should be ok to remove once considered against the current functionality.

- /child/drawing-sub - incomplete, unstyled redundant page. OK to remove.

- /child/writing-sub - same as above. OK to remove.

- /parent/dashboard - renders the parent dashboard at localhost:3000. As there will be many more pages (site homepage, etc) ahead of this page it is ok to keep and not remove. 

- /parent/support - obsolete page that will need to be removed.

- /parent/help - redundant page with /parent/contact-us page. Not connected to application. Barring any future need for a help page, it is ok to remove.

- /parent/settings - obsolete page that will can be removed or receive abstracted edit account settings from current parent dashboard. It might be nice to clean up the parent dashboard and make it a true snapshot dashboard with business functions abstracted out.

- child/match-up/squad-vote - 404 page that can be implemented in the future in the happy path for the children to be able to vote on other squads potentially. 


## ADMIN / DEV Routes

- /moderation - DEPRECATED. REMOVE FROM CODEBASE.
- /admin - current path being worked on
- /dev/day/1-3 - NOT WORKING 
- /dev/day/4 - rendering testing page
- /dev/day/5 - rendering testing page
- /dev/day/6 - rendering testing page
- /dev/day/7 - rendering testing page

## DEV NOTE:

This document accounts for all current paths of the application. This exercise should be updated as needed to reflect the current functionality of the application.











