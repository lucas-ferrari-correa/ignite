declare module '*.svg' {
  import React from 'react';
  import { SvgProps } from 'expo';
  const content: React.FC<SvgProps>;
  export default content;
}