import { motion } from 'framer-motion';
import React, {
  useCallback, useEffect, useState,
} from 'react';

import style from './cursor.module.css';

export const Cursor = () => {
  const ref = React.useRef(null);
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState<boolean>(false);

  const onMouseMove = useCallback(
    (e) => {
      setCoords(prevState => ({
        ...prevState,
        x: e.clientX,
        y: e.clientY,
      }));
    },
    [],
  );

  const onMouseHover = useCallback(
    (e) => {
      if (e.target) {
        switch (e.target.nodeName) {
          case 'BUTTON':
          case 'A':
            setIsHovering(true);
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
      setIsHovering(false);
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
  }, [onMouseMove, onMouseHover, onMouseHoverOut]);

  return (
    <div ref={ref} className={style.Cursor}>
      {(coords.x || coords.y) ? (
        <motion.div
          className={style.Ball}
          animate={{
            x: coords.x ? coords.x - 16 : 0,
            y: coords.y ? coords.y - 16 : 0,
            opacity: 0.2,
            scale: isHovering ? 1.5 : 1,
          }}
          transition={{
            ease: [0.22, 1, 0.36, 1],
          }}
        />
      ) : ''}
    </div>
  );
};
