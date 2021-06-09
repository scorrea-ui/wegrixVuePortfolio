import { TOGGLE_THEME } from '../../types/theme.types';

const themeActions = {
  toggleTheme({ commit }, payload) {
    const theme = payload === true ? 'dark' : 'light';
    window.localStorage.setItem('theme', theme);
    window.localStorage.setItem('theme_toggle', payload);
    commit(TOGGLE_THEME, theme);
  },
};

export default themeActions;
