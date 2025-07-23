import { Flex } from '@axonivy/ui-components';
import { History } from './history/History';
import { Prompt } from './prompt/Prompt';
import './SmartNeoClient.css';

function SmartNeoClient() {
  return (
    <Flex direction='column' gap={4} className='smart-neo-client-container'>
      <History />
      <Prompt />
    </Flex>
  );
}

export default SmartNeoClient;
