'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
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

  const floatingAnimation = {
    animate: {
      y: [0, -10, 0],
      transition: {
        duration: 2,
        ease: "easeInOut",
        repeat: Infinity,
        repeatType: "reverse" as const
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
          <div className="flex justify-center space-x-4 mb-8">
            <motion.a
              href="#"
              whileHover={{ scale: 1.2 }}
              className="text-blue-600 hover:text-blue-800"
            >
              <Instagram />
            </motion.a>
            <motion.a
              href="#"
              whileHover={{ scale: 1.2 }}
              className="text-blue-600 hover:text-blue-800"
            >
              <Linkedin />
            </motion.a>
            <motion.a
              href="#"
              whileHover={{ scale: 1.2 }}
              className="text-blue-600 hover:text-blue-800"
            >
              <Github />
            </motion.a>
          </div>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="bg-white rounded-lg shadow-md p-6 mb-8"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4 font-serif">About Me</h2>
            <p className="text-gray-700">
              After graduating with a degree in Applied Foreign Languages, I decided to turn to AI and Data, fields I'm now passionate about. I enjoy marketing, which I don't hesitate to mix with these two other skills. I am now pursuing a MSc IA/Data at Eugenia School and work as a Communications and Press relations manager at Sia Partners.
            </p>
          </motion.div>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="bg-white rounded-lg shadow-md p-6 mb-8"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4 font-serif">Skills</h2>
            <ul className="list-disc list-inside text-gray-700">
              <li>French and English spoken fluently</li>
              <li>Level B2 in Spanish</li>
              <li>Great writing ability</li>
              <li>At ease to speak in public</li>
              <li>Proficient in Word and other desktop software</li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="bg-white rounded-lg shadow-md p-6 mb-8"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4 font-serif">Experience</h2>
            <ul className="list-disc list-inside text-gray-700">
              <li>Communications and Press relations manager at Sia Partners (Current)</li>
              <li>Versatile crew at McDonald's Annecy (2019-2021, 2022)</li>
              <li>Packer at Mobalpa (Summer 2021)</li>
              <li>Various temporary positions (Summer 2022)</li>
              <li>One-week internship at Net Design (2016)</li>
            </ul>
          </motion.div>
        </motion.div>

        <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center font-serif">Projects</h2>
        <div className="grid grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              {...floatingAnimation}
              whileHover={{ scale: 1.05 }}
              className="bg-white rounded-lg shadow-md overflow-hidden h-full"
            >
              <Image
                src={project.image}
                alt={project.title}
                width={500}
                height={300}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-medium text-gray-900">{project.title}</h3>
                <p className="text-sm text-gray-600 mb-4">{project.subtitle}</p>
                <Link href={`/project/${project.id}`} passHref>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-blue-500 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-600 transition-colors"
                  >
                    View More
                  </motion.button>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}