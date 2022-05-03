/*
 * constants.js
 *
 * Constant values used throughout the plugin.
 */

// Standard packages
const path = require('path')

// Main packages
const { config, context } = require('@microbs.io/core')

/**
 * Absolute path to the directory of this plugin.
 */
module.exports.pluginHome = () => {
  return path.join(context.get('homepath'), 'cli', 'src', 'plugins', 'alerts', 'slack')
}

/**
 * Shorthand for setting Slack API headers.
 */
module.exports.slackApiHeaders = (slackApiKey) => {
  return {
    "Authorization": `Bearer ${slackApiKey || config.get('plugins.slack.bot_user_oauth_access_token')}`
  }
}
