declare module '@iconscout/react-unicons' {
  import { ReactNode } from 'react';
    // Define a generic interface for icon props
    export interface IconProps {
      size?: number;
      color?: string;
      className?: string;
      [key: string]: any; // Index signature for additional props
    }
  
    // Define a generic interface for icon components
    export interface IconComponent extends React.FC<IconProps> {}
  
    // Export each icon component with the generic IconComponent type
    export const UilUser: IconComponent;
    export const UilArrowUp: IconComponent;
    export const UilSearch: IconComponent;
    export const UilEyeSlash: IconComponent;
    export const UilEye: IconComponent;
    export const UilEnvelope: IconComponent;
    export const UilLock: IconComponent;
    export const UilCheck: IconComponent;
    // Add types for other components you use from the library
  }