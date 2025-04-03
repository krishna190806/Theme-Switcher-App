import { useTheme } from '../context/ThemeContext';

const Content = () => {
  const { colors, isDarkMode } = useTheme();

  return (
    <div
      style={{
        padding: '2.5rem',
        borderRadius: '16px',
        margin: '20px',
        boxShadow: isDarkMode 
          ? '0 8px 32px rgba(0, 0, 0, 0.3)' 
          : '0 8px 32px rgba(0, 0, 0, 0.1)',
        backgroundColor: colors.background,
        color: colors.text,
        maxWidth: '900px',
        width: '100%',
        border: `1px solid ${isDarkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)'}`,
      }}
    >
      <h1>Welcome to Theme Switcher App</h1>
      <p>
        This is a demonstration of how to use React Context API for theme switching.
        The background and text colors will change based on the selected theme.
        Try clicking the button in the top-right corner to switch between light and dark modes!
      </p>
      <div
        style={{
          marginTop: '2rem',
          padding: '1rem',
          borderRadius: '8px',
          backgroundColor: isDarkMode ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 0, 0, 0.05)',
          border: `1px solid ${isDarkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)'}`,
        }}
      >
        <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: colors.primary }}>
          Features
        </h2>
        <ul
          style={{
            listStyle: 'none',
            display: 'grid',
            gap: '1rem',
            textAlign: 'left',
            padding: '0 1rem',
          }}
        >
          <li>🎨 Dynamic Theme Switching</li>
          <li>⚡ Smooth Transitions</li>
          <li>🔄 Context API State Management</li>
          <li>📱 Responsive Design</li>
        </ul>
      </div>
    </div>
  );
};

export default Content; 