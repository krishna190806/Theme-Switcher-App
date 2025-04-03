import { useTheme } from '../context/ThemeContext';

const ThemeToggle = () => {
  const { isDarkMode, toggleTheme, colors } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      style={{
        padding: '12px 24px',
        borderRadius: '50px',
        border: 'none',
        backgroundColor: colors.primary,
        color: '#ffffff',
        cursor: 'pointer',
        fontSize: '16px',
        fontWeight: '600',
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
        transition: 'all 0.3s ease',
        boxShadow: isDarkMode
          ? '0 4px 12px rgba(74, 144, 226, 0.3)'
          : '0 4px 12px rgba(0, 123, 255, 0.3)',
        transform: 'scale(1)',
        outline: 'none',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'scale(1.05)';
        e.currentTarget.style.boxShadow = isDarkMode
          ? '0 6px 16px rgba(74, 144, 226, 0.4)'
          : '0 6px 16px rgba(0, 123, 255, 0.4)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'scale(1)';
        e.currentTarget.style.boxShadow = isDarkMode
          ? '0 4px 12px rgba(74, 144, 226, 0.3)'
          : '0 4px 12px rgba(0, 123, 255, 0.3)';
      }}
    >
      <span style={{ fontSize: '20px' }}>
        {isDarkMode ? '☀️' : '🌙'}
      </span>
      {isDarkMode ? 'Light Mode' : 'Dark Mode'}
    </button>
  );
};

export default ThemeToggle; 