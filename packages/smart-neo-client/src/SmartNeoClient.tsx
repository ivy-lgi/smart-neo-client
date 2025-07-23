import { chatCompletions, type chatCompletionsResponse, type SmartNeoChatCompletionsArguments } from '@axonivy/smart-neo-client-protocol';
import { Flex } from '@axonivy/ui-components';
import { useMutation } from '@tanstack/react-query';
import { useState } from 'react';
import { History } from './history/History';
import { Prompt } from './prompt/Prompt';
import './SmartNeoClient.css';

function SmartNeoClient() {
  const [userMessage, setUserMessage] = useState('');
  const [assistantMessage, setAssistantMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const { mutate, isPending } = useMutation({
    mutationFn: (args: SmartNeoChatCompletionsArguments) => chatCompletions(args),
    onSuccess: (response: chatCompletionsResponse) => setAssistantMessage(response.data),
    onError: (error: Error) => setErrorMessage(error.message)
  });

  const sendPrompt = (userMessage: string) => {
    setUserMessage(userMessage);
    setAssistantMessage('');
    setErrorMessage('');
    mutate({ content: userMessage });
  };

  return (
    <Flex direction='column' gap={4} className='smart-neo-client-container'>
      <History userMessage={userMessage} assistantMessage={assistantMessage} errorMessage={errorMessage} isPending={isPending} />
      <Prompt sendPrompt={sendPrompt} disabled={isPending} />
    </Flex>
  );
}

export default SmartNeoClient;
