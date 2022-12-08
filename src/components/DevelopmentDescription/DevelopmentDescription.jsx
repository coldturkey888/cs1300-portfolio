import "./DevelopmentDescription.css";
import Components from "./pages/Components/Components";
import Intro from "./pages/Intro/Intro";
import Usability from "./pages/Usability/Usability";

function DevelopmentDescription() {
  return (
    <div className="dd-App">
      <Intro />
      <Components />
      <Usability />
    </div>
  );
}

export default DevelopmentDescription;
