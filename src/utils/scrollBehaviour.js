function scrollBehavior(to, from, savedPosition) {
  if (savedPosition) {
    return savedPosition;
  }

  const position = {};

  if (to.hash) {
    position.selector = to.hash;
    position.behavior = 'smooth';

    if (document.querySelector(to.hash)) {
      return position;
    }
  }

  return false;
}

export default scrollBehavior;
