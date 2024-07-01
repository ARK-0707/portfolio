'use client';
import Link from "next/link";
import { Button } from "./ui/button";

//import swiper react components
import { Swiper, SwiperSlide } from "swiper/react";

//import swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import {Pagination} from 'swiper/modules';

//components
import ProjectCard from '@/components/ProjectCard';


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

const Work = () => {
  return (
    <section className='relative mb-12 xl:mb-48'>
        <div className="container mx-auto">
            {/* text */}
            <div className='max-w-[400px] mx-auto xl:mx-0 text-center xl:text-left mb-12 xl:h-[400px] flex flex-col justify-center items-center xl:items-start'>
                <h2 className='section-title mb-4'>Latest Projects</h2>
                <p className='subtitle mb-8'>My code creations, brewed with coffee. Each project is a testament to my web development expertise.</p>
                <Link href='/projects'>
                    <Button>All projects</Button>
                </Link>
            </div>
            {/* slider */}
            <div className='xl:max-w-[1000px] xl:absolute right-0 top-0'>
                <Swiper className='h-[480px]' slidesPerView={1} breakpoints={{
                    640: {
                        slidesPerView: 2
                    }
                }} spaceBetween={30} modules={[Pagination]} pagination={{clickable: true}}>
                    {/* show only the first 4 projects for the slides */}
                    {projectData.slice(0, 4).map((project, index)=> {
                        return <SwiperSlide key={index}>
                            <ProjectCard project={project} />
                        </SwiperSlide>;
                    })}
                </Swiper>
            </div>
        </div>
    </section>
  )
}

export default Work;