import { Smartphone, Brain, Video, Briefcase, Palette, BarChart3 } from "lucide-react";
import canvaIcon from "../assets/canva icon.png";
import metaBusinessIcon from "../assets/meta business icon.png";
import notionIcon from "../assets/notion icon.png";
import capcutIcon from "../assets/capcut icon.png";
import metricoolIcon from "../assets/metricool icon.png";
import chatgptIcon from "../assets/chatgpt icon.png";
import asanaIcon from "../assets/Asana logo.png";
import brevoIcon from "../assets/brevo logo.png";
import googleAnalyticsIcon from "../assets/google analytics icon.png";

const Skills = () => {
  const skills = [
    {
      icon: Smartphone,
      title: "📱 Social Media Strategy & Management",
      description: "Platform-specific growth strategies (Instagram, TikTok, LinkedIn, Facebook, Pinterest, Benable). Content planning, creation, and scheduling. Audience engagement + community building. Analytics, insights, and performance tracking.",
      color: "from-pink-400 to-pink-600"
    },
    {
      icon: Brain,
      title: "🧠 Marketing & Brand Strategy",
      description: "Brand voice + messaging development. Campaign planning + execution. Email marketing (newsletters). Trend research + competitor analysis.",
      color: "from-purple-400 to-pink-500"
    },
    {
      icon: Video,
      title: "🎥 Content Creation & Copywriting",
      description: "Scroll-stopping captions, blogs, and service product descriptions. Reels, TikToks, and short-form video scripting. Visual content curation (Canva). SEO-friendly writing that connects and converts.",
      color: "from-pink-500 to-red-500"
    },
    {
      icon: Briefcase,
      title: "💼 Virtual Assistant Support",
      description: "Inbox + calendar management. Travel itinerary planning. File + task management systems (Notion, Slack). Client communication + admin support.",
      color: "from-gray-600 to-gray-800"
    }
  ];

  const tools = [
    { name: "Canva", icon: canvaIcon },
    { name: "Meta Business", icon: metaBusinessIcon },
    { name: "Notion", icon: notionIcon },
    { name: "CapCut", icon: capcutIcon },
    { name: "Metricool", icon: metricoolIcon },
    { name: "AI Tools", icon: chatgptIcon },
    { name: "Asana", icon: asanaIcon },
    { name: "Brevo", icon: brevoIcon },
    { name: "Google Analytics", icon: googleAnalyticsIcon }
  ];

  return (
    <section id="skills" className="py-20 bg-black">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Skills & Expertise</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-pink-500 to-pink-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            A comprehensive toolkit for building exceptional digital experiences
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {skills.map((skill, index) => (
            <div
              key={skill.title}
              className="group p-6 bg-gray-900 rounded-xl hover:bg-gray-800 transition-all duration-300 transform hover:scale-105 border border-gray-700 hover:border-pink-500/50"
            >
              <div className={`w-14 h-14 rounded-lg bg-gradient-to-r ${skill.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <skill.icon className="text-white" size={24} />
              </div>
              
              <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-pink-400 transition-colors">
                {skill.title}
              </h3>
              
              <p className="text-gray-400 group-hover:text-gray-300 transition-colors leading-relaxed">
                {skill.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <h3 className="text-2xl font-bold text-white mb-8">🛠️ Tools I Use</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-6">
            {tools.map((tool, index) => (
              <div
                key={tool.name}
                className="flex flex-col items-center p-4 bg-gray-900 rounded-lg hover:bg-gray-800 transition-all duration-300 transform hover:scale-105 border border-gray-700 hover:border-pink-500/50"
              >
                <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-pink-500 to-pink-600 flex items-center justify-center mb-2">
                  <img src={tool.icon} alt={tool.name} className="w-8 h-8 object-contain" />
                </div>
                <span className="text-sm text-gray-300 text-center font-medium">{tool.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
