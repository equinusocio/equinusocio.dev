import { motion } from 'framer-motion';
import React, {
  useCallback, useEffect, useState,
} from 'react';
import { useMouse } from 'rooks';

import style from './cursor.module.css';

export const Cursor = () => {
  const { clientX, clientY } = useMouse();
  const [isHovering, setIsHovering] = useState<boolean>(false);

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
    docBody.addEventListener('mouseenter', onMouseHover, true);
    docBody.addEventListener('mouseleave', onMouseHoverOut, true);

    return () => {
      docBody.removeEventListener('mouseenter', onMouseHover);
      docBody.removeEventListener('mouseleave', onMouseHoverOut);
    };
  }, [onMouseHover, onMouseHoverOut]);

  return (
    <div className={style.Cursor}>
      {(clientX || clientY) && (
        <motion.div
          className={style.Ball}
          animate={{
            x: clientX ? clientX - 50 : 0,
            y: clientY ? clientY - 50 : 0,
            opacity: 0.2,
            scale: isHovering ? 2 : 1,
          }}
          transition={{
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <svg height="100" width="100">
            <circle cx="50" cy="50" r="25" strokeWidth="0" />
          </svg>
        </motion.div>
      )}
    </div>
  );
};
