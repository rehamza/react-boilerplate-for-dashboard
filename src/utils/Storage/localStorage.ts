export const setToLocalStorage = (key: string, value: object | string) => {
  if (!key || typeof key !== 'string') {
    throw new Error('Invalid key');
  }

  localStorage.setItem(key, JSON.stringify(value));
};

export const getLocalStorage = (key: string | object) => {
  if (!key || typeof key !== 'string') {
    throw new Error('Invalid key');
  }

  /**
   * Handle non-string value with JSON.parse
   * Catch string value and return it
   */
  try {
    const value = localStorage.getItem(key);

    if (typeof value === 'string') {
      return JSON.parse(value);
    }
  } catch {
    return localStorage.getItem(key);
  }
};

export const removeLocalStorage = (key: string | object) => {
  if (!key || typeof key !== 'string') {
    throw new Error('Invalid key');
  }

  localStorage.removeItem(key);
};
