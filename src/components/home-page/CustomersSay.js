import classes from "./CustomersSay.module.css";
import Testimonial from "./Testimonial";

export default function CustomersSay() {
  return (
    <section className={classes.customersSaySection}>
      <div className={`fluidContainer ${classes.customersSayContainer}`}>
        <h2 className="sectionTitle">What people say about us!</h2>
        <div className={classes.testimonials}>
          <Testimonial />
        </div>
      </div>
    </section>
  );
}
