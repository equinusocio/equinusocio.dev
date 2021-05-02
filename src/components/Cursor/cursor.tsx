import gsap, { TweenLite, CSSPlugin } from 'gsap';
import React, {
  Fragment,
  useCallback, useEffect, useRef, useState,
} from 'react';

import style from './cursor.module.css';

gsap.registerPlugin(CSSPlugin);

export const Cursor = () => {
  const bigBallRef = useRef(null);
  const [isMoving, setIsMoving] = useState(false);

  const onMouseMove = useCallback(
    (e) => {
      setIsMoving(true);

      if (bigBallRef.current) {
        TweenLite.to(bigBallRef.current, 0.4, {
          x: e.clientX - 50,
          y: e.clientY - 50,
          force3D: true,
          rotation: 0.01,
        });
      }
    },
    [],
  );

  const onMouseHover = useCallback(
    (e) => {
      if (e.target) {
        switch (e.target.nodeName) {
          case 'BUTTON':
          case 'A':
            if (bigBallRef.current) {
              TweenLite.to(bigBallRef.current, 0.3, {
                scale: 1,
              });
            }
            break;

          default:
            break;
        }
      }
    },
    [],
  );
  const onMouseHoverOut = useCallback(
    () => {
      if (bigBallRef.current) {
        TweenLite.to(bigBallRef.current, 0.3, {
          scale: 0.5,
        });
      }
    },
    [],
  );

  useEffect(() => {
    const docBody = document.body;
    docBody.addEventListener('mousemove', onMouseMove, true);
    docBody.addEventListener('mouseenter', onMouseHover, true);
    docBody.addEventListener('mouseleave', onMouseHoverOut, true);

    return () => {
      docBody.removeEventListener('mousemove', onMouseMove);
      docBody.removeEventListener('mouseenter', onMouseHover);
      docBody.removeEventListener('mouseleave', onMouseHoverOut);
    };
  }, [onMouseHover, onMouseMove, onMouseHoverOut]);

  return (
    <div className={style.Cursor}>
      {isMoving && (
        <Fragment>
          <div className={style.Ball} data-size="big" ref={bigBallRef}>
            <svg height="100" width="100">
              <circle cx="50" cy="50" r="25" strokeWidth="0" />
            </svg>
          </div>
        </Fragment>
      )}
    </div>
  );
};
