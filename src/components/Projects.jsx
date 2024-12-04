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
                        title="Interactive Quiz Application"
                        points={[
                            'Developed a full-stack quiz application using the MERN stack, allowing users to create, take, and share quizzes.',
                            'Implemented user authentication with JWT for secure sign-up and login functionality.',
                            'Created features for custom quiz creation.',
                            'Built real-time leaderboards for tracking top scores and fostering competition among users.',
                            'Designed user profiles.',
                            'Developed a responsive UI using ReactJS and TailwindCSS, ensuring compatibility across devices.',
                            'Deployed the application on Render for live access.'
                        ]}
                        skills={['ReactJS', 'ExpressJS', 'MongoDB', 'TailwindCSS']}
                        codeLink="https://github.com/markbakos/quiz_app"
                        demoLink="https://quizapp-dhav.onrender.com/"
                    />

                    <ProjectContainer
                        title="Restaurant App"
                        points={[
                            'Developed a full-stack restaurant management application using the MERN stack, enabling seamless order management and status tracking.',
                            'Implemented functionality for creating, updating, and managing orders with dynamic filtering by order status.',
                            'Implemented functionality for reserving tables, and for administrators to view and manage the reservations.',
                            'Built a responsive and intuitive UI with ReactJS and TailwindCSS, enhancing user experience across all devices.',
                            'Integrated RESTful APIs.',
                            'Deployed the application using Render for live access and testing.'
                        ]}
                        skills={['ReactJS', 'ExpressJS', 'MongoDB', 'TailwindCSS', 'Restful APIs']}
                        codeLink="https://github.com/markbakos/restaurant-page"
                        demoLink="https://restaurant-page-y9ps.onrender.com/"
                    />

                    <ProjectContainer
                        title="MERN Login/Register App"
                        points={['Developed a full-stack login/register app using MERN stack, with authentication and authorization features.',
                            'Utilized ReactJS for the frontend, ExpressJS for the backend, and MongoDB for the database.',
                            'Deployed the app with Render',]}
                        skills={['ReactJS', 'ExpressJS', 'MongoDB', 'TailwindCSS']}
                        codeLink="https://github.com/markbakos/mern-login"
                        demoLink="https://mern-login-frontend-x4uz.onrender.com"
                    />

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
                            'Integrated local storage to save betting data securely on users devices',
                            'Added charts for data visualization with ChartJS.']}
                        skills={['ReactJS', 'TailwindCSS', 'ChartJS']}
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
