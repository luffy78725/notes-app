function classNames(...args) {
  const combinedClassNames = args.join(" ");
  return combinedClassNames;
}

/**
 * Add data to Localstorage
 * @param {string} key - Key name for the data.
 * @param {string | Object } data - data to add to storage
 */
function addDataToLocalStorage(key, data) {
  //if data is string add directly and,
  //if data is JSON object, stringify and then add to localstorage
  if (typeof data === "string") localStorage.setItem(key, data);
  else if (
    toString.call(data) === "[object Object]" ||
    typeof data === "number"
  ) {
    let stringifiedData = JSON.stringify(data);
    localStorage.setItem(key, stringifiedData);
  } else {
    throw new Error("data should be String, number or a JSON object");
  }
}

/**
 * get data from Localstorage
 * @param {string} key - Key to get value against.
 * @return {Object} JSON parsed data.
 */
function getDataFromLocalStorage(key) {
  return JSON.parse(localStorage.getItem(key));
}

export { classNames, addDataToLocalStorage, getDataFromLocalStorage };
