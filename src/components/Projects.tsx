import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import hyd_pred from "./hyd_pred.png"
import hotet_snt from './Hotel_sentiment.png'
import vision from './Visionhub.jpeg'
import heart from './Heart analysis.jpg'

const projects = [
  {
    title: "HR Data Driven Churn Analysis",
    description: "Built a machine learning model to predict customer churn using historical customer data. Achieved 89% accuracy using Random Forest.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
    tags: ["Python", "Scikit-learn", "Pandas", "Matplotlib"],
    github: "https://github.com/Naveen035/HR-Data-Driven-Churn-Analysis",
    demo: "https://example.com"
  },
  {
    title: "Hyderabad Land Price Predictor",
    description: "Developed a real estate price prediction model for Hyderabad using Linear Regression. Integrated web scraping, data cleaning, and interactive visualizations to showcase trends and predictions.",
    image: `${hyd_pred}`,
    tags: ["Python", "Pandas", "Streamlit", "Sicket-learn","Web Scraping"],
    github: "https://github.com/Naveen035/Hyderabad-Land-Price-Predictor",
    demo: "https://example.com"
  },
  {
    title: "VisionHub-OpenCv",
    description: "Developed VisionHub, a real-time computer vision tool using OpenCV and Haar Cascade Classifiers. Enabled face, eye, and object detection with interactive features through a Streamlit interface.",
    image: `${vision}`,
    tags: ["OpenCv", "Python", "Numpy", "Streamlit", "Haar Cascade Classifiers"],
    github: "https://github.com/Naveen035/VisionHub-OpenCv",
    demo: "https://example.com"
  },
  {
    title: "Hotel Reviews Sentiment Analysis",
    description: "Developed a sentiment analysis tool for hotel reviews using NLP techniques and machine learning models. Provided interactive visualizations to analyze sentiment trends and derive actionable insights.",
    image: `${hotet_snt}`,
    tags: ["Python", "Streamlit", "NLTK", "WordCloud"],
    github: "https://github.com/Naveen035/Hotel-Reviews-Sentiment-Analysis",
    demo: "https://example.com"
  },
  {
    title: "CryptoTrend Analyzer",
    description: "Developed CryptoTrend Analyzer, a Bitcoin price prediction tool using machine learning algorithms like Linear Regression and Random Forest. Incorporated interactive visualizations and a Streamlit-based UI for trend analysis and predictions.",
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=800&q=80",
    tags: ["Machine Learning","Python", "Pandas", "Streamlit", "Matplotlib"],
    github: "https://github.com/Naveen035/CryptoTrend-Analyzer",
    demo: "https://example.com"
  },
  {
    title: "Corona Layoff Analysis",
    description: "Analyzed layoff data during the COVID-19 pandemic across industries and regions. The project involved data cleaning and exploratory data analysis (EDA) to uncover trends, patterns, and the economic impact on employment. Key insights were derived from company, location, and industry-specific metrics.",
    image: `${heart}`,
    tags: ["MYSQL"],
    github: "https://github.com/Naveen035/Corona-Layoff-Analysis",
    demo: "https://example.com"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-center mb-16"
        >
          Featured Projects
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
                />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-indigo-50 text-indigo-600 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-600 hover:text-indigo-600 transition-colors"
                  >
                    <Github size={18} />
                    <span>Code</span>
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-600 hover:text-indigo-600 transition-colors"
                  >
                    <ExternalLink size={18} />
                    <span>Demo</span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
