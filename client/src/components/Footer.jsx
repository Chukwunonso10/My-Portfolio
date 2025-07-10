import { Github, Linkedin, Twitter, Heart, Code, Coffee } from "lucide-react"

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com/Chukwunonso10",
      label: "GitHub",
      color: "hover:text-gray-800 dark:hover:text-gray-200",
    },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/kuzue-chukwunonso/",
      label: "LinkedIn",
      color: "hover:text-blue-600 dark:hover:text-blue-400",
    },
    {
      icon: Twitter,
      href: "https://x.com/kuzue_chinonso",
      label: "Twitter",
      color: "hover:text-blue-400 dark:hover:text-blue-300",
    },
  ]

  const quickLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ]

  const services = [
    "Full-Stack Web Development",
    "React Frontend Development",
    "Node.js Backend APIs",
    "MongoDB Database Design",
  ]

  return (
    <footer className="bg-gray-900 text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-32 h-32 border border-blue-400 rounded-full animate-spin"></div>
        <div className="absolute bottom-10 right-10 w-24 h-24 border border-purple-400 rounded-full animate-pulse"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 border border-pink-400 rounded-full animate-ping"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand section */}
          <div className="animate-in slide-in-from-bottom duration-1000">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center">
                <Code className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Chukwunonso Kuzue
              </h3>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              MERN stack developer passionate about creating exceptional digital experiences with MongoDB, Express.js,
              React, and Node.js.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className={`text-gray-400 ${social.color} transition-all duration-300 transform hover:scale-125 hover:-translate-y-1 p-2 rounded-lg hover:bg-white/10 animate-in zoom-in duration-500`}
                  style={{ animationDelay: `${index * 100}ms` }}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="animate-in slide-in-from-bottom duration-1000 delay-300">
            <h3 className="text-lg font-semibold mb-6 text-white">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-all duration-300 hover:translate-x-2 inline-block relative group animate-in slide-in-from-left duration-500"
                    style={{ animationDelay: `${600 + index * 100}ms` }}
                  >
                    {link.name}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 transition-all duration-300 group-hover:w-full"></span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="animate-in slide-in-from-bottom duration-1000 delay-500">
            <h3 className="text-lg font-semibold mb-6 text-white">MERN Services</h3>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li
                  key={index}
                  className="text-gray-400 flex items-center space-x-2 animate-in slide-in-from-right duration-500"
                  style={{ animationDelay: `${800 + index * 100}ms` }}
                >
                  <div className="w-1.5 h-1.5 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"></div>
                  <span>{service}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom section */}
        <div className="border-t border-gray-800 pt-8 animate-in slide-in-from-bottom duration-1000 delay-1000">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 flex items-center space-x-2">
              <span>Chukwunonso PLP Intern</span>
              <Heart className="h-4 w-4 text-red-500 animate-pulse" />
              <span>3MTT Support Fellow</span>
              <Coffee className="h-4 w-4 text-yellow-600" />
              <span>© {currentYear}</span>
            </p>
            <div className="flex items-center space-x-4 text-sm text-gray-500">
              <span>Favourite Quote: Learn, Relearn and Unlearn</span>
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span>Always learning</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
