class BadRequestException extends Error {
  constructor(message) {
    super(message)
    this.name = 'BadRequestException'
    this.statusCode = 400
  }
}

export default BadRequestException
