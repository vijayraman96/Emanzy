import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { faCoffee, faUser, faHeart } from '@fortawesome/free-solid-svg-icons';

// Define an object that holds all the icons
const iconLibrary: { [key: string]: IconDefinition } = {
  coffee: faCoffee,
  user: faUser,
  heart: faHeart,
  // Add more icons as needed
};

export default iconLibrary;

