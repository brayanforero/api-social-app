import User from '../Models/User'
import { hashing, validHash } from '../Libs/hash'

export async function index(req, res) {
  const users = await User.findAll()
  res.status(200).json({
    status: 200,
    users,
  })
}

export async function show(req, res) {
  const { id } = req.params

  const user = await User.findByPk(id)
  if (!user)
    return res.status(404).json({ status: 404, errors: 'Resource Not Found' })
  res.json({
    status: 200,
    user,
  })
}

export async function store(req, res) {
  try {
    const { fullname, username, password } = req.body
    const hash = hashing(password)

    const user = await User.create(
      {
        fullname,
        username,
        password: hash,
      },
      {
        fields: ['fullname', 'username', 'password'],
      },
    )
    res.status(201).json({ status: 201, user })
  } catch (err) {
    console.log(err)
    res.status(500).json({
      errors: 'Server Internal Error',
    })
  }
}

export async function update(req, res) {
  try {
    const { id } = req.params
    const { fullname, username, password } = req.body
    const hash = hashing(password)
    const user = await User.findByPk(id)
    if (!user)
      return res.status(404).json({ status: 404, errors: 'Resource Not Found' })

    await User.update(
      {
        fullname,
        username,
        password: hash,
      },
      {
        where: {
          id: user.id,
        },
      },
    )

    res.json({
      status: 200,
      message: 'User udpated',
    })
  } catch (err) {
    console.error(err)

    res.status(500).json({
      status: 500,
      error: 'Server Internal Error',
    })
  }
}

export async function destroy(req, res) {
  try {
    const { id } = req.params

    const user = await User.findByPk(id)
    if (!user)
      return res.status(404).json({ status: 404, errors: 'Resource Not Found' })

    await User.destroy({
      where: {
        id: user.id,
      },
    })
    res.json({
      status: 200,
      message: 'User deleted',
    })
  } catch (err) {
    console.error(err)
    res.status(500).json({
      status: 500,
      error: 'Server Internal error',
    })
  }
}
export async function auth(req, res) {
  try {
    const { username, password } = req.body

    const user = await User.findOne({
      where: {
        username,
      },
    })

    if (!user || !validHash(password, user.password))
      return res.json({
        status: 404,
        message: 'Bad credential',
      })

    res.json({
      status: 200,
      _token: 'dsfsdfsdfsdfsdf',
      _isAuth: 'true',
    })
  } catch (err) {
    console.log('Error ' + err)
  }
}
