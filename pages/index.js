import { useState } from "react";
import DefaultLayout from "../layouts/home";

export default function Home({ data }) {
  const [loading, setLoading] = useState(false);
  const [joke, setJoke] = useState(false);

  const fetchData = async () => {
    setLoading(true);
    const res = await fetch("https://icanhazdadjoke.com/", {
      // method: "GET",
      headers: {
        Accept: "application/json",
        "User-Agent": "My Library (https://github.com/oreopot/dad-jokes)",
      },
    });

    let data = await res.json();
    setJoke(data);
    setLoading(false);
    return { joke };
  };

  return (
    <>
      <DefaultLayout>
        <div className="max-w-sm  bg-white text-indigo-500  rounded-xl hover:shadow-2xl  transition duration-300 ease-in-out transform md:scale-125 overflow-hidden md:max-w-2xl">
          <div className="md:flex">
            <div className="p-8">
              {loading ? (
                <div
                  style={{ "border-top-color": "#3498db" }}
                  class="animate-spin duration-1000 ease-linear rounded-full border-8 border-t-8 border-gray-200 h-32 w-32"
                ></div>
              ) : (
                <p className="mt-2 text-3xl font-itim">
                  {joke ? joke.joke : data.joke}
                </p>
              )}

              {!loading ? (
                <p className="mt-10">
                  <button
                    disabled={loading}
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full focus:outline-none "
                    onClick={fetchData}
                  >
                    Another <span>☝️</span>
                  </button>
                </p>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
      </DefaultLayout>
    </>
  );
}

export async function getStaticProps(context) {
  const res = await fetch("https://icanhazdadjoke.com/", {
    // method: "GET",
    headers: {
      Accept: "application/json",
      "User-Agent": "My Library (https://github.com/oreopot/dad-jokes)",
    },
  });

  let data = await res.json();

  if (!data) {
    return {
      notFound: true,
    };
  }

  return { props: { data } };
}
