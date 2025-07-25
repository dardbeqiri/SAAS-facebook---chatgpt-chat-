import { Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class ChatgptService {
  async getChatgptReply(apiKey: string, prompt: string): Promise<string> {
    const response = await axios.post(
      'https://api.openai.com/v1/chat/completions',
      {
        model: 'gpt-3.5-turbo',
        messages: [{ role: 'user', content: prompt }]
      },
      { headers: { Authorization: `Bearer ${apiKey}` } }
    );
    return response.data.choices[0].message.content;
  }
}
