'use client';

import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { User, MailIcon, ArrowRightIcon, MessageSquare } from "lucide-react";

const Form = () => {
    
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
        
        emailjs
            .sendForm('service_6s87tsj', 'template_rtngxxz', form.current, {
                publicKey: 'qo1d0zah_GuazxMW-',
            })
            .then(
                () => {
                    window.alert('SUCCESS!');
                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );
    };

  return (
    <form ref={form} onSubmit={sendEmail} className='flex flex-col gap-y-4'>
        {/* input */}
        <div className='relative flex items-center'>
            <Input type="text" name="user_name" id='name' placeholder='Name' />
            <User className='absolute right-6' size={20} />
        </div>
        {/* email */}
        <div className='relative flex items-center'>
            <Input name="user_email" type='email' id='email' placeholder='Email' />
            <MailIcon className='absolute right-6' size={20} />
        </div>
        {/* textarea */}
        <div className='relative flex items-center'>
            <Textarea name="message" placeholder='Type Your Message Here...' />
            <MessageSquare className='absolute top-4 right-6' size={20} />
        </div>
        <Button type='submit' value='Send' className='flex items-center gap-x-1 max-w-[166px]'>Let's Talk
            <ArrowRightIcon size={20} />
        </Button>
    </form>
  );
};

export default Form;