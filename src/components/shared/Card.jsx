// src/components/shared/Card.jsx
export const Card = ({ children, className = '' }) => {
    return (
      <div className={`bg-white rounded-lg shadow-lg p-4 ${className}`}>
        {children}
      </div>
    );
  };