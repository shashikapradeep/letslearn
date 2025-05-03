import { useState } from 'react';
import { getChatGPTResponse } from '../services/chat_gpt';

const useChatGpt = () => {
    const [response, setResponse] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    const fetchChatGptResponse = async (prompt: string) => {
        setLoading(true);
        setError(null);
        try {
            const res = await getChatGPTResponse({ prompt });
            setResponse(res);
        } catch (err) {
            setError('Failed to fetch response from ChatGPT');
        } finally {
            setLoading(false);
        }
    };

    return { response, loading, error, fetchChatGptResponse };
};

export default useChatGpt;
