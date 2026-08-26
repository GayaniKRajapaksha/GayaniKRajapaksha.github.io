import ProjectCard from './components/ProjectCard';

export default function Home() {
  return (
    <main
      id="home"
      className="min-h-screen hero-gradient text-white selection:bg-purple-500 pb-16"
    >
      {/* Hero */}
      <section className="max-w-5xl mx-auto px-6 pt-10 md:pt-16 flex flex-col md:flex-row gap-12 items-center">
        <div className="flex-[1.3]">
          <p className="uppercase tracking-[0.25em] text-xs accent-gradient mb-4 font-semibold">
            Software Engineering Graduate
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-4">
            Hi, I'm{" "}
            <span className="gradient-text glow-text">Kaushalya Rajapaksha</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-6">
            BSc (Hons) Software Engineering graduate from Cardiff Metropolitan
            University (UK) and Software Engineering Intern at Sri Lanka
            Customs Headquarters – passionate about building secure, user‑centric
            web applications.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="#projects"
              className="button-gradient text-black px-8 py-3 rounded-full font-medium transition-all duration-300 hover:scale-105"
            >              
              View Projects
            </a>
            <a
              href="#contact"
              className="border-2 border-purple-500/50 px-8 py-3 rounded-full font-medium hover:bg-purple-500/10 hover:border-purple-400 transition-all duration-300 hover:scale-105"
            >
              Contact Me
            </a>
          </div>
        </div>
        <div className="flex-1 max-w-xs md:max-w-sm w-full card-gradient rounded-3xl p-6 glow-border float-animation">
          <h2 className="text-lg font-semibold mb-2 gradient-text">Personal Details</h2>
          <p className="text-sm text-gray-300">
            Based in Sri Lanka. Open to full‑time roles and internships in
            software engineering and web development.
          </p>
          <div className="mt-4 space-y-1 text-sm text-gray-300">
            <p>
              <span className="font-semibold text-purple-300">Phone:</span>{" "}
              071 798 6012
            </p>
            <p>
              <span className="font-semibold text-purple-300">Email:</span>{" "}
              <a
                href="mailto:gayani.rajapaksha6@gmail.com"
                className="accent-gradient hover:text-yellow-300 transition-colors"
              >
                gayani.rajapaksha6@gmail.com
              </a>
            </p>
            <p>
              <span className="font-semibold text-purple-300">LinkedIn:</span>{" "}
              <a
                href="https://www.linkedin.com/in/gayanirajapaksha"
                target="_blank"
                className="accent-gradient hover:text-yellow-300 transition-colors"
              >
                /in/gayanirajapaksha
              </a>
            </p>
            <p>
              <span className="font-semibold text-purple-300">GitHub:</span>{" "}
              <a
                href="https://github.com/GayaniKRajapaksha"
                target="_blank"
                className="accent-gradient hover:text-yellow-300 transition-colors"
              >
                @GayaniKRajapaksha
              </a>
            </p>
          </div>
        </div>
        {/* Profile photo */}
        <div className="flex-[1] flex justify-center">
          {/* Replace /profile.jpg with your actual image file in /public */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/profile.jpeg"
            alt="Portrait of Kaushalya Rajapaksha"
            className="h-72 w-56 md:h-80 md:w-64 rounded-3xl object-cover border-2 border-purple-500/50 shadow-[0_20px_60px_rgba(102,126,234,0.3)] pulse-glow bg-gray-900"
          />
        </div>
      </section>

      {/* Skills & Education */}
      <section
        id="skills"
        className="max-w-5xl mx-auto px-6 py-10 grid md:grid-cols-[1.1fr,1fr] gap-10"
      >
        <div>
          <h2 className="text-2xl font-bold mb-4 gradient-text">Technical Skills</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-gray-200">
            <div className="rounded-2xl border border-purple-500/30 p-4 card-gradient hover:border-purple-400/50 transition-all duration-300 hover:scale-105">
              <p className="font-semibold mb-1 text-purple-300">
                Programming Languages
              </p>
              <p>HTML, CSS, JavaScript, PHP, Python</p>
            </div>
            <div className="rounded-2xl border border-purple-500/30 p-4 card-gradient hover:border-purple-400/50 transition-all duration-300 hover:scale-105">
              <p className="font-semibold mb-1 text-purple-300">IDEs</p>
              <p>Visual Studio, Android Studio, NetBeans</p>
            </div>
            <div className="rounded-2xl border border-purple-500/30 p-4 card-gradient hover:border-purple-400/50 transition-all duration-300 hover:scale-105">
              <p className="font-semibold mb-1 text-purple-300">Database</p>
              <p>MySQL</p>
            </div>
            <div className="rounded-2xl border border-purple-500/30 p-4 card-gradient hover:border-purple-400/50 transition-all duration-300 hover:scale-105">
              <p className="font-semibold mb-1 text-purple-300">
                Version Control
              </p>
              <p>Git</p>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-4 gradient-text">Education</h2>
          <div className="space-y-4 text-sm text-gray-200">
            <div className="border-l-2 border-purple-500 pl-4 hover:border-purple-400 transition-colors">
              <p className="font-semibold text-purple-300">
                BSc (Hons) in Software Engineering – 2025
              </p>
              <p>Cardiff Metropolitan University, UK / ICBT Campus, Sri Lanka</p>
              <p className="text-gray-400">Degree Class: Second Class Upper </p>
            </div>
            <div className="border-l-2 border-purple-500 pl-4 hover:border-purple-400 transition-colors">
              <p className="font-semibold text-purple-300">
                Higher Diploma in Computing and Software Engineering – 2022
              </p>
              <p>Cardiff Metropolitan University, UK / ICBT Campus</p>
            </div>
            <div className="border-l-2 border-purple-500 pl-4 hover:border-purple-400 transition-colors">
              <p className="font-semibold text-purple-300">
                G.C.E. A/L (Maths Stream) – 2017
              </p>
              <p>Ke/Dehiowita National School</p>
            </div>
            <div className="border-l-2 border-purple-500 pl-4 hover:border-purple-400 transition-colors">
              <p className="font-semibold text-purple-300">
                G.C.E. O/L – 2012
              </p>
              <p>Ke/Dehiowita National School</p>
            </div>
          </div>
        </div>
      </section>

      {/* Experience */}
      <section
        id="experience"
        className="max-w-5xl mx-auto px-6 py-10 border-y border-purple-500/20 section-gradient"
      >
        <h2 className="text-2xl font-bold mb-4 gradient-text">Work Experience</h2>
        <div className="space-y-4 text-sm text-gray-200">
          <div className="rounded-2xl border border-purple-500/30 p-5 card-gradient hover:border-purple-400/50 transition-all duration-300 hover:scale-105">
            <div className="flex flex-wrap justify-between gap-2 mb-2">
              <p className="font-semibold text-purple-300">
                Software Engineering Intern
              </p>
              <p className="text-gray-400">Jan 2026 – Present</p>
            </div>
            <p className="text-gray-300 mb-2">
              Sri Lanka Customs Headquarters – Colombo
            </p>
            <ul className="list-disc list-inside space-y-1 text-gray-300">
              <li>
                Independently designed and implemented a full‑stack Customs
                Employee Management System to digitalize attendance and
                personnel record‑keeping.
              </li>
              <li>
                Developed the system architecture and full‑stack components
                using HTML, CSS, and JavaScript for a secure, responsive
                internal interface.
              </li>
              <li>
                Built role‑based authentication and centralized MySQL relational
                database to securely manage employee profiles, leave, and other
                operational data.
              </li>
              <li>
                Created intuitive UIs for administrative CRUD operations and
                streamlined daily workflows for HR and management staff.
              </li>
              <li>
                Provided ongoing technical support and maintenance to improve
                overall administrative efficiency.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section
        id="projects"
        className="max-w-5xl mx-auto px-6 py-12 space-y-6"
      >
        <div className="flex items-baseline justify-between gap-4">
          <h2 className="text-2xl font-bold gradient-text">Projects</h2>
          <p className="text-xs uppercase tracking-[0.2em] accent-gradient font-semibold">
            Academic & Personal
          </p>
        </div>
        
        {/* Filter Buttons */}
        <div className="flex flex-wrap gap-2 mb-8">
          <button className="px-4 py-2 rounded-full bg-purple-500/20 text-purple-300 hover:bg-purple-500/30 transition-all duration-300 text-sm font-medium">
            All
          </button>
          <button className="px-4 py-2 rounded-full border border-purple-500/30 text-purple-300 hover:bg-purple-500/10 transition-all duration-300 text-sm">
            Web Development
          </button>
          <button className="px-4 py-2 rounded-full border border-purple-500/30 text-purple-300 hover:bg-purple-500/10 transition-all duration-300 text-sm">
            AI/ML
          </button>
          <button className="px-4 py-2 rounded-full border border-purple-500/30 text-purple-300 hover:bg-purple-500/10 transition-all duration-300 text-sm">
            Education
          </button>
          <button className="px-4 py-2 rounded-full border border-purple-500/30 text-purple-300 hover:bg-purple-500/10 transition-all duration-300 text-sm">
            Open Source
          </button>
        </div>
        
        <div className="grid gap-6 md:grid-cols-2">
          <ProjectCard
            title="Student Learning Management System"
            description="Web application that identifies students&apos; weak subjects and allows teachers to re‑teach through targeted assignments."
            imageSrc="/images/student-learning-management.jpg"
            imageAlt="Student Learning Management System"
            technologies="PHP, CSS, JavaScript, HTML"
            githubUrl="https://github.com/GayaniKRajapaksha/Student-Learning-Management-System"
            downloadUrl="https://github.com/GayaniKRajapaksha/Student-Learning-Management-System/archive/refs/heads/main.zip"
          />

          <ProjectCard
            title="Debra Event Management Web Application"
            description="Event platform with partner registration, event creation, ticket configuration, and online ticket sales with real‑time tracking."
            imageSrc="/images/debra-event-management.png"
            imageAlt="Debra Event Management Web Application"
            technologies="PHP, REST APIs, HTML, CSS, JavaScript"
            githubUrl="https://github.com/GayaniKRajapaksha/Debra-Event-Management-System"
            downloadUrl="https://github.com/GayaniKRajapaksha/Debra-Event-Management-System/archive/refs/heads/main.zip"
          />

          <ProjectCard
            title="Cineplex Movie Theater Website"
            description="Database‑driven cinema web system with movie listings, showtimes, search, online ticket booking, and role‑based access."
            imageSrc="/images/cineplex-movie-theater.jpg"
            imageAlt="Cineplex Movie Theater Website"
            technologies="PHP, HTML, CSS, Bootstrap, JavaScript"
            githubUrl="https://github.com/GayaniKRajapaksha/Cineplex-Movie-Theatre-Website"
            downloadUrl="https://github.com/GayaniKRajapaksha/Cineplex-Movie-Theatre-Website/archive/refs/heads/main.zip"
          />

          <ProjectCard
            title="Smart Meal Planner Based on Body Condition and Budget"
            description="Final year project – web‑based application that generates personalized meal plans using BMI, medical conditions, and budget with AI‑based recommendations."
            imageSrc="/images/smart-meal-planner.jpg"
            imageAlt="Smart Meal Planner Based on Body Condition and Budget"
            technologies="Python, HTML, CSS, JavaScript"
            githubUrl="https://github.com/GayaniKRajapaksha/final-project-fitnomix"
            downloadUrl="https://github.com/GayaniKRajapaksha/final-project-fitnomix/archive/refs/heads/main.zip"
          />
        </div>
      </section>

      {/* Contact */}
      <section
        id="contact"
        className="max-w-5xl mx-auto px-6 py-10 border-t border-purple-500/20"
      >
        <h2 className="text-2xl font-bold mb-4 gradient-text">Contact</h2>
        <p className="text-sm text-gray-300 mb-4 max-w-2xl">
          If you&apos;d like to discuss a role, collaboration, or project,
          feel free to reach out. I&apos;m especially interested in
          opportunities in web development, backend engineering, and full‑stack
          roles.
        </p>
        <div className="space-y-2 text-sm text-gray-200">
          <p>
            <span className="font-semibold text-purple-300">Email:</span>{" "}
            <a
              href="mailto:gayanirajapaksha6@gmail.com"
              className="accent-gradient hover:text-yellow-300 transition-colors"
            >
              gayanirajapaksha6@gmail.com
            </a>
          </p>
          <p>
            <span className="font-semibold text-purple-300">Phone:</span> 071 798
            6012
          </p>
          <p>
            <span className="font-semibold text-purple-300">LinkedIn:</span>{" "}
            <a
              href="https://www.linkedin.com/in/gayanirajapaksha"
              target="_blank"
              className="accent-gradient hover:text-yellow-300 transition-colors"
            >
              /in/gayanirajapaksha
            </a>
          </p>
          <p>
            <span className="font-semibold text-purple-300">GitHub:</span>{" "}
            <a
              href="https://github.com/GayaniKRajapaksha"
              target="_blank"
              className="accent-gradient hover:text-yellow-300 transition-colors"
            >
              @GayaniKRajapaksha
            </a>
          </p>
        </div>
      </section>
    </main>
  );
}