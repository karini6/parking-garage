import NavButton from '../../components/Button/NavButton';
import paths from '../../paths';
import './Home.css';

function Home() {
  return (
    <>
      <h1>Welcome</h1>
      <div>
        <NavButton
          text="I'm arriving"
          variant="secondary"
          navTo={paths.arrival}
        />
        <NavButton text="I'm leaving" variant="secondary" navTo={paths.exit} />
      </div>
      <div>
        <NavButton text="Admin" variant="secondary" navTo={paths.admin} />
      </div>
    </>
  );
}

export default Home;
