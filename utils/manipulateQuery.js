const manipulateQuery = (query) => {
    const queryArray = query.split('-');
    const upperCaseQueryArray = queryArray.map(queryWord => {
        return wordToUpperCase(queryWord)
    });
    return upperCaseQueryArray.join(' ');
}

const wordToUpperCase = (word) => {
    return word.charAt(0).toUpperCase() + word.slice(1);
  };

exports.manipulateQuery = manipulateQuery