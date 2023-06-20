class Config {
  static loginApi = (): string => { return process.env.LOGIN_BACKEND || 'http:localhost' }

  static port = (): number => { return parseInt(process.env.PORT || '') }

  static analyzerPort = (): number => { return parseInt(process.env.ANALYZER_PORT || '') }

  static env = (): string => { return process.env.NODE_ENV || 'development' }
}

export default Config
