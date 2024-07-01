import DevImg from "./DevImg";
import Image from "next/image";
import {Tabs, TabsContent, TabsList, TabsTrigger} from '@/components/ui/tabs';

import {
    User2Icon, 
    MailIcon, 
    HomeIcon, 
    PhoneCall, 
    GraduationCap, 
    Calendar, 
    Briefcase
} from 'lucide-react';

const infoData = [
    {
        icon: <User2Icon size={20} />,
        text: 'Harshit Kapil',
    },
    {
        icon: <PhoneCall size={20} />,
        text: '+91 8126720903',
    },
    {
        icon: <MailIcon size={20} />,
        text: 'harshitkap0707@gmail.com',
    },
    {
        icon: <Calendar size={20} />,
        text: 'Born on 7th July, 2002',
    },
    {
        icon: <GraduationCap size={20} />,
        text: 'Bachelor of Computer Science & Engineering',
    },
    {
        icon: <HomeIcon size={20} />,
        text: '21-A, Mill View Colony, Paper Mill Road, Saharanpur, U.P.',
    },
];

const qualificationData = [
    {
        title: 'education',
        data: [
            {
                university: 'DIT University',
                qualification: 'Bachelor of Technology',
                years: '2021 - present',
            },
            {
                university: 'Rainbow School',
                qualification: 'Higher Secondary Schooling with Physics, Chemistry and Mathematics',
                years: '2020 - 2021',
            },
            {
                university: 'Rainbow School',
                qualification: 'Secondary School',
                years: '2018 - 2019',
            },
        ]
    },
    {
        title: 'experience',
        data: [
            {
                company: 'CDC Student Committee',
                role: 'Secretary',
                years: '2024 - present',
            },
            {
                company: 'Debating Society',
                role: 'Advisor in Chief',
                years: 'June 2024 - present',
            },
            {
                company: 'Debating Society',
                role: 'Technical & Design Head',
                years: '2023 - 2024',
            },
        ]
    }
];

const skillData = [
    {
        title: 'skills',
        data: [
            {
                name: 'HTML, CSS, Javascript',
            },
            {
                name: 'React.js, Next.js',
            },
            {
                name: 'C, Java, Python',
            },
            {
                name: 'Node.js, Express.js',
            },
            {
                name: 'Database, MySQL, MongoDB',
            },
            {
                name: 'Git, Github',
            },
        ]
    },
    {
        title: 'tools',
        data: [
            {
                imgPath: '/about/vscode.svg',
            },
            {
                imgPath: '/about/figma.svg',
            },
            {
                imgPath: '/about/notion.svg',
            },
            {
                imgPath: '/about/github-mark.svg',
            },
        ]
    },
];

const About = () => {
    const getData = (arr, title) => {
        return arr.find((item) => item.title === title);
    };
  return (
    <section className='xl:h-[860px] pb-12 xl:py-24'>
        <div className="container max-auto">
            <h2 className='section-title mb-8 xl:mb-16 text-center mx-auto'>About Me</h2>
            <div className='flex flex-col xl:flex-row'>
                {/* image */}
                <div className='hidden xl:flex flex-1 relative overflow-hidden'>
                    <div className="bg-about_shape_light dark:bg-about_shape_dark w-[520px] h-[520px] rotate-180 bg-no-repeat relative flex">
                        <DevImg containerStyles='w-[450px] h-[450px] rotate-180 bg-no-repeat overflow-hidden relative mt-16 ml-8 rounded-[70px]' imgSrc='/about/developer.png' />
                    </div>
                </div>
                {/* tabs */}
                <div className='flex-1'>
                    <Tabs defaultValue='personal'>
                        <TabsList className="w-full grid xl:grid-cols-3 xl:max-w-[520px] xl:border dark:border-none">
                            <TabsTrigger className='w-[162px] xl:w-auto' value='personal'>Personal Info</TabsTrigger>
                            <TabsTrigger className='w-[162px] xl:w-auto' value = 'qualifications'>Qualifications</TabsTrigger>
                            <TabsTrigger className='w-[162px] xl:w-auto' value = 'skills'>Skills</TabsTrigger>
                        </TabsList>
                        {/* tabs content */}
                        <div className='text-lg mt-12 xl:mt-8'>
                            {/* personal */}
                            <TabsContent value='personal'>
                                <div className='text-center xl:text-left'>
                                    <h3 className='h3 mb-4'>Unmatched Service Quality for Over 1 Years</h3>
                                    <p className='subtitle max-w-xl mx-auto xl:mx-0'>I specialize in crafting intuitive websites with cutting-edge technology, delivering dynamic and engaging user experiences.</p>
                                    {/* icons */}
                                    <div className='grid xl:grid-cols-2 gap-4 mb-12'>
                                        {infoData.map((item, index)=> {
                                            return <div className='flex items-center gap-x-4 mx-auto xl:mx-0' key={index}>
                                                <div className='text-primary'>{item.icon}</div>
                                                <div>{item.text}</div>
                                            </div>
                                        })}
                                    </div>
                                    {/* languages */}
                                    <div className='flex flex-col gap-y-2'>
                                        <div className='text-primary'>Language Skill</div>
                                        <div className="border-b border-border"></div>
                                        <div>English, Hindi, Punjabi</div>
                                    </div>
                                </div>
                            </TabsContent>
                            {/* Qualification */}
                            <TabsContent value='qualifications'>
                                <div>
                                    <h3 className='h3 mb-8 text-center xl:text-left'>My Awesome Journey</h3>
                                    {/* experience & education wrapper */}
                                    <div className='grid md:grid-cols-2 gap-y-8'>
                                        {/* experience */}
                                        <div className='flex flex-col gap-y-6'>
                                            <div className='flex gap-x-4 items-center text-[22px] text-primary'>
                                                <Briefcase />
                                                <h4 className='capitalize font-medium'>
                                                    {getData(qualificationData, 'experience').title}
                                                </h4>
                                            </div>
                                            {/* list */}
                                            <div className='flex flex-col gap-y-8'>
                                                {getData(qualificationData, 'experience').data.map((item, index)=> {
                                                    const {company, role, years} = item;
                                                    return (
                                                        <div className='flex gap-x-8 group' key={index}>
                                                            <div className='h-[84px] w-[1px] bg-border relative ml-2'>
                                                                <div className='w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px] group-hover:translate-y-[84px] transition-all duration-500'></div>
                                                            </div>
                                                            <div>
                                                                <div className='font-semibold text-xl leading-none mb-2'>{company}</div>
                                                                <div className='text-lg leading-none text-muted-foreground mb-4'>{role}</div>
                                                                <div className='text-base font-medium'>{years}</div>
                                                            </div>
                                                        </div>
                                                    );
                                                })}
                                            </div>
                                        </div>
                                        {/* education */}
                                        <div className='flex flex-col gap-y-6'>
                                            <div className='flex gap-x-4 items-center text-[22px] text-primary'>
                                                <GraduationCap size={28} />
                                                <h4 className='capitalize font-medium'>
                                                    {getData(qualificationData, 'education').title}
                                                </h4>
                                            </div>
                                            {/* list */}
                                            <div className='flex flex-col gap-y-8'>
                                                {getData(qualificationData, 'education').data.map((item, index)=> {
                                                    const {university, qualification, years} = item;
                                                    return (
                                                        <div className='flex gap-x-8 group' key={index}>
                                                            <div className='h-[84px] w-[1px] bg-border relative ml-2'>
                                                                <div className='w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px] group-hover:translate-y-[84px] transition-all duration-500'></div>
                                                            </div>
                                                            <div>
                                                                <div className='font-semibold text-xl leading-none mb-2'>{university}</div>
                                                                <div className='text-lg leading-none text-muted-foreground mb-4'>{qualification}</div>
                                                                <div className='text-base font-medium'>{years}</div>
                                                            </div>
                                                        </div>
                                                    );
                                                })}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </TabsContent>
                            {/* Skills */}
                            <TabsContent value='skills'>
                                <div className='text-center xl:text-left'>
                                    <h3 className='h3 mb-8'>What I Use Everyday</h3>
                                    <div className='mb-16'>
                                        <h4 className='text-xl font-semibold mb-2'>Skills</h4>
                                        <div className='border-b border-border mb-4'></div>
                                        {/* skills list */}
                                        <div>
                                            {getData(skillData, 'skills').data.map((item, index)=> {
                                                const {name} = item;
                                                return <div className='w-2/4 text-center xl:text-left mx-auto xl:mx-0' key={index}>
                                                    <div className='font-medium'>{name}</div>
                                                </div>;
                                            })}
                                        </div>
                                    </div>
                                    {/* tools */}
                                    <div>
                                        <h4 className='text-xl font-semibold mb-2 xl:text-left'>Tools</h4>
                                        <div className='border-b border-border mb-4'></div>
                                        {/* tools list */}
                                        <div className='flex gap-x-8 justify-center xl:justify-start'>
                                            {getData(skillData, 'tools').data.map((item, index)=> {
                                                const {imgPath} = item;
                                                return <div key={index}>
                                                    <Image src={imgPath} width={48} height={48} alt="" priority />
                                                </div>
                                            })}
                                        </div>
                                    </div>
                                </div>
                            </TabsContent>
                        </div>
                    </Tabs>
                </div>
            </div>
        </div>
    </section>
  )
}

export default About