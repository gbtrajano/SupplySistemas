import Companies from "./Components/Companies/Companies";
import Hero from "./Components/hero/Hero";
import Info from "./Components/Info/Info";
import Maintenance from "./Components/Maintenance/Maintenance";
import Trial from "./Components/Trial/Trial";

const page = () => {
  return (
    <div>
      <Hero />
      {/* <Maintenance /> */}
      <Info />
      <Companies />
      <Trial />
    </div>
  );
};

export default page;
