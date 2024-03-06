import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import styles from '@/styles/Home.module.css';
import Spline from '@splinetool/react-spline';
import Card from "@/components/Card";

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col justify-between`}
    >
      <header>
        <Header />
      </header>
      <div className={styles.container}>
        <div className={styles.hero}>
          <div className={styles.paw}>
            <Spline scene="https://prod.spline.design/N9Wude2NdGNNWUiN/scene.splinecode" />
          </div>
          <div className={styles.cta}>
            <h1 className={styles.header}>Find Haven in Every Paw</h1>
            <button className={styles.button}>Adopt Today</button>
          </div>
        </div>
        <div className={styles.pricing}>
          <h1 className={styles.header}>Support Our Cause</h1>
          <p>Help us build a safe haven for animals by donating to a charity of your choice</p>
          <div className={styles.cards}>
            <Card
              header="Mercy For Animals"
              description="Mercy For Animals exists to end the greatest cause of suffering on the planet: the exploitation of animals."
              button="Make a Donation"
            >
              <Spline scene="https://prod.spline.design/Ri3TdYfr5q2aaP39/scene.splinecode" />
            </Card>
            <Card
              header="Animal Welfare Index"
              description="Support highly-impactful, evidence-based solutions to reduce animal suffering on a global scale."
              button="Make a Donation"
            >
              <Spline scene="https://prod.spline.design/It7d-rzx14rAAlx8/scene.splinecode" />
            </Card>
            <Card
              header="Wild Animal Initiative"
              description="Dedicated to finding evidence-backed ways to improve the lives of animals in the wild"
              button="Make a Donation"
            >
              <Spline scene="https://prod.spline.design/VFk-C8mifTnTvMJv/scene.splinecode" />
            </Card>
          </div>
        </div>
        <div className={styles.resources}>
          <div className={styles.logo}>
            <Spline scene="https://prod.spline.design/25ndTaK3Y-xOrbcG/scene.splinecode" />
          </div>
          <div className={styles.more}>
            <h1 className={styles.header}>Resources</h1>
            <p className={styles.desc}>We provide resources on animal care and the adoption process to help create a safe haven for animals</p>
            <button className={styles.sub}>See more</button>
          </div>
        </div>
        <div className={styles.subscribe}>
          <h1 className={styles.header}>Subscribe to our Newsletter</h1>
          <div className={styles.email}>
            <input className={styles.input} type="email" placeholder="enter email" />
            <button className={styles.sub}>Subscribe</button>
          </div>
        </div>
      </div>
      <footer>
        <Footer />
      </footer>
    </main>
  );
}
