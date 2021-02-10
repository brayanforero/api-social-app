import bcrypt from 'bcryptjs'

export const hashing = str => {
  const salt = bcrypt.genSaltSync(10)
  const hash = bcrypt.hashSync(str, salt)
  return hash
}

export const validHash = (str, hash) => {
  if (!bcrypt.compareSync(str, hash)) return false

  return true
}
