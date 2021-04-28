type PropsClass = {
  className?: string;
}

declare module '*.module.css' {
  const classes: { [key: string]: string};
  export default classes;
}

declare module '*.css'

declare module 'csstype' {
  interface Properties {
    [index: string]: any;
  }
}

