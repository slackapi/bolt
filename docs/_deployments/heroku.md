---
title: Deploy to Heroku
order: 0
slug: heroku
lang: en
layout: tutorial
permalink: /deployments/heroku
redirect_from:
  - /deployments
---
# Deploy to Heroku

<div class="section-content">
This guide is meant to walk you through preparing and deploying a Slack app using Bolt for JavaScript to the [Heroku cloud platform](https://heroku.com/). Along the way, we’ll download the [Getting Started](/bolt-js/tutorials/getting-started), prepare it for deployment, create a cloud instance, and deploy the app onto Heroku.
</div>

---

### Setup Heroku tools

First off, you will want to setup the Heroku tools on your local machine. This will help you manage, deploy, and debug your app on the Heroku platform.

**Install the Heroku CLI**

The Heroku tools are available as a Command Line Interface (CLI). Go ahead and [install the Heroku CLI for macOS, Windows, or Linux](https://devcenter.heroku.com/articles/getting-started-with-nodejs#set-up).

```shell
# On macOS you can use Homebrew
brew install heroku/brew/heroku
```

When the install is complete, you will be able to use the `heroku` command in your terminal.

> 💡 If the `heroku` command is not found, you will need to open a new terminal session.

**Log into the Heroku CLI**

The Heroku CLI connects our local machine with our Heroku account so that we can create and manage apps. You can log into the Heroku CLI with the command:

```shell
heroku login
```

**Confirm login for Heroku CLI**

Lastly, let's double-check that you're logged in by displaying the account that's currently connected to your Heroku CLI:

```shell
heroku auth:whoami
# Output: <your Heroku account>
```

You're all setup with the Heroku tools! Now let's move onto the exciting step of creating a instance in the Heroku cloud.

---

### Create a Heroku cloud instance

---

### Get a Bolt Slack app

---

### Prepare the app for Heroku

---

### Deploy the app

---

### Next steps