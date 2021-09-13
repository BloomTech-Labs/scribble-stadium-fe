# Locking Mechanism

Among these MatchUp components lives the code that the locking mechanism consists of.
In RenderMatchUp.js, a useEffect is used with a getGameVotes function, which gets the votes the kid has made, and then, pertaining to
the locking mechanism, numberOfTimesVoted state is set to the length of the votes - because the faceoffs unlocking have to do with how many times
the kid has voted.

Thus, later in RenderMatchUp.js, in the JSX where the subcomponent FaceoffContent.js is called 4 times, we pass props to those 4 instances of the subcomponent,
including the numberOfTimesVoted, as well as votesNeededToUnlock, which is 1 for blue box, 2 for yellow box, and 3 for red box and green box. We also pass the
dayNeededToUnlock and hourNeededToUnlock - day 4 (or thursday) at 6 am for all boxes except highest green box, and then the green box on day 5 (Friday) at 6 pm.

Then in the FaceoffContent.js component, these same props are passed again to the 2 FaceoffSubDisplay subcomponents that are part of each faceoff. (FaceoffSubDisplay
features the avatar of the child and their submission).

And THEN, in the FaceoffSubDisplay component is where the magic happens. We include JavaScript Date() function to grab the date data, and then the day property and
hour property of the Date - now we have the current day and hour saved.

Then we have the locked state starting out as set to true - first the submissions are locked. And then in a useEffect, we set the locked state to false if certain conditions
are met - namely if there are votes, and the numberOfTimesVoted is greater or equal to the votesNeededToUnlock (receiving those specific props from the parent component),
as well as if the currentDayOfTheWeek is greater or equal to the dayNeededToUnlock prop and if the currentHour is greater or equal than the hourNeededToUnlock prop.

Lastly, now that locked can be false (unlocked) if the conditions are met, we use a ternary operator in the JSX of the FaceoffSubDisplay to say that IF locked is false,
then display the image submissions, but if it is locked, display the locked svg image instead.

And that basically makes up the locking mechanism!
