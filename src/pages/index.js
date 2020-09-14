import React from "react"
import SEO from "../components/seo"
import "../styles/main.css"
import mockups from "../resources/iphone_mockup-bg-transparent.png"

export default function Home() {
  return (
    <div className="bg-coal min-h-screen">
      <SEO title="Home" />
      <main className="pb-20">
        <div className="max-w-screen-xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
          <h2 className="text-3xl leading-9 font-extrabold tracking-tight text-gray-100 sm:text-4xl sm:leading-10">
            Ready to join the fight against climate change?
            <br />
            <span className="text-green-600">Download our app today.</span>
          </h2>
          <div className="mt-8 flex lg:flex-shrink-0 lg:mt-0">
            <div className="inline-flex rounded-md shadow">
              <a
                href="https://github.com/SlashBinTeam"
                target="_blank"
                rel="noreferrer"
                className="font-bold inline-flex items-center justify-center px-5 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-green-600 hover:bg-green-500 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out"
              >
                Android
              </a>
            </div>
            <div className="ml-3 inline-flex rounded-md shadow">
              <a
                href="https://github.com/SlashBinTeam/slashbin-website"
                target="_blank"
                rel="noreferrer"
                className="font-bold inline-flex items-center justify-center px-5 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-green-600 hover:bg-green-500 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out"
              >
                iOS
              </a>
            </div>
            <div className="ml-3 inline-flex rounded-md shadow">
              <a
                href="https://github.com/SlashBinTeam/slashbin-website"
                target="_blank"
                rel="noreferrer"
                className="font-bold inline-flex items-center justify-center px-5 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-green-600 bg-white hover:text-green-500 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
        <div className="sm:w-3/4 md:w-1/2 xl:w-1/3 mx-auto">
          <img src={mockups} alt="mockups" />
        </div>
      </main>
      <footer className="w-full text-whitesmoke text-center py-8">
        <h1 className="text-lg font-extrabold">SlashBin 2020</h1>
        <a
          href="https://www.github.com/SlashBinTeam"
          target="_blank"
          rel="noreferrer"
          className="font-bold text-darkwhitesmoke"
        >
          github
        </a>
      </footer>
    </div>
  )
}
