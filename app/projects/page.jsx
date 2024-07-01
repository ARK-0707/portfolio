'use client';
import React, {useState} from "react";
import { Tabs, TabsList, TabsContent, TabsTrigger } from "@/components/ui/tabs";
import ProjectCard from "@/components/ProjectCard";

const projectData = [
  {
      image: '/work/1.png',
      category: 'node js',
      name: 'Cooking Blog Website',
      description: 'Discover global flavors on Cooking Blog, a dynamic recipe hub built with Node.js, EJS, and MongoDB.',
      link: '/',
      github: 'https://github.com/ARK-0707/CookingBlog',
  },
  {
      image: '/work/5.png',
      category: 'Python',
      name: 'Chess App',
      description: 'Test your intelligence!! Play chess game built in python.',
      link: 'https://github.com/ARK-0707/Chess-Game',
      github: 'https://github.com/ARK-0707/Chess-Game',
  },
  {
      image: '/work/7.jpg',
      category: 'JavaScript',
      name: 'Age Calculator',
      description: 'Test your memory with Simon Game app, crafted with Javascript. Match the sequence and win!',
      link: 'https://ark-0707.github.io/age-calculator-app/',
      github: 'https://github.com/ARK-0707/age-calculator-app',
  },
  {
      image: '/work/2.png',
      category: 'react js',
      name: 'Weather App',
      description: 'Stay ahead of the weather with our sleek app, built with React.js and powered by the OpenWeather API.',
      link: 'https://ark-0707.github.io/Weather-App/',
      github: 'https://github.com/ARK-0707/Weather-App',
  },
  {
      image: '/work/6.png',
      category: 'Java',
      name: 'Sorting Algo Visualizer',
      description: 'Helps you to visualize the sorting algorithms in action. Built with Java and JavaFX.',
      link: 'https://github.com/ARK-0707/SortAlgoVisualizer',
      github: 'https://github.com/ARK-0707/SortAlgoVisualizer',
  },
  {
      image: '/work/3.png',
      category: 'JavaScript',
      name: 'Rock Paper Scissors',
      description: 'Rock, Paper, Scissors game responsive app built using HTML, CSS, and JavaScript.',
      link: 'https://ark-0707.github.io/RockPaperScissorsGame/',
      github: 'https://github.com/ARK-0707/RockPaperScissorsGame',
  },
  
  {
      image: '/work/4.png',
      category: 'JavaScript',
      name: 'Simon Game',
      description: 'Test your memory with Simon Game app, crafted with Javascript. Match the sequence and win!',
      link: 'https://ark-0707.github.io/SimonGame/',
      github: 'https://github.com/ARK-0707/SimonGame',
  },
];

// remove category duplicates
const uniqueCategories = [
  'all projects', 
  ...new Set(projectData.map((item) => item.category))
];

const Projects = () => {
  const [categories, setCategories] = useState(uniqueCategories);
  const [category, setCategory] = useState('all projects');

  const filteredProjects = projectData.filter(project => {
    // if category is 'all projects' return all projects, else filter by category
    return category === 'all projects' ? project : project.category === category;
  });
  
  return (
    <section className='min-h-screen pt-12'>
      <div className="container mx-auto">
        <h2 className='section-title mb-8 xl:mb-16 text-center mx-auto'>My Projects</h2>
        {/* tabs */}
        <Tabs defaultValue={category} className='mb-24 xl:mb-48'>
          <TabsList className='w-full grid h-full md:grid-cols-4 lg:max-w-[640px] mb-12 mx-auto md:border dark:border-none'>
            {categories.map((category, index)=> {
              return (
                <TabsTrigger 
                  onClick={()=> setCategory(category)}
                  value={category} 
                  key={index} 
                  className='capitalize w-[162px] md:w-auto'
                  >
                    {category}
                </TabsTrigger>
              );
            })}
          </TabsList>
          {/* tabs content */}
          <div className='text-lg xl:mt-8 grid grid-cols-1 lg:grid-cols-3 gap-4'>
            {filteredProjects.map((project, index) => {
              return (
                <TabsContent value={category} key={index}>
                  <ProjectCard project={project} />
                </TabsContent>
              );
            })}
          </div>
        </Tabs>
      </div>
    </section>
  );
};

export default Projects;