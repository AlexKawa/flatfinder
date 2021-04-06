interface IDictionary {
  [id: string]: string | IDictionary;
}

export const flattenMessages = (
  nestedMessages: IDictionary,
  prefix: string = ""
) => {
  if (nestedMessages === null) {
    return {};
  }
  return Object.keys(nestedMessages).reduce((messages, key) => {
    const value = nestedMessages[key];
    const prefixedKey = prefix ? `${prefix}.${key}` : key;

    if (typeof value === "string") {
      Object.assign(messages, { [prefixedKey]: value });
    } else {
      Object.assign(messages, flattenMessages(value, prefixedKey));
    }

    return messages;
  }, {});
};

export const routeWithParams = (url: string, params = {}) => {
  console.log(params);
  return Object.entries(params || {}).reduce((acc, [key, value]) => {
    const search = new RegExp(`:${key}`);
    // TODO Find solution
    /* @ts-ignore:disable-next-line  */
    return acc.replace(search, value);
  }, url);
};
