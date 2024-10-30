export default function AboutSection() {
  return (
    <div className="max-w-4xl mx-auto p-6 space-y-12">
      {/* About Me Section */}
      <div className="bg-white rounded-2xl shadow-lg p-8">
        <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">About Me</h2>
        <p className="text-gray-600 leading-relaxed text-center">
          After graduating with a degree in Applied Foreign Languages, I decided to turn to AI and Data, fields I'm now passionate about. I enjoy marketing, which I don't hesitate to mix with these two other skills. I am now pursuing a MSc IA/Data at Eugenia School and work as a Communications and Press relations manager at Sia Partners.
        </p>
      </div>

      {/* Skills & Experience Section */}
      <div className="bg-white rounded-2xl shadow-lg p-8">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Skills & Experience</h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {/* Skills Column */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-gray-700 mb-4">Skills</h3>
            <ul className="space-y-4">
              <li className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                <span className="text-gray-600">French and English spoken fluently</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                <span className="text-gray-600">Level B2 in Spanish</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                <span className="text-gray-600">Great writing ability</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                <span className="text-gray-600">At ease to speak in public</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                <span className="text-gray-600">Proficient in Word and other desktop software</span>
              </li>
            </ul>
          </div>

          {/* Experience Column */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-gray-700 mb-4">Experience</h3>
            <ul className="space-y-4">
              <li className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                <span className="text-gray-600">Communications and Press relations manager at Sia Partners (Current)</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                <span className="text-gray-600">Versatile crew at McDonald's Annecy (2019-2021, 2022)</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                <span className="text-gray-600">Packer at Mobalpa (Summer 2021)</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                <span className="text-gray-600">Various temporary positions (Summer 2022)</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                <span className="text-gray-600">One-week internship at Net Design (2016)</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
} 