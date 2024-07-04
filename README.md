[![Build Status](https://github.com/microbs-io/microbs-plugin-slack/workflows/Commit/badge.svg?branch=main)](https://github.com/microbs-io/microbs-plugin-slack/actions)
[![npm](https://img.shields.io/npm/v/@microbs.io/plugin-slack?color=%2300B5AD&label=Latest)](https://www.npmjs.com/package/@microbs.io/plugin-slack)
![Apache 2.0](https://img.shields.io/npm/l/@microbs.io/plugin-slack?color=%23f6f8fa)

# microbs-plugin-slack

## Contents

* [Usage](#usage)
* [Prerequisites](#prerequisites)
* [Configuration](#configuration)


## [](usage)Usage

Before using the `slack` plugin you must have its [prerequisites](#prerequisites).


### `setup`

When running [`microbs setup [-o]`](https://microbs.io/docs/usage/cli/#setup), the
`slack` plugin creates a channel in your Slack Workspace.

### `rollout`

The `slack` plugin is unaffected by [`microbs rollout`](https://microbs.io/docs/usage/cli#rollout).

### `destroy`

The `slack` plugin does not yet implement [`microbs destroy [-k]`](https://microbs.io/docs/usage/cli/#destroy).
You can delete your channel through the standard Slack interfaces such as the
Slack UI.


## [](prerequisites)Prerequisites


### Create Slack resources

You must create a [Slack workspace](https://slack.com/get-started#/create)
and obtain a [bot access token](https://api.slack.com/authentication/token-types#bot)
before using the `slack` plugin.

The Bot Access Token must have the following permissions:
- `channels:manage`
- `groups:write`
- `im:write`
- `mpim:write`
- `channels:read`
- `groups:read`
- `mpim:read`
- `im:read`

### Install the plugin

microbs installs this plugin automatically when you [install microbs](https://microbs.io/docs/overview/getting-started/).

To reinstall this plugin, run this command:

`microbs plugins install slack`

To upgrade this plugin to the latest version, run this command:

`microbs plugins update slack`


## [](configuration)Configuration

This section documents the `slack` plugin configurations for [config.yaml](https://microbs.io/docs/usage/configuration).

### Required fields

#### [](plugins.slack.bot_user_oauth_access_token)`plugins.slack.api_key`

The value of your [bot access token](https://api.slack.com/authentication/token-types#bot).

Example: `xoxb-999999999999-999999999999-gxnpd45mZZh76FzLfkpLP7Tj`
