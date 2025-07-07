import NavButton from '../../components/NavButton/NavButton';
import paths from '../../paths';
import './Home.css';

function Home() {
  return (
    <>
      <h1>Welcome to DNB Parking Garage</h1>
      <nav>
        <NavButton
          text="I'm arriving"
          variant="secondary"
          navTo={paths.arrival}
        />
        <NavButton text="I'm leaving" variant="secondary" navTo={paths.exit} />
      </nav>
      <div>
        <NavButton text="Admin" variant="secondary" navTo={paths.admin} />
      </div>
    </>
  );
}

export default Home;
