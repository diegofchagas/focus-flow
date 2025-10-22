import { Header } from "../components/header/Header";
import { Countdown } from "../components/Countdown";
import { NewCycleForm } from "../components/NewCicleForm";
import { Footer } from "../components/footer/Footer";

export const Home = () => {
  return (
    <div className="h-screen">
      <Header />
      <Countdown />
      <NewCycleForm />
      <Footer />
    </div>
  );
};
