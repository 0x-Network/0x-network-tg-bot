# Telegram Agent Bot

A Telegram bot that enables users to engage in continuous conversations with an AI-powered agent. This project integrates the Telegram Bot API with a custom agent query service to deliver seamless conversational experiences.

---

## **Features**

- **Continuous Conversations**: Tracks user interactions and maintains chat history for personalized responses.
- **Agent API Integration**: Leverages the custom Agent API to process user messages and generate intelligent replies.
- **Secure Communication**: Messages are encoded before being sent to the agent API.
- **Scalable Design**: Built using `node-telegram-bot-api` with support for polling.

---

## **Installation**

### **Prerequisites**

- **Node.js**: Ensure you have [Node.js](https://nodejs.org/) installed (version 14 or higher).
- **Telegram Bot Token**: Obtain a bot token from [BotFather](https://core.telegram.org/bots#botfather) on Telegram.
- **Agent API Key**: Acquire the API key and agent ID from your custom agent service.

### **Steps**

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/telegram-agent-bot.git
   cd telegram-agent-bot
