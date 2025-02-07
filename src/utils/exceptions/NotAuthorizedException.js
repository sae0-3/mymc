class NotAuthorizedException extends Error {
  constructor(message) {
    super(message)
    this.name = 'NotAuthorizedException'
    this.statusCode = 401
  }
}

export default NotAuthorizedException
