// next-intl.config.js
module.exports = async (locale) => {
  try {
    return {
      messages: (await import(`./src/messages/${locale}.json`)).default,
    };
  } catch (error) {
    console.error('Could not load messages for locale:', locale, error);
    return {
      messages: {},
    };
  }
};
