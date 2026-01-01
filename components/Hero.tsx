export function Hero(){
    return (
        <div className="px-6 py-8">
            <div className="grid grid-cols-4 gap-4 p-4">
            <div className="col-span-2 p-4 flex flex-col gap-8">
                <div className="text-5xl font-black flex flex-col gap-3">
                    <p><span className="outline-text font-black">Hello I'm</span> Vedant Bohra.</p>
                    <p className="flex gap-3">
                        <span>Full stack</span>
                        <span className="outline-text font-black">Web Developer</span>
                    </p>
                    <p>Based in India.</p>
                </div>

                <div className="text-slate-600">
                    <p>Enthusiastic Full Stack Developer with a strong foundation in 
                       modern web technologies including React, Next.js, and Node.js. 
                       I thrive on problem-solving and creating seamless user experiences. 
                       As a quick learner with a passion for clean code, I'm excited to 
                       bring fresh ideas and dedication to a dynamic development team.
                    </p>
                </div>

                <div className="mt-24 flex gap-4">
                    <div className="">
                        <a href="https://www.linkedin.com/in/vedant-bohra/"
                          target="_blank"
                          rel="noopener noreferrer">
                          <svg
                            width="36"
                            height="36"
                            viewBox="0 0 382 382"
                            xmlns="http://www.w3.org/2000/svg"
                            className="fill-current cursor-pointer
                                transition-all duration-75 ease-out
                                active:shadow-[0_2px_6px_rgba(0,0,0,0.22)] active:translate-y-0.5"
                            >
                            <path
                                d="M347.445,0H34.555C15.471,0,0,15.471,0,34.555v312.889C0,366.529,15.471,382,34.555,382h312.889
                                C366.529,382,382,366.529,382,347.444V34.555C382,15.471,366.529,0,347.445,0z
                                M118.207,329.844c0,5.554-4.502,10.056-10.056,10.056H65.345
                                c-5.554,0-10.056-4.502-10.056-10.056V150.403c0-5.554,4.502-10.056,10.056-10.056h42.806
                                c5.554,0,10.056,4.502,10.056,10.056V329.844z
                                M86.748,123.432c-22.459,0-40.666-18.207-40.666-40.666
                                S64.289,42.1,86.748,42.1s40.666,18.207,40.666,40.666S109.208,123.432,86.748,123.432z
                                M341.91,330.654c0,5.106-4.14,9.246-9.246,9.246H286.73
                                c-5.106,0-9.246-4.14-9.246-9.246v-84.168c0-12.556,3.683-55.021-32.813-55.021
                                c-28.309,0-34.051,29.066-35.204,42.11v97.079
                                c0,5.106-4.139,9.246-9.246,9.246h-44.426
                                c-5.106,0-9.246-4.14-9.246-9.246V149.593
                                c0-5.106,4.14-9.246,9.246-9.246h44.426
                                c5.106,0,9.246,4.14,9.246,9.246v15.655
                                c10.497-15.753,26.097-27.912,59.312-27.912
                                c73.552,0,73.131,68.716,73.131,106.472V330.654z"
                                fill="#0077B7"
                            />
                        </svg>
                        </a>
                    </div>

                    <div>
                        <a href="https://github.com/VedantBohra"
                          target="_blank"
                          rel="noopener noreferrer">
                        <svg
                            viewBox="0 -0.5 25 25"
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-11 h-11 fill-current pb-2 cursor-pointer
                                transition-all duration-75 ease-out
                                active:shadow-[0_2px_6px_rgba(0,0,0,0.22)] active:translate-y-0.5"
                            aria-hidden="true"
                            >
                            <path d="m12.301 0h.093c2.242 0 4.34.613 6.137 1.68c1.871 1.094 3.386 2.609 4.449 4.422c1.04 1.769 1.654 3.896 1.654 6.166c0 5.406-3.483 10-8.327 11.658a.726.726 0 0 1-.209.031a.71.71 0 0 1-.433-.144a.606.606 0 0 1-.208-.466v-.013c0-.032.003-.441.008-1.226c.005-.785.008-1.503.008-2.154c.007-.075.011-.161.011-.249c0-.792-.323-1.508-.844-2.025c.618-.061 1.176-.163 1.718-.305c.573-.16 1.073-.373 1.537-.642c.508-.28.938-.636 1.292-1.058c.372-.476.663-1.036.84-1.645c.209-.683.329-1.468.329-2.281v-.136c0-1.248-.482-2.383-1.269-3.23c.168-.44.265-.948.265-1.479c0-.649-.145-1.263-.404-1.814a1.91 1.91 0 0 0-.381-.035c-.334 0-.649.078-.929.216c-.568.21-1.054.448-1.512.726l-.609.384a11.2 11.2 0 0 0-3.075-.416c-1.094 0-2.153.152-3.157.436c-.256-.176-.681-.433-.681-.433c-.373-.214-.814-.421-1.272-.595a2.19 2.19 0 0 0-1.009-.244c-.124 0-.246.01-.364.03c-.248.524-.393 1.139-.393 1.788c0 .531.097 1.04.275 1.509c-.785.844-1.266 1.979-1.266 3.227v.076c0 .809.12 1.591.344 2.327c.189.643.476 1.202.85 1.693c.354.435.782.793 1.267 1.062c.432.252.933.465 1.46.614c.466.125 1.024.227 1.595.284c-.431.428-.718 1-.784 1.638c-.207.101-.448.183-.699.236a4.3 4.3 0 0 1-.85.08h-.066a1.78 1.78 0 0 1-1.055-.348a2.34 2.34 0 0 1-.881-.986a2.26 2.26 0 0 0-.768-.827a2.16 2.16 0 0 0-.776-.38l-.32-.048a.61.61 0 0 0-.394.077q-.128.072-.08.184c.039.086.087.16.145.225a1.6 1.6 0 0 0 .205.19l.112.08a2.1 2.1 0 0 1 .693.603c.191.237.359.505.494.792l.16.368c.135.402.38.738.7.981c.3.234.662.402 1.057.478c.33.064.714.104 1.106.112h.15c.261 0 .517-.021.767-.062l.368-.064c0 .406.003.879.008 1.418c.005.539.008.83.008.873v.014a.606.606 0 0 1-.208.466a.71.71 0 0 1-.431.143a.77.77 0 0 1-.214-.032c-4.929-1.689-8.409-6.283-8.409-11.69c0-2.268.612-4.393 1.681-6.219c1.094-1.871 2.609-3.386 4.422-4.449c1.739-1.034 3.835-1.645 6.073-1.645h.093z" />
                        </svg>                            
                        </a>
                    </div>

                    <div>
                        <a href="mailto:vedantbohra@gmail.com"
                          target="_blank"
                          rel="noopener noreferrer">
                        <svg
                            viewBox="7.086 -169.483 1277.149 1277.149"
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-10 h-12 pb-3
                                transition-all duration-75 ease-out cursor-pointer
                                active:shadow-[0_2px_6px_rgba(0,0,0,0.22)] active:translate-y-0.5"
                            shapeRendering="geometricPrecision"
                            textRendering="geometricPrecision"
                            imageRendering="optimizeQuality"
                            aria-hidden="true"
                            >
                            <defs>
                                <linearGradient
                                id="mailGradient"
                                gradientUnits="userSpaceOnUse"
                                x1="1959.712"
                                y1="737.107"
                                x2="26066.213"
                                y2="737.107"
                                gradientTransform="matrix(.0283 0 0 -.0283 248.36 225.244)"
                                >
                                <stop offset="0" stopColor="#f8f6ef" />
                                <stop offset="1" stopColor="#e7e4d6" />
                                </linearGradient>
                            </defs>

                            <path
                                d="M1179.439 7.087c57.543 0 104.627 47.083 104.627 104.626v30.331l-145.36 103.833-494.873 340.894L148.96 242.419v688.676h-37.247c-57.543 0-104.627-47.082-104.627-104.625V111.742C7.086 54.198 54.17 7.115 111.713 7.115l532.12 394.525L1179.41 7.115z"
                                fill="#e75a4d"
                            />

                            <path
                                d="M111.713 7.087l532.12 394.525L1179.439 7.087z"
                                fill="url(#mailGradient)"
                            />

                            <path
                                d="M148.96 242.419v688.676h989.774V245.877L643.833 586.771z"
                                fill="#e7e4d7"
                            />

                            <path
                                d="M148.96 931.095l494.873-344.324-2.24-1.586L148.96 923.527z"
                                fill="#b8b7ae"
                            />

                            <path
                                d="M1138.734 245.877l.283 685.218-495.184-344.324z"
                                fill="#b7b6ad"
                            />

                            <path
                                d="M1284.066 142.044l.17 684.51c-2.494 76.082-35.461 103.238-145.219 104.514l-.283-685.219 145.36-103.833z"
                                fill="#b2392f"
                            />

                            <path
                                d="M111.713 7.087l532.12 394.525L1179.439 7.087z"
                                fill="#f7f5ed"
                            />
                        </svg>                            
                        </a>
                    </div>
                </div>
            </div>

            <div className="col-span-2 p-4 pb-12 pr-10">
                <img src="/images/Hero.png" alt="Hero_Image" />
            </div>
            </div>
        </div>
    )    
}