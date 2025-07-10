const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      icon: "⚛️",
      skills: ["React", "JavaScript (ES6+)","Python", "HTML5", "CSS3", "Context API", "Hooks"],
      color: "from-blue-500 to-cyan-500",
    },
    {
      title: "Backend",
      icon: "🚀",
      skills: [
        "Node.js",
        "Express.js",
        "RESTful APIs",
        "JWT Authentication",
        "Middleware",
        "Django"
      ],
      color: "from-green-500 to-emerald-500",
    },
    {
      title: "Database",
      icon: "🗄️",
      skills: [
        "MongoDB",
        "Mongoose ODM",
        "Database Design",
        "Aggregation",
        "Indexing",
      ],
      color: "from-yellow-500 to-orange-500",
    },
    {
      title: "Tools & DevOps",
      icon: "🛠️",
      skills: ["Git & GitHub", "npm/yarn/pnpm", "Heroku/Render/Vercel", "Postman","Agentic Ai"],
      color: "from-purple-500 to-pink-500",
    },
  ]

  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-900 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-20 h-20 bg-blue-300 rounded-full animate-bounce"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-purple-300 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-pink-300 rounded-full animate-ping delay-2000"></div>
        <div className="absolute bottom-40 right-10 w-24 h-24 bg-green-300 rounded-full animate-spin delay-3000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 animate-in slide-in-from-bottom duration-1000">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            MERN Stack{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Skills</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
            Comprehensive expertise in MongoDB, Express.js, React,Node.js ,Python and Django
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="group bg-gray-50 dark:bg-gray-800 rounded-2xl p-6 hover:shadow-xl relative overflow-hidden transition-all duration-300 hover:scale-105 animate-in zoom-in duration-700"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              {/* Gradient overlay on hover */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
              ></div>

              <div className="relative z-10">
                {/* Category header */}
                <div className="text-center mb-6">
                  <div className="text-4xl mb-3 transform group-hover:scale-110 transition-transform duration-300 animate-bounce">
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white group-hover:text-gray-800 dark:group-hover:text-gray-100 transition-colors duration-300">
                    {category.title}
                  </h3>
                </div>

                {/* Skills list */}
                <div className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <div
                      key={skillIndex}
                      className="bg-white dark:bg-gray-700 px-4 py-3 rounded-xl text-sm text-center font-medium text-gray-700 dark:text-gray-300 shadow-sm hover:shadow-md transition-all duration-300 transform hover:scale-105 animate-in slide-in-from-bottom duration-500"
                      style={{ animationDelay: `${500 + index * 200 + skillIndex * 50}ms` }}
                    >
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional skills showcase */}
        <div className="mt-16 text-center animate-in slide-in-from-bottom duration-1000 delay-1000">
          <div className="inline-flex items-center space-x-4 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 px-8 py-4 rounded-full">
            <span className="text-gray-600 dark:text-gray-400 font-medium">Also experienced with:</span>
            <div className="flex space-x-3">
              {["Flask","C", "Socket.io"].map((tech, index) => (
                <span
                  key={index}
                  className="bg-white dark:bg-gray-700 px-3 py-1 rounded-full text-xs font-medium text-gray-700 dark:text-gray-300 shadow-sm animate-in zoom-in duration-300"
                  style={{ animationDelay: `${1200 + index * 100}ms` }}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
