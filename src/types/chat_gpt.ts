export interface ChatGPTResponse {
    id: string;
    object: string;
    created: number;
    choices: {
        text: string;
        index: number;
        finish_reason: string;
    }[];
}

export interface ChatGPTRequest {
    prompt: string;
    max_tokens?: number;
    temperature?: number;
}