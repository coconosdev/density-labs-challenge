import React from 'react';

interface TypePillProps {
  type: string;
}

const TypePill: React.FC<TypePillProps> = ({ type }) => {
  return (
    <div
      className="type-pill-wrapper"
      style={{
        backgroundColor: `var(--type-${type})`,
      }}
    >
      {type}
    </div>
  );
};

export default TypePill;
