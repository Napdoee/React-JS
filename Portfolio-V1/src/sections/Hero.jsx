import { motion } from "framer-motion"

const Hero = () => {
 return (
    <section id="home" className="relative pt-36 pb-16 grid items-center bg-tertiary">
        <div className="container">
            <div className="flex flex-wrap">
                <motion.div className="w-full self-end px-4 lg:w-1/2"
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6 }}
                    viewport={{once: true}}>
                    <div className="relative mb-10 lg:mt-9 lg:right-0">
                        <img width="300px" src="./img/undraw_freelancer_re_irh4.svg" alt="Ilustration"
                            className="relative z-[15] mx-auto max-w-full" />
                        <span className="absolute -bottom-40 left-1/2 -translate-x-1/2 md:scale-125 z-[14]">
                            <svg width="400" height="500" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                                <path fill="#3b82f6"
                                    d="M51.7,-39.1C57.7,-19.5,46.8,0.6,35.4,15.7C24,30.7,12,40.7,-4.5,43.4C-21.1,46,-42.1,41.2,-53.7,26.1C-65.3,11,-67.3,-14.6,-56.8,-36.8C-46.3,-59,-23.1,-77.9,-0.1,-77.8C22.9,-77.7,45.7,-58.6,51.7,-39.1Z"
                                    transform="translate(100 100) scale(1.1)" />
                            </svg>
                        </span>
                    </div>
                </motion.div>
                <div className="w-full self-center px-4 lg:w-1/2 z-[15]">
                    <h1 className="text-base font-semibold text-primary md:text-xl lg:text-2xl">Halo Perkenalkan, <span
                            className="block font-semibold text-white text-4xl mt-1 lg:text-5xl mb-2 dark:text-white"><span
                                className="text-blue-300">Hi</span>dayat</span></h1>
                    <h2 className="font-medium text-neutral-200 text-lg mb-5 lg:text-2xl dark:text-white">Web Developer</h2>
                    <p className="font-medium text-neutral-300 mb-10 leading-relaxed"></p>
                    <div className="flex flex-wrap gap-3">
                        <a href="#contact"
                            className="box-content text-base font-semibold text-white bg-primary py-3 px-8 rounded-md">Hubungi
                            Saya</a>
                        <a href="#about"
                            className="box-content text-base font-semibold py-3 px-8 rounded-md bg-transparent border border-primary text-primary hover:text-white hover:bg-primary hover:border-none transition duration-300 ease-in-out">Tentang
                            Saya</a>
                    </div>
                </div>
            </div>
        </div>
        <span className="absolute left-0 top-[100%] lg:top-[85%] w-full z-10">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" preserveAspectRatio="xMidYMin meet">
                <path fill="#1e293b" fillOpacity="1"
                    d="M0,192L40,197.3C80,203,160,213,240,213.3C320,213,400,203,480,186.7C560,171,640,149,720,149.3C800,149,880,171,960,176C1040,181,1120,171,1200,165.3C1280,160,1360,160,1400,160L1440,160L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z">
                </path>
            </svg>
        </span>
    </section>
 )
}

export default Hero;