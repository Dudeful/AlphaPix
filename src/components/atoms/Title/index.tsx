import React from 'react';
import './styles.css';

interface ITitleProps {
  classNames: string;
  value?: string;
}

const Title: React.FC<ITitleProps> = ({ value, classNames }) => {
  return <h3 className={classNames}>{value}</h3>;
};

export default Title;
