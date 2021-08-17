//** Import Modules */
import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { gsap } from 'gsap';

export default function GameReadStep(props) {
  const history = useHistory();

  const handleNext = () => {
    // Update the current step and progress data
    props.updateCurStep('draw');
    props.updateSubmissionData('HasRead', true);

    // Enable the modal window
    if (!props.modalClosed.read) {
      const modalData = {
        title: 'Your time to shine!',
        description:
          "Grab a sheet of paper and your drawing supplies. Based on the reading, draw your favorite scene by hand. When you're finished, snap a photo and upload your masterpiece.",
        buttonTxt: "Let's Go!",
      };

      props.enableModalWindow(modalData);
      props.updateModalStatus('read', true);
    }

    // Redirect to the next step
    history.push(`${props.baseURL}/draw`);
  };

  // Add some animation
  useEffect(() => {
    gsap.from('#read-step', {
      opacity: 0,
      y: 200,
      duration: 1,
    });
  }, []);

  return (
    <div id="read-step">
      <div id="story" className="gameification-content">
        <div className="inner-container">
          <div className="story-title">
            <h2>Zoom & Boom @ A Saltwater Startup</h2>
            <span>by Conner Burnham</span>
          </div>

          <div className="story-content">
            <h3>Chapter 1</h3>

            <p>
              In the coral reefs beneath the surface of the ocean, every kid was
              obsessed with the sport of flipperball. It didn’t matter your
              species—dolphin, marlin, electric eel. Once school got out for the
              summer, everyone suited up for their Little League team and spent
              the season trying to hammer the ball into the back of the net.
              From the sidelines, dads would brag to anyone who would listen,
              “Did you see that move? My kid’s gonna make it to the pros and
              sign a contract for a million clams like Scooter Messy. Just you
              watch.” This summer pastime wasn’t playing out in local pockets
              here or there, along this livestream or that. No, the sport’s
              popularity was surging in reefs underneath every archipelago —
              from Hawaii to Fiji, Guam to Tahiti and the gobs of tropics in
              between. The surface temperature of the Pacific was even said to
              rise an entire degree from the collective outbreak of flipperball
              fever.{' '}
            </p>

            <p>
              Even the bottom feeders in the basement of the ocean weren’t
              immune, although the data from down here was sketchy, as 20,000
              leagues was as far down as a reliable signal would go. Any deeper
              and guppies would start yelling into their devices, “Hello?
              HELL-O? Mom, can you hear me?” before refreshing their screens and
              saying, “Zero bars, really? C’mon, c’mon.” Down here, social media
              didn’t update. Texts wouldn’t transmit. Friends closer to the
              surface wondered why they were being ghosted. When you toggled
              over to the Goggle Earth app, the underwater map would look all
              pixelated. You’d need a real compass and an old school paper map
              to have any chance of navigating, unless of course you grew up
              around these parts and knew the lay of the sand like the back of
              your fin. Late one late spring afternoon, down at the very bottom
              of the water column, the ocean’s current zoomed along at 3, maybe
              3.5 knots. It scraped the seafloor on its way toward the tiny town
              of Booneyville, passing over miles and nautical miles of
              featureless
            </p>
          </div>
        </div>
      </div>

      <div className="next-btn">
        <button onClick={handleNext}>I'm awesome, I'm done reading!</button>
      </div>
    </div>
  );
}
