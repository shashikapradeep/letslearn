import axios from 'axios';
import env_configs from '../configs/env_configs';
import { ChatGPTRequest, ChatGPTResponse } from '../types/chat_gpt';


export const getChatGPTResponse = async (request: ChatGPTRequest): Promise<string> => {
    try {
        axios.defaults.baseURL = env_configs.OPEN_AI.OPENAI_API_URL;
        const response = await axios.post<ChatGPTResponse>('/completions', {
            model: 'text-davinci-003',
            prompt: request.prompt,
            max_tokens: request.max_tokens || 150,
            temperature: request.temperature || 0.7,
        }, {
            headers: {
            'Authorization': `Bearer ${env_configs.OPEN_AI.OPENAI_API_KEY}`,
            'Content-Type': 'application/json',
            },
        });
        return response.data.choices[0].text.trim();
    } catch (error) {
        console.error('Error fetching ChatGPT response:', error);
        throw error;
    }
};
