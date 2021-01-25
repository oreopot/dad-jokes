import { useState } from "react";
import DefaultLayout from "../layouts/home";

function getJoke() {
  return true;
}

export default function Home({ data }) {
  const [loading, setLoading] = useState(false);

  return (
    <>
      <DefaultLayout>
        <div className="max-w-md bg-white text-indigo-500 rounded-xl hover:shadow-2xl  transition duration-300 ease-in-out transform scale-125 overflow-hidden md:max-w-2xl">
          <div className="md:flex">
            <div className="p-8">
              <p className="mt-2 text-3xl font-itim">{data.joke}</p>
              <p className="mt-10">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full focus:outline-none ">
                  Another <span>☝️</span>
                </button>
              </p>
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

  const data = await res.json();

  if (!data) {
    return {
      notFound: true,
    };
  }

  return { props: { data } };
}
