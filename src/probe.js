/*
 * probej.s
 *
 * Check the status of various resources.
 */

// Main packages
const { logger, utils } = require('@microbs.io/core')

// Plugin packages
const constants = require('./constants')

module.exports.statusSlackChannel = async (channelName) => {
  try {
    let response = await utils.http({
      method: 'get',
      url: 'https://slack.com/api/conversations.list',
      headers: constants.slackApiHeaders(),
      data: {
        limit: 1000
      }
    })
    logger.debug(response.data)
    if (response.status == 200 && response.data.ok === true) {
      for (var i in response.data.channels) {
        if (response.data.channels[i].name == channelName)
          return true
      }
    } else {
      logger.debug(response.data)
    }
  } catch (err) {
    logger.error(err.message)
  }
  return false
}
