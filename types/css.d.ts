declare module '*.module.css' {
  const content: { [key: string]: string};
  export default content;
}

declare module '*.css' {
  const content: string;
  export default content;
}

declare module 'csstype' {
  interface Properties {
    [index: string]: any;
  }
}

