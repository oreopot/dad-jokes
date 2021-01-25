import Header from "../components/header";
import Footer from "../components/footer";

export default function DefaultLayout({ children }) {
  return (
    <div className="flex flex-col bg-amber-200 h-screen items-center justify-center">
      <div className="top-0 fixed text-yellow-100 h-12 w-screen font-perm-marker bg-indigo-300">
        <Header />
      </div>
      {children}
      <div className="bottom-0 fixed bg-light-blue-500 h-12 w-screen font-itim font-bold text-gray-50">
        <Footer />
      </div>
    </div>
  );
}
