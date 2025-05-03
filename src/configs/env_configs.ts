class EnvConfigs {
  static getEnvConfig() {
    return {
      API_URL: process.env.API_URL || 'http://localhost:3000',
      NODE_ENV: process.env.NODE_ENV || 'development',
      PORT: process.env.PORT || 3000,
    };
  }
}
export default EnvConfigs.getEnvConfig();
