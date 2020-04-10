const courseReducer = (state = [], action) => {
  const [type, course] = action;
  switch (type) {
    case 'CREATE_COURSE':
      return [...state, { ...course }];
    default:
      return state;
  }
};

export default courseReducer;
