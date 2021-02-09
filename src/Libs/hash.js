import bcrypt from 'bcryptjs'

const hashing = str => {
  const salt = bcrypt.genSaltSync(10)
  const hash = bcrypt.hashSync(str, salt)
  return hash
}

const validHash = (str, hash) => {
  if (!bcrypt.compareSync(str, hash)) return false

  return true
}

module.exports = {
  hashing,
  validHash,
}
