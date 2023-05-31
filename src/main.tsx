import ReactDOM from "react-dom/client";
import { App } from "./App.tsx";
import "bootswatch/dist/yeti/bootstrap.min.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <App title="React and Typescript" />
);
