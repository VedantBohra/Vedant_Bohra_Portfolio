export function HeroFour(){
    return (
        <div className="flex flex-col gap-6 mt-14 px-48 py-6">
            <div className="flex justify-center items-center px-2 py-2">
                <h1 className="text-4xl"><span className="font-black">Experience</span> & <span className="font-black">Training</span></h1>
            </div>

            <div className="border border-slate-700 rounded-xl px-4 py-4 flex flex-col gap-4">
                <h2 className="text-xl flex justify-between">
                    <span>Internship at Exposys Data Labs</span>  
                    <span className="text-sm text-slate-500">May 2023 - July 2023</span>
                </h2>

                <p className="text-md">
                    Contributed to the development of a real-time chat application by assisting with feature implementation 
                    and supporting both client- and server-side workflows. Actively followed the end-to-end development process, 
                    from planning and implementation to testing and iteration. Collaborated closely with teammates using version 
                    control to manage changes, review contributions, and maintain code quality while gaining hands-on experience 
                    in building scalable, real-world applications.
                </p>

                <a href="/InternshipCompletion.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="cursor-pointer text-sm text-blue-600 hover:underline">
                    View Certificate
                </a>
            </div>

            <div className="border border-slate-700 rounded-xl px-4 py-4 flex flex-col gap-4">
                <h2 className="text-xl flex justify-between">
                    <span>IT Training at Ducat Institute of AI</span>  
                    <span className="text-sm text-slate-500">April 2024 - November 2024</span>
                </h2>

                <p className="text-md">
                    Completed an intensive IT training program focused on full stack web development with generative AI integration. 
                    Gained hands-on exposure to building end-to-end web applications while understanding how AI-powered features can 
                    enhance user experiences and developer workflows. The training emphasized practical development, 
                    problem-solving, and modern application design, along with collaborative practices and real-world use cases.
                </p>

                <a href="/Vedant_Bohra_Ducat_Certificate.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="cursor-pointer text-sm text-blue-600 hover:underline">
                    View Certificate
                </a>
            </div>
        </div>
    )
}