import React from 'react';
import { Github, Linkedin, Mail, Server, Network, Shield, Terminal, BookOpen, GraduationCap } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-slate-900 text-gray-100">
      {/* Hero Section */}
      <header className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-purple-800 opacity-90"></div>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80')] bg-cover bg-center mix-blend-overlay"></div>
        <div className="container mx-auto px-4 py-24 relative">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-200 to-purple-200">Killian Gaurin</h1>
            <p className="text-2xl mb-6 text-blue-100">Étudiant en BTS SIO option SISR</p>
            <p className="text-xl mb-10 text-blue-100/80">Passionné par l'informatique, le réseau et la cybersécurité</p>
            <div className="flex justify-center space-x-6">
              <a href="mailto:contact@thomasdubois.fr" className="p-3 bg-white/10 hover:bg-white/20 rounded-full transition-all duration-300 backdrop-blur-sm">
                <Mail size={24} />
              </a>
              <a href="https://github.com" className="p-3 bg-white/10 hover:bg-white/20 rounded-full transition-all duration-300 backdrop-blur-sm">
                <Github size={24} />
              </a>
              <a href="https://linkedin.com" className="p-3 bg-white/10 hover:bg-white/20 rounded-full transition-all duration-300 backdrop-blur-sm">
                <Linkedin size={24} />
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* À propos */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">À Propos</h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-gray-300 text-lg leading-relaxed mb-12">
              Actuellement en deuxième année de BTS SIO option SISR au Lycée Louis Armand à Paris,
              je me spécialise dans la gestion des infrastructures, des systèmes et des réseaux.
              Ma formation m'a permis d'acquérir des compétences solides en administration système
              et en sécurité informatique.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center p-6 bg-slate-800/50 rounded-xl backdrop-blur-sm border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300">
                <Server className="text-blue-400 mb-4" size={36} />
                <h3 className="font-semibold text-lg">Infrastructure</h3>
              </div>
              <div className="flex flex-col items-center p-6 bg-slate-800/50 rounded-xl backdrop-blur-sm border border-slate-700/50 hover:border-purple-500/50 transition-all duration-300">
                <Network className="text-purple-400 mb-4" size={36} />
                <h3 className="font-semibold text-lg">Réseaux</h3>
              </div>
              <div className="flex flex-col items-center p-6 bg-slate-800/50 rounded-xl backdrop-blur-sm border border-slate-700/50 hover:border-pink-500/50 transition-all duration-300">
                <Shield className="text-pink-400 mb-4" size={36} />
                <h3 className="font-semibold text-lg">Sécurité</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Compétences */}
      <section className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Compétences Techniques</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-slate-900/90 p-8 rounded-xl border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300">
              <Terminal className="text-blue-400 mb-6" size={36} />
              <h3 className="text-xl font-semibold mb-4 text-blue-100">Administration Système</h3>
              <ul className="text-gray-300 space-y-3">
                <li className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                  <span>Windows Server 2019/2022</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                  <span>Linux (Debian, Ubuntu)</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                  <span>PowerShell, Bash</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                  <span>Active Directory</span>
                </li>
              </ul>
            </div>
            <div className="bg-slate-900/90 p-8 rounded-xl border border-slate-700/50 hover:border-purple-500/50 transition-all duration-300">
              <Network className="text-purple-400 mb-6" size={36} />
              <h3 className="text-xl font-semibold mb-4 text-purple-100">Réseaux</h3>
              <ul className="text-gray-300 space-y-3">
                <li className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
                  <span>TCP/IP, VLAN, VPN</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
                  <span>Cisco IOS</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
                  <span>Pare-feu, Routage</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
                  <span>Supervision réseau</span>
                </li>
              </ul>
            </div>
            <div className="bg-slate-900/90 p-8 rounded-xl border border-slate-700/50 hover:border-pink-500/50 transition-all duration-300">
              <Shield className="text-pink-400 mb-6" size={36} />
              <h3 className="text-xl font-semibold mb-4 text-pink-100">Sécurité</h3>
              <ul className="text-gray-300 space-y-3">
                <li className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-pink-400 rounded-full"></span>
                  <span>Sécurité des réseaux</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-pink-400 rounded-full"></span>
                  <span>Cryptographie</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-pink-400 rounded-full"></span>
                  <span>Gestion des accès</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-pink-400 rounded-full"></span>
                  <span>Audit de sécurité</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Formation */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Formation</h2>
          <div className="max-w-3xl mx-auto space-y-8">
            <div className="bg-slate-800/50 p-8 rounded-xl border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300">
              <div className="flex items-start space-x-6">
                <GraduationCap className="text-blue-400 flex-shrink-0" size={36} />
                <div>
                  <h3 className="text-2xl font-semibold mb-2 text-blue-100">BTS SIO option SISR</h3>
                  <p className="text-lg text-gray-300 mb-1">Lycée Louis Armand, Paris</p>
                  <p className="text-gray-400">2022 - 2024</p>
                </div>
              </div>
            </div>
            <div className="bg-slate-800/50 p-8 rounded-xl border border-slate-700/50 hover:border-purple-500/50 transition-all duration-300">
              <div className="flex items-start space-x-6">
                <BookOpen className="text-purple-400 flex-shrink-0" size={36} />
                <div>
                  <h3 className="text-2xl font-semibold mb-2 text-purple-100">Bac STI2D option SIN</h3>
                  <p className="text-lg text-gray-300 mb-1">Lycée Louis Armand, Paris</p>
                  <p className="text-gray-400">2022</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 py-12">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <p className="text-lg mb-6 text-gray-300">Thomas Dubois - Étudiant BTS SIO SISR</p>
            <div className="flex justify-center space-x-6">
              <a href="mailto:contact@thomasdubois.fr" className="text-gray-400 hover:text-blue-400 transition-colors duration-300">
                <Mail size={24} />
              </a>
              <a href="https://github.com" className="text-gray-400 hover:text-blue-400 transition-colors duration-300">
                <Github size={24} />
              </a>
              <a href="https://linkedin.com" className="text-gray-400 hover:text-blue-400 transition-colors duration-300">
                <Linkedin size={24} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;