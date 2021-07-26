const mockGetChildTasks = {
  ID: 1,
  ChildID: 1,
  StoryID: 1,
  HasRead: false,
  HasWritten: false,
  HasDrawn: false,
  Complexity: 30,
  LowConfidence: false,
  Status: 'PENDING',
  CohortID: 1,
};

const mockNewDrawingSub = [
  {
    URL: 'http://someurl.com',
    checksum:
      '25ef9314704f5f68b7e04513c1ca13c9146328ee14a38e1d7c99789ab11fae31e1c0238425d58581b3ac4941884cd389b7bea3f8e658f533adc7cf934bb130f8',
  },
];

const mockNewWritingSub = [
  {
    URL: 'http://someurl.com',
    checksum:
      '25ef9314704f5f68b7e04513c1ca13c9146328ee14a38e1d7c99789ab11fae31e1c0238425d58581b3ac4941884cd389b7bea3f8e658f533adc7cf934bb130f8',
    PageNum: 1,
  },
];

const mockGetChildTeam = {
  1: {
    ChildID: 1,
    MemberID: 1,
    SubmissionID: 1,
    ImgURL: 'https://picsum.photos/id/201/400',
    ChildName: 'Bettie',
    AvatarURL: 'https://storysquad-main.s3.amazonaws.com/09.svg',
    Pages: [
      {
        PageURL: 'https://picsum.photos/id/1/400',
        PageNum: 1,
      },
      {
        PageURL: 'https://picsum.photos/id/101/400',
        PageNum: 2,
      },
    ],
  },
  2: {
    ChildID: 2,
    MemberID: 2,
    SubmissionID: 2,
    ImgURL: 'https://picsum.photos/id/202/400',
    ChildName: 'Krystel',
    AvatarURL: 'https://storysquad-main.s3.amazonaws.com/05.svg',
    Pages: [
      {
        PageURL: 'https://picsum.photos/id/2/400',
        PageNum: 1,
      },
      {
        PageURL: 'https://picsum.photos/id/102/400',
        PageNum: 2,
      },
    ],
  },
  name: 'Team 1',
};

const mockSubmitPoints = [21, 22];

const mockGetChildSquad = {
  ID: 1,
  MemberID: 1,
};

const mockGetFaceoffsForMatchup = [
  {
    ID: 1,
    Points: 170,
    Type: 'WRITING',
    SubmissionID1: 1,
    SubmissionID2: 3,
    SquadID: 1,
    Winner: null,
    Date: '2021-04-12T19:01:46.884Z',
    VotesCasted: 0,
    Emojis1: {
      Emoji: '',
    },
    Submission1: {
      ID: 1,
      Name: 'Bettie',
      ImgURL: 'https://picsum.photos/id/201/400',
      AvatarURL: 'https://storysquad-main.s3.amazonaws.com/09.svg',
      Pages: [
        {
          PageNum: 1,
          PageURL: 'https://picsum.photos/id/1/400',
        },
        {
          PageNum: 2,
          PageURL: 'https://picsum.photos/id/101/400',
        },
      ],
    },
    Submission2: {
      ID: 3,
      Name: 'Tavares',
      ImgURL: 'https://picsum.photos/id/203/400',
      AvatarURL: 'https://storysquad-main.s3.amazonaws.com/01.svg',
      Pages: [
        {
          PageNum: 1,
          PageURL: 'https://picsum.photos/id/3/400',
        },
        {
          PageNum: 2,
          PageURL: 'https://picsum.photos/id/103/400',
        },
      ],
    },
  },
  {
    ID: 3,
    Points: 85,
    Type: 'DRAWING',
    SubmissionID1: 1,
    SubmissionID2: 3,
    SquadID: 1,
    Winner: null,
    Date: '2021-04-12T19:01:46.884Z',
    VotesCasted: 0,
    Emojis1: {
      Emoji: '',
    },
    Submission1: {
      ID: 1,
      Name: 'Bettie',
      ImgURL: 'https://picsum.photos/id/201/400',
      AvatarURL: 'https://storysquad-main.s3.amazonaws.com/09.svg',
      Pages: [
        {
          PageNum: 1,
          PageURL: 'https://picsum.photos/id/1/400',
        },
        {
          PageNum: 2,
          PageURL: 'https://picsum.photos/id/101/400',
        },
      ],
    },
    Submission2: {
      ID: 3,
      Name: 'Tavares',
      ImgURL: 'https://picsum.photos/id/203/400',
      AvatarURL: 'https://storysquad-main.s3.amazonaws.com/01.svg',
      Pages: [
        {
          PageNum: 1,
          PageURL: 'https://picsum.photos/id/3/400',
        },
        {
          PageNum: 2,
          PageURL: 'https://picsum.photos/id/103/400',
        },
      ],
    },
  },
  {
    ID: 4,
    Points: 80,
    Type: 'DRAWING',
    SubmissionID1: 2,
    SubmissionID2: 4,
    SquadID: 1,
    Winner: null,
    Date: '2021-04-12T19:01:46.884Z',
    VotesCasted: 0,
    Submission1: {
      ID: 2,
      Name: 'Krystel',
      ImgURL: 'https://picsum.photos/id/202/400',
      AvatarURL: 'https://storysquad-main.s3.amazonaws.com/05.svg',
      Pages: [
        {
          PageNum: 1,
          PageURL: 'https://picsum.photos/id/2/400',
        },
        {
          PageNum: 2,
          PageURL: 'https://picsum.photos/id/102/400',
        },
      ],
    },
    Submission2: {
      ID: 4,
      Name: 'Myrna',
      ImgURL: 'https://picsum.photos/id/204/400',
      AvatarURL: 'https://storysquad-main.s3.amazonaws.com/08.svg',
      Pages: [
        {
          PageNum: 1,
          PageURL: 'https://picsum.photos/id/4/400',
        },
        {
          PageNum: 2,
          PageURL: 'https://picsum.photos/id/104/400',
        },
      ],
    },
  },
  {
    ID: 2,
    Points: 65,
    Type: 'WRITING',
    SubmissionID1: 2,
    SubmissionID2: 4,
    SquadID: 1,
    Winner: null,
    Date: '2021-04-12T19:01:46.884Z',
    VotesCasted: 0,
    Submission1: {
      ID: 2,
      Name: 'Krystel',
      ImgURL: 'https://picsum.photos/id/202/400',
      AvatarURL: 'https://storysquad-main.s3.amazonaws.com/05.svg',
      Pages: [
        {
          PageNum: 1,
          PageURL: 'https://picsum.photos/id/2/400',
        },
        {
          PageNum: 2,
          PageURL: 'https://picsum.photos/id/102/400',
        },
      ],
    },
    Submission2: {
      ID: 4,
      Name: 'Myrna',
      ImgURL: 'https://picsum.photos/id/204/400',
      AvatarURL: 'https://storysquad-main.s3.amazonaws.com/08.svg',
      Pages: [
        {
          PageNum: 1,
          PageURL: 'https://picsum.photos/id/4/400',
        },
        {
          PageNum: 2,
          PageURL: 'https://picsum.photos/id/104/400',
        },
      ],
    },
  },
];

const mockGetChild = {
  ID: 1,
  Name: 'Bettie',
  PIN: '0000',
  IsDyslexic: false,
  ParentID: 1,
  CohortID: 1,
  AvatarID: 9,
  Total_Points: 544,
  Wins: 0,
  Losses: 4,
  Ballots: [
    [6, 2],
    [7, 2],
    [8, 2],
    [5, 2],
    [6, 2],
    [8, 2],
    [7, 2],
    [5, 2],
    [6, 2],
    [5, 2],
  ],
  VotesRemaining: 3,
  Achievements: [],
  GradeLevel: '4',
  AvatarURL: 'https://storysquad-main.s3.amazonaws.com/09.svg',
};

const mockGetFaceoffsForVoting = [
  {
    ID: 5,
    Points: 170,
    Type: 'WRITING',
    SubmissionID1: 5,
    SubmissionID2: 7,
    SquadID: 2,
    Winner: null,
    Date: '2021-04-12T19:01:46.884Z',
    VotesCasted: 0,
    Submission1: {
      ID: 5,
      Name: 'Bryana',
      ImgURL: 'https://picsum.photos/id/205/400',
      AvatarURL: 'https://storysquad-main.s3.amazonaws.com/05.svg',
      Pages: [
        {
          PageNum: 1,
          PageURL: 'https://picsum.photos/id/5/400',
        },
        {
          PageNum: 2,
          PageURL: 'https://picsum.photos/id/105/400',
        },
      ],
    },
    Submission2: {
      ID: 7,
      Name: 'Hailee',
      ImgURL: 'https://picsum.photos/id/207/400',
      AvatarURL: 'https://storysquad-main.s3.amazonaws.com/06.svg',
      Pages: [
        {
          PageNum: 1,
          PageURL: 'https://picsum.photos/id/7/400',
        },
        {
          PageNum: 2,
          PageURL: 'https://picsum.photos/id/107/400',
        },
      ],
    },
  },
  {
    ID: 7,
    Points: 85,
    Type: 'DRAWING',
    SubmissionID1: 5,
    SubmissionID2: 7,
    SquadID: 2,
    Winner: null,
    Date: '2021-04-12T19:01:46.884Z',
    VotesCasted: 0,
    Submission1: {
      ID: 5,
      Name: 'Bryana',
      ImgURL: 'https://picsum.photos/id/205/400',
      AvatarURL: 'https://storysquad-main.s3.amazonaws.com/05.svg',
      Pages: [
        {
          PageNum: 1,
          PageURL: 'https://picsum.photos/id/5/400',
        },
        {
          PageNum: 2,
          PageURL: 'https://picsum.photos/id/105/400',
        },
      ],
    },
    Submission2: {
      ID: 7,
      Name: 'Hailee',
      ImgURL: 'https://picsum.photos/id/207/400',
      AvatarURL: 'https://storysquad-main.s3.amazonaws.com/06.svg',
      Pages: [
        {
          PageNum: 1,
          PageURL: 'https://picsum.photos/id/7/400',
        },
        {
          PageNum: 2,
          PageURL: 'https://picsum.photos/id/107/400',
        },
      ],
    },
  },
  {
    ID: 8,
    Points: 80,
    Type: 'DRAWING',
    SubmissionID1: 6,
    SubmissionID2: 8,
    SquadID: 2,
    Winner: null,
    Date: '2021-04-12T19:01:46.884Z',
    VotesCasted: 0,
    Submission1: {
      ID: 6,
      Name: 'Chance',
      ImgURL: 'https://picsum.photos/id/206/400',
      AvatarURL: 'https://storysquad-main.s3.amazonaws.com/03.svg',
      Pages: [
        {
          PageNum: 1,
          PageURL: 'https://picsum.photos/id/6/400',
        },
        {
          PageNum: 2,
          PageURL: 'https://picsum.photos/id/106/400',
        },
      ],
    },
    Submission2: {
      ID: 8,
      Name: 'Catalina',
      ImgURL: 'https://picsum.photos/id/208/400',
      AvatarURL: 'https://storysquad-main.s3.amazonaws.com/04.svg',
      Pages: [
        {
          PageNum: 1,
          PageURL: 'https://picsum.photos/id/8/400',
        },
        {
          PageNum: 2,
          PageURL: 'https://picsum.photos/id/108/400',
        },
      ],
    },
  },
  {
    ID: 6,
    Points: 65,
    Type: 'WRITING',
    SubmissionID1: 6,
    SubmissionID2: 8,
    SquadID: 2,
    Winner: null,
    Date: '2021-04-12T19:01:46.884Z',
    VotesCasted: 0,
    Submission1: {
      ID: 6,
      Name: 'Chance',
      ImgURL: 'https://picsum.photos/id/206/400',
      AvatarURL: 'https://storysquad-main.s3.amazonaws.com/03.svg',
      Pages: [
        {
          PageNum: 1,
          PageURL: 'https://picsum.photos/id/6/400',
        },
        {
          PageNum: 2,
          PageURL: 'https://picsum.photos/id/106/400',
        },
      ],
    },
    Submission2: {
      ID: 8,
      Name: 'Catalina',
      ImgURL: 'https://picsum.photos/id/208/400',
      AvatarURL: 'https://storysquad-main.s3.amazonaws.com/04.svg',
      Pages: [
        {
          PageNum: 1,
          PageURL: 'https://picsum.photos/id/8/400',
        },
        {
          PageNum: 2,
          PageURL: 'https://picsum.photos/id/108/400',
        },
      ],
    },
  },
];

const mockUpdateChildData = {
  data: '',
  status: 204,
  statusText: 'No Content',
  headers: {},
  config: {
    url: 'http://localhost:8000/child/1',
    method: 'put',
    data:
      '{"Name":"Bettie","ParentID":1,"CohortID":1,"GradeLevel":"4","VotesRemaining":9}',
    headers: {
      Accept: 'application/json, text/plain, */*',
      'Content-Type': 'application/json;charset=utf-8',
      Authorization:
        'Bearer eyJraWQiOiJpS1JDUXJwdk1OS2JRbmV2N2huNUhuWi1URThGM1dKcjZESzhra2tsdnJJIiwiYWxnIjoiUlMyNTYifQ.eyJzdWIiOiIwMHVsdGhhcGJFclZVd1ZKeTR4NiIsIm5hbWUiOiJUZXN0MDAxIFVzZXIiLCJlbWFpbCI6ImxsYW1hMDAxQG1haWxkcm9wLmNjIiwidmVyIjoxLCJpc3MiOiJodHRwczovL2F1dGgubGFtYmRhbGFicy5kZXYvb2F1dGgyL2RlZmF1bHQiLCJhdWQiOiIwb2F2c29tejAxR3p1R2lrWTR4NiIsImlhdCI6MTYxODUxODM4MiwiZXhwIjoxNjE4NTIxOTgyLCJqdGkiOiJJRC4zTWxuOGFjUXBwOFB2QU1DRTRjc2VIanptX0xFMi1DMkY0SUxfX2UyNjVZIiwiYW1yIjpbInB3ZCJdLCJpZHAiOiIwMG9rdml6cGJPbUI3WTczWjR4NiIsIm5vbmNlIjoiTmNxVkFYaEpYT2lNdVZqRWVWaHBHQmtvR2k5aWRlSU52ZFZyaENyYTg5c2ZWN2xnWWJFMG9VNkdSOURPaTQ3ciIsInByZWZlcnJlZF91c2VybmFtZSI6ImxsYW1hMDAxQG1haWxkcm9wLmNjIiwiYXV0aF90aW1lIjoxNjE4NTAzNDkzLCJhdF9oYXNoIjoiZDV0VVpzUVpsNl90bld3NUZzRGowQSJ9.AJw5MmLTk3aka1mLSb-Ws1ag3GkGozX-sA8xe-yabKQcCaFBKMTOBzkg0gHgyKzB-pI-VF874t6HYjaQN4J7zNNfcTNgnSHZgc43BlW53qaIQZujYNIyDJ6tSSygMsWIbpkvtCENlJDaJxceZ8RAbue2ZJfsh88BsivLtKCyO9-TWX2gKdwFnCsRytLBrTbzHrHT-K_lRGLp8aqeyLaenF8OjsHFNaSYOAfT92Zu3U3N7EXCEWCoTm_gmL6GqYURZOCQ6T9eklc3StGrqa3cBDJqr4DoaH9INyGQQfUNUaJP6-IwQlv-WAliIojtkS9Mq5fMzWYCBZHGU27ozbJ_iA',
    },
    transformRequest: [null],
    transformResponse: [null],
    timeout: 0,
    xsrfCookieName: 'XSRF-TOKEN',
    xsrfHeaderName: 'X-XSRF-TOKEN',
    maxContentLength: -1,
    maxBodyLength: -1,
  },
  request: {},
};

const mockPostVotes = null;

const mockGetProfileData = [
  {
    ID: 1,
    Name: 'Gustave Hickle',
    Email: 'llama001@maildrop.cc',
    PIN: '0000',
    type: 'Parent',
  },
  {
    ID: 1,
    PIN: '0000',
    Name: 'April',
    IsDyslexic: true,
    GradeLevel: '7',
    AvatarURL: 'https://storysquad-main.s3.amazonaws.com/05.svg',
    CohortID: 2,
    ParentID: 1,
    type: 'Child',
  },
  {
    ID: 1,
    PIN: '0000',
    Name: 'Bettye',
    IsDyslexic: false,
    GradeLevel: '3',
    AvatarURL: 'https://storysquad-main.s3.amazonaws.com/03.svg',
    CohortID: 2,
    ParentID: 1,
    type: 'Child',
  },
  {
    ID: 1,
    PIN: '0000',
    Name: 'Ellis',
    IsDyslexic: true,
    GradeLevel: '3',
    AvatarURL: 'https://storysquad-main.s3.amazonaws.com/06.svg',
    CohortID: 3,
    ParentID: 1,
    type: 'Child',
  },
  {
    ID: 1,
    PIN: '0000',
    Name: 'Paula',
    IsDyslexic: false,
    GradeLevel: '3',
    AvatarURL: 'https://storysquad-main.s3.amazonaws.com/04.svg',
    CohortID: 3,
    ParentID: 1,
    type: 'Child',
  },
  {
    ID: 1,
    PIN: '0000',
    Name: 'Kayleigh',
    IsDyslexic: false,
    GradeLevel: '8',
    AvatarURL: 'https://storysquad-main.s3.amazonaws.com/05.svg',
    CohortID: 4,
    ParentID: 1,
    type: 'Child',
  },
  {
    ID: 1,
    PIN: '0000',
    Name: 'Johnathon',
    IsDyslexic: false,
    GradeLevel: '6',
    AvatarURL: 'https://storysquad-main.s3.amazonaws.com/07.svg',
    CohortID: 4,
    ParentID: 1,
    type: 'Child',
  },
  {
    ID: 1,
    PIN: '0000',
    Name: 'Leopold',
    IsDyslexic: true,
    GradeLevel: '7',
    AvatarURL: 'https://storysquad-main.s3.amazonaws.com/01.svg',
    CohortID: 1,
    ParentID: 1,
    type: 'Child',
  },
  {
    ID: 1,
    PIN: '0000',
    Name: 'Reinhold',
    IsDyslexic: true,
    GradeLevel: '4',
    AvatarURL: 'https://storysquad-main.s3.amazonaws.com/10.svg',
    CohortID: 1,
    ParentID: 1,
    type: 'Child',
  },
];

const mockGetStory = {
  ID: 4,
  Title: 'Zoom & Boom (Week4, Chapters 7 & 8)',
  URL:
    'https://storysquad-main.s3.amazonaws.com/pdfs/Story+Squad+Week+1+Content+%2B+CCS.pdf',
  WritingPrompt:
    'Finn and Gilberts mom was a secret spy. What was her last adventure?',
  DrawingPrompt:
    'Finn and Gilberts mom was a secret spy. What was her last adventure?',
};

module.exports = {
  mockGetChildTasks,
  mockNewWritingSub,
  mockNewDrawingSub,
  mockGetChildTeam,
  mockSubmitPoints,
  mockGetChildSquad,
  mockGetFaceoffsForMatchup,
  mockGetChild,
  mockGetFaceoffsForVoting,
  mockUpdateChildData,
  mockPostVotes,
  mockGetProfileData,
  mockGetStory,
};
