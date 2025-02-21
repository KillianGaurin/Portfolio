import React, { useState } from 'react';
import { Github, Linkedin, Mail, Server, Network, Shield, Terminal, BookOpen, GraduationCap, Code, Globe, Database, Menu, X } from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeProject, setActiveProject] = useState<number | null>(null);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const projects = [
    {
      icon: <Code className="text-emerald-400" size={40} />,
      title: "Système de Supervision",
      description: "Mise en place d'une solution de supervision réseau complète chez SPIE",
      tags: ["Zabbix", "Monitoring", "SNMP"],
      color: "emerald"
    },
    {
      icon: <Globe className="text-cyan-400" size={40} />,
      title: "Infrastructure Cloud",
      description: "Déploiement d'une infrastructure cloud privée pour les services internes",
      tags: ["VMware", "vSphere", "Cloud"],
      color: "cyan"
    },
    {
      icon: <Shield className="text-blue-400" size={40} />,
      title: "Sécurisation Réseau",
      description: "Mise en place d'une politique de sécurité réseau et déploiement de solutions de protection",
      tags: ["Firewall", "VPN", "IDS/IPS"],
      color: "blue"
    },
    {
      icon: <Database className="text-teal-400" size={40} />,
      title: "Automatisation des Sauvegardes",
      description: "Développement d'un système automatisé de sauvegarde et de restauration des données",
      tags: ["PowerShell", "Veeam", "Backup"],
      color: "teal"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0a0a0a] to-[#1a1a1a]">
      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-black/80 backdrop-blur-lg border-b border-white/10">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent">
              Killian Gaurin
            </h1>
            
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 text-white hover:text-emerald-400 transition-colors"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            <div className="hidden md:flex space-x-8">
              <button onClick={() => scrollToSection('about')} className="text-white/70 hover:text-white transition-colors">À propos</button>
              <button onClick={() => scrollToSection('skills')} className="text-white/70 hover:text-white transition-colors">Compétences</button>
              <button onClick={() => scrollToSection('projects')} className="text-white/70 hover:text-white transition-colors">Projets</button>
              <button onClick={() => scrollToSection('education')} className="text-white/70 hover:text-white transition-colors">Formation</button>
            </div>

            <div className="hidden md:flex space-x-4">
              <a href="mailto:contact@killiangaurin.fr" className="p-2 text-white/70 hover:text-emerald-400 transition-colors">
                <Mail size={20} />
              </a>
              <a href="https://github.com" className="p-2 text-white/70 hover:text-emerald-400 transition-colors">
                <Github size={20} />
              </a>
              <a href="https://linkedin.com" className="p-2 text-white/70 hover:text-emerald-400 transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'} bg-black/95 backdrop-blur-lg border-t border-white/10`}>
          <div className="container mx-auto px-4 py-4">
            <div className="flex flex-col space-y-4">
              <button onClick={() => scrollToSection('about')} className="text-white/70 hover:text-white transition-colors py-2">À propos</button>
              <button onClick={() => scrollToSection('skills')} className="text-white/70 hover:text-white transition-colors py-2">Compétences</button>
              <button onClick={() => scrollToSection('projects')} className="text-white/70 hover:text-white transition-colors py-2">Projets</button>
              <button onClick={() => scrollToSection('education')} className="text-white/70 hover:text-white transition-colors py-2">Formation</button>
            </div>
            <div className="flex space-x-4 mt-6 pt-6 border-t border-white/10">
              <a href="mailto:contact@killiangaurin.fr" className="p-2 text-white/70 hover:text-emerald-400 transition-colors">
                <Mail size={20} />
              </a>
              <a href="https://github.com" className="p-2 text-white/70 hover:text-emerald-400 transition-colors">
                <Github size={20} />
              </a>
              <a href="https://linkedin.com" className="p-2 text-white/70 hover:text-emerald-400 transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="relative h-screen flex items-center justify-center">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1484417894907-623942c8ee29?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-transparent to-[#0a0a0a]"></div>
        <div className="relative max-w-4xl mx-auto text-center px-4">
          <h1 className="text-7xl md:text-8xl font-black mb-6">
            <span className="bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Killian Gaurin
            </span>
          </h1>
          <p className="text-2xl md:text-3xl mb-6 text-white/90">Étudiant en BTS SIO option SISR en alternance</p>
          <p className="text-xl text-white/70">Passionné par l'informatique, le réseau et la cybersécurité</p>
        </div>
      </header>

      {/* À propos */}
      <section id="about" className="py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row gap-16 items-center">
              <div className="md:w-1/2">
                <h2 className="text-5xl font-black mb-8">
                  <span className="bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent">À Propos</span>
                </h2>
                <p className="text-xl leading-relaxed text-white/70">
                  Actuellement en BTS SIO option SISR à l'ISCB à Tours en alternance chez SPIE,
                  je me spécialise dans la gestion des infrastructures, des systèmes et des réseaux.
                  Ma formation m'a permis d'acquérir des compétences solides en administration système
                  et en sécurité informatique, tout en bénéficiant d'une expérience professionnelle concrète.
                </p>
              </div>
              <div className="md:w-1/2 grid grid-cols-2 gap-4">
                <div className="group p-6 bg-white/5 rounded-2xl border border-white/10 hover:bg-emerald-950/20 hover:border-emerald-500/50 transition-all duration-500">
                  <Server className="text-emerald-400 mb-4 group-hover:scale-110 transition-transform" size={32} />
                  <h3 className="font-bold text-lg mb-2 text-white">Infrastructure</h3>
                  <p className="text-white/60">Gestion et maintenance des systèmes</p>
                </div>
                <div className="group p-6 bg-white/5 rounded-2xl border border-white/10 hover:bg-cyan-950/20 hover:border-cyan-500/50 transition-all duration-500">
                  <Network className="text-cyan-400 mb-4 group-hover:scale-110 transition-transform" size={32} />
                  <h3 className="font-bold text-lg mb-2 text-white">Réseaux</h3>
                  <p className="text-white/60">Configuration et sécurisation</p>
                </div>
                <div className="group p-6 bg-white/5 rounded-2xl border border-white/10 hover:bg-blue-950/20 hover:border-blue-500/50 transition-all duration-500">
                  <Shield className="text-blue-400 mb-4 group-hover:scale-110 transition-transform" size={32} />
                  <h3 className="font-bold text-lg mb-2 text-white">Sécurité</h3>
                  <p className="text-white/60">Protection et surveillance</p>
                </div>
                <div className="group p-6 bg-white/5 rounded-2xl border border-white/10 hover:bg-teal-950/20 hover:border-teal-500/50 transition-all duration-500">
                  <Terminal className="text-teal-400 mb-4 group-hover:scale-110 transition-transform" size={32} />
                  <h3 className="font-bold text-lg mb-2 text-white">DevOps</h3>
                  <p className="text-white/60">Automatisation et déploiement</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Compétences */}
      <section id="skills" className="py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-emerald-950/20 to-transparent"></div>
        <div className="container mx-auto px-4 relative">
          <h2 className="text-5xl font-black text-center mb-16">
            <span className="bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent">
              Compétences Techniques
            </span>
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="group relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative bg-white/5 p-8 rounded-2xl border border-white/10 group-hover:border-emerald-500/50 transition-all duration-500">
                <Terminal className="text-emerald-400 mb-6 group-hover:scale-110 transition-transform duration-500" size={40} />
                <h3 className="text-xl font-bold mb-4 text-white">Administration Système</h3>
                <ul className="space-y-3 text-white/70">
                  <li className="flex items-center space-x-3">
                    <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full"></span>
                    <span>Windows Server 2019/2022</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full"></span>
                    <span>Linux (Debian, Ubuntu)</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full"></span>
                    <span>PowerShell, Bash</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full"></span>
                    <span>Active Directory</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="group relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative bg-white/5 p-8 rounded-2xl border border-white/10 group-hover:border-cyan-500/50 transition-all duration-500">
                <Network className="text-cyan-400 mb-6 group-hover:scale-110 transition-transform duration-500" size={40} />
                <h3 className="text-xl font-bold mb-4 text-white">Réseaux</h3>
                <ul className="space-y-3 text-white/70">
                  <li className="flex items-center space-x-3">
                    <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full"></span>
                    <span>TCP/IP, VLAN, VPN</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full"></span>
                    <span>Cisco IOS</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full"></span>
                    <span>Pare-feu, Routage</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full"></span>
                    <span>Supervision réseau</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="group relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative bg-white/5 p-8 rounded-2xl border border-white/10 group-hover:border-blue-500/50 transition-all duration-500">
                <Shield className="text-blue-400 mb-6 group-hover:scale-110 transition-transform duration-500" size={40} />
                <h3 className="text-xl font-bold mb-4 text-white">Sécurité</h3>
                <ul className="space-y-3 text-white/70">
                  <li className="flex items-center space-x-3">
                    <span className="w-1.5 h-1.5 bg-blue-400 rounded-full"></span>
                    <span>Sécurité des réseaux</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <span className="w-1.5 h-1.5 bg-blue-400 rounded-full"></span>
                    <span>Cryptographie</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <span className="w-1.5 h-1.5 bg-blue-400 rounded-full"></span>
                    <span>Gestion des accès</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <span className="w-1.5 h-1.5 bg-blue-400 rounded-full"></span>
                    <span>Audit de sécurité</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projets */}
      <section id="projects" className="py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] to-transparent opacity-50"></div>
        <div className="container mx-auto px-4 relative">
          <h2 className="text-5xl font-black text-center mb-16">
            <span className="bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent">
              Projets Réalisés
            </span>
          </h2>
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 gap-8">
              {projects.map((project, index) => (
                <div
                  key={index}
                  className={`group relative overflow-hidden transition-all duration-500 ${
                    activeProject === index ? 'bg-white/10' : 'bg-white/5'
                  } rounded-2xl border border-white/10 hover:border-${project.color}-500/50`}
                  onMouseEnter={() => setActiveProject(index)}
                  onMouseLeave={() => setActiveProject(null)}
                >
                  <div className={`absolute inset-0 bg-gradient-to-r from-${project.color}-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500`}></div>
                  <div className="relative p-8">
                    <div className="flex items-start gap-8">
                      <div className={`p-4 rounded-xl bg-${project.color}-500/10 group-hover:scale-110 transition-transform duration-500`}>
                        {project.icon}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-white/90 transition-colors">
                          {project.title}
                        </h3>
                        <p className="text-lg text-white/70 mb-4 group-hover:text-white/80 transition-colors">
                          {project.description}
                        </p>
                        <div className="flex flex-wrap gap-3">
                          {project.tags.map((tag, tagIndex) => (
                            <span
                              key={tagIndex}
                              className={`px-4 py-2 bg-${project.color}-500/10 text-${project.color}-300 rounded-xl text-sm`}
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Formation */}
      <section id="education" className="py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/20 to-transparent"></div>
        <div className="container mx-auto px-4 relative">
          <h2 className="text-5xl font-black text-center mb-16">
            <span className="bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent">
              Formation
            </span>
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-emerald-400 via-cyan-400 to-blue-400"></div>
              
              {/* BTS */}
              <div className="relative pl-24 pb-16">
                <div className="absolute left-0 w-16 h-16 rounded-full bg-gradient-to-br from-emerald-400 to-cyan-400 flex items-center justify-center transform -translate-x-1/2">
                  <GraduationCap className="text-white" size={32} />
                </div>
                <div className="group relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                  <div className="relative bg-white/5 p-8 rounded-2xl border border-white/10 group-hover:border-emerald-500/50 transition-all duration-500">
                    <div>
                      <h3 className="text-3xl font-bold mb-2 text-white">BTS SIO option SISR</h3>
                      <p className="text-xl text-white/70 mb-1">ISCB, Tours</p>
                      <p className="text-white/50 text-lg">2023 - 2025</p>
                      <div className="mt-6 p-4 bg-emerald-500/10 rounded-xl">
                        <p className="text-white/70">En alternance chez SPIE</p>
                        <ul className="mt-4 space-y-2">
                          <li className="flex items-center space-x-3">
                            <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full"></span>
                            <span className="text-white/70">Administration systèmes et réseaux</span>
                          </li>
                          <li className="flex items-center space-x-3">
                            <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full"></span>
                            <span className="text-white/70">Sécurité des infrastructures</span>
                          </li>
                          <li className="flex items-center space-x-3">
                            <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full"></span>
                            <span className="text-white/70">Virtualisation et Cloud Computing</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* BAC */}
              <div className="relative pl-24">
                <div className="absolute left-0 w-16 h-16 rounded-full bg-gradient-to-br from-cyan-400 to-blue-400 flex items-center justify-center transform -translate-x-1/2">
                  <BookOpen className="text-white" size={32} />
                </div>
                <div className="group relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                  <div className="relative bg-white/5 p-8 rounded-2xl border border-white/10 group-hover:border-cyan-500/50 transition-all duration-500">
                    <div>
                      <h3 className="text-3xl font-bold mb-2 text-white">Baccalauréat</h3>
                      <p className="text-xl text-white/70 mb-1">Lycée Thérèse Planiol, Loches</p>
                      <p className="text-white/50 text-lg">2020</p>
                      <div className="mt-6 p-4 bg-cyan-500/10 rounded-xl">
                        <ul className="space-y-2">
                          <li className="flex items-center space-x-3">
                            <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full"></span>
                            <span className="text-white/70">Formation générale</span>
                          </li>
                          <li className="flex items-center space-x-3">
                            <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full"></span>
                            <span className="text-white/70">Première approche de l'informatique</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;