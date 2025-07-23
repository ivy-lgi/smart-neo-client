import { Button, Flex, Textarea } from '@axonivy/ui-components';
import { IvyIcons } from '@axonivy/ui-icons';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import './Prompt.css';

type PromptProps = {
  sendPrompt: (userMessage: string) => void;
  disabled: boolean;
};

export const Prompt = ({ sendPrompt, disabled }: PromptProps) => {
  const { t } = useTranslation();

  const [prompt, setPrompt] = useState('');

  const send = () => {
    if (!prompt || disabled) {
      return;
    }
    setPrompt('');
    sendPrompt(prompt);
  };

  return (
    <Flex direction='column' gap={1} className='smart-neo-client-prompt-container'>
      <Textarea
        value={prompt}
        onChange={event => setPrompt(event.target.value)}
        style={{ height: '100%' }}
        onKeyDown={event => {
          if (event.key === 'Enter' && !event.shiftKey) {
            event.preventDefault();
            send();
          }
        }}
        disabled={disabled}
      />
      <Flex justifyContent='flex-end'>
        <Button size='large' icon={IvyIcons.Play} aria-label={t('common.label.send')} onClick={send} disabled={disabled} />
      </Flex>
    </Flex>
  );
};
