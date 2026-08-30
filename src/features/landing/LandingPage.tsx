import Navbar from "./Navbar/Navbar";

type Props = {};

export function LandingPage() {
  return (
    <>
      <Navbar />

      <main>
        <section className="min-h-screen">
          <h1>Welcome to NexaERP</h1>
        </section>
      </main>
    </>
  );
}

export default LandingPage;
