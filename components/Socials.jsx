'use client';

import {  } from '@coreui/react';

import {
  RiYoutubeFill, 
  RiLinkedinFill, 
  RiGithubFill, 
  RiFacebookFill, 
  RiInstagramFill,
} from 'react-icons/ri';

import Link from 'next/link';

const icons = [
  {
    path: '/',
    name: <RiYoutubeFill />,
  },
  {
    path: 'https://www.linkedin.com/in/harshitkapil07',
    name: <RiLinkedinFill />,
  },
  {
    path: 'https://github.com/ARK-0707',
    name: <RiGithubFill />,
  },
  {
    path: '/',
    name: <RiFacebookFill />,
  },
  {
    path: 'https://www.instagram.com/harshitkapil77',
    name: <RiInstagramFill />,
  },
]

const Socials = ({containerStyles, iconsStyles}) => {
  return (
    <div className={`${containerStyles}`}>
      {icons.map((icon, index)=>{
        return <Link href={icon.path} key={index}>
          <div className={`${iconsStyles}`}>{icon.name}</div>
        </Link>
      })}
    </div>
  )
}

export default Socials