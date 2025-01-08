const axios = require('axios');
const TelegramBot = require('node-telegram-bot-api');

class AgentQuery {
    constructor(apiKey, agentId, baseUrl = "https://api.0x-network.com/index.php") {
        this.apiKey = apiKey;
        this.agentId = agentId;
        this.baseUrl = baseUrl;
    }

    encodeMessage(message) {
        return Buffer.from(message).toString('base64');
    }

    async queryAgent(message) {
        try {
            const encodedMessage = this.encodeMessage(message);
            const url = `${this.baseUrl}?action=query-agent&api_key=${this.apiKey}&agent_id=${this.agentId}&message=${encodedMessage}`;
            const response = await axios.get(url);
            return response.data;
        } catch (e) {
            console.error("Error: ", e.message);
            return "Sorry, I couldn't process your request.";
        }
    }
}

// Telegram Bot Configuration
const TELEGRAM_TOKEN = "YourTelegramBotToken"; // Replace with your Telegram Bot token
const bot = new TelegramBot(TELEGRAM_TOKEN, { polling: true });

// AgentQuery Configuration
const API_KEY = "YourAPI"; // Replace with your API key
const AGENT_ID = 11;       // Replace with your Agent ID
const agentQuery = new AgentQuery(API_KEY, AGENT_ID);

// Keep track of user conversations
const userConversations = {};

// Handle incoming messages
bot.on('message', async (msg) => {
    const chatId = msg.chat.id;
    const userMessage = msg.text;

    if (!userConversations[chatId]) {
        userConversations[chatId] = [];
    }

    userConversations[chatId].push({ user: userMessage });

    // Query the agent
    const agentResponse = await agentQuery.queryAgent(userMessage);

    userConversations[chatId].push({ agent: agentResponse });

    // Send agent's response back to the user
    bot.sendMessage(chatId, agentResponse);
});

console.log("Telegram bot is running...");
