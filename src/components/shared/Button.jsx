// src/components/shared/Button.jsx
export const Button = ({ children, onClick, variant = 'primary', className = '' }) => {
    const baseStyles = 'px-4 py-2 rounded-lg transition-colors';
    const variants = {
      primary: 'bg-blue-500 text-white hover:bg-blue-600',
      secondary: 'bg-gray-100 hover:bg-gray-200',
      outline: 'border border-blue-500 text-blue-500 hover:bg-blue-50'
    };
  
    return (
      <button 
        onClick={onClick}
        className={`${baseStyles} ${variants[variant]} ${className}`}
      >
        {children}
      </button>
    );
  };