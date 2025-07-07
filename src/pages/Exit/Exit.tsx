import { useNavigate } from "react-router";
import Button from "../../components/Button/Button";
import TextInput from "../../components/TextInput/Input";
import paths from "../../paths";
import { Direction, Variant } from "../../types/enums";

const Exit = () => {
    const navigate = useNavigate();
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      void navigate(
        { pathname: `/${paths.confirmation}` },
        { state: { from: "exiting" } }
      );
    };
  return (
    <>
      <form
        className="exit-form"
        onSubmit={handleSubmit}
        aria-label="Close parking form"
      >
        <h1>Close parking</h1>
        <TextInput
          id="regNumber"
          name="registration number"
          label="Registration number"
          ariaLabel="Registration number"
          placeholder="AB12345"
          type="text"
          direction={Direction.column}
          required
        />
        <Button text="End parking" type="submit" variant={Variant.primary} />
      </form>
    </>
  );
};

export default Exit;
