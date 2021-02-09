import User from '../Models/User'
import { hashing } from '../Libs/hash'

export async function index(req, res) {
  const users = await User.findAll()
  res.status(200).json({
    status: 200,
    users,
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
