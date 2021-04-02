# How StorySquad should work
_Last updated by Labs30 01.28.21_

[Stakeholder Demo of Desired App]([https://docs.google.com/presentation/d/1DKJjCHwA_W9JCAaiofN5bwVCe7MvG8NMJVBSyzeR2qw/edit#slide=id.g814549c2e8_0_7](https://docs.google.com/presentation/d/1DKJjCHwA_W9JCAaiofN5bwVCe7MvG8NMJVBSyzeR2qw/edit#slide=id.g814549c2e8_0_7))

Please note that Labs 32 has compiled a ABOUT_DEVELOPER_MODE.md file that can be read to learn about exploring the application, utilizing developer mode, and exposes some bugs that exist as of April 3rd, 2021.

## Notes

Students that started at the same time will be placed in "cohorts." This will allow students to progress through a chapter book for their reading, and synchronizes the writing and drawing prompts for students in that cohort.

## Overview of week:

## Step 1 (Saturday - Monday: Read, draw, and write)
Saturday marks the first day of a new game.  Students are to click on "Accept the Mission," and are sent to a screen with three "tasks." They must accomplish the tasks in the order of reading -> drawing -> writing. For drawing and writing, the tasks are intended to be "locked" until the previous task is completed. (i.e., drawing is locked until reading is finished, writing is locked until drawing is finished).  These tasks are intended to be available for the first 3 days (Sat - Mon). All students in the same cohort read the same assigned chapter/story.

Note: 
* All students in the same cohort read the same assigned chapter/story
* students draw a picture based on a sentence in the story, and handwrite their own fictional story using the characters in the reading.
* Upon completion of each task, the task should appear as "checked," and should make a datase query/queries (reading just queries that hasRead is true, the other two require a submission upload db query as well)


## Step 2 (Tuesday: Moderation and Data-Science)

On Tuesday, children are not given any particular task to do -- the day is reserved for moderation and data science clustering/etc.
Writing and drawings will receive a "squad score" by DS & then be grouped with four students of similar skillsets.  From here, they are to be placed into teams of 2.  Each team of 2 is to go head-to-head for the remainder of the week.  Note that teams and face-offs are not revealed on Tuesday.

## Step 3 (Wednesday)

On Wednesday, each child is introduced to their assigned teammate.  From here, the student reads through a "Squad Portfolio" of their work (and their teammate's).  Each student then invests/allocates points across the squad portfolio, like a "betting" phase.  Each student is intended to allocate points according to which "portfolio pieces" they think will win.  Each item must have a minimum of 10 points, and each student must spend 100 points total.  If points are NOT allocated, their points will be distributed evenly between the four portfolio pieces (25 points each).

## Step 4 Thursday - Friday: voting, and suspense before the reveal, the big reveal)

Thursday and Friday are nearly the same, with the exception that the big reveal is reserved for Friday afternoon. 

On Thurs-Fri, matchups occur; each team is introduced to the opposing team.  Between each team's separate "Squad Portfolio," the highest-allocated items (of the same type) will face-off against each other.  i.e., a squad's highest-allocated drawing will be vs. the opposing squad's highest-allocated drawing, the second highest vs the second highest, and so forth.  For each of these "face-offs," the total allocated points (between the two items in the face-off) are at stake, i.e. if 50 points were allocated to each of the two top-drawings, then 100 points are at stake in their face-off.  For said face-offs, the winning piece will be determined through having outside-voters vote on the face-off. 

3. Matchups will be displayed on a Matchup Dashboard, where the student can see their team matchups & the total points allocated to each matchup. Upon initially seeing this page, the student can view all of the submissions from their "Squad Portfolio," but can only the opposing team's lowest-point face-off submission.  As the student proceeds to vote on OTHER MATCHUPS they are gradually able to unlock seeing more of the opposing team's face-off submissions, as well as whether or not a winner has been decided yet. (This means that a student must finish their required votes AND that other students must finish voting on all 4 of the faceoffs in order to see the big reveal.).

Note that a student should never vote on their own team's matchups, only on unrelated teams.  Students should not know whose work they are voting for, will vote entirely on their own opinions on what is subjectively better, and can give emoji feedback.

The big reveal is unique from the other reveals in that it not only requires the child to vote on a number of outside face-offs, but also becomes available after a certain hour on Friday.
## Reset to New Week

Questions to ask: does the reset occur after the big reveal on Friday, or should it wait until Saturday?  It seems that implementing a Saturday time-based reset would be easier to implement.

## Glossary of terms

(Provided by stakeholder at [this link]([https://www.notion.so/How-the-app-should-work-a39c5ddfe3614cea8e41dc3da4991c87#d683ba82f1ad45b8aece9164b17f03c3](https://www.notion.so/How-the-app-should-work-a39c5ddfe3614cea8e41dc3da4991c87#d683ba82f1ad45b8aece9164b17f03c3)))

**"Monster app"** refers to the weekly Story Squad game being developed in Lambda Labs.

**"Mini app"** refers to the separate free daily story contest that is already launched.

**"Novel"** refers to the overarching narrative that populates the READ portion of each week. The plan initially is to use the 100,000 word manuscript entitled *Zoom & Boom @ A Saltwater Startup*, which retells the myth of Medusa through social media chatter of sea animal characters on a little league soccer team set in the Galapagos. At the current "Read" portion of ~15-18 pages per week, this novel take 5-6 months for a user to consume.

**"Mission"** refers to one week's worth of gameplay from Read/Write/Draw—>Point Share—>Matchup Dashboard with emoji feedback & Independent Voting with unlocking—>Outcome reveal.

**"Cohort"** refers to all the users going through the weekly sequence at the same point in the story. This will be referred to by weeks, so there is a week 1 cohort that is just starting the story, a week 2 cohort, etc.

**"Teammate"** refers to your assigned partner for a single week. A user will have different teammates week-over-week based on their "Write" submission's NLP Squad Score.

**"Squad Score"** refers to the DS score that the transcribed handwritten side quest earns. Kids are clustered in teams and matched up against opponents of similar Squad Scores to maximize the uncertainty around the team that wins >200 points in the 4 head-to-head faceoffs; this implies that the determining factor is likely how kids quantify their aesthetic evaluation of their squad's portfolio during the "Point Share" phase of the weekly sequence.

**"Team name"** refers to the arbitrary Mad-Libs style mashup of nouns that you and your teammate arbitrary select without knowledge of the other's choice. On the roadmap for future Labs team.

**"Avatar"** refers to the action figure caricatures that represent a user through the weekly screen sequence.

**"Squad" or "Team"** both refers to a user and their assigned teammate. (NB. This term is used differently than the way Emilio Ramirez's on Trevor Martin's Labs 28 team used it in his Medium post.)

**"Squad Portfolio"** is the collection of 2 written side quests and 2 illustrations submitted between you and your teammate that week.

**"Points"** refers to each player's 100 points that they individually invest over their "squad portfolio" in the "point share" phase. 4 players (2 teammates playing against 2 teammates) x 100 points available to be assigned by each individual player = 400 points at stake in each weekly matchup. These points cascade through the matchup dashboard, determine which squad wins the weekly matchup, and serve as an aggregated metric in the league leaderboard showing cumulative points and weekly record.

**"Story" or "Side Quest"** and **"Illustration" or "Picture"** refers to user submissions during the WRITE and DRAW portions respectively done in the early part of the user's weekly sequence. Both side quests (functioning as imaginative fan fiction) and pictures should be handwritten or hand-drawn by users. These are creative user-generated content images that get submitted as JPEG, PNG, or HEIC files. Internal docs sometimes refer to stories and pics are sometimes referred to as **"CCS,"** which stands for creative content submissions.

**"Opponents"** refers to the team of 2 players you and your teammate are opposing that week. Opponents, like teammates, get shuffled week-over-week.

**"Matchup" or "Weekly Matchup"** refers to the overall squad-vs.-squad faceoffs taking place across the 4 rectangles (green box = most points at stake, then red, yellow, blue boxes). If a user and their teammate win the week capturing >200 points, they become 1-0 in their record.

**"Faceoff"** refers to the story-vs.-story or picture-vs.-picture individual competition on the Matchup Dashboard. Each faceoff gets routed to 3 independent evaluators who vote for whichever 1 of the 2 works they like better.

**"Unlocking"** refers to the incremental nudge to drive a user to fulfill their independent voting obligation by offering the small incentive of unlocking your opponents' side quest or illustration so you can scope out which work has the advantage to build anticipatory pleasure in imagining the result and how it impacts the overall matchup of 4 faceoffs. After each voting session as an independent evaluator, the user gets routed back to the matchup dashboard, but this time their opponent's side quest or picture in the blue box (with the fewest points at stake) has been unlocked and is able to be clicked on so that a modal popout window emerges. This scoping out the enemy's work allows a player to assess the likelihood of the faceoff's outcome. During the second voting session, their opponent's side quest or picture yellow box submission is unlocked; similarly, the opponent's side quest or picture in red box unlocks after the 3rd and final independent voting session. The green box, which represents the most number of points at stake and has a disproportionate impact on the overall matchup outcome, is never unlocked until the final reveal sequence at the crescendo of the week.

**"Emoji Feedback"** refers to the string of 4-6 emojis that every voter is required to leave on a user's side quest or picture during the independent voting period regardless of whether their work receives the vote. This emoji feeeback is routed back to the author as an additional lever to build anticipatory pleasure about the result, as kids speculate about the oracle-esque / cryptic significance of the emoji string. The notification that a user has emoji feedback to ponder should occur as soon as the independent voter submits it, and it should be collated so the string of emojis by one voter is preserved to allow the kid the chance to interpret what the voter is trying to communicate as feedback.

**"Independent Voting" or "Voting"** refers to the part of the weekly user flow that requires user engagement once WRITE and DRAW portions are submitted. (Conversely, the point share stage can be defaulted to automate a point split of 25-25-25-25 if user's required action hasn't been input within the timeframe while still driving the weekly sequence of gameplay forward.) This independent voting stage requires a user to vote on 3 faceoffs from *other* matchups outside of their own but still generated by users in the weekly cohort so everyone, authors and evaluators, are up to the same point in the overarching READ story. During this independent voting process, each faceoff gets routed to an odd number of independent evaluators, who only are able to examine the 2 opposing pieces of user-generated creative content side-by-side and select a winner. All contextualizing metadata like authorial attribution (i.e., username, etc.) or matchup context (i.e., how many points attached, etc.) are stripped so the independent evaluator simply sees 2 side quests or 2 pictures side-by-side and: 1) votes for the one they prefer (for whatever reason), and 2) leaves mandatory emoji feedback that gets immediately routed back to each author. The unlocking mechanism offers users incremental incentivizes to fulfill this mandatory part of the weekly sequence. If a user does NOT fulfill this voting obligation, the reveal stage is withheld until they complete voting even after the deadline to avoid a "free rider problem." This edge case should allow the remaining 3 players in the matchup to move forward with the reveal and weekly game reset into the next week's READ/WRITE/DRAW sequence, while forcing the delinquent player to vote (even if this doesn't affect the results of the matchup being voted upon since it theoretically occurs after the reveal sequences in the outside matchups, which in effect means these delinquent votes will not count, but are still necessary to enforce).

**"Reveal"** refers to way the outcome of each of the faceoffs in a matchup gets announced. In the Figma, this takes place from blue—>yellow—>red—>green boxes, as the intensity ratchets up as the points at stake increases. There needs to be the chance to for players to scope out the opponents' creative submission in the green box during the reveal sequence, since that has not been unlocked up until this point of the sequence.

**"Record"** refers to a user and their squadmate's / teammate's tally of weekly overall matchup victories. For example, let's say that after 4 weeks of gameplay, you and your weekly partner (who changes week-over-week) win 2 of those weeks by having the pieces in your squad portfolio capture at least 200 points in the overall matchup, but lose the other two weeks. Your record is 2-2, with a subordinate sorting factor of how many points your work on its own has captured in the faceoffs.

**"Leaderboard"** refers to the ranked record of users within a cohort and a historical register of users on the platform at that point in the game. (If you're at week 5, it has a listing of all players' records in your cohort as well as another data table listing the records of every player historically who has made it to this point in the game.) See the example Google Sheet for column headers and sorting logic.

**"Trophy Room"** refers to custom trophies a user earns for proceeding further into the game. On the roadmap for future Labs teams.

**"Adventure Passport"** refers to a Pinterest-style board listing your own portfolio of side quests and illustrations as well as others you have selected to pull into your custom-version of the overarching story. On the roadmap for future Labs teams. (edited)
