import { homeStrings } from '@/app/modules/home/home.strings';
import { Placeholder } from '../assets/icons';
import { Text } from '../atm.typography';
import { Button } from '../atm.button';
import { useState } from 'react';
import { Modal } from '../atm.modal';

const EmptyProject = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className='flex flex-col items-center py-3x-large gap-medium'>
      <Placeholder />
      <div className='text-center flex flex-col gap-2x-small'>
        <Text variant='h3'>{homeStrings.noProject}</Text>
        <Text variant='b1'>{homeStrings.noProjectCreated}</Text>
      </div>
      <div>
        <Button variant='cta' onClick={() => setIsModalOpen(true)}>
          {homeStrings.button.createProject}
        </Button>
      </div>
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        MODAL
      </Modal>
    </div>
  );
};

export default EmptyProject;
