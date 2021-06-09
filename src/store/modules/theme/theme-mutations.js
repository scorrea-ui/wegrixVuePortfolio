import { TOGGLE_THEME } from '../../types/theme.types';

const themeMutations = {
  [TOGGLE_THEME](state, payload) {
    state.theme = payload;
    state.toggled = state.theme !== 'light';
  },
};

export default themeMutations;
