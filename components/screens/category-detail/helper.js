export const getUnique = (items) => {
  const set = new Set(
    items.map((item) => {
      if (item.type) {
        return item.type;
      }
    })
  );
  return ["all", ...set];
};

export const formatUniqueItem = (items) => {
  return items.map((item) => {
    return {
      item,
      active: false,
    };
  });
};
