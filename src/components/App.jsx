import About from "./About"

function App() {
  return (
    <>
      <div className="flex flex-col sm:flex-row">
        <About/>

          <div className="ml-8 sm:ml-[40vw] m-10">

              <h1 className="text-3xl mb-3 font-semibold">Skills</h1>
              <h2 className="text-xl font-medium">Languages</h2>
              <div className="py-2">
                  <span
                      className="bg-indigo-700 text-indigo-200 px-2.5 py-1.5 mr-2 rounded-2xl text-md">JavaScript</span>
                  <span
                      className="bg-indigo-700 text-indigo-200 px-2.5 py-1.5 mr-2 rounded-2xl text-md">TypeScript</span>
                  <span className="bg-indigo-700 text-indigo-200 px-2.5 py-1.5 mr-2 rounded-2xl text-md">C#</span>
              </div>
              <h2 className="mt-4 text-xl font-medium">Frameworks</h2>
              <div className="py-2">
                  <span className="bg-green-700 text-green-200 px-2.5 py-1.5 mr-2 rounded-2xl text-md">ReactJS</span>
                  <span
                      className="bg-green-700 text-green-200 px-2.5 py-1.5 mr-2 rounded-2xl text-md">TailwindCSS</span>
              </div>
              <h2 className="mt-4 text-xl font-medium">Databases</h2>
              <div className="py-2">
                  <span className="bg-red-700 text-red-200 px-2.5 py-1.5 mr-2 rounded-2xl text-md">MongoDB</span>
                  <span className="bg-red-700 text-red-200 px-2.5 py-1.5 mr-2 rounded-2xl text-md">MySQL</span>
              </div>

              <h1 className="text-3xl mt-10 mb-5 font-semibold">Education</h1>
              <div className="flex flex-row">
                  <img className="rounded-full h-24 w-24 sm:h-32 sm:w-32"
                       src="https://www.inf.u-szeged.hu/sites/default/files/upload/szte_ttik.png"/>
                  <div className="ml-8">
                      <h1 className="text-3xl font-medium">Computer Science Engineering (BSc)</h1>
                      <h3 className="text-xl text-gray-300 my-1">Szegedi Tudományegyetem, Hungary</h3>
                      <h3 className="text-lg text-gray-400"> September 2025 - Present</h3>
                  </div>
              </div>

              <div className="flex flex-row mt-5">
                  <img className="rounded-full h-24 w-24 sm:h-32 sm:w-32"
                       src="https://srednjeskole.edukacija.rs/wp-content/uploads/2014/06/logoTS.png"/>
                  <div className="ml-8">
                      <h1 className="text-3xl font-medium">Diploma of Information Technology</h1>
                      <h3 className="text-xl text-gray-300 my-1">Tehnicka Skola Becej, Serbia</h3>
                      <h3 className="text-lg text-gray-400"> September 2021 - June 2025</h3>
                  </div>
              </div>

          </div>
      </div>
    </>
  )
}

export default App
