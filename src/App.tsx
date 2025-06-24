import type React from 'react';
import { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Phone, MessageCircle, X, Send, ExternalLink } from 'lucide-react';

// Project Data
const projectsData = [
  {
    title: "COVID-19 Outcome Prediction",
    description: "Predicts COVID-19 outcomes from Kaggle data, comparing SVM and KNN algorithms.",
    tags: ["SVM", "KNN", "Scikit-learn"],
    link: "https://github.com/faisal-khrisan/COVID-19-Outcome-Prediction/tree/main",
    image: "https://placehold.co/600x400/112240/64ffda?text=COVID-19+Prediction"
  },
  {
    title: "Social-Media-Engagement-Analysis",
    description: "Machine learning-based analysis of user engagement trends on social media using supervised and unsupervised learning.",
    tags: ["Scikit-learn", "Classifications", "Clustering"],
    link: "https://github.com/faisal-khrisan/Social-Media-Engagement-Analysis",
    image: "https://placehold.co/600x400/112240/64ffda?text=Social+Media+Analytics"
  },
  {
    title: "E-commerce Customer Analytics",
    description: "Analyzed customer behavior to predict spending and satisfaction with various ML models.",
    tags: ["RandomForest", "Logistic Regression", "SVM", "KNN"],
    link: "https://github.com/faisal-khrisan/E-commerce-Customer-spending-and-satisfaction-level-prediction",
    image: "https://placehold.co/600x400/112240/64ffda?text=E-commerce+Analytics"
  },
  {
    title: "TechTalks-with-Faisal Blog",
    description: "A full-stack blog application built with Flask and PostgreSQL, HTML/CSS (Bootstrap), deployed on Render.",
    tags: ["Flask", "Python", "PostgreSQL"],
    link: "https://github.com/faisal-khrisan/TechTalks-with-Faisal",
    image: "https://placehold.co/600x400/112240/64ffda?text=Tech+Blog"
  },
  {
    title: "WinderWise (Travel Genie)",
    description: "An intelligent travel plan generation and suggestion app from a team hackathon, using Gemini and Firebase.",
    tags: ["Typescript", "React", "Gemini", "Firebase"],
    link: "https://github.com/faisal-khrisan/WanderWise",
    image: "https://placehold.co/600x400/112240/64ffda?text=Travel+Genie+AI"
  },
  {
    title: "Shifu App",
    description: "A cross-platform mobile application developed in a team hackathon using Flutter.",
    tags: ["Flutter", "Flask", "Firebase", "Gemini", "Qween AI"],
    link: "https://github.com/faisal-khrisan/Shifo",
    image: "https://placehold.co/600x400/112240/64ffda?text=Shifu+App"
  },
  {
    title: "Automated LinkedIn Job Bot",
    description: "A Python script using Selenium to automatically apply for jobs on LinkedIn.",
    tags: ["Selenium", "Python", "Automation"],
    link: "https://github.com/faisal-khrisan/Automated-Linkedin-job-applier-bot",
    image: "https://placehold.co/600x400/112240/64ffda?text=LinkedIn+Bot"
  },
  {
    title: "House Price Prediction",
    description: "Developed a Multi-Linear Regression model to predict house prices from various features.",
    tags: ["Multi-Linear Regression", "Python"],
    link: "https://github.com/faisal-khrisan/Predicting-House-Price",
    image: "https://placehold.co/600x400/112240/64ffda?text=House+Price+Prediction"
  },
  {
    title: "Alumni Management System",
    description: "A team project to develop a web app for alumni management with PHP and MySQL.",
    tags: ["PHP", "MySQL", "Bootstrap", "Javascript"],
    link: "https://github.com/faisal-khrisan/Alumni-management",
    image: "https://placehold.co/600x400/112240/64ffda?text=Alumni+System"
  }
];

// Skills Data
const skillsByCategory = {
  "Data Science & ML": ["Machine Learning", "Data Analysis", "Scikit-learn", "Pandas", "NumPy", "Matplotlib", "Seaborn", "Plotly", "Streamlit"],
  "Web Development": ["HTML", "CSS", "Tailwind CSS", "JavaScript", "React", "Flask", "Bootstrap"],
  "Languages": ["Python", "Java", "PHP", "C"],
  "Databases & Backend": ["MySQL", "PostgreSQL", "SQLAlchemy", "Firebase"],
  "Tools & Automation": ["Git & GitHub", "Google Colab", "Postman", "Selenium", "BeautifulSoup", "Tkinter"]
};

// Timeline Data
const timelineData = [
  {
    year: "2025",
    title: "AI & Machine Learning Focus",
    description: "Deepening expertise in machine learning algorithms, AI applications, and advanced data science techniques",
    company: "Current Studies"
  },
  {
    year: "2024",
    title: "Web Development & Full-Stack Projects",
    description: "Built comprehensive web applications, participated in hackathons, and developed full-stack solutions using modern frameworks",
    company: "Development Projects"
  },
  {
    year: "2023-2024",
    title: "Computer Science Studies",
    description: "Started Computer Science degree with focus on programming fundamentals, algorithms, and software engineering principles",
    company: "University"
  }
];

function App() {
  const [activeTab, setActiveTab] = useState("Data Science & ML");
  const [showAllProjects, setShowAllProjects] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [chatMessages, setChatMessages] = useState([
    { sender: 'ai', text: "Hi there! How can I help you learn more about Faisal's work?", id: Date.now() }
  ]);
  const [chatInput, setChatInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);

  // Custom Cursor Effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });

      // Create cursor trail
      const trail = document.createElement('div');
      trail.className = 'cursor-trail';
      trail.style.left = `${e.clientX}px`;
      trail.style.top = `${e.clientY}px`;
      document.body.appendChild(trail);

      setTimeout(() => {
        if (trail.parentNode) {
          trail.parentNode.removeChild(trail);
        }
      }, 500);
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    const handleMouseEnter = () => setIsHovering(true);
    const handleMouseLeave = () => setIsHovering(false);

    // Add event listeners
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);

    // Add hover effects to interactive elements
    const interactiveElements = document.querySelectorAll('a, button, [role="button"], input, textarea');
    for (const element of interactiveElements) {
      element.addEventListener('mouseenter', handleMouseEnter);
      element.addEventListener('mouseleave', handleMouseLeave);
    }

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);

      for (const element of interactiveElements) {
        element.removeEventListener('mouseenter', handleMouseEnter);
        element.removeEventListener('mouseleave', handleMouseLeave);
      }
    };
  }, []);

  // Intersection Observer for animations
  useEffect(() => {
    const sections = document.querySelectorAll('.fade-in-section');
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
          }
        }
      },
      { threshold: 0.1 }
    );

    for (const section of sections) {
      observer.observe(section);
    }
    return () => observer.disconnect();
  }, []);

  // Chat functionality
  const portfolioContext = `
    You are a friendly and professional AI assistant for Faisal Khrisan. Your purpose is to answer questions from visitors about Faisal's portfolio. Base your answers ONLY on the information provided below. Do not make up information. If a question is outside this scope, politely say that you can only answer questions about Faisal's work and skills.

    INFORMATION:
    - Name: Faisal Khrisan
    - Bio: A motivated Computer Science student with strong skills in programming and problem-solving. He enjoys working on projects that challenge him and is committed to continuous learning.

    - Projects:
        1. COVID-19 Outcome Prediction: A machine learning model comparing SVM and KNN to predict outcomes from Kaggle data.
        2. Social-Media-Engagement-Analysis: Uses supervised and unsupervised learning (classification, clustering) to analyze user engagement.
        3. E-commerce Customer Analytics: Predicts customer spending and satisfaction using models like RandomForest and Logistic Regression.
        4. TechTalks-with-Faisal Blog: A full-stack blog built with Flask and PostgreSQL.
        5. WinderWise (Travel Genie): An AI travel suggestion app from a team hackathon, using React, Typescript, Gemini and Firebase.
        6. Shifu App: A cross-platform mobile app from a team hackathon using Flutter, Flask, Firebase, and Gemini.
        7. Automated LinkedIn Job Bot: A Python script using Selenium to automate job applications.
        8. House Price Prediction: A multi-linear regression model in Python.
        9. Alumni Management System: A team project for a web app using PHP, MySQL, and Bootstrap.

    - Skills:
        - Programming Languages: Python, Java, PHP, C
        - Web Development: HTML, CSS, Tailwind CSS, JavaScript, Bootstrap, Flask, React
        - Databases & Backend: MySQL, PostgreSQL, SQLAlchemy, Firebase
        - Data Science & ML: Machine Learning, Data Analysis, Scikit-learn, Pandas, NumPy
        - Visualization: Matplotlib, Seaborn, Plotly, Streamlit
        - Web Scraping & Automation: Selenium, BeautifulSoup
        - GUI Development: Tkinter
        - Tools: Git & GitHub, Google Colab, Postman

    - Contact details: Email: faisalkhrisan@gmail.com, LinkedIn: https://www.linkedin.com/in/faisal-khrisan-834280287/, GitHub: https://github.com/faisal-khrisan, phone: +60 196 954 184 for WhatsApp and calls.

    - Tone: Friendly, professional, and helpful. Keep responses concise and to the point.
  `;

  const handleChatSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!chatInput.trim()) return;

    const userMessage = chatInput.trim();
    setChatMessages(prev => [...prev, { sender: 'user', text: userMessage, id: Date.now() }]);
    setChatInput('');
    setIsTyping(true);

    try {
      // Get API key from environment variables
      const GEMINI_API_KEY = import.meta.env.VITE_GEMINI_API_KEY;

      if (!GEMINI_API_KEY) {
        throw new Error('API key not configured');
      }

      // Prepare chat history for Gemini API
      const chatHistory = [
        { role: "user", parts: [{ text: portfolioContext }] },
        ...chatMessages.map(msg => ({
          role: msg.sender === 'user' ? 'user' : 'model',
          parts: [{ text: msg.text }]
        })),
        { role: "user", parts: [{ text: userMessage }] }
      ];

      const payload = { contents: chatHistory };
      const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${GEMINI_API_KEY}`;

      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });

      if (!response.ok) {
        throw new Error(`API error: ${response.statusText}`);
      }

      const result = await response.json();

      let aiResponse = "Sorry, I couldn't process that. Please try again.";
      if (result.candidates?.[0]?.content?.parts[0]?.text) {
        aiResponse = result.candidates[0].content.parts[0].text;
      }

      setChatMessages(prev => [...prev, { sender: 'ai', text: aiResponse, id: Date.now() + 1 }]);
    } catch (error) {
      console.error('Chat error:', error);
      let errorMessage = "Sorry, I'm having trouble connecting right now. Please try again later.";

      if (error instanceof Error && error.message === 'API key not configured') {
        errorMessage = "Chat is currently unavailable. The API key needs to be configured.";
      }

      setChatMessages(prev => [...prev, { sender: 'ai', text: errorMessage, id: Date.now() + 2 }]);
    } finally {
      setIsTyping(false);
    }
  };

  const visibleProjects = showAllProjects ? projectsData : projectsData.slice(0, 6);

  return (
    <div className="min-h-screen bg-[#0a192f] text-[#ccd6f6]">
      {/* Custom Cursor */}
      <div
        className={`custom-cursor ${isHovering ? 'hover' : ''} ${isClicking ? 'click' : ''}`}
        style={{
          left: `${cursorPosition.x}px`,
          top: `${cursorPosition.y}px`,
        }}
      />
      {/* Navigation */}
      <nav className="glass-effect fixed w-full z-50 top-0">
        <div className="container-custom">
          <div className="flex items-center justify-between py-4">
            <div className="text-2xl font-bold text-teal-300">
              FK.
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#home" className="nav-link">Home</a>
              <a href="#about" className="nav-link">About</a>
              <a href="#projects" className="nav-link">Projects</a>
              <a href="#skills" className="nav-link">Skills</a>
              <a href="#timeline" className="nav-link">Timeline</a>
              <a href="#contact" className="nav-link">Contact</a>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-gray-300"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden py-4 space-y-2">
              <a href="#home" className="block nav-link">Home</a>
              <a href="#about" className="block nav-link">About</a>
              <a href="#projects" className="block nav-link">Projects</a>
              <a href="#skills" className="block nav-link">Skills</a>
              <a href="#timeline" className="block nav-link">Timeline</a>
              <a href="#contact" className="block nav-link">Contact</a>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center section-padding pt-32">
        <div className="container-custom">
          <div className="max-w-4xl">
            <p className="text-lg accent-color mb-4">Hi, my name is</p>
            <h1 className="text-5xl md:text-7xl font-bold text-gray-100 mb-4">
              Faisal Khrisan.
            </h1>
            <h2 className="text-4xl md:text-6xl font-bold text-gray-400 mb-6">
              I build things with data and AI.
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mb-8">
              I'm a passionate developer specializing in Data Science and Artificial Intelligence,
              turning complex datasets into insightful stories and building intelligent systems
              that solve real-world problems.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#projects" className="btn-primary">
                View My Work
              </a>
              <div className="flex items-center space-x-4 ml-4">
                <a href="https://github.com/faisal-khrisan" target="_blank" rel="noopener noreferrer" className="social-link">
                  <Github size={24} />
                </a>
                <a href="https://www.linkedin.com/in/faisal-khrisan-834280287/" target="_blank" rel="noopener noreferrer" className="social-link">
                  <Linkedin size={24} />
                </a>
                <a href="mailto:faisalkhrisan@gmail.com" className="social-link">
                  <Mail size={24} />
                </a>
                <a href="tel:+60196954184" className="social-link">
                  <Phone size={24} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section-padding fade-in-section">
        <div className="container-custom">
          <h2 className="text-4xl font-bold mb-12">
            <span className="accent-color">01.</span> About Me
          </h2>
          <div className="grid md:grid-cols-3 gap-10 items-center">
            <div className="md:col-span-2 space-y-6 text-lg text-gray-300">
              <p>
                I am a motivated Computer Science student with a strong interest in technology and innovation.
                My academic journey has equipped me with solid skills in programming and problem-solving.
              </p>
              <p>
                I enjoy working on projects that challenge me to think critically and lead to practical,
                impactful solutions. I am committed to continuous learning and am eager to contribute to
                the tech industry with my growing expertise and passion for new technologies.
              </p>
              <p>
                My focus areas include machine learning, data analysis, and full-stack web development,
                with experience in multiple programming languages and frameworks.
              </p>
            </div>
            <div className="flex justify-center">
              <div className="w-64 h-64 rounded-lg overflow-hidden relative group">
                <img
                  src="https://placehold.co/400x400/0a192f/64ffda?text=Faisal+K"
                  alt="Faisal Khrisan"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-teal-500/30 mix-blend-multiply group-hover:bg-transparent transition-all duration-300" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section-padding bg-[#112240] fade-in-section">
        <div className="container-custom">
          <h2 className="text-4xl font-bold mb-12">
            <span className="accent-color">02.</span> My Projects
          </h2>
          <p className="text-xl text-gray-400 mb-12 text-center max-w-3xl mx-auto">
            I have contributed to 20+ projects ranging from machine learning, web development,
            to mobile applications and automation tools.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {visibleProjects.map((project) => (
              <div key={project.title} className="project-card rounded-lg overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-100 mb-3">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 mb-4 text-sm leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span key={tag} className="skill-pill text-xs">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-teal-300 hover:text-teal-200 transition-colors"
                  >
                    <ExternalLink size={16} className="mr-2" />
                    View Project
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button
              onClick={() => setShowAllProjects(!showAllProjects)}
              className="btn-primary"
            >
              {showAllProjects ? 'Show Less' : 'View More Projects'}
            </button>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="section-padding fade-in-section">
        <div className="container-custom">
          <h2 className="text-4xl font-bold mb-12">
            <span className="accent-color">03.</span> My Skills
          </h2>
          <p className="text-xl text-gray-400 mb-12 text-center max-w-3xl mx-auto">
            I like to take responsibility to craft aesthetic user experiences using modern
            technologies and data-driven approaches.
          </p>

          <div className="max-w-4xl mx-auto">
            <div className="flex flex-wrap gap-4 mb-8 justify-center">
              {Object.keys(skillsByCategory).map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveTab(category)}
                  className={`tab-button ${activeTab === category ? 'active' : ''}`}
                >
                  {category}
                </button>
              ))}
            </div>

            <div className="tab-panel">
              <div className="skills-list justify-center">
                {skillsByCategory[activeTab as keyof typeof skillsByCategory].map((skill) => (
                  <span key={skill} className="skill-pill">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section id="timeline" className="section-padding bg-[#112240] fade-in-section">
        <div className="container-custom">
          <h2 className="text-4xl font-bold mb-12">
            <span className="accent-color">04.</span> Timeline
          </h2>
          <p className="text-xl text-gray-400 mb-12 text-center max-w-3xl mx-auto">
            A quick recap of my learning journey and key milestones.
          </p>

          <div className="max-w-3xl mx-auto">
            {timelineData.map((item) => (
              <div key={`${item.year}-${item.title}`} className="timeline-item">
                <div className="glass-effect p-6 rounded-lg">
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                    <h3 className="text-xl font-bold text-gray-100">
                      {item.title}
                    </h3>
                    <div className="flex flex-col md:items-end">
                      <span className="text-teal-300 font-semibold">
                        {item.year}
                      </span>
                      <span className="text-gray-400 text-sm">
                        {item.company}
                      </span>
                    </div>
                  </div>
                  <p className="text-gray-400">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section-padding fade-in-section">
        <div className="container-custom text-center">
          <h2 className="text-4xl font-bold mb-12">
            <span className="accent-color">05.</span> Get In Touch
          </h2>
          <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
            I'm currently open to new opportunities and collaborations. Whether you have a question
            or just want to say hi, my inbox is always open. I'll do my best to get back to you!
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="mailto:faisalkhrisan@gmail.com" className="btn-primary">
              Say Hello
            </a>
            <div className="flex items-center space-x-6">
              <a href="https://github.com/faisal-khrisan" target="_blank" rel="noopener noreferrer" className="social-link">
                <Github size={28} />
              </a>
              <a href="https://www.linkedin.com/in/faisal-khrisan-834280287/" target="_blank" rel="noopener noreferrer" className="social-link">
                <Linkedin size={28} />
              </a>
              <a href="mailto:faisalkhrisan@gmail.com" className="social-link">
                <Mail size={28} />
              </a>
              <a href="tel:+60196954184" className="social-link">
                <Phone size={28} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center text-gray-500">
        <div className="container-custom">
          <p className="mb-2">Designed & Built by Faisal Khrisan</p>
          <p className="text-sm">&copy; 2025 All Rights Reserved.</p>
        </div>
      </footer>

      {/* Chat Button */}
      <button
        onClick={() => setIsChatOpen(true)}
        className="fixed bottom-8 right-8 bg-teal-500 w-16 h-16 rounded-full flex items-center justify-center text-white shadow-lg hover:scale-110 transition-transform z-40"
      >
        <MessageCircle size={24} />
      </button>

      {/* Chat Modal */}
      {isChatOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="glass-effect w-full max-w-2xl h-3/4 rounded-lg shadow-2xl flex flex-col">
            <div className="p-4 border-b border-teal-500/20 flex justify-between items-center">
              <h3 className="text-xl font-bold text-white">Ask My AI Assistant ✨</h3>
              <button onClick={() => setIsChatOpen(false)} className="text-gray-400 hover:text-white">
                <X size={24} />
              </button>
            </div>

            <div className="flex-1 p-4 overflow-y-auto space-y-4">
              {chatMessages.map((message) => (
                <div key={message.id} className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-xs md:max-w-md p-3 rounded-lg ${
                    message.sender === 'user' ? 'chat-bubble-user' : 'chat-bubble-ai'
                  }`}>
                    {message.text}
                  </div>
                </div>
              ))}

              {isTyping && (
                <div className="flex justify-start">
                  <div className="chat-bubble-ai p-3 rounded-lg">
                    <div className="typing-indicator">
                      <span />
                      <span />
                      <span />
                    </div>
                  </div>
                </div>
              )}
            </div>

            <div className="p-4 border-t border-teal-500/20">
              <form onSubmit={handleChatSubmit} className="flex gap-2">
                <input
                  type="text"
                  value={chatInput}
                  onChange={(e) => setChatInput(e.target.value)}
                  placeholder="Ask about my projects or skills..."
                  className="flex-1 bg-gray-800 border border-gray-700 rounded-md py-2 px-3 text-white focus:outline-none focus:ring-2 focus:ring-teal-500"
                />
                <button type="submit" className="bg-teal-500 text-gray-900 font-bold py-2 px-4 rounded-md hover:bg-teal-400 transition-colors">
                  <Send size={16} />
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
