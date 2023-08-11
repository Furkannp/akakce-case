import Products from "~/components/Products";
import 'bootstrap/dist/css/bootstrap.css';

export default function Index() {
  return (
    <main className="relative min-h-screen sm:flex sm:items-center sm:justify-center" style={{ background: "#80808026" }}>
      <div className="relative sm:pb-16 sm:pt-8">
        <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
          <Products />
        </div>
      </div>
    </main>
  );
}
