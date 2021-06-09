const themeState = {
  theme: localStorage.getItem('theme') || 'light',
  toggled: localStorage.getItem('theme_toggle') || false,
};

export default themeState;
