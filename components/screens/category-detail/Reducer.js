export const Reducer = (state, action) => {
  switch (action.type) {
    case "SET_ACTIVE":
      return state.map((item) => {
        if (item.item == action.payload) {
          return {
            ...item,
            active: true,
          };
        }
        return {
          ...item,
          active: false,
        };
      });
    default:
      return state;
  }
};
