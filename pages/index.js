import DefaultLayout from "../layouts/home";

export default function Home() {
  return (
    <>
      <DefaultLayout>
        <div className="max-w-md bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
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
                Getting a new business off the ground is a lot of hard work.
                Here are five ideas you can use to find your first customers.
              </p>
            </div>
          </div>
        </div>
      </DefaultLayout>
    </>
  );
}
