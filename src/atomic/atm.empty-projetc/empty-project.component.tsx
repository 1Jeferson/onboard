import { homeStrings } from '@/app/modules/home/home.strings';
import { Placeholder } from '../assets/icons';
import { Text } from '../atm.typography';
import { Button } from '../atm.button';

const EmptyProject = () => {
  return (
    <div className='flex flex-col items-center py-3x-large gap-medium'>
      <Placeholder />

      <div className='text-center flex flex-col gap-2x-small'>
        <Text variant='h3'>{homeStrings.noProject}</Text>
        <Text variant='b1'>{homeStrings.noProjectCreated}</Text>
      </div>

      <div>
        <Button variant='cta'>{homeStrings.button.createProject}</Button>
      </div>
    </div>
  );
};

export default EmptyProject;
