import { createRoot } from "react-dom/client";
import { Provider } from 'react-redux';
import { BrowserRouter } from "react-router-dom";
import "assets/css/style.css";
import 'react-toastify/dist/ReactToastify.css';
import { store } from 'store/store';
import App from "./app";

const root = createRoot(document.getElementById("root")!);
root.render(
  <BrowserRouter>
    <Provider store={store}>
      <App/>
    </Provider>
  </BrowserRouter>
);
