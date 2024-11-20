import { motion } from 'framer-motion';
import { 
  Database, 
  BarChart, 
  Brain, 
  Code2, 
  GitBranch,
  Terminal
} from 'lucide-react';

const skills = [
  {
    category: "Data Analysis",
    icon: BarChart,
    items: ["Python", "Pandas", "NumPy", "SQL", "Data Visualization"]
  },
  {
    category: "Machine Learning",
    icon: Brain,
    items: ["Scikit-learn", "TensorFlow", "Statistical Modeling", "Feature Engineering"]
  },
  {
    category: "Big Data",
    icon: Database,
    items: ["Spark", "Hadoop"]
  },
  {
    category: "Programming",
    icon: Code2,
    items: ["Python", "SQL", "JavaScript"]
  },
  {
    category: "Version Control",
    icon: GitBranch,
    items: ["Git", "GitHub", "Code Review"]
  },
  {
    category: "Deep Learning",
    icon: Terminal,
    items: ["OpenCv", "Mediapipe", "Keras"]
  }
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-center mb-16"
        >
          Technical Skills
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.category}
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-center gap-3 mb-4">
                <skill.icon className="w-6 h-6 text-indigo-600" />
                <h3 className="text-xl font-semibold">{skill.category}</h3>
              </div>
              <ul className="space-y-2">
                {skill.items.map((item, itemIndex) => (
                  <motion.li
                    key={item}
                    initial={{ x: -20, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + itemIndex * 0.1 }}
                    className="text-gray-600"
                  >
                    {item}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}