import Sequelize from 'sequelize'
import { nanoid as generate } from 'nanoid'
import sequelize from './sequelize'

export const Service = sequelize.define('GithubForGlipIntegrationUsers', {
  id: {
    type: Sequelize.STRING,
    primaryKey: true,
    defaultValue: () => generate(10)
  },
  gh_user_info: {
    type: Sequelize.JSON
  },
  gh_token: {
    type: Sequelize.STRING
  },
  gh_scope: {
    type: Sequelize.STRING
  },
  enabled: {
    type: Sequelize.BOOLEAN,
    defaultValue: true
  },
  webhooks: { // webhook ids
    type: Sequelize.STRING
  },
  data: { // all other data associcated with this user
    type: Sequelize.JSON
  }
})
