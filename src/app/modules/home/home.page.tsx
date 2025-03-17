import { Text } from '@/atomic/atm.typography';
import { homeStrings } from './home.strings';
import { EmptyProject } from '@/atomic/atm.empty-projetc';

const HomePage = () => {
  return (
    <div>
      <Text variant='h1'>{homeStrings.allProjects}</Text>

      <EmptyProject />
    </div>
  );
};

export default HomePage;
