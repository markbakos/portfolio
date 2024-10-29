import About from "./About";
import ProjectContainer from "@/components/ProjectContainer.jsx";

function Projects() {
    return (
        <>
            <div className="flex flex-col sm:flex-row">
                <About/>

                <div className="ml-8 sm:ml-[40vw] m-10">
                    <h1 className="text-3xl mb-3 font-semibold">Projects</h1>

                    <ProjectContainer
                        title="Personal Portfolio"
                        points={['Designed a personal portfolio using ReactJS and Vite, to showcase projects and skills effectively.',
                            'Built with responsive design principles to ensure a seamless experience across desktops, tablets, and mobile devices.',]}
                        skills={['ReactJS', 'TailwindCSS']}
                        codeLink="https://github.com/markbakos/portfolio"
                        demoLink=""
                    />

                    <ProjectContainer
                        title="Bet Tracker"
                        points={['Developed a responsive bet tracking application using ReactJS and Vite, providing users with a fast and efficient experience.',
                            'Designed an intuitive, responsive UI with TailwindCSS, making the app accessible and user-friendly across devices.',
                            'Integrated local storage to save betting data securely on users devices']}
                        skills={['ReactJS', 'TailwindCSS']}
                        codeLink="https://github.com/markbakos/bet-tracker"
                        demoLink="https://bet-tracker-delta.vercel.app/"
                    />

                    <ProjectContainer
                        title="Size Converter"
                        points={['Built a unique size comparison tool with ReactJS, allowing users to convert measurements into relatable object sizes, like comparing heights to ants or skyscrapers.',
                            'Implemented ascending size comparisons and interactive elements for an engaging and informative user experience.',
                            'Utilized responsive design with TailwindCSS for seamless performance across various screen sizes.']}
                        skills={['ReactJS', 'TailwindCSS']}
                        codeLink="https://github.com/markbakos/react-size-converter"
                        demoLink="https://react-size-converter.vercel.app/"
                    />

                    <ProjectContainer
                        title="Weather App"
                        points={['Developed a responsive weather application using ReactJS and TailwindCSS, providing real-time weather updates and forecasts.',
                            'Integrated third-party weather API for dynamic, location-based data, including temperature, humidity, and conditions.',
                            'Deployed on Vercel.']}
                        skills={['ReactJS', 'TailwindCSS', 'API Integration']}
                        codeLink="https://github.com/markbakos/weather-app"
                        demoLink="https://weather-app-one-vert-40.vercel.app"
                    />

                    <ProjectContainer
                        title="Simple Calculator"
                        points={['Developed a user-friendly calculator app with core arithmetic functions and an intuitive interface using C# and .NET.',
                            'Integrated MySQL database support for tracking past calculations and memory, enabling users to view and analyze previous operations.',
                            'Designed efficient code for responsive and accurate real-time calculations, providing a seamless user experience.',
                            'Implemented validation features to prevent calculation errors, ensuring reliability and robustness in all operations.']}
                        skills={['C#', '.NET', 'MySQL']}
                        codeLink="https://github.com/markbakos/simplecalc"
                        demoLink=""
                    />

                </div>
            </div>

        </>
    )
}

export default Projects
