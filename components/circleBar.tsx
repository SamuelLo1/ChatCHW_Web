"use client"
import React, { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import Progress from 'react-circle-progress-bar';

const CircleBar = ({ maxVal }) => {
  const [percent, setPercent] = useState(0);
  const { ref: inViewRef, inView } = useInView({
    threshold: 0,
  });

  useEffect(() => {
    if (inView) {
      setPercent(maxVal);
    } else {
      setPercent(0);
    }
  }, [inView, maxVal]);

  return (
    <div ref={inViewRef}>
      <Progress
        ref={(ref) => (inViewRef.current = ref)}
        background="#a9a9a9"
        gradient={[
          { stop: 0.0, color: '#FFA500' },
          { stop: 1, color: '#FF4500' },
        ]}
        progress={percent}
        reduction={0}
        strokeWidth={13}
        transitionDuration={3}
        transitionTimingFunction="ease"
        className="mb-5 font-bold"
      />
    </div>
  );
};

export default CircleBar;