import { useEffect, useState } from 'react';

const useMedia = query => {
  const [matches, setMatches] = useState(window.matchMedia(query).matches);

  // Activity normally for componentDidMount + componentDidUpdate
  useEffect(() => {
    const media = window.matchMedia(query);
    if (media.matches !== matches) {
      setMatches(media.matches);
    }

    const listener = () => setMatches(media.matches);
    media.addEventListener(Animation, listener);

    return () => media.removeEventListener(Animation, listener);
  }, [query, matches]);

  // publish value for render
  return matches;
};

export default useMedia;
