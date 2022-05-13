/*
 * validate.js
 */

// Main packages
const { config, logger, utils } = require('@microbs.io/core')

/**
 * Validate the fields and values of the given config file.
 */
const validateConfig = () => {
  try {
    config.init()
  } catch (e) {
    logger.error(e)
    return [{
      success: false,
      message: 'failed to load config.'
    }]
  }

  // Validate required fields
  const requiredAlways = [
    'plugins.slack.bot_user_oauth_access_token',
    'plugins.slack.channel',
  ]
  const results = []
  var hasErrors = false
  for (var i in requiredAlways) {
    if (!config.get(requiredAlways[i])) {
      hasErrors = true
      results.push({
        success: false,
        message: `'${requiredAlways[i]}' is required but missing from slack plugin config.`
      })
    }
  }
  if (!hasErrors)
    results.push({
      success: true,
      message: 'no problems detected in slack plugin config.'
    })
  return results
}

module.exports = async () => {
  const results = []
  validateConfig().forEach(
    (result) => results.push(result)
  )
  return results
}
