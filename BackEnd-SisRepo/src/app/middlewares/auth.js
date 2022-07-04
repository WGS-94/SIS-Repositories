
const jwt = require('jsonwebtoken')
const {promisify} = require('util')
const authConfig = require('../../config/auth')

module.exports = async (req, res , next) => {

  const authHeaders = req.headers.authorization

  if (!authHeaders){
    return res.status(401).json({error: "token not provided"})
  }

  const token = authHeaders.split(' ')[1]

  try {

    const decoded = await promisify(jwt.verify)(token, authConfig.secret )

    req.userId = decoded.id

    return next()
  } catch (error) {
    return res.status(401).json({error: "Invalid Token"})
  }

}
