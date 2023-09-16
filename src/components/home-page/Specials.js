import Button from "../ui/Button";
import SpecialCard from "./SpecialCard";
import classes from "./Specials.css";

export default function Specials() {
  return (
    <section className={classes.specialsSection}>
      <div className={`fluidContainer ${classes.specialsContainer}`}>
        <div className={classes.specialsInto}>
          <h2 className="sectionTitle">This weeks specials!</h2>
          <Button link="/">Online menu</Button>
        </div>
        <div className={classes.specialsCollection}>
          <SpecialCard />
        </div>
      </div>
    </section>
  );
}
