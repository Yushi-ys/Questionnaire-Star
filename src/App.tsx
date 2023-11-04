import { RouterProvider } from "react-router-dom";
import routerConfig from "./router";

function App() {
  return (
    <div style={{ background: "#f5f5f5", height: "100vh" }}>
      <RouterProvider router={routerConfig}></RouterProvider>
    </div>
  );
}

export default App;
