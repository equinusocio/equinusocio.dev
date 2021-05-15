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
            x: clientX ? clientX - 16 : 0,
            y: clientY ? clientY - 16 : 0,
            opacity: 0.2,
            scale: isHovering ? 1.5 : 1,
          }}
          transition={{
            ease: [0.22, 1, 0.36, 1],
          }}
        />
      )}
    </div>
  );
};
