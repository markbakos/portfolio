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
                        title="PMST - Personal Media Summarization Tool"
                        points={[
                            'Full-stack application, allowing users to access multiple very useful tools all in one site.',
                            'Frontend developed with React, backend using Python FastAPI.',
                            'Summarizing large texts using LSA (sumy).',
                            'Get the keywords and summarize a video from an uploaded file or a youtube link.',
                            'Plenty of other useful features.'
                        ]}
                        skills={['React', 'TailwindCSS', 'Python', 'FastAPI']}
                        codeLink="https://github.com/markbakos/personal-media-summarization-tool"
                        demoLink="https://github.com/markbakos/personal-media-summarization-tool"
                    />

                    <ProjectContainer
                        title="Video Speech Summarizer"
                        points={[
                            'Cross-Platform C# application, made with AvaloniaUI.',
                            'Upload a video and the application will transcribe the audio and summarize it automatically.',
                            'Extracting the audio from the Video file using FFMPEG.',
                            'Transcribes the audio using Vosk Speech Recognition Model.',
                            'Summarizes the transcribed audio using T5-Small AI model using Python Flask Backend.'
                        ]}
                        skills={['C#', 'Python', 'AvaloniaUI', 'Vosk', 'FFMPEG']}
                        codeLink="https://github.com/markbakos/video_speech_summarizer"
                        demoLink="https://github.com/markbakos/video_speech_summarizer"
                    />

                    <ProjectContainer
                        title="Movie Plus"
                        points={[
                            'Full-stack application, allowing users to create accounts to explore movies, like a streaming platform.',
                            'Implemented Stripe for monthly subscription.',
                            'Used TMDB API to get the movies.'
                        ]}
                        skills={['ReactJS', 'ExpressJS', 'Stripe', 'MongoDB', 'TailwindCSS']}
                        codeLink="https://github.com/markbakos/movieplus"
                        demoLink="https://github.com/markbakos/movieplus"
                    />

                    <ProjectContainer
                        title="Quiz Application"
                        points={[
                            'Developed a full-stack quiz application using the MERN stack, allowing users to create, take, and share quizzes.',
                            'Implemented user authentication.',
                            'Custom quiz creation.',
                            'Deployed the application on Render.'
                        ]}
                        skills={['ReactJS', 'ExpressJS', 'MongoDB', 'TailwindCSS']}
                        codeLink="https://github.com/markbakos/quiz_app"
                        demoLink="https://quizapp-dhav.onrender.com/"
                    />

                    <ProjectContainer
                        title="Restaurant App"
                        points={[
                            'Developed a full-stack restaurant management application using the MERN stack.',
                            'Create, update and manage orders.',
                            'Make, manage and delete reservations.',
                            'Deployed the application using Render.'
                        ]}
                        skills={['ReactJS', 'ExpressJS', 'MongoDB', 'TailwindCSS']}
                        codeLink="https://github.com/markbakos/restaurant-page"
                        demoLink="https://restaurant-page-y9ps.onrender.com/"
                    />

                    <ProjectContainer
                        title="MERN Login/Register App"
                        points={[
                            'Developed a full-stack login/register app using MERN stack.',
                            'ReactJS for the frontend, ExpressJS for the backend, and MongoDB for the database.',
                            'Deployed the app with Render',]}
                        skills={['ReactJS', 'ExpressJS', 'MongoDB', 'TailwindCSS']}
                        codeLink="https://github.com/markbakos/mern-login"
                        demoLink="https://mern-login-frontend-x4uz.onrender.com"
                    />

                    <ProjectContainer
                        title="Personal Portfolio"
                        points={['Designed a personal portfolio using ReactJS.',
                            'Built with responsive design.',]}
                        skills={['ReactJS', 'TailwindCSS']}
                        codeLink="https://github.com/markbakos/portfolio"
                        demoLink=""
                    />

                    <ProjectContainer
                        title="Bet Tracker"
                        points={['Developed a responsive bet tracking application using ReactJS.',
                            'save betting data on users devices local storage.',
                            'Added charts for data visualization with ChartJS.']}
                        skills={['ReactJS', 'TailwindCSS', 'ChartJS']}
                        codeLink="https://github.com/markbakos/bet-tracker"
                        demoLink="https://bet-tracker-delta.vercel.app/"
                    />

                    <ProjectContainer
                        title="Weather App"
                        points={['Developed a responsive weather application using ReactJS.',
                            'Used a weather API for dynamic, location-based data, including temperature, humidity, and conditions.',
                            'Deployed on Vercel.']}
                        skills={['ReactJS', 'TailwindCSS', 'API Integration']}
                        codeLink="https://github.com/markbakos/weather-app"
                        demoLink="https://weather-app-one-vert-40.vercel.app"
                    />

                    <ProjectContainer
                        title="Simple Calculator"
                        points={['Developed a user-friendly calculator app using C# and .NET.',
                            'Integrated MySQL database support for tracking past calculations and memory.',
                            'Validation features to prevent calculation errors.']}
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
