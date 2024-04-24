import styles from "./style";

import {
  NavBar,
  Hero,
  Stats,
  Business,
  Billing,
  CardDeal,
  Testomonial,
  Client,
  CTA,
  Footer,
} from "./components";

const App = () => (
  <>
    <div className="bg-primary w-full overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <NavBar />
        </div>
      </div>

      <div className={`${styles.flexStart} bg-primary`}>
        <div className={`${styles.boxWidth}`}>
          <Hero />
        </div>
      </div>

      <div className={`${styles.flexStart} ${styles.paddingX} bg-primary`}>
        <div className={`${styles.boxWidth}`}>
          <Stats />
          <Business />
          <Billing />
          <CardDeal />
          <Testomonial />
          <Client />
          <CTA />
          <Footer />
        </div>
      </div>
    </div>
  </>
);

export default App;
