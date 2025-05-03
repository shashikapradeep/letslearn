import axiosInstance from './../providers/axios';

interface ChatGPTResponse {
    id: string;
    object: string;
    created: number;
    choices: {
        text: string;
        index: number;
        finish_reason: string;
    }[];
}

interface ChatGPTRequest {
    prompt: string;
    max_tokens?: number;
    temperature?: number;
}

export const getChatGPTResponse = async (request: ChatGPTRequest): Promise<string> => {
    try {
        const response = await axiosInstance.post<ChatGPTResponse>('/completions', {
            model: 'text-davinci-003',
            prompt: request.prompt,
            max_tokens: request.max_tokens || 150,
            temperature: request.temperature || 0.7,
        });

        return response.data.choices[0].text.trim();
    } catch (error) {
        console.error('Error fetching ChatGPT response:', error);
        throw error;
    }
};
