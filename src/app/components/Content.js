import React from "react";
import AboutMe from "./content/AboutMe";
import CV from "./content/CV";
import FindMe from "./content/FindMe";
import Experience from "./content/Experience";
import Education from "./content/Education";
import Project from "./content/Project";

export default function Content() {
  return (
    <section>
      <div className="p-4">
        <div className="grid grid-cols-1 gap-4 list-none lg:grid-cols-3 lg:grid-rows-3 xl:grid-cols-4 xl:grid-rows-4">
          <div className="lg:row-span-2 ring-1 dark:ring-white/10 ring-primary/5 bg-white dark:bg-secondary shadow-xl dark:shadow-thick rounded-3xl p-8">
            <AboutMe />
          </div>
          <div className="ring-1 dark:ring-white/10 ring-primary/5 rounded-3xl justify-between shadow-xl dark:shadow-thick items-center flex flex-col p-8 h-full bg-white  dark:bg-secondary">
            <FindMe />
          </div>
          <div className="ring-1 lg:row-span-2 flex flex-col justify-between h-full dark:ring-white/10 lg:row-start-2  lg:gap-0 md:items-center md:gap-12  lg:col-start-2 lg:col-span-2 rounded-3xl p-8 bg-white dark:bg-secondary shadow-xl dark:shadow-thick">
            <Experience />
          </div>
          <div className="ring-1 dark:ring-white/10  ring-primary/5 flex flex-col justify-between items-center rounded-3xl shadow-xl dark:shadow-thick p-8  bg-white dark:bg-secondary overflow-hidden text-center lg:text-left">
            <CV />
          </div>
          <div className="ring-1 lg:row-start-3 items-center h-full flex p-8 flex-col justify-center hover:ring-primary/5 dark:hover:ring-white/20 dark:ring-white/10 ring-primary/5 relative rounded-3xl overflow-hidden bg-white dark:bg-secondary shadow-xl dark:shadow-thick">
            <Project />
          </div>
          <div className="lg:row-span-2 ring-1 dark:ring-white/10 ring-primary/5 hover:ring-primary/5 bg-white dark:bg-secondary  dark:hover:ring-white/20 overflow-hidden duration-300 shadow-xl dark:shadow-thick rounded-3xl p-8">
            <Education />
          </div>
          <div className="ring-1 dark:ring-white/10 ring-primary/5 flex flex-col p-8 h-full justify-center items-center rounded-3xl overflow-hidden relative lg:col-span-2 lg:row-start-4 bg-white dark:bg-secondary shadow-xl dark:shadow-thick">
            <div className="relative p-8 text-center w-full">
              <p className="text-xl tracking-tight font-medium text-primary dark:text-white md:text-6xl">
                Subscribe <span className="lg:block">to my newsletter</span>
              </p>
              <form className="mt-6 sm:flex w-full lg:max-w-sm mx-auto">
                <label for="email-address" className="sr-only">
                  Email address
                </label>
                <input
                  type="email"
                  name="email-address"
                  id="email-address"
                  autocomplete="email"
                  required=""
                  className="block w-full h-12 px-4 py-2 text-sm text-zinc-500 bg-zinc-100 dark:bg-tertiary ring-1 dark:ring-white/10 ring-primary/5 rounded-lg appearance-none focus:ring-white/20 placeholder-zinc-400 focus:border-zinc-300 focus:bg-primary focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  placeholder="Enter your email"
                />
                <div className="mt-4 sm:ml-2 sm:mt-0 sm:flex-shrink-0">
                  <button
                    type="submit"
                    className="text-sm py-2 w-full px-4 h-12 font-semibold focus:ring-2 rounded-lg bg-primary dark:bg-white dark:text-primary dark:hover:text-white hover:text-primary dark:hover:bg-white/5 hover:bg-primary/10 text-white flex duration-200 focus:ring-offset-2 focus:ring-inline-flex items-center justify-between"
                  >
                    Subscribe
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="ring-1 dark:ring-white/10 ring-primary/5 shadow-xl dark:shadow-thick rounded-3xl p-8 lg:row-start-4 h-full flex flex-col justify-between bg-white dark:bg-secondary">
            <p className="text-xl tracking-tight font-medium text-primary dark:text-white md:text-5xl">
              Testimonials
            </p>
            <div className="md:grid md:grid-cols-2 gap-6 lg:grid-cols-1">
              <div className="mt-4">
                <p className="text-sm text-pink-500 dark:text-pink-400">
                  "Big fan of your themes. They're well-organized, look clean,
                  and are fast."
                </p>
                <p className="text-xs mt-2 text-zinc-500">
                  <span className="block text-xs">Kevin Focke</span>
                  <span className="block text-xs"> Developer</span>
                </p>
              </div>
              <div className="mt-4">
                <p className="text-sm text-orange-500 dark:text-orange-300">
                  "Amazing resource using @astrodotbuild and @tailwindcss! I got
                  it a week ago and have found the contents really useful. 5/5
                </p>
                <p className="text-xs mt-2 text-zinc-500">
                  <span className="block text-xs">Alonso</span>
                  <span className="block text-xs"> Entrepreneur</span>
                </p>
              </div>
            </div>
          </div>
          <div className="lg:col-span-2 xl:col-span-1 h-full flex flex-col justify-between lg:row-span-2 ring-1 dark:ring-white/10 ring-primary/5 bg-white dark:bg-secondary shadow-xl dark:shadow-thick rounded-3xl p-8">
            <p className="text-xl tracking-tight font-medium text-primary dark:text-white md:text-3xl">
              As a digital designer, my expertise lies in crafting distinctive
              visual identities for digital products.
              <br />
              <br />I hold the belief that an engaging design begins with shared
              values, transparent communication, and a genuine respect for the
              audience.
            </p>
            <p className="text-primary dark:text-white mt-4">
              Michael Andreuzza
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
