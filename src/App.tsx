import "./App.css";
import { LandingPage } from "./features/landing/LandingPage";

function App() {
  return (
    <div className="min-h-screen text-white">
      <LandingPage />

      <main>
        <h1 className="px-10 py-20 text-4xl font-bold">Welcome to NexaERP</h1>
      </main>
    </div>
  );
}

export default App;
