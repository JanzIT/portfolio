import { Briefcase, Code, User } from "lucide-react";
import { cn } from "../lib/utils";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative ">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary">me</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Passionate Web Developer & Backend Enthusiast
            </h3>

            <p className="text-muted-foreground">
              I'm a fullstack developer with a strong focus on backend
              development and system design. My experience includes building
              real-world applications using Node.js, MongoDB, and React, always
              with an eye on performance, scalability, and clean code
              architecture.
            </p>

            <p className="text-muted-foreground">
              Currently studying Software Engineering, I thrive on solving
              complex problems, writing maintainable code, and collaborating
              with teams that value technical growth and product impact. I'm
              looking to join a team where I can keep evolving and contribute to
              meaningful solutions.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                Get In Touch
              </a>
              <a
                href="/path-to-your-cv.pdf"
                download
                className={cn(
                  "px-6 py-2 rounded-full border border-primary",
                  "text-primary hover:bg-primary/10 transition-colors duration-300"
                )}
              >
                Download CV
              </a>
            </div>
          </div>

          <div className=" grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className=" text-left">
                  <h4 className="font-semibold text-lg">Web Development</h4>
                  <p className="text-muted-foreground">
                    Creating Responsive Websites and web applications with
                    modern frameworks
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <div className=" text-left">
                  <h4 className="font-semibold text-lg">Problem Solving</h4>
                  <p className="text-muted-foreground">
                    Building efficient, scalable solutions to real-world
                    problems through clean and maintainable code.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>
                <div className=" text-left">
                  <h4 className="font-semibold text-lg">Team-Ready Mindset</h4>
                  <p className="text-muted-foreground">
                    Communicating clearly and adapting quickly in collaborative
                    environments to deliver clean, efficient code.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
