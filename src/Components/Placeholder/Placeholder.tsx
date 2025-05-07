import './placeholder.css';
import React from 'react';

interface Props {
  text: string;
}

const Placeholder: React.FC<Props> = ({ text }) => {
  return (
    <p className="placeholder">{text}</p>
  );
};

export default Placeholder;
