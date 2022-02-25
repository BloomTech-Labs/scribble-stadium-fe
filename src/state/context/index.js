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
};

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
