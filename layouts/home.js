import Header from "../components/header";
import Footer from "../components/footer";

export default function DefaultLayout({ children }) {
  return (
    <>
      <div className="top-0 fixed text-yellow-100 h-12 w-screen font-perm-marker bg-indigo-300">
        <Header />
      </div>

      <div className="bg-gradient-to-r from-yellow-400 to-red-500 w-8/12  hover:shadow-2xl transition-shadow text-center mt-60 mb-24 lg:rounded-3xl rounded-xl p-6 ">
        <h1>Hello, World!</h1>
        <h1>Navigation</h1>
      </div>

      <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
        <div className="md:flex">
          <div className="p-8">
            <div className="uppercase font-perm-marker tracking-wide text-sm text-indigo-500 font-semibold">
              Case study
            </div>
            <a
              href="#"
              className="block mt-1 text-lg font-perm-marker  leading-tight font-medium text-black hover:underline">
              Finding customers for your new business
            </a>
            <p className="mt-2 text-gray-600 font-itim">
              Getting a new business off the ground is a lot of hard work. Here
              are five ideas you can use to find your first customers.
            </p>
          </div>
        </div>
      </div>

      <div className="bottom-0 fixed bg-light-blue-500 h-12 w-screen font-itim font-bold text-gray-50">
        <Footer />
      </div>
    </>
  );
}
