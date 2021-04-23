import React from 'react';

/**
 * Default CSS definition for typescript
 */
declare module '*.css' {
  const content: { [className: string]: string };
  export default content;
}

declare module '*.svg' {
  const svgUrl: string;
  const svgComponent: React.StatelessComponent<React.SVGAttributes<SVGElement>>;
  export default svgUrl;
  export { svgComponent as ReactComponent };
}

declare module 'csstype' {
  interface Properties {
    [index: string]: any;
  }
}

declare namespace NodeJS {
  export interface ProcessEnv {
    // eslint-disable-next-line @typescript-eslint/naming-convention
    IS_DEV: boolean;
  }
}
