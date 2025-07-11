import { Github, Linkedin, Twitter, ArrowDown, Code, Sparkles } from "lucide-react"

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16 relative overflow-hidden ">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-blue-900/20 dark:to-purple-900/20">
        <div className="absolute top-10 left-10 w-72 h-72 bg-blue-300/30 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-purple-300/30 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300/30 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-2000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="mb-8 animate-in zoom-in duration-1000">
          <div className="relative w-32 h-32 mx-auto mb-6">
            <div className="w-full h-full rounded-full bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 flex items-center justify-center text-4xl font-bold text-white shadow-2xl hover:scale-105 transition-transform duration-300">
              JUDE
            </div>
            <div className="absolute -top-2 -right-2 w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center animate-bounce">
              <Sparkles className="w-4 h-4 text-yellow-800" />
            </div>
          </div>
        </div>

        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-6 text-gray-900 dark:text-white animate-in slide-in-from-bottom duration-1000 delay-300">
          Hi, I'm{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 animate-pulse">
            kuzue Chukwunonso Jude
          </span>
        </h1>

        <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed animate-in slide-in-from-bottom duration-1000 delay-500">
          Full-Stack <span className="font-semibold text-blue-600 dark:text-blue-400">MERN</span> Developer passionate
          about creating exceptional digital experiences with{" "}
          <span className="font-semibold text-green-600 dark:text-green-400">MongoDB</span>,{" "}
          <span className="font-semibold text-yellow-600 dark:text-yellow-400">Express.js</span>,{" "}
          <span className="font-semibold text-blue-600 dark:text-blue-400">React</span>, and{" "}
          <span className="font-semibold text-green-600 dark:text-green-400">Node.js</span>.{" "}
          <span className="font-semibold text-green-600 dark:text-green-400">Python</span>.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-in slide-in-from-bottom duration-1000 delay-700">
          <a
            href="#projects"
            className="group bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full hover:from-blue-700 hover:to-purple-700 transition-all duration-300 font-medium shadow-lg hover:shadow-xl transform hover:scale-105 flex items-center space-x-2"
          >
            <Code className="w-5 h-5" />
            <span>View My Work</span>
          </a>
          <a
            href="#contact"
            className="group border-2 border-blue-600 text-blue-600 dark:text-blue-400 px-8 py-4 rounded-full hover:bg-blue-600 hover:text-white dark:hover:bg-blue-600 dark:hover:text-white transition-all duration-300 font-medium shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            Get In Touch
          </a>
        </div>

        <div className="flex justify-center space-x-8 mb-12 animate-in slide-in-from-bottom duration-1000 delay-1000">
          {[
            { icon: Github, href: "https://github.com", color: "hover:text-gray-800 dark:hover:text-gray-200" },
            { icon: Linkedin, href: "https://linkedin.com", color: "hover:text-blue-600 dark:hover:text-blue-400" },
            { icon: Twitter, href: "https://twitter.com", color: "hover:text-blue-400 dark:hover:text-blue-300" },
          ].map((social, index) => (
            <a
              key={index}
              href={social.href}
              className={`text-gray-600 dark:text-gray-400 ${social.color} transition-all duration-300 transform hover:scale-125 hover:-translate-y-1 animate-in zoom-in duration-500`}
              style={{ animationDelay: `${1200 + index * 100}ms` }}
              target="_blank"
              rel="noopener noreferrer"
            >
              <social.icon className="h-7 w-7" />
            </a>
          ))}
        </div>

        <div className="animate-bounce animate-in fade-in duration-1000 delay-1500">
          <a
            href="#about"
            className="inline-block p-2 rounded-full hover:bg-white/20 dark:hover:bg-black/20 transition-all duration-300"
          >
            <ArrowDown className="h-6 w-6 mx-auto text-gray-600 dark:text-gray-400" />
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero
