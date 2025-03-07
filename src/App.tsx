import React, { useState } from 'react';
import { Github, Linkedin, Mail, Server, Network, Shield, Terminal, BookOpen, GraduationCap, Code, Globe, Database, Menu, X, FileText, Table } from 'lucide-react';

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
      icon: <Code className="text-indigo-400" size={40} />,
      title: "Création et Hébergement d'un portfolio",
      description: "Développement d'un portfolio en ligne pour retracer mes projets et mes compétences",
      tags: ["Git", "Vercel", "Bolt", "OVH"],
      color: "fuchsia"
    },
    {
      icon: <Globe className="text-fuchsia-400" size={40} />,
      title: "Installation WordPress et sauvegarde BDD",
      description: "Installation d'un WordPress sur machine avec création d'un système de sauvegarde automatique",
      tags: ["VMware", "Bash", "SFTP"],
      color: "fuchsia"
    },
    {
      icon: <Shield className="text-violet-400" size={40} />,
      title: "Sécurisation Réseau",
      description: "Mise en place d'une politique de sécurité réseau et déploiement de solutions de protection",
      tags: ["Firewall", "VPN", "IDS/IPS"],
      color: "fuchsia"
    },
    {
      icon: <Database className="text-rose-400" size={40} />,
      title: "Automatisation des Sauvegardes",
      description: "Développement d'un système automatisé de sauvegarde et de restauration des données",
      tags: ["PowerShell", "Veeam", "Backup"],
      color: "fuchsia"
    }
  ];

  return (
    <div className="min-h-screen bg-[#030014]">
      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-[#030014]/80 backdrop-blur-xl border-b border-white/5">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            <h1 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-fuchsia-500 to-pink-500">
              Killian Gaurin
            </h1>
            
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 text-white hover:text-fuchsia-400 transition-colors"
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
              <a href="mailto:contact@killiangaurin.fr" className="p-2 text-white/70 hover:text-fuchsia-400 transition-colors">
                <Mail size={20} />
              </a>
              <a href="https://github.com" className="p-2 text-white/70 hover:text-fuchsia-400 transition-colors">
                <Github size={20} />
              </a>
              <a href="https://linkedin.com" className="p-2 text-white/70 hover:text-fuchsia-400 transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'} bg-[#030014]/95 backdrop-blur-xl border-t border-white/5`}>
          <div className="container mx-auto px-4 py-4">
            <div className="flex flex-col space-y-4">
              <button onClick={() => scrollToSection('about')} className="text-white/70 hover:text-white transition-colors py-2">À propos</button>
              <button onClick={() => scrollToSection('skills')} className="text-white/70 hover:text-white transition-colors py-2">Compétences</button>
              <button onClick={() => scrollToSection('projects')} className="text-white/70 hover:text-white transition-colors py-2">Projets</button>
              <button onClick={() => scrollToSection('education')} className="text-white/70 hover:text-white transition-colors py-2">Formation</button>
            </div>
            <div className="flex space-x-4 mt-6 pt-6 border-t border-white/5">
              <a href="mailto:contact@killiangaurin.fr" className="p-2 text-white/70 hover:text-fuchsia-400 transition-colors">
                <Mail size={20} />
              </a>
              <a href="https://github.com" className="p-2 text-white/70 hover:text-fuchsia-400 transition-colors">
                <Github size={20} />
              </a>
              <a href="https://linkedin.com" className="p-2 text-white/70 hover:text-fuchsia-400 transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="relative h-screen flex items-center justify-center">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-10"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#030014] via-transparent to-[#030014]"></div>
        <div className="relative max-w-4xl mx-auto text-center px-4">
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg blur opacity-20 group-hover:opacity-30 transition duration-1000 group-hover:duration-200"></div>
            <h1 className="relative text-7xl md:text-8xl font-black mb-6">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-fuchsia-500 to-pink-500">
                Killian Gaurin
              </span>
            </h1>
          </div>
          <p className="text-2xl md:text-3xl mb-6 text-white/90">Étudiant en BTS SIO option SISR en alternance</p>
          <p className="text-xl text-white/70">Passionné par l'informatique, le réseau et la cybersécurité</p>
        </div>
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/30 rounded-full mt-2"></div>
          </div>
        </div>
      </header>

      {/* À propos */}
      <section id="about" className="py-32 relative">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-purple-500/5 to-transparent"></div>
        <div className="container mx-auto px-4 relative">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row gap-16 items-center">
              <div className="md:w-1/2">
                <div className="relative">
                  <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg blur opacity-20"></div>
                  <h2 className="relative text-5xl font-black mb-8">
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-fuchsia-500 to-pink-500">
                      À Propos
                    </span>
                  </h2>
                </div>
                <p className="text-xl leading-relaxed text-white/70 mb-8">
                  Actuellement en BTS SIO option SISR à l'ISCB à Tours en alternance chez SPIE,
                  je me spécialise dans la gestion des infrastructures, des systèmes et des réseaux.
                  Ma formation m'a permis d'acquérir des compétences solides en administration système
                  et en sécurité informatique, tout en bénéficiant d'une expérience professionnelle concrète.
                </p>
                <a 
                  href="/cv-killian-gaurin.pdf" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="group relative inline-flex items-center gap-2 px-6 py-3 overflow-hidden rounded-lg bg-gradient-to-r from-purple-500 via-fuchsia-500 to-pink-500"
                >
                  <span className="absolute left-0 w-full h-full bg-gradient-to-r from-purple-600 via-fuchsia-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  <FileText size={20} className="relative" />
                  <span className="relative">Télécharger mon CV</span>
                </a>
              </div>
              <div className="md:w-1/2 grid grid-cols-2 gap-4">
                <div className="group relative p-6 bg-white/5 rounded-2xl border border-white/10 backdrop-blur-lg hover:bg-purple-950/20 hover:border-purple-500/50 transition-all duration-500">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-2xl"></div>
                  <Server className="text-purple-400 mb-4 group-hover:scale-110 transition-transform" size={32} />
                  <h3 className="font-bold text-lg mb-2 text-white">Infrastructure</h3>
                  <p className="text-white/60">Gestion et maintenance des systèmes</p>
                </div>
                <div className="group relative p-6 bg-white/5 rounded-2xl border border-white/10 backdrop-blur-lg hover:bg-fuchsia-950/20 hover:border-fuchsia-500/50 transition-all duration-500">
                  <div className="absolute inset-0 bg-gradient-to-br from-fuchsia-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-2xl"></div>
                  <Network className="text-fuchsia-400 mb-4 group-hover:scale-110 transition-transform" size={32} />
                  <h3 className="font-bold text-lg mb-2 text-white">Réseaux</h3>
                  <p className="text-white/60">Configuration et sécurisation</p>
                </div>
                <div className="group relative p-6 bg-white/5 rounded-2xl border border-white/10 backdrop-blur-lg hover:bg-pink-950/20 hover:border-pink-500/50 transition-all duration-500">
                  <div className="absolute inset-0 bg-gradient-to-br from-pink-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-2xl"></div>
                  <Shield className="text-pink-400 mb-4 group-hover:scale-110 transition-transform" size={32} />
                  <h3 className="font-bold text-lg mb-2 text-white">Sécurité</h3>
                  <p className="text-white/60">Protection et surveillance</p>
                </div>
                <div className="group relative p-6 bg-white/5 rounded-2xl border border-white/10 backdrop-blur-lg hover:bg-rose-950/20 hover:border-rose-500/50 transition-all duration-500">
                  <div className="absolute inset-0 bg-gradient-to-br from-rose-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-2xl"></div>
                  <Terminal className="text-rose-400 mb-4 group-hover:scale-110 transition-transform" size={32} />
                  <h3 className="font-bold text-lg mb-2 text-white">Virtualisation</h3>
                  <p className="text-white/60">Hypervisuer de type 1 et 2</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Compétences */}
      <section id="skills" className="py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-fuchsia-950/20 to-transparent"></div>
        <div className="container mx-auto px-4 relative">
          <div className="relative mb-16">
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg blur opacity-20"></div>
            <h2 className="relative text-5xl font-black text-center">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-fuchsia-500 to-pink-500">
                Compétences Techniques
              </span>
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="group relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-2xl"></div>
              <div className="relative bg-white/5 p-8 rounded-2xl border border-white/10 backdrop-blur-lg group-hover:border-purple-500/50 transition-all duration-500">
                <Terminal className="text-purple-400 mb-6 group-hover:scale-110 transition-transform duration-500" size={40} />
                <h3 className="text-xl font-bold mb-4 text-white">Administration Système</h3>
                <ul className="space-y-3 text-white/70">
                  <li className="flex items-center space-x-3">
                    <span className="w-1.5 h-1.5 bg-purple-400 rounded-full"></span>
                    <span>Windows Server 2019/2022</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <span className="w-1.5 h-1.5 bg-purple-400 rounded-full"></span>
                    <span>Linux (Debian, Ubuntu)</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <span className="w-1.5 h-1.5 bg-purple-400 rounded-full"></span>
                    <span>PowerShell, Bash</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <span className="w-1.5 h-1.5 bg-purple-400 rounded-full"></span>
                    <span>Active Directory</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="group relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-fuchsia-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-2xl"></div>
              <div className="relative bg-white/5 p-8 rounded-2xl border border-white/10 backdrop-blur-lg group-hover:border-fuchsia-500/50 transition-all duration-500">
                <Network className="text-fuchsia-400 mb-6 group-hover:scale-110 transition-transform duration-500" size={40} />
                <h3 className="text-xl font-bold mb-4 text-white">Réseaux</h3>
                <ul className="space-y-3 text-white/70">
                  <li className="flex items-center space-x-3">
                    <span className="w-1.5 h-1.5 bg-fuchsia-400 rounded-full"></span>
                    <span>TCP/IP, VLAN, VPN</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <span className="w-1.5 h-1.5 bg-fuchsia-400 rounded-full"></span>
                    <span>Cisco IOS</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <span className="w-1.5 h-1.5 bg-fuchsia-400 rounded-full"></span>
                    <span>Pare-feu, Routage</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <span className="w-1.5 h-1.5 bg-fuchsia-400 rounded-full"></span>
                    <span>Supervision réseau</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="group relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-pink-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-2xl"></div>
              <div className="relative bg-white/5 p-8 rounded-2xl border border-white/10 backdrop-blur-lg group-hover:border-pink-500/50 transition-all duration-500">
                <Shield className="text-pink-400 mb-6 group-hover:scale-110 transition-transform duration-500" size={40} />
                <h3 className="text-xl font-bold mb-4 text-white">Sécurité</h3>
                <ul className="space-y-3 text-white/70">
                  <li className="flex items-center space-x-3">
                    <span className="w-1.5 h-1.5 bg-pink-400 rounded-full"></span>
                    <span>Sécurité des réseaux</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <span className="w-1.5 h-1.5 bg-pink-400 rounded-full"></span>
                    <span>Cryptographie</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <span className="w-1.5 h-1.5 bg-pink-400 rounded-full"></span>
                    <span>Gestion des accès</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <span className="w-1.5 h-1.5 bg-pink-400 rounded-full"></span>
                    <span>Audit de sécurité</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="flex justify-center mt-12">
            <a 
              href="/tableau-competences.pdf" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="group relative inline-flex items-center gap-2 px-6 py-3 overflow-hidden rounded-lg bg-gradient-to-r from-purple-500 via-fuchsia-500 to-pink-500"
            >
              <span className="absolute left-0 w-full h-full bg-gradient-to-r from-purple-600 via-fuchsia-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              <Table size={20} className="relative group-hover:scale-110 transition-transform duration-300" />
              <span className="relative">Voir mon tableau de compétences détaillé</span>
            </a>
          </div>
        </div>
      </section>

      {/* Projets */}
      <section id="projects" className="py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-[#030014] to-transparent opacity-50"></div>
        <div className="container mx-auto px-4 relative">
          <div className="relative mb-16">
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg blur opacity-20"></div>
            <h2 className="relative text-5xl font-black text-center">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-fuchsia-500 to-pink-500">
                Projets Réalisés
              </span>
            </h2>
          </div>
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 gap-8">
              {projects.map((project, index) => (
                <div
                  key={index}
                  className={`group relative overflow-hidden transition-all duration-500 ${
                    activeProject === index ? 'bg-white/10' : 'bg-white/5'
                  } rounded-2xl border border-white/10 backdrop-blur-lg hover:border-${project.color}-500/50`}
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
        <div className="absolute inset-0 bg-gradient-to-t from-purple-950/20 to-transparent"></div>
        <div className="container mx-auto px-4 relative">
          <div className="relative mb-16">
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg blur opacity-20"></div>
            <h2 className="relative text-5xl font-black text-center">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-fuchsia-500 to-pink-500">
                Formation
              </span>
            </h2>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500 via-fuchsia-500 to-pink-500"></div>
              
              {/* BTS */}
              <div className="relative pl-24 pb-16">
                <div className="absolute left-0 w-16 h-16 rounded-full bg-gradient-to-br from-purple-500 to-fuchsia-500 flex items-center justify-center transform -translate-x-1/2">
                  <GraduationCap className="text-white" size={32} />
                </div>
                <div className="group relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-fuchsia-500/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                  <div className="relative bg-white/5 p-8 rounded-2xl border border-white/10 backdrop-blur-lg group-hover:border-purple-500/50 transition-all duration-500">
                    <div>
                      <h3 className="text-3xl font-bold mb-2 text-white">BTS SIO option SISR</h3>
                      <p className="text-xl text-white/70 mb-1">ISCB, Tours</p>
                      <p className="text-white/50 text-lg">2023 - 2025</p>
                      <div className="mt-6 p-4 bg-purple-500/10 rounded-xl">
                        <p className="text-white/70">En alternance chez SPIE</p>
                        <ul className="mt-4 space-y-2">
                          <li className="flex items-center space-x-3">
                            <span className="w-1.5 h-1.5 bg-purple-400 rounded-full"></span>
                            <span className="text-white/70">Administration systèmes et réseaux</span>
                          </li>
                          <li className="flex items-center space-x-3">
                            <span className="w-1.5 h-1.5 bg-purple-400 rounded-full"></span>
                            <span className="text-white/70">Sécurité des infrastructures</span>
                          </li>
                          <li className="flex items-center space-x-3">
                            <span className="w-1.5 h-1.5 bg-purple-400 rounded-full"></span>
                            <span className="text-white/70">Virtualisation et Cloud Computing</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* DUT */}
              <div className="relative pl-24 pb-16">
                <div className="absolute left-0 w-16 h-16 rounded-full bg-gradient-to-br from-fuchsia-500 to-pink-500 flex items-center justify-center transform -translate-x-1/2">
                  <Code className="text-white" size={32} />
                </div>
                <div className="group relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-fuchsia-500/20 to-pink-500/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                  <div className="relative bg-white/5 p-8 rounded-2xl border border-white/10 backdrop-blur-lg group-hover:border-fuchsia-500/50 transition-all duration-500">
                    <div>
                      <h3 className="text-3xl font-bold mb-2 text-white">DUT Informatique</h3>
                      <p className="text-xl text-white/70 mb-1">IUT d'Orléans</p>
                      <p className="text-white/50 text-lg">2020 - 2022</p>
                      <div className="mt-6 p-4 bg-fuchsia-500/10 rounded-xl">
                        <ul className="space-y-2">
                          <li className="flex items-center space-x-3">
                            <span className="w-1.5 h-1.5 bg-fuchsia-400 rounded-full"></span>
                            <span className="text-white/70">Développement logiciel</span>
                          </li>
                          <li className="flex items-center space-x-3">
                            <span className="w-1.5 h-1.5 bg-fuchsia-400 rounded-full"></span>
                            <span className="text-white/70">Bases de données</span>
                          </li>
                          <li className="flex items-center space-x-3">
                            <span className="w-1.5 h-1.5 bg-fuchsia-400 rounded-full"></span>
                            <span className="text-white/70">Architecture des systèmes</span>
                          </li>
                          <li className="flex items-center space-x-3">
                            <span className="w-1.5 h-1.5 bg-fuchsia-400 rounded-full"></span>
                            <span className="text-white/70">Réseaux et systèmes</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                   </div>
                </div>
              </div>

              {/* BAC */}
              <div className="relative pl-24">
                <div className="absolute left-0 w-16 h-16 rounded-full bg-gradient-to-br from-pink-500 to-rose-500 flex items-center justify-center transform -translate-x-1/2">
                  <BookOpen className="text-white" size={32} />
                </div>
                <div className="group relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-pink-500/20 to-rose-500/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                  <div className="relative bg-white/5 p-8 rounded-2xl border border-white/10 backdrop-blur-lg group-hover:border-pink-500/50 transition-all duration-500">
                    <div>
                      <h3 className="text-3xl font-bold mb-2 text-white">Baccalauréat Scientifique</h3>
                      <p className="text-xl text-white/70 mb-1">Lycée Thérèse Planiol, Loches</p>
                      <p className="text-white/50 text-lg">2020</p>
                      <div className="mt-6 p-4 bg-pink-500/10 rounded-xl">
                        <ul className="space-y-2">
                          <li className="flex items-center space-x-3">
                            <span className="w-1.5 h-1.5 bg-pink-400 rounded-full"></span>
                            <span className="text-white/70">Spécialité Sciences</span>
                          </li>
                          <li className="flex items-center space-x-3">
                            <span className="w-1.5 h-1.5 bg-pink-400 rounded-full"></span>
                            <span className="text-white/70">Formation scientifique approfondie</span>
                          </li>
                          <li className="flex items-center space-x-3">
                            <span className="w-1.5 h-1.5 bg-pink-400 rounded-full"></span>
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
