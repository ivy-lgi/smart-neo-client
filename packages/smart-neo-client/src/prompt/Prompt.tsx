import { Button, Flex, Textarea } from '@axonivy/ui-components';
import { IvyIcons } from '@axonivy/ui-icons';
import { useTranslation } from 'react-i18next';
import './Prompt.css';

export const Prompt = () => {
  const { t } = useTranslation();
  return (
    <Flex direction='column' gap={1} className='smart-neo-client-prompt-container'>
      <Textarea style={{ height: '100%' }} />
      <Flex justifyContent='flex-end'>
        <Button size='large' icon={IvyIcons.Play} aria-label={t('common.label.send')} />
      </Flex>
    </Flex>
  );
};
