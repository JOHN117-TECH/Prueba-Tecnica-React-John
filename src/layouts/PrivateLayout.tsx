import { Outlet } from 'react-router-dom';
import { Header, Footer } from './index';

const PrivateLayout = () => {
  return (
    <>
      <section className="min-h-screen flex flex-col">
        <Header />

        <main className="flex-grow p-6">
          <Outlet />
        </main>

        <Footer />
      </section>
    </>
  );
};

export default PrivateLayout;
