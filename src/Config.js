var Config = {
  ENVIRONMENT: "DEVELOPMENT",
  ENVIRONMENTS: {
    LOCAL: {
      API_URL: "https://api.github.com",
    },
    DEVELOPMENT: {
      API_URL: "https://api.github.com",
    },
    STAGING: {
      API_URL: "APP_API_URL",
    },
    PRODUCTION: {
      API_URL: "APP_API_URL",
    },
  },
};

Config.env = () => {
  return Config.ENVIRONMENTS[Config.ENVIRONMENT];
};

export default Config;
