import React from 'react';
import useWindowDimensions from './windowdimensions';
import './wordcloud.css';
import axios from 'axios';

export default function WordCloud(props) {
  let words = props.data;
  let data = [];
  for (const word in words) {
    data.push({ word: word, weight: words[word] });
  }

  /* returned input is too large. The supplied endpoint returns an entire story
    with weight values. Future versions of this component will need to either return 
    less words from the API or another solution would be to order the words by their
    weight values before slicing them. So that only the more complex words would be displayed*/
  const wordCloudData = data.slice(0, 50);

  function generateColor() {
    let number = Math.random();

    if (number <= 0.1) {
      return '#9BE1DF';
    } else if (number <= 0.2) {
      return '#F94144';
    } else if (number <= 0.3) {
      return '#F3722C';
    } else if (number <= 0.4) {
      return '#F8961E';
    } else if (number <= 0.5) {
      return '#F9844A';
    } else if (number <= 0.6) {
      return '#F9C74F';
    } else if (number <= 0.7) {
      return '#90BE6D';
    } else if (number <= 0.8) {
      return '#43AA8B';
    } else if (number <= 0.9) {
      return '#4D908E';
    } else {
      return '#277DA1';
    }
  }

  function shuffle(array) {
    var currentIndex = array.length,
      randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }

    return array;
  }
  shuffle(wordCloudData);
  const { height, width } = useWindowDimensions();
  return (
    <div className="word-cloud">
      {wordCloudData.map((line, i) => {
        let left = width * Math.random();
        let top = height * Math.random();
        return (
          <span
            key={i}
            style={{
              color: generateColor(),
              fontSize: `calc(2rem * (${line.weight} * 100) + 1vw)`,
              left: Math.random() < 0.5 ? `-${left}px` : `${left}px`,
              top: Math.random() < 0.5 ? `-${top}px` : `${top}px`,
            }}
          >
            <p>{line.word}</p>
          </span>
        );
      })}
      ;
    </div>
  );
}
