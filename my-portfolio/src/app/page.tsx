const experience = [
  {
    title: "Cloud Services Intern",
    company: "LDI Connect",
    period: "May 2025 – August 2025",
    details: [
      "Provided Tier 3/4 technical support for advanced cloud, endpoint, and network security operations across client environments.",
      "Deployed and maintained Unifi firewalls and switches, ensuring secure, scalable physical network infrastructure for SMB and enterprise clients.",
      "Delivered executive briefings on strategic AI integration into LDI's internal infrastructure and business workflows—covering platform selection, risk analysis, deployment architecture, and model testing.",
      "Designed secure, compliant AI system architectures, including sandbox environments for LLM evaluation, workflow automation integration, and model governance.",
      "Led a separate executive session on Microsoft Lighthouse implementation, positioning it as a centralized management and visibility tool for client environments.",
      "Participated in vendor vetting and sales calls, contributing to strategic evaluation of third-party solutions for security, interoperability, and business alignment.",
      "Supported enterprise cloud security across Microsoft 365, Datto, Huntress, SentinelOne, and MimeCast ecosystems, aligning technical delivery with compliance and risk management requirements."
    ]
  },
  {
    title: "Networking Engineer",
    company: "University IT Department",
    period: "2025–Present",
    details: [
      "Lead physical network infrastructure operations across campus, including switch installations, UPS deployments, rack management, and structured cabling.",
      "Responsible for virtual network configuration and security, including VLAN segmentation, port security enforcement, and firewall policy configuration across academic and administrative environments.",
      "Coordinate with senior engineers on network segmentation strategies, ensuring compliance with university security policies and support for multi-tenant environments (e.g., labs, dorms, admin).",
      "Administer and optimize routing protocols, switch provisioning, and network hardening procedures to support 24/7 connectivity and secure internal services.",
      "Previously served as an Audio Visual Junior Engineer (2023–2025), managing AV deployments, smart classroom tech integration, and campus-wide device configuration before promotion to Networking Engineer."
    ]
  },
  {
    title: "Founder & Owner of Cybernex Academy",
    period: "2024–Present",
    details: ["Founded and operate a cybersecurity education platform."]
  },
  {
    title: "Founder & President of the SHU Cybersecurity Club",
    company: "SHU Cybersecurity Club",
    period: "2024–Present",
    details: [
      "Founded the SHU Cybersecurity Club in 2024 and serve as president.",
      "Lead the club in organizing and participating in numerous CTF competitions."
    ]
  },
  {
    title: "Tech Team Member",
    company: "Welch Corporate Structure",
    period: "2025–Present",
    details: [
      "Coordinate with the deans of the business and technology schools to assist with tech projects, including website development and security awareness initiatives.",
      "Lead and support projects to engage and inform the student body on technology topics."
    ]
  }
];

const certifications = [
  {
    name: "Red Hat System Administration I (RH124 - RHA) - Ver. 9.3",
    link: "https://www.credly.com/badges/26705321-941d-4f6d-9313-bd045e92203e/public_url"
  },
  {
    name: "ISC2 Certified in Cybersecurity (CC)",
    link: "https://www.credly.com/badges/58c80045-5802-449f-9e82-da8b5afbdf5b/public_url"
  },
  {
    name: "IBM Cybersecurity Fundamentals",
    link: "https://www.credly.com/badges/0eff8cad-ded0-4123-a0b6-62eeade01111/public_url"
  },
  {
    name: "CISCO Introduction to Cybersecurity",
    link: "https://www.credly.com/badges/da1ce097-0868-4e09-b5a8-a3c9bcbc0ebf/public_url"
  },
  {
    name: "CISCO Network Defense",
    link: "https://www.credly.com/badges/d20268b2-046a-45b5-805c-6007a859814a/public_url"
  },
  {
    name: "CISCO Ethical Hacker",
    link: "https://www.credly.com/badges/2c190dc4-1a85-4935-ae84-0b357033ac8f/public_url"
  }
];

const projects = [
  {
    name: "RiskAI: AI Risk Assessment Agent",
    description: "Proof-of-concept AI agent for assessing a company&#39;s risk posture regarding emerging technologies. Uses a local LLM and a curated PDF corpus for Retrieval Augmented Generation (RAG) and actionable advice. [GitHub]",
    link: "https://github.com/Blackpenguin46/riskai"
  },
  {
    name: "CyberNex Sentinel",
    description: "Cybersecurity knowledge base and retrieval system with vector database integration. Features corpus building, FAISS indexing, and intelligent document retrieval for security research and analysis. [GitHub]",
    link: "https://github.com/Blackpenguin46/-cybernex-sentinel"
  },
  {
    name: "Hash Comparer",
    description: "Python tool for cryptographic analysis that compares hash outputs of three text files (two identical, one modified) to examine avalanche effect and demonstrate cryptographic hash function properties. [GitHub]",
    link: "https://github.com/Blackpenguin46/Hash-comparer"
  },
  {
    name: "MCM/ICM Paper on Global Governance for Cybersecurity",
    description: "Submitted for the MCM/ICM International Math Contest.",
    link: "/papers/2025 MCM-ICM Final Submission.pdf"
  },
  {
    name: "Usable Security and Privacy of Cryptocurrency in the Quantum Age",
    description: "Research paper on enhancing usable security and privacy of cryptocurrencies in the quantum era.",
    link: "/papers/Enhancing Usable Security and Privacy of Cryptocurrencies in the Quantum Age.pdf"
  },
  {
    name: "AI in Warfare Paper",
    description: "Research on AI in modern warfare (HTB, CTF, and cyber defense context)",
    link: "/papers/AIinwarfare[7424059].pdf"
  },
  {
    name: "Quantum Computing Implementation for Fortune 500 Insurance",
    description: "Advisory paper on implementing quantum computing into a Fortune 500 insurance company.",
    link: "https://github.com/Blackpenguin46/quantum-paper/blob/master/quantumpaper/quantumlockdownreport.pdf"
  }
];

const achievements = [
  "3rd at CCSC-E CTF",
  "Hack The Box University CTF 2024: Binary Badlands (Rank 793/1228)",
  "Hack The Box Cyber Apocalypse CTF 2025: Tales from Eldoria (Rank 1395/8129)",
  "Hack The Box Global Cyber Skills Benchmark CTF 2025: Operation Blackout (Rank 350/795)",
  "Splunk Boss of the SOC competition participant",
  "DoD Cyber Sentinel CTF participant",
  "MCM/ICM Math Contest competitor",
  "SEET International Tech Conference acceptance",
  "QuantumUP CT competitor"
];

const skills = [
  "Datto", "Huntress", "M365 suite", "SentinelOne", "MimeCast", "Unifi firewalls/switches", "Microsoft Lighthouse", "Physical/virtual networking", "Executive briefings", "Client support"
];

const education = [
  "B.Sc. in Cybersecurity (Undergraduate)"
];

export default function Home() {
  return (
    <div className="space-y-24 max-w-4xl mx-auto">
      {/* Hero/About Section */}
      <section className="mb-20" id="hero">
        <div className="bg-gray-900 border border-gray-800 rounded-2xl p-10 shadow-2xl flex flex-col md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="text-5xl md:text-6xl font-extrabold text-neon mb-4">Sam Oakes</h2>
            <p className="text-2xl text-gray-300 mb-6">Cybersecurity Undergrad | D1 Wrestler | Club Founder | Networking Engineer</p>
            <p className="max-w-xl text-gray-300 mb-6">President and founder of my university&#39;s cybersecurity club, Welch corporate structure tech team member, and founder of <a href="https://cybernexacademy.com" className="text-accent-purple underline">cybernexacademy.com</a>. Passionate about GRC, risk management, and helping people and businesses thrive in the digital age. Balancing academic excellence with Division 1 athletics. Deeply interested in philosophy, with Martin Heidegger&#39;s <em>Being and Time</em> being my favorite book.</p>
            <div className="flex gap-4 mb-2 flex-wrap">
              <a href="/SamOakescyberResume.pdf" download className="btn-accent">Download Resume</a>
              <a href="https://github.com/Blackpenguin46" target="_blank" rel="noopener" className="btn-outline">GitHub</a>
              <a href="https://cybernexacademy.com" target="_blank" rel="noopener" className="btn-outline">cybernexacademy.com</a>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="mb-20">
        <div className="bg-gray-950 border border-gray-800 rounded-2xl p-10 shadow-xl">
          <h3 className="text-3xl font-bold text-neon mb-8">Experience</h3>
          <div className="space-y-10">
            {experience.map((exp, idx) => (
              <div key={exp.title} className="bg-gray-900 border border-gray-800 rounded-xl p-6 shadow-md">
                <div className="font-semibold text-accent-purple text-xl mb-2">{exp.title} <span className="text-gray-400 font-normal">@ {exp.company}</span> <span className="text-gray-500 text-base">({exp.period})</span></div>
                <ul className="list-disc list-inside ml-4 text-gray-300 space-y-1">
                  {exp.details.map((d, i) => (
                    <li key={d} className={i % 2 === 0 ? 'text-white' : 'text-neon'}>{d}</li>
                  ))}
                </ul>
                {idx < experience.length - 1 && <div className="border-t border-gray-800 my-6" />}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="mb-20">
        <div className="bg-gray-950 border border-gray-800 rounded-2xl p-10 shadow-xl">
          <h3 className="text-3xl font-bold text-neon mb-8">Certifications</h3>
          <ul className="list-disc list-inside text-gray-300 ml-4 space-y-2">
            {certifications.map((cert) => (
              <li key={cert.name}>
                <a href={cert.link} target="_blank" rel="noopener" className="text-accent-purple underline hover:opacity-80 transition">{cert.name}</a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Projects & Publications Section */}
      <section id="projects" className="mb-20">
        <div className="bg-gray-950 border border-gray-800 rounded-2xl p-10 shadow-xl">
          <h3 className="text-3xl font-bold text-neon mb-8">Projects & Publications</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project) => (
              <div key={project.name} className="bg-gray-900 border border-gray-800 rounded-xl p-6 shadow hover:border-accentPurple transition-colors flex flex-col justify-between h-full">
                <div>
                  <h4 className="text-xl font-semibold text-accent-purple mb-2">{project.name}</h4>
                  <p className="text-gray-300 mb-4">{project.description}</p>
                </div>
                {project.link && (
                  <a href={project.link} className="text-neon underline text-sm hover:opacity-80 transition mt-auto" target="_blank" rel="noopener">View PDF</a>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section id="achievements" className="mb-20">
        <div className="bg-gray-950 border border-gray-800 rounded-2xl p-10 shadow-xl">
          <h3 className="text-3xl font-bold text-neon mb-8">Competitions & Achievements</h3>
          <ul className="list-disc list-inside text-gray-300 ml-4 space-y-2">
            {achievements.map((ach, i) => (
              <li key={ach} className={i % 2 === 0 ? 'text-white' : 'text-neon'}>{ach}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="mb-20">
        <div className="bg-gray-950 border border-gray-800 rounded-2xl p-10 shadow-xl">
          <h3 className="text-3xl font-bold text-neon mb-8">Skills & Tools</h3>
          <ul className="flex flex-wrap gap-3 text-gray-200">
            {skills.map((skill) => (
              <li key={skill} className="rounded px-3 py-1 bg-gray-800 border border-gray-700 text-sm mb-2">{skill}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="mb-20">
        <div className="bg-gray-950 border border-gray-800 rounded-2xl p-10 shadow-xl">
          <h3 className="text-3xl font-bold text-neon mb-8">Education</h3>
          <ul className="space-y-2">
            {education.map((edu) => (
              <li key={edu} className="text-gray-300 text-lg">{edu}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="mb-20">
        <div className="bg-gray-950 border border-gray-800 rounded-2xl p-10 shadow-xl">
          <h3 className="text-3xl font-bold text-neon mb-8">Contact</h3>
          <p className="text-gray-300 text-lg mb-2">Email: <a href="mailto:samoakescyber@proton.me" className="text-neon underline hover:opacity-80 transition">samoakescyber@proton.me</a></p>
          <p className="text-gray-300 text-lg">LinkedIn: <a href="https://linkedin.com/in/samoakes123" className="text-neon underline hover:opacity-80 transition" target="_blank" rel="noopener">samoakes123</a></p>
        </div>
      </section>
    </div>
  );
}
