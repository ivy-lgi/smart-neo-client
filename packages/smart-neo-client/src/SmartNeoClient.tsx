import { chatCompletions } from '@axonivy/smart-neo-client-protocol';
import { Flex } from '@axonivy/ui-components';
import { useState } from 'react';
import { History } from './history/History';
import { Prompt } from './prompt/Prompt';
import './SmartNeoClient.css';

function SmartNeoClient() {
  const [userMessage, setUserMessage] = useState('');
  const [assistantMessage, setAssistantMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const sendPrompt = (userMessage: string) => {
    setUserMessage(userMessage);
    chatCompletions({ content: userMessage })
      .then(response => setAssistantMessage(response.data))
      .catch((reason: Error) => setErrorMessage(reason.message));
  };

  return (
    <Flex direction='column' gap={4} className='smart-neo-client-container'>
      <History userMessage={userMessage} assistantMessage={assistantMessage} errorMessage={errorMessage} />
      <Prompt sendPrompt={sendPrompt} />
    </Flex>
  );
}

export default SmartNeoClient;
