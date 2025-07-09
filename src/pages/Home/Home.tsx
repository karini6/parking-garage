import { use } from 'react';
import NavButton from '../../components/NavButton/NavButton';
import { DataContext } from '../../context/DataContext';
import paths from '../../paths';
import NoAvailability from '../NoAvailability/NoAvailability';
import './Home.css';

function Home() {
  const {garageData} = use(DataContext)

    return (
      <>
        <h1>Welcome to DNB Parking Garage</h1>
        {garageData?.availableSpots ? 
        (<><nav>
          <NavButton
            text="I'm arriving"
            variant="secondary"
            navTo={paths.arrival}
          />
          <NavButton
            text="I'm leaving"
            variant="secondary"
            navTo={paths.exit}
          />
        </nav>
        <div>
          <NavButton text="Admin" variant="secondary" navTo={paths.admin} />
        </div></>) : (<NoAvailability />)}
        
      </>
    );
}

export default Home;
