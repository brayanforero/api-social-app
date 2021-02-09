import { Sequelize, DataTypes } from 'sequelize'
import sequelize from '../Config/database'

const User = sequelize.define(
  'User',
  {
    id: {
      type: DataTypes.BIGINT,
      primaryKey: true,
    },
    fullname: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING(300),
      allowNull: false,
    },
  },
  {
    tableName: 'users',
    timestamps: false,
  },
)
export default User
