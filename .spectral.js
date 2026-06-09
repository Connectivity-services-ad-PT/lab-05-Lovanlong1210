const { oas } = require("@stoplight/spectral-rulesets");

module.exports = {
  extends: [oas],
  rules: {
    // Hạ xuống warn để không block CI với những warning không cốt lõi
    "operation-success-response": "warn",
    "oas3-api-servers": "warn",
  },
};
