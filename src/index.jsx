import { createRoot } from "react-dom/client";
import"./index.scss";
import { MainView } from "./components/main-view/main-view";

const MyFlixApplication = () => {
  return (
    <div className="my-flix">
      <div>welcome to MyFlix!</div>
      <MainView />
    </div>
  );
};

const container = document.querySelector("#root");
const root = createRoot(container);

root.render(<MyFlixApplication />);
