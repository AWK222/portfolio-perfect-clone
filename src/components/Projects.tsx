import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Social Media Campaign + Analytics Reporting",
      description: "This project focused on creating and managing a targeted social media campaign designed to boost brand visibility and engagement. From strategy to execution, I handled everything — then backed it up with detailed analytics to measure real impact.",
      image: "/lovable-uploads/9bd00cee-e94e-4260-801f-9c4899a5199e.png",
      details: [
        "Campaign strategy development",
        "Content creation and scheduling",
        "Audience engagement monitoring",
        "Performance tracking and reporting",
        "ROI analysis and optimization"
      ],
      technologies: ["Social Media", "Analytics", "Content Strategy"],
      note: "Some visuals, post insights, and report screenshots are excluded due to portfolio space — but full results included spikes in engagement, follower growth, and increased click-throughs.",
      github: "#",
      live: "https://www.instagram.com/p/DDFYeJMoji_/?img_index=4"
    },
    {
      title: "Business Travel Itinerary for Summit Attendance",
      description: "This itinerary was designed for a busy entrepreneur attending an international summit. The goal? Keep his travel seamless, stress-free, and super organized. The itinerary covered everything from pre-travel prep to post-event wind-down.",
      image: "/lovable-uploads/86f50960-4b13-4c9c-b078-87a95528ce9d.png",
      details: [
        "Flight schedules & airport transfer details",
        "Hotel reservation with check-in/check-out info", 
        "Daily to-do lists including networking goals & downtime",
        "Scheduled summit sessions + meeting times",
        "Local dining spots & essentials close to venue",
        "Emergency contacts & quick links for docs"
      ],
      technologies: ["Travel Planning", "Organization", "Client Management"],
      note: "Only a snippet of the full itinerary is shown here due to space limits. The complete version includes clickable maps, personalized reminders, and a professional layout designed for on-the-go access.",
      github: "#",
      live: "https://docs.google.com/presentation/d/1XM0f1nvea8fRGtxKfq-f5iyhfDV3ljPyOaQCt3pP4pY/edit?slide=id.p#slide=id.p"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Featured Projects</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-pink-400 to-pink-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            A showcase of my recent work and creative solutions
          </p>
        </div>
        
        <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="group bg-gray-800 rounded-xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300 border border-gray-700 hover:border-pink-400/50"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-pink-400 transition-colors">
                  {index === 0 ? "📊📱" : "💼✈️"} {project.title}
                </h3>
                
                <p className="text-gray-400 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>

                <div className="mb-4">
                  <h4 className="text-pink-400 font-medium mb-2">What's Included:</h4>
                  <ul className="text-gray-400 text-sm space-y-1">
                    {project.details.map((detail, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="text-pink-400 mr-2">•</span>
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-gray-700 text-pink-400 rounded-full text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <p className="text-gray-500 text-xs italic mb-4">
                  Note: {project.note}
                </p>
                
                <div className="flex space-x-4">
                  <a
                    href={project.github}
                    className="flex items-center space-x-2 text-gray-400 hover:text-pink-400 transition-colors"
                  >
                    <Github size={16} />
                    <span className="text-sm">Details</span>
                  </a>
                  <a
                    href={project.live}
                    className="flex items-center space-x-2 text-gray-400 hover:text-pink-400 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink size={16} />
                    <span className="text-sm">View Project</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-gray-400 mb-4">
            Need numbers that tell a story and content that converts, or a sleek, no-stress itinerary for your next business trip?
          </p>
          <p className="text-pink-400 font-medium">
            Let's bring your next project to life — and track what matters.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Projects;
