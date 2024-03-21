import { Link } from "react-router-dom";

const Page = () => (
  <>
    <div className="hero justify-items-start min-h-screen bg-base-100 bg-[url('/bg.png')] bg-bottom">
        <div className="container mx-auto">
          <div className="w-full px-8"> 
            <h2 className="text-primary text-2xl md:text-4xl font-semibold mb-3">
              Hello World! i am,
            </h2>
            <h1 className="text-2xl md:text-4xl lg:text-6xl font-bold mb-3"><span className="text-slate-300">Hi</span>dayat Sula Idris!</h1>
            <h2 className="text-lg md:text-2xl lg:text-4xl font-semibold mb-7">as <span className="text-accent">Web Programmer</span></h2>
            <Link className="btn btn-primary" to="/about">
              Let's get know more!
            </Link>
          </div>
        </div>
    </div>
    <div className="py-24 min-h-screen bg-base-200">
        <div className="container mx-auto">
          <div className="w-full px-8"> 
            <h1 className="text-primary text-lg md:text-3xl font-bold mb-3 uppercase">About Me</h1>
          </div>
        </div>
    </div>
  </>
);

export default Page;