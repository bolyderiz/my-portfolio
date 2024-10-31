'use client'

import Image from 'next/image'
import { motion, Variants } from 'framer-motion'
import { Github, Instagram, Linkedin } from 'lucide-react'
import Link from 'next/link'

export default function Portfolio() {
  const projects = [
    { id: 1, title: 'AI Research', subtitle: 'Deep Learning Algorithms', image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YWklMjByZXNlYXJjaHxlbnwwfHwwfHx8MA%3D%3D' },
    { id: 2, title: 'Data Analysis', subtitle: 'Big Data Insights', image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZGF0YSUyMGFuYWx5c2lzfGVufDB8fDB8fHww' },
    { id: 3, title: 'Machine Learning', subtitle: 'Predictive Models', image: 'https://images.unsplash.com/photo-1527474305487-b87b222841cc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bWFjaGluZSUyMGxlYXJuaW5nfGVufDB8fDB8fHww' },
    { id: 4, title: 'Deep Learning', subtitle: 'Neural Networks', image: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZGVlcCUyMGxlYXJuaW5nfGVufDB8fDB8fHww' },
    { id: 5, title: 'Computer Vision', subtitle: 'Image Recognition', image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29tcHV0ZXIlMjB2aXNpb258ZW58MHx8MHx8fDA%3D' },
    { id: 6, title: 'NLP', subtitle: 'Language Processing', image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bmF0dXJhbCUyMGxhbmd1YWdlJTIwcHJvY2Vzc2luZ3xlbnwwfHwwfHx8MA%3D%3D' },
  ]

  const floatingAnimation: Variants = {
    initial: { 
      y: 0 
    },
    animate: { 
      y: [-10, 0, -10],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  }

  return (
    <div className="min-h-screen bg-blue-200 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20,
          }}
          className="text-center mb-12"
        >
          <motion.div 
            className="w-48 h-48 mx-auto mb-4 overflow-hidden rounded-full border-4 border-white shadow-lg"
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 300, damping: 10 }}
          >
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_7505(1)-a0ENOGuWqZuEMde5V1IvOPcf7JdbQ1.JPEG"
              alt="Maxime Boly"
              width={192}
              height={192}
              className="object-cover w-full h-full"
            />
          </motion.div>
          <motion.h1
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-4xl font-bold text-gray-900 mb-4 font-serif"
          >
            Maxime Boly
          </motion.h1>
          <div className="flex justify-center space-x-4 mb-4">
            <motion.a
              href="#"
              whileHover={{ scale: 1.2 }}
              className="text-blue-600 hover:text-blue-800"
            >
              <Instagram className="h-6 w-6" />
              <span className="sr-only">Instagram</span>
            </motion.a>
            <motion.a
              href="#"
              whileHover={{ scale: 1.2 }}
              className="text-blue-600 hover:text-blue-800"
            >
              <Linkedin className="h-6 w-6" />
              <span className="sr-only">LinkedIn</span>
            </motion.a>
            <motion.a
              href="#"
              whileHover={{ scale: 1.2 }}
              className="text-blue-600 hover:text-blue-800"
            >
              <Github className="h-6 w-6" />
              <span className="sr-only">GitHub</span>
            </motion.a>
          </div>

          {/* Add Calendly Button */}
          <motion.div 
            className="mb-8"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <motion.a
              href="https://calendly.com/bolymaxime"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block bg-blue-600 text-white px-6 py-2 rounded-full font-medium hover:bg-blue-700 transition-colors shadow-md"
            >
              Schedule a Meeting
            </motion.a>
          </motion.div>

          {/* About Me section with new title format */}
          <div className="relative mb-8">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t-2 border-gray-800"></div>
            </div>
            <div className="relative flex justify-center">
              <span className="bg-blue-200 px-6 py-2">
                <h2 className="text-3xl font-bold text-gray-900 font-serif inline-block">
                  About Me
                </h2>
              </span>
            </div>
          </div>
          <div className="mb-8">
            <p className="text-gray-700">
              After graduating with a degree in Applied Foreign Languages, I decided to turn to AI and Data, fields I'm now passionate about. I enjoy marketing, which I don't hesitate to mix with these two other skills. I am now pursuing a MSc IA/Data at Eugenia School and work as a Communications and Press relations manager at Sia Partners.
            </p>
          </div>

          {/* Skills section with new title format */}
          <div className="relative mb-8">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t-2 border-gray-800"></div>
            </div>
            <div className="relative flex justify-center">
              <span className="bg-blue-200 px-6 py-2">
                <h2 className="text-3xl font-bold text-gray-900 font-serif inline-block">
                  Skills
                </h2>
              </span>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-6 mb-8">
            {/* Development Skills - keep the blue background */}
            <div className="bg-blue-50 rounded-lg p-4 flex-1">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Development Skills</h3>
              <div className="space-y-3">
                <div className="flex items-center">
                  <span className="h-2 w-2 bg-blue-500 rounded-full mr-3"></span>
                  <span className="text-gray-700">HTML, CSS, JavaScript</span>
                </div>
                <div className="flex items-center">
                  <span className="h-2 w-2 bg-blue-500 rounded-full mr-3"></span>
                  <span className="text-gray-700">React, Next.js</span>
                </div>
                <div className="flex items-center">
                  <span className="h-2 w-2 bg-blue-500 rounded-full mr-3"></span>
                  <span className="text-gray-700">Tailwind CSS</span>
                </div>
                <div className="flex items-center">
                  <span className="h-2 w-2 bg-blue-500 rounded-full mr-3"></span>
                  <span className="text-gray-700">Node.js</span>
                </div>
                <div className="flex items-center">
                  <span className="h-2 w-2 bg-blue-500 rounded-full mr-3"></span>
                  <span className="text-gray-700">Git, GitHub</span>
                </div>
              </div>
            </div>

            {/* Professional Skills - keep the blue background */}
            <div className="bg-blue-50 rounded-lg p-4 flex-1">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Professional Skills</h3>
              <div className="space-y-3">
                <div className="flex items-center">
                  <span className="h-2 w-2 bg-blue-500 rounded-full mr-3"></span>
                  <span className="text-gray-700">Project Management</span>
                </div>
                <div className="flex items-center">
                  <span className="h-2 w-2 bg-blue-500 rounded-full mr-3"></span>
                  <span className="text-gray-700">Communication</span>
                </div>
                <div className="flex items-center">
                  <span className="h-2 w-2 bg-blue-500 rounded-full mr-3"></span>
                  <span className="text-gray-700">Problem Solving</span>
                </div>
                <div className="flex items-center">
                  <span className="h-2 w-2 bg-blue-500 rounded-full mr-3"></span>
                  <span className="text-gray-700">Team Collaboration</span>
                </div>
                <div className="flex items-center">
                  <span className="h-2 w-2 bg-blue-500 rounded-full mr-3"></span>
                  <span className="text-gray-700">Adaptability</span>
                </div>
              </div>
            </div>
          </div>

          {/* Experience section with new title format */}
          <div className="relative mb-8">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t-2 border-gray-800"></div>
            </div>
            <div className="relative flex justify-center">
              <span className="bg-blue-200 px-6 py-2">
                <h2 className="text-3xl font-bold text-gray-900 font-serif inline-block">
                  Experience
                </h2>
              </span>
            </div>
          </div>
          <div className="grid gap-4 mb-8">
            {/* Sia Partners */}
            <div className="bg-blue-50 rounded-lg p-4 shadow-sm">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Communications and Press Relations Manager</h3>
              <p className="text-gray-600 mb-3">Managing communications strategy and press relations at Sia Partners</p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">Communication</span>
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">PR</span>
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">Strategy</span>
              </div>
            </div>

            {/* Ricoh (replacing McDonald's) */}
            <div className="bg-blue-50 rounded-lg p-4 shadow-sm">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Marketing and Communications Intern</h3>
              <p className="text-gray-600 mb-3">Managed social media and internal communications at Ricoh France</p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">Social Media</span>
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">Internal Comms</span>
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">Marketing</span>
              </div>
            </div>

            {/* Mobalpa */}
            <div className="bg-blue-50 rounded-lg p-4 shadow-sm">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Packer at Mobalpa</h3>
              <p className="text-gray-600 mb-3">Ensured quality control and efficient packaging operations</p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">Logistics</span>
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">Quality Control</span>
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">Efficiency</span>
              </div>
            </div>
          </div>

          {/* Updated Projects title with frame */}
          <div className="relative mb-8">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t-2 border-gray-800"></div>
            </div>
            <div className="relative flex justify-center">
              <span className="bg-blue-200 px-6 py-2">
                <h2 className="text-3xl font-bold text-gray-900 font-serif inline-block">
                  Projects
                </h2>
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {projects.map((project) => (
              <motion.div
                key={project.id}
                variants={floatingAnimation}
                initial="initial"
                animate="animate"
                className="bg-white rounded-lg shadow-md overflow-hidden"
              >
                <div className="aspect-video relative">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={500}
                    height={300}
                    
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-medium text-gray-900 mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.subtitle}</p>
                  <Link href={`/project/${project.id}`} passHref>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="bg-blue-500 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-600 transition-colors w-full"
                    >
                      View More
                    </motion.button>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}