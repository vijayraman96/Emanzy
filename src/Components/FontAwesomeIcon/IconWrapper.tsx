import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition, SizeProp } from '@fortawesome/fontawesome-svg-core';
import iconLibrary from './IconLibrary'; // Import the icon library file

interface FontAwesomeIconWrapperProps {
  iconName: string; // Name of the icon to render
  size?: SizeProp; // Optional size of the icon
  color?: string; // Optional color of the icon
  className?: string; // Optional className
}

const FontAwesomeIconWrapper: React.FC<FontAwesomeIconWrapperProps> = ({ iconName, size, color, className }) => {
  // Retrieve the corresponding icon from the iconLibrary object
  const icon: IconDefinition | undefined = iconLibrary[iconName];

  if (!icon) {
    // Return null if the icon is not found
    return null;
  }

  return (
    <FontAwesomeIcon icon={icon} size={size} color={color} className={className} />
  );
};

export default FontAwesomeIconWrapper