import { FormControl } from "./FormControl";

/**
 * Primary UI component for user interaction
 */
export default function Form() {
  return (
    <form>
      <FormControl message="" />
      <FormControl message="There was an error" />
      <input type="submit"  value="Submit" />
    </form>
  );
};
