import React, { useState } from 'react';
import { Github, Linkedin, Mail, Server, Network, Shield, Terminal, BookOpen, GraduationCap, Code, Globe, Database, Menu, X, FileText, Table, Users, Link, X as Close, FileText as FileText2, Rss, Newspaper, Radio, Bookmark, Building2, MapPin, Users2 } from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeProject, setActiveProject] = useState<number | null>(null);
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const [showSpieModal, setShowSpieModal] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const colorClasses: Record<string, string> = {
    indigo: "bg-indigo-500/10 text-indigo-300 border-indigo-500/50",
    fuchsia: "bg-fuchsia-500/10 text-fuchsia-300 border-fuchsia-500/50",
    violet: "bg-violet-500/10 text-violet-300 border-violet-500/50",
    rose: "bg-rose-500/10 text-rose-300 border-rose-500/50"
  };

  const hoverClasses: Record<string, string> = {
    indigo: "hover:border-indigo-500/50 hover:from-indigo-900 hover:to-grey",
    fuchsia: "hover:border-fuchsia-500/50 hover:from-fuchsia-900 hover:to-grey",
    violet: "hover:border-violet-500/50 hover:from-violet-900 hover:to-grey",
    rose: "hover:border-rose-500/50 hover:from-rose-900 hover:to-grey"
  };

  const spieInfo = {
    name: "SPIE ICS",
    pdf: "/spie_presentation.pdf",
    description: "SPIE ICS est une filiale de services numériques du groupe SPIE, leader européen indépendant des services multi-techniques dans les domaines de l'énergie et des communications. Son but est d'accompagner la transformation numérique responsable de ses clients.",
    location: "Tours, France (CHRU de Tours)",
    type: "Entreprise de Services du Numérique (ESN) prestataire",
    size: "Plus de 3 000 collaborateurs en France",
    schedule: "35h/semaine en alternance",
    services: [
      "Infrastructure IT",
      "Cloud & Virtualisation",
      "Cybersécurité",
      "Réseaux & Communications",
      "Services Managés",
      "Solutions Digitales"
    ],
    missions: [
      "Gestion parc informatique (IMAC)",
      "Gestion de l'Active Directory",
      "Inventorisation et Masterisation de poste",
    ],
    skills: [
      "Travail en équipe",
      "Gestion de projet",
      "Communication client",
      "Veille technologique",
      "Résolution de problèmes",
      "Autonomie"
    ]
  };

  const projects = [
    {
      icon: <Terminal className="text-indigo-400" size={40} />,
      title: "Installation GLPI",
      description: "Mise en place d'un service GLPI sur un serveur Debian",
      tags: ["Debian", "Apache", "MariaDB", "..."],
      color: "indigo",
      fullDescription: "Installation du service de gestion des services informatiques et d'assisstance sur une machine Debian 12 en ligne de commande.",
      procedureFile: "/procedures/glpi_debian.pdf",
      team: "4 personnes",
      technologies: ["Debian", "Apache", "MariaDB", "PHP"]
    },
    {
      icon: <Server className="text-fuchsia-400" size={40} />,
      title: "Infrastructure Windows Server",
      description: "Déploiement d'une infrastructure Windows Server complète",
      tags: ["Windows Server", "ADDS", "DNS", "..."],
      color: "fuchsia",
      fullDescription: "Déploiement d'un Windows Server 2019 avec ADDS, DNS, DHCP, créations d'OU, de groupes et d'utilisateurs, création de GPO et ajout d'ordinateur Windows 10 Pro dans le domaine.",
      procedureFile: "/procedures/infrastructure_windows_server.pdf",
      team: "5 personnes",
      technologies: ["Windows Server", "ADDS", "DNS", "DHCP", "GPO"]
    },
    {
      icon: <Code className="text-violet-400" size={40} />,
      title: "Portfolio",
      description: "Mise en place d'un portfolio en ligne",
      tags: ["OVHcloud", "Vercel", "React", "Bolt"],
      color: "violet",
      fullDescription: "Création d'un portfolio avec l'aide de Bolt et mise en ligne de celui-ci avec Vercel et d'OVHcloud.",
      procedureFile: "/procedures/portfolio.pdf",
      team: "3 personnes",
      technologies: ["OVHcloud", "Vercel", "React", "Bolt"]
    },
    {
      icon: <Database className="text-rose-400" size={40} />,
      title: "Wordpress + Automatisation des sauvegardes",
      description: "Développement d'un système automatisé de sauvegarde",
      tags: ["Debian", "Script Bash", "SFTP"],
      color: "rose",
      fullDescription: "Installation de Wordpress et création d'une solution de sauvegarde automatisée sur une machine Debian A, puis transfert automatique des sauvegardes vers une machine Debian B, utilisant des scripts bash.",
      procedureFile: "/procedures/wordpress_debian_sauvegarde_backup.pdf",
      team: "2 personnes",
      technologies: ["Debian", "Script Bash", "SFTP"]
    },
    {
      icon: <Shield className="text-fuchsia-400" size={40} />,
      title: "HAProxy",
      description: "Déploiement d'un HAProxy sur une machine Debian et test",
      tags: ["Debian", "Vagrant", "slowhttptest"],
      color: "fuchsia",
      fullDescription: "Déploiement de l'équilibreur de charge HAProxy sur une machine Debian 12 qui permet de répartir la charge du site web \"partagé\" entre 3 serveurs Debian 12. Un test DoS sera réalisé sur le site grâce à une machine Kali Linux pour s'assurer du bon fonctionnement du répartiteur.",
      procedureFile: "/procedures/haproxy.pdf",
      team: "5 personnes",
      technologies: ["Debian", "Vagrant", "slowhttptest"]
    },
    {
      icon: <Network className="text-violet-400" size={40} />,
      title: "DHCP Relay",
      description: "Mise en place d'un système relais DHCP",
      tags: ["Debian", "VMware Workstation"],
      color: "violet",
      fullDescription: "Création d'un relais DHCP à l'aide de 3 machines Debian virtualisées sur VMware Workstation. Une machine serveur DHCP, une machine cliente et une machine faisant office de relais DHCP (routeur)",
      procedureFile: "/procedures/dhcp_relay.pdf",
      team: "3 personnes",
      technologies: ["Debian", "VMware Workstation"]
    }
  ];

  const veilleSources = [
    {
      icon: <Newspaper className="text-purple-400" size={32} />,
      title: "Actualités Tech",
      description: "Suivi quotidien des dernières actualités technologiques",
      sources: [
        {
          name: "ZDNet",
          url: "https://www.zdnet.fr"
        },
        {
          name: "Le Monde Informatique",
          url: "https://www.lemondeinformatique.fr"
        },
        {
          name: "Next INpact",
          url: "https://www.nextinpact.com"
        }
      ]
    },
    {
      icon: <Radio className="text-fuchsia-400" size={32} />,
      title: "Podcasts Tech",
      description: "Écoute régulière de podcasts spécialisés",
      sources: [
        {
          name: "Compagnons du DevOps",
          url: "https://www.compagnons-devops.fr"
        },
        {
          name: "NoLimitSecu",
          url: "https://www.nolimitsecu.fr"
        },
        {
          name: "Tech Café",
          url: "https://techcafe.fr"
        }
      ]
    },
    {
      icon: <Rss className="text-pink-400" size={32} />,
      title: "Blogs & Forums",
      description: "Participation active aux communautés tech",
      sources: [
        {
          name: "Reddit r/sysadmin",
          url: "https://www.reddit.com/r/sysadmin"
        },
        {
          name: "Hacker News",
          url: "https://news.ycombinator.com"
        },
        {
          name: "Dev.to",
          url: "https://dev.to"
        }
      ]
    },
    {
      icon: <Bookmark className="text-rose-400" size={32} />,
      title: "Ressources Spécialisées",
      description: "Documentation et guides techniques",
      sources: [
        {
          name: "ANSSI",
          url: "https://www.ssi.gouv.fr"
        },
        {
          name: "Microsoft Learn",
          url: "https://learn.microsoft.com"
        },
        {
          name: "Cisco Learning Network",
          url: "https://learningnetwork.cisco.com"
        }
      ]
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
              <button onClick={() => scrollToSection('education')} className="text-white/70 hover:text-white transition-colors">Formation</button>
              <button onClick={() => scrollToSection('projects')} className="text-white/70 hover:text-white transition-colors">Projets & Réalisations</button>
              <button onClick={() => scrollToSection('skills')} className="text-white/70 hover:text-white transition-colors">Compétences</button>
              {/* <button onClick={() => scrollToSection('veille')} className="text-white/70 hover:text-white transition-colors">Veille Informatique</button> */}
            </div>

            <div className="hidden md:flex space-x-4">
              <a href="mailto:killiangaurin@gmail.com" className="p-2 text-white/70 hover:text-fuchsia-400 transition-colors">
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
                  <p className="text-white/60">Maitrise des hyperviseurs de type 1 et 2</p>
                </div>
              </div>
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
              
            
              {/* BAC */}
              <div className="relative pl-24 pb-16">
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
                        <span className="text-white/70">Baccalauréat Scientifique option Sciences de l'Ingénieur</span>                        
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
                      {/* <div className="mt-6 p-4 bg-fuchsia-500/10 rounded-xl">
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
                      </div> */}
                    </div>
                   </div>
                </div>
              </div>

                {/* BTS */}
                <div className="relative pl-24 ">
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
                      <p className="text-white/70">
                          <button
                            onClick={() => setShowSpieModal(true)}
                            className="text-purple-400 hover:text-purple-300 transition-colors underline decoration-purple-400/30 hover:decoration-purple-300">
                            En alternance chez SPIE ICS
                          </button>
                        </p>
                        <ul className="mt-4 space-y-2">
                          <li className="flex items-center space-x-3">
                            <span className="w-1.5 h-1.5 bg-purple-400 rounded-full"></span>
                            <span className="text-white/70">Gestion parc informatique</span>
                          </li>
                          <li className="flex items-center space-x-3">
                            <span className="w-1.5 h-1.5 bg-purple-400 rounded-full"></span>
                            <span className="text-white/70">Gestion AD</span>
                          </li>
                          <li className="flex items-center space-x-3">
                            <span className="w-1.5 h-1.5 bg-purple-400 rounded-full"></span>
                            <span className="text-white/70">Masterisation</span>
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

      {/* Modal SPIE ICS */}
      {showSpieModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80">
          <div className="relative w-full max-w-4xl max-h-[80vh] overflow-y-auto bg-[#030014] rounded-2xl border border-white/10 backdrop-blur-xl">
            <button
              onClick={() => setShowSpieModal(false)}
              className="absolute top-4 right-4 p-2 text-white/70 hover:text-white transition-colors"
            >
              <Close size={24} />
            </button>
            <div className="p-8">
              <div className="flex items-center gap-6 mb-8">
                <div className="p-4 rounded-xl bg-purple-500/10">
                  <Building2 className="text-purple-400" size={40} />
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-white mb-2">{spieInfo.name}</h3>
                  <p className="text-xl text-white/70">{spieInfo.type}</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div className="flex items-center gap-4 p-4 bg-white/5 rounded-xl">
                  <MapPin className="text-purple-400" size={24} />
                  <div>
                    <p className="text-sm text-white/50">Localisation</p>
                    <p className="text-lg text-white">{spieInfo.location}</p>
                  </div>
                </div>
                
                <a href={spieInfo.pdf} target='_blank' rel='noopener noreferrer' className="flex items-center gap-4 p-4 bg-white/5 rounded-xl hover:bg-violet-800/30 transition text-lg text-white/80 ">
                <FileText2 className="text-purple-400 group-hover:scale-110 transition-transform" size={32} />
                  Présentation
                  
                </a>
                {/* <div className="flex items-center gap-4 p-4 bg-white/5 rounded-xl">
                  <Users2 className="text-purple-400" size={24} />
                  <div>
                    <p className="text-sm text-white/50">Effectif</p>
                    <p className="text-lg text-white">{spieInfo.size}</p>
                  </div>
                </div> */}
              </div>

              <div className="mb-8">
                <h4 className="text-xl font-bold text-white mb-4">Description</h4>
                <p className="text-white/70 leading-relaxed">{spieInfo.description}</p>
              </div>

              {/* <div className="mb-8">
                <h4 className="text-xl font-bold text-white mb-4">Services</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {spieInfo.services.map((service, index) => (
                    <div key={index} className="flex items-center gap-3 p-3 bg-purple-500/10 rounded-xl">
                      <span className="w-1.5 h-1.5 rounded-full bg-purple-400"></span>
                      <span className="text-white/70">{service}</span>
                    </div>
                  ))}
                </div>
              </div> */}

              <div className="mb-8">
                <h4 className="text-xl font-bold text-white mb-4">Missions en alternance</h4>
                <div className="space-y-3">
                  {spieInfo.missions.map((mission, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-purple-400"></span>
                      <span className="text-white/70">{mission}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* <div>
                <h4 className="text-xl font-bold text-white mb-4">Compétences développées</h4>
                <div className="flex flex-wrap gap-3">
                  {spieInfo.skills.map((skill, index) => (
                    <span
                      key={index}
                      className="px-4 py-2 rounded-xl text-sm bg-purple-500/10 text-purple-300 border border-purple-500/50"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div> */}
            </div>
          </div>
        </div>
      )}

      {/* Projets */}
      <section id="projects" className="py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-[#030014] to-transparent opacity-50"></div>
        <div className="container mx-auto px-4 relative">
          <div className="relative mb-16">
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg blur opacity-20"></div>
            <h2 className="relative text-5xl font-black text-center">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-fuchsia-500 to-pink-500">
                Projets & Réalisations
              </span>
            </h2>
          </div>
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 gap-8">
              {projects.map((project, index) => (
                <div
                  key={index}
                  className={`group relative overflow-hidden transition-all duration-500 transform hover:scale-105 rounded-2xl border border-white/10 backdrop-blur-lg ${hoverClasses[project.color]} cursor-pointer`}
                  onClick={() => setSelectedProject(index)}
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
                            <span key={tagIndex} className={`px-4 py-2 rounded-xl text-sm ${colorClasses[project.color]}`}>
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

      {/* Modal pour les détails du projet */}
      {selectedProject !== null && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80">
          <div className="relative w-full max-w-4xl max-h-[80vh] overflow-y-auto bg-[#030014] rounded-2xl border border-white/10 backdrop-blur-xl">
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 p-2 text-white/70 hover:text-white transition-colors"
            >
              <Close size={24} />
            </button>
            <div className="p-8">
              <div className="flex items-center gap-6 mb-8">
                <div className={`p-4 rounded-xl bg-${projects[selectedProject].color}-500/10`}>
                  {projects[selectedProject].icon}
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-white mb-2">{projects[selectedProject].title}</h3>
                  <p className="text-xl text-white/70">{projects[selectedProject].description}</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
                <a
                  href={projects[selectedProject].procedureFile}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-colors group"
                >
                  <FileText2 className={`text-${projects[selectedProject].color}-400 group-hover:scale-110 transition-transform duration-300`} size={24} />
                  <span className="text-lg text-white group-hover:text-white/90 transition-colors">Procédure</span>
                </a>
                {/* <div className="flex items-center gap-4 p-4 bg-white/5 rounded-xl">
                  <Users className={`text-${projects[selectedProject].color}-400`} size={24} />
                  <div>
                    <p className="text-sm text-white/50">Taille de l'équipe</p>
                    <p className="text-lg text-white">{projects[selectedProject].team}</p>
                  </div>
                </div> */}
              </div>

              <div className="mb-8">
                <h4 className="text-xl font-bold text-white mb-4">Description détaillée</h4>
                <p className="text-white/70 leading-relaxed">{projects[selectedProject].fullDescription}</p>
              </div>

              <div className="mb-8">
                <h4 className="text-xl font-bold text-white mb-4">Technologies utilisées</h4>
                <div className="flex flex-wrap gap-3">
                  {projects[selectedProject].technologies.map((tech, index) => (
                    <span
                      key={index}
                      className={`px-4 py-2 rounded-xl text-sm ${colorClasses[projects[selectedProject].color]}`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

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

      {/* Veille informatique */}
      {/* <section id="veille" className="py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-950/20 to-transparent"></div>
        <div className="container mx-auto px-4 relative">
          <div className="relative mb-16">
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg blur opacity-20"></div>
            <h2 className="relative text-5xl font-black text-center">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-fuchsia-500 to-pink-500">
                Veille Informatique
              </span>
            </h2>
          </div>
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {veilleSources.map((source, index) => (
                <div key={index} className="group relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-2xl"></div>
                  <div className="relative bg-white/5 p-8 rounded-2xl border border-white/10 backdrop-blur-lg group-hover:border-purple-500/50 transition-all duration-500">
                    <div className="flex items-center gap-4 mb-6">
                      {source.icon}
                      <h3 className="text-2xl font-bold text-white">{source.title}</h3>
                    </div>
                    <p className="text-white/70 mb-6">{source.description}</p>
                    <ul className="space-y-4">
                      {source.sources.map((item, itemIndex) => (
                        <li key={itemIndex}>
                          <a
                            href={item.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-3 text-white/70 hover:text-white transition-colors group"
                          >
                            <Link size={16} className="text-purple-400 group-hover:scale-110 transition-transform" />
                            <span>{item.name}</span>
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section> */}
    </div>
  );
}

export default App;