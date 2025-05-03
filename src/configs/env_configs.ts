class EnvConfigs {
  static getEnvConfig() {
    return {
      BACKEND: this.getBackendConfig(),
      OPEN_AI: this.getOpenAIConfig(),
    };
  }

  static getBackendConfig() {
    return {
      API_URL: process.env.API_URL || 'http://localhost:3000',
      NODE_ENV: process.env.NODE_ENV || 'development',
      PORT: process.env.PORT || 3000,
    };
  }

  static getOpenAIConfig() {
    return {
      OPENAI_API_URL: process.env.OPENAI_API_URL || 'https://api.openai.com/v1',
      OPENAI_API_KEY: process.env.OPENAI_API_KEY || '',
    };
  }
}

export default EnvConfigs.getEnvConfig();
