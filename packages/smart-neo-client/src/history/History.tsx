import { Flex, Message, Spinner } from '@axonivy/ui-components';
import './History.css';

type HistoryProps = {
  userMessage: string;
  assistantMessage: string;
  errorMessage: string;
  isPending: boolean;
};

export const History = ({ userMessage, assistantMessage, errorMessage, isPending }: HistoryProps) => {
  return (
    <Flex direction='column' gap={4} className='smart-neo-client-history-container'>
      <div className='smart-neo-client-history-user-message'>{userMessage}</div>
      <div className='smart-neo-client-history-assistant-message'>
        {errorMessage ? <Message message={errorMessage} variant='error' /> : assistantMessage}
      </div>
      {isPending && (
        <Flex alignItems='center' justifyContent='center' style={{ height: '100%' }}>
          <Spinner />
        </Flex>
      )}
    </Flex>
  );
};
