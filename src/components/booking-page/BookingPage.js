import { Fragment } from "react";
import classes from "./BookingPage.module.css";

export default function BookingPage() {
  return (
    <Fragment>
      <section className={classes.bookingFormSection}>
        <div className={`fluidContainer ${classes.BookingPageContainer}`}>
          <div className={classes.heroText}>
            <div className={classes.displayTitle}>Little Lemon</div>
            <div className={classes.displaySubtitle}>Chicago</div>
          </div>
          <div className={classes.formContainer}>
            <h2 className="sectionTitle">Find a table for any occasion</h2>
          </div>
        </div>
      </section>
    </Fragment>
  );
}
