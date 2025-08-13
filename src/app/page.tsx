import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <div>

       <div className="mt-40 w-200 h-140 pt-10 mx-auto  text-black rounded-3xl bg-stone-100">
          <img className="rounded-2xl mx-auto" src="/sarah.jpg" width={200} height={20}/>
          <p className="mt-4 text-center font-bold text-4xl">Hi I'm Sarah!</p>
          <p className="text-center text-xl font-extrabold mt-4" >I am a Computer Science Student at the University of Maryland, College Park. <br/> I am a passionate student who is eager to learn and interested in the fields of: Full Stack Web - Development, Machine Learning, and Data Science  </p>   
        </div>
        </div>  
        
        <div className="mt-25 text-center font-bold text-4xl">PROJECTS</div>
        <div className="mt-25 grid grid-cols-2">
            <div className="mx-auto w-80 h-80 lg:w-120 lg:h-100 rounded-3xl bg-stone-100">
            <div className="text-black text-center font-bold text-xl px-10 pt-10">Developing a time sheet simulator which uses the tree data structure to store employees with their timesheet information  </div>
            <div className="text-black  font-extrabold px-10 pt-10">Developed using: Java, Threads </div>
            </div>

            <div className="mx-auto w-80 h-80 lg:w-120 lg:h-100 rounded-3xl bg-stone-100">
             <div className="text-black text-center font-bold text-xl px-10 pt-10">Developing a salary predictor  </div>
              <div className="text-black  font-extrabold px-10 pt-10">Developed using: Python, Pandas ... </div>
            </div>
        </div>

        <Link href="https://github.com/sarahzac734/church-website" >
        <div className="mt-25 mx-auto w-100 h-80 lg:w-290 lg:h-100 rounded-3xl bg-stone-100" >
              <div className="text-black text-center font-bold lg:text-2xl pt-10 lg:px-50 lg:pt-30">Developing a full-stack website for St. John the Baptist Knanaya Church of Greater Washington. Provides current and future church members information about church services, events, and location.  </div>
              <div className="text-black lg:text-xl font-extrabold pt-5 px-10 lg:px-50 lg:pt-10">Developed using: ReactJS, Next.js, React Email and Resend, AOS, Embla Carousel, Yup Validation, Tailwind CSS, MongoDB </div>
        </div>
        </Link>

    </div>
  );
}
