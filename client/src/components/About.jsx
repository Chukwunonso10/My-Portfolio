import { Code, Coffee, Lightbulb, Users, Award, Zap } from "lucide-react"

const About = () => {
  const highlights = [
    {
      icon: Code,
      title: "MERN Stack Expert",
      description: "Specialized in MongoDB, Express.js, React, and Node.js development",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Lightbulb,
      title: "Problem Solving",
      description: "Creative solutions to complex technical challenges",
      color: "from-yellow-500 to-orange-500",
    },
    {
      icon: Users,
      title: "Team Collaboration",
      description: "Effective communication and teamwork in agile environments",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: Coffee,
      title: "Continuous Learning",
      description: "Always exploring new technologies and best practices",
      color: "from-purple-500 to-pink-500",
    },
  ]

  const stats = [
    { number: "2+", label: "Years Experience", icon: Award },
    { number: "10+", label: "Projects Completed", icon: Code },
    { number: "100%", label: "Client Satisfaction", icon: Zap },
  ]

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5">
        <div className="absolute top-20 left-10 w-32 h-32 border border-blue-300 rounded-full animate-spin"></div>
        <div className="absolute bottom-20 right-10 w-24 h-24 border border-purple-300 rounded-full animate-ping"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 border border-pink-300 rounded-full animate-pulse"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 animate-in slide-in-from-bottom duration-1000">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Me</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
            Passionate MERN stack developer with 2+ years of experience building scalable web applications
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-700 p-6 rounded-2xl shadow-lg hover:shadow-xl text-center transition-all duration-300 hover:scale-105 animate-in zoom-in duration-700"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <stat.icon className="w-8 h-8 text-blue-600 dark:text-blue-400 mx-auto mb-4" />
              <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">{stat.number}</div>
              <div className="text-gray-600 dark:text-gray-400 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="animate-in slide-in-from-left duration-1000 delay-300">
            <h3 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-white">My Journey</h3>
            <div className="space-y-6 text-gray-600 dark:text-gray-400">
              <p className="leading-relaxed">
                I'm a passionate full-stack MERN developer with over 2 years of experience creating digital solutions
                that make a difference. My journey began with a curiosity about how web applications work, which led me
                to master the MERN stack.
              </p>
              <p className="leading-relaxed">
                I specialize in building scalable applications using{" "}
                <span className="font-semibold text-green-600 dark:text-green-400">MongoDB</span> for data persistence,{" "}
                <span className="font-semibold text-yellow-600 dark:text-yellow-400">Express.js</span> for robust APIs,{" "}
                <span className="font-semibold text-blue-600 dark:text-blue-400">React</span> for dynamic user
                interfaces, and <span className="font-semibold text-green-600 dark:text-green-400">Node.js</span> for
                server-side logic.
              </p>
              <p className="leading-relaxed">
                When I'm not coding, you can find me contributing to open-source projects, writing technical articles
                about MERN development, or exploring new JavaScript frameworks and libraries.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 animate-in slide-in-from-right duration-1000 delay-500">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="group bg-white dark:bg-gray-700 p-6 rounded-2xl shadow-lg hover:shadow-xl text-center relative overflow-hidden transition-all duration-300 hover:scale-105 animate-in zoom-in duration-700"
                style={{ animationDelay: `${700 + index * 150}ms` }}
              >
                {/* Gradient background on hover */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                ></div>

                <div className="relative z-10">
                  <div
                    className={`w-12 h-12 bg-gradient-to-br ${item.color} rounded-xl flex items-center justify-center mx-auto mb-4 transform group-hover:scale-110 transition-transform duration-300`}
                  >
                    <item.icon className="h-6 w-6 text-white" />
                  </div>
                  <h4 className="font-semibold mb-3 text-gray-900 dark:text-white group-hover:text-gray-800 dark:group-hover:text-gray-100 transition-colors duration-300">
                    {item.title}
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
