import React, { createContext, useState } from 'react';

// Parent Context
// ID: string, NAME: string, EMAIL: string, PIN: string, CHILDREN: Array<String>

export const ParentContext = createContext();

export const ParentContextProvider = ({ comps }) => {
  const [id, setId] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [pin, setPin] = useState('');
  const [children, setChildren] = useState([]);

  return (
    <ParentContext.Provider
      value={{
        id,
        setId,
        name,
        setName,
        email,
        setEmail,
        pin,
        setPin,
        children,
        setChildren,
      }}
    >
      {comps}
    </ParentContext.Provider>
  );
};

// Child Context
export const ChildContext = createContext();

export const ChildContextProvider = ({ comps }) => {
  const [id, setId] = useState('');
  const [name, setName] = useState('');
  const [pin, setPin] = useState('');
  const [isDyslexic, setIsDyslexic] = useState('');
  const [parentId, setParentId] = useState('');
  const [cohortId, setCohortId] = useState('');
  const [avatarId, setAvatarId] = useState('');
  const [totalPoints, setTotalPoints] = useState('');
  const [wins, setWins] = useState('');
  const [losses, setLosses] = useState('');
  const [ballots, setBallots] = useState('');
  const [votesRemaining, setVotesRemaining] = useState('');
  const [achievements, setAcievements] = useState('');
  const [gradeLevel, setGradeLevel] = useState('');
  const [avatarURL, setAvatarURL] = useState('');
  const [streaks, setStreaks] = useState('');
  const [notifications, setNotifications] = useState('');
  const [events, setEvents] = useState('');

  return (
    <ChildContext.Provider
      value={{
        id,
        setId,
        name,
        setName,
        pin,
        setPin,
        isDyslexic,
        setIsDyslexic,
        parentId,
        setParentId,
        cohortId,
        setCohortId,
        avatarId,
        setAvatarId,
        totalPoints,
        setTotalPoints,
        wins,
        setWins,
        losses,
        setLosses,
        ballots,
        setBallots,
        votesRemaining,
        setVotesRemaining,
        achievements,
        setAcievements,
        gradeLevel,
        setGradeLevel,
        avatarURL,
        setAvatarURL,
        streaks,
        setStreaks,
        notifications,
        setNotifications,
        events,
        setEvents,
      }}
    >
      {comps}
    </ChildContext.Provider>
  );
};

// Submission Context

export const SubmissionContext = createContext();

export const SubmissionContextProvider = ({ comps }) => {
  const [id, setId] = useState('');
  const [childId, setChildId] = useState('');
  const [storyId, setStoryId] = useState('');
  const [episodeId, setEpisodeId] = useState('');
  const [episodeStartDate, setEpisodeStartDate] = useState('');
  const [moderationStatus, setModerationStatus] = useState('');
  const [startedReadingAt, setStartedReadingAt] = useState('');
  const [finishedReadingAt, setFinishedReadingAt] = useState('');
  const [complexity, setComplexity] = useState('');
  const [lowConfidence, setLowConfidence] = useState('');
  const [createdAt, setCreatedAt] = useState('');
  const [updatedAt, setUpdatedAt] = useState('');
  const [squadUpAt, setSquadUpAt] = useState('');
  const [voteAt, setVoteAt] = useState('');
  const [gameMode, setGameMode] = useState('');
  const [pages, setPages] = useState([]);
};

return (
  <SubmissionContext.Provider
    value={{
      id,
      setId,
      childId,
      setChildId,
      storyId,
      setStoryId,
      episodeId,
      setEpisodeId,
      episodeStartDate,
      setEpisodeStartDate,
      moderationStatus,
      setModerationStatus,
      startedReadingAt,
      setStartedReadingAt,
      finishedReadingAt,
      setFinishedReadingAt,
      complexity,
      setComplexity,
      lowConfidence,
      setLowConfidence,
      createdAt,
      setCreatedAt,
      updatedAt,
      setUpdatedAt,
      squadUpAt,
      setSquadUpAt,
      voteAt,
      setVoteAt,
      gameMode,
      setGameMode,
      pages,
      setPages,
    }}
  >
    {comps}
  </SubmissionContext.Provider>
);
