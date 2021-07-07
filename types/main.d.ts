/* eslint-disable no-undef */
/**
 * Default CSS definition for typescript
 */

declare module '*.svg' {
  const svgUrl: string;
  const svgComponent: React.StatelessComponent<React.SVGAttributes<SVGElement>>;
  export default svgUrl;
  export { svgComponent as ReactComponent };
}

declare namespace NodeJS {
  export interface ProcessEnv {
    /* eslint-disable @typescript-eslint/naming-convention */
    IS_DEV: boolean;
    NEXT_PUBLIC_DOMAIN: string;
    CONTENTFUL_SPACE_ID: string;
    CONTENTFUL_CDA_TOKEN: string;
    CONTENTFUL_CPA_TOKEN: string;
  }
}