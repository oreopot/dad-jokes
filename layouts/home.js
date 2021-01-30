import Header from "../components/header";
import Footer from "../components/footer";

export default function DefaultLayout({ children }) {
  return (
    <div className="flex flex-col bg-amber-200 h-screen items-center justify-center">
      <Header />
      {children}
      <Footer />
    </div>
  );
}
