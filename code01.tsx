// Importation de React
import React from 'react';

// 1. Définition des types des props
interface GreetingProps {
  name: string;
}

// 2. Définition du composant avec typage des props
const Greeting: React.FC<GreetingProps> = ({ name }) => {
  return <div>Hello, {name}!</div>;
};

// 3. Exportation du composant
export default Greeting;
