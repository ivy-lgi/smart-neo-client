import { Flex, Message } from '@axonivy/ui-components';
import './History.css';

type HistoryProps = {
  userMessage: string;
  assistantMessage: string;
  errorMessage: string;
};

export const History = ({ userMessage, assistantMessage, errorMessage }: HistoryProps) => {
  return (
    <Flex direction='column' className='smart-neo-client-history-container'>
      <div className='smart-neo-client-history-user-message'>{userMessage}</div>
      <div className='smart-neo-client-history-assistant-message'>
        {errorMessage ? <Message message={errorMessage} variant='error' /> : assistantMessage}
      </div>
    </Flex>
  );
};
