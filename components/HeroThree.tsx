export function HeroThree(){
    return (
        <div id="projects" className="mt-24 flex flex-col gap-x-6 gap-y-4 bg-black">
            <div className="flex justify-center items-center py-8">
                <h1 className="text-4xl text-white">My <span className="font-black">Projects</span></h1>
            </div>
            <div className="grid grid-cols-2 gap-x-4">
                <div className="px-16 py-8">
                    <a href="https://anonymous-messages-eta.vercel.app/"
                     target="_blank"
                     rel="noopener noreferrer"
                    >
                        <img className="rounded-xl hover:shadow-xl hover:shadow-slate-800 cursor-pointer"
                        src="./images/projectImg_1.png" alt="Project_1_Image" />
                    </a>
                </div>

                <div className="flex flex-col gap-4 px-16 py-24 text-lg text-slate-400 text-medium">
                    
                    <span className="font-black text-2xl">01</span>
                    <p>Anonymous Messages is a privacy-focused web app that lets users create a personal link to receive anonymous feedback.
                         Built with Next.js, TypeScript, Prisma, and PostgreSQL, it uses NextAuth.js for secure authentication,
                        offers user-controlled message visibility,and integrates AI-powered suggestions for senders.
                         Deployed on Vercel with CI/CD for fast, reliable updates.
                    </p>
                    
                    <a href="https://anonymous-messages-eta.vercel.app/"
                     target="_blank"
                     rel="noopener noreferrer"
                    >
                        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" 
                            className="h-7 w-7 cursor-pointer">
                            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                            <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                            <g id="SVGRepo_iconCarrier">
                            <path 
                                stroke="#94a3b8" 
                                strokeLinecap="round" 
                                strokeLinejoin="round" 
                                strokeWidth="2" 
                                d="M12 6H7a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1v-5m-6 0 7.5-7.5M15 3h6v6"
                            />
                            </g>
                        </svg>
                    </a>
                </div>

                <div className="flex flex-col gap-4 px-16 py-24 text-lg text-slate-400 text-medium">

                    <span className="font-black text-2xl">02</span>

                    <p>Post Management Platform enables users to create, edit, and delete blog posts using a custom-configured text editor.
                        It features a fully serverless backend built with Cloudflare Workers and Hono, powered by Prisma ORM, and a React + TypeScript frontend. 
                        Deployed on Vercel with CI/CD for fast and scalable delivery.
                    </p>

                    <a href="https://penlight-six.vercel.app/landing"
                     target="_blank"
                     rel="noopener noreferrer"
                    >
                        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" 
                            className="h-7 w-7 cursor-pointer">
                            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                            <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                            <g id="SVGRepo_iconCarrier">
                            <path 
                                stroke="#94a3b8" 
                                strokeLinecap="round" 
                                strokeLinejoin="round" 
                                strokeWidth="2" 
                                d="M12 6H7a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1v-5m-6 0 7.5-7.5M15 3h6v6"
                            />
                            </g>
                        </svg>
                    </a>                    
                </div>

                <div className="px-16 py-8">
                    <a href="https://penlight-six.vercel.app/landing"
                     target="_blank"
                     rel="noopener noreferrer"
                    >
                        <img className="rounded-xl hover:shadow-xl hover:shadow-slate-800 cursor-pointer"
                        src="./images/projectImg_2.png" alt="Project_2_Image" />
                    </a>
                </div>
            </div>
        </div>
    )
}