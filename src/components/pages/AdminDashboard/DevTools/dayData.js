export const dayData = [
  {
    dayID: 1,
    dayOfWeekIndex: 6, //used for findNextDayOfWeek
    dayName: 'Saturday',
    dayNumber: 'First Day of Game Play',
    stage: 'The Reading Stage',
    content:
      'At 11AM every Saturday, the game is reset. A kid user reads the excerpt from the story for the week. Only when the kid user is finished reading the story for the week they are able to proceed to the next stage of the game.',
    url: '/dev/day/1',
    gameStageUrl: '/child/mission-control',
  },
  {
    dayID: 2,
    dayOfWeekIndex: 0,
    dayName: 'Sunday',
    dayNumber: 'Second Day of Game Play',
    stage: 'The Drawing Stage',
    content:
      'Kid users are instructed to draw a picture of one sentece from the excerct of the story of the week. When the kid user uploads the image, they proceed to the next stage in the game.',
    url: '/dev/day/2',
    gameStageUrl: '/child/mission-control',
  },
  {
    dayID: 3,
    dayOfWeekIndex: 1,
    dayName: 'Monday',
    dayNumber: 'Third Day of Game Play',
    stage: 'The Writing Stage',
    content:
      'Kid users are instructed to write a side quest (story) based off of the prompt given in the app. When the kid user uploads the image, they proceed to the next stage in the game. Monday at 11:59PM is the deadline for submissions. The image of the uploaded side quest is translated by a 3rd Party API implemented by DS.',
    url: '/dev/day/3',
    gameStageUrl: '/child/mission-control',
  },
  {
    dayID: 4,
    dayOfWeekIndex: 2,
    dayName: 'Tuesday',
    dayNumber: 'Fourth Day of Game Play',
    stage: 'Join a Squad Stage',
    content:
      '2 kid users are put together to form a "Squad". A kid user does not do much interaction with the app at this stage. DS is doing most of the work behind the scenes in order to match kid users with other kid users at similar skill levels. Side quests are analyzed by DS. Side quests and drawings will receive a "squad score" by DS and be grouped with a student of similar skillset into a squad. Each squad will be matched with a similarly skilled squad to compete against in a matchup. The matchup refers to the overall squad-vs.-squad face-offs taking place, and will be displayed on the matchup page as 4 face-offs.',
    url: '/dev/day/4',
    gameStageUrl: null,
  },
  {
    dayID: 5,
    dayOfWeekIndex: 3,
    dayName: 'Wednesday',
    dayNumber: 'Fifth Day of Game Play',
    stage: 'Point Share Stage',
    content:
      "Ex: There are two side quests and two pictures. Kid user 1 allocates his or her points in the following way: - 20 points to kid user 1's image - 30 points to kid user 1's side quest - 40 points to kid user 2's side quest - 10 points to kid user 2's image Kid user 1 divided his or her points based on how likely kid user 1 thought that specific side quest or image would match up against another users image or side quest. Kid user 2 allocates his or her points following the same thought process. Each submission must get a minimum of 10 points. If a student fails to allocate points, each submission defaults to 25 points per side quest and drawing.",
    url: '/dev/day/5',
    gameStageUrl: '/child/join',
  },
  {
    dayID: 6,
    dayOfWeekIndex: 4,
    dayName: 'Thursday',
    dayNumber: 'Sixth Day of Game Play',
    stage: 'Matchup and Independent Voting Stage',
    content:
      'The Matchup Dashboard shows the face-offs from the previous round. The side quest with the greatest amount of points from Team A and the side quest with the greatest amount of points from Team B are put up against each other. The drawing with the greatest points from Team A and the drawing with the greatest points from Team B are put up against each other. The total points in this round will be equal to 400. A squad needs 200.5 points or more to win the Matchup. In this stage there are 100 points allocated in each of the kid users. The kid users give an alloted amount of points of their choice to both side quests and images.The drawing and the side quest with the greater amount of points moves on the the next stage in the game. Each user in the cochort gets served up 3 independent voting sessions on A vs B side quests or pictures from other matches within their cohort. Each A vs B pair gets served up 3x randomly to voters on the platform. These voters vote for the better of the side quest or drawing and leave emoji feedback that is routed back to each author and populated on the Matchup page.',
    url: '/dev/day/6',
    gameStageUrl: '/child/match-up',
  },
  {
    dayID: 7,
    dayOfWeekIndex: 5,
    dayName: 'Friday',
    dayNumber: 'Seventh and Last Day of Game Play',
    stage: 'Scoreboard Stage',
    content: 'Today at 3 PM is the big reveal and the winners are announced.',
    url: '/dev/day/7',
    gameStageUrl: '/child/match-up', // uncertain where the big reveal comes from
  },
];
