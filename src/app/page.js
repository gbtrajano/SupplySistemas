import Companies from "./Components/Companies/Companies";
import Hero from "./Components/hero/Hero";
import Info from "./Components/Info/Info";
import Trial from "./Components/Trial/Trial";
import Team from "./Components/Team/Team";

const page = () => {
  return (
    <div>
      <Hero />
      <Info />
      <Companies />
      <Trial />
      <Team />
    </div>
  );
};

export default page;
