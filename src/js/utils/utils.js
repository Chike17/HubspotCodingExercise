exports.sortByTitle = (mediaArray) => {
  var compare = (a, b) => {
    if (a.title < b.title) {
      return -1;
    }
    if (a.title > b.title) {
      return 1;
    }
    return 0;
  };
  return mediaArray.sort(compare);
};
