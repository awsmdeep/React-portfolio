import React from 'react';
import { PROJECTS } from '../constants';
import { motion } from 'framer-motion';
import { FaGithub } from 'react-icons/fa';
import { FaRegArrowAltCircleRight } from "react-icons/fa";

const Projects = () => {
    return (
        <div className='border-b border-neutral-900 pb-4'>
            <motion.h1
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -100 }}
                transition={{ duration: 0.5 }}
                className='my-20 text-center text-4xl font-thin tracking-tighter'
            >
                Projects
            </motion.h1>
            <div>
                {PROJECTS.map((project, index) => (
                    <div key={index} className='mb-8 flex flex-wrap lg:justify-center'>
                        <motion.div
                            whileInView={{ opacity: 1, x: 0 }}
                            initial={{ opacity: 0, x: -100 }}
                            transition={{ duration: 1 }}
                            className='w-full lg:w-1/4'
                        >
                            <img src={project.image} width={150} height={150} alt={project.title} className='mb-6 rounded' />
                        </motion.div>
                        <motion.div
                            whileInView={{ opacity: 1, x: 0 }}
                            initial={{ opacity: 0, x: 100 }}
                            transition={{ duration: 1 }}
                            className='w-full max-w-xl lg:w-3/4 p-4 sm:p-6 md:p-8'
                        >
                            <h6 className='mb-2 text-lg font-semibold'>{project.title}</h6>
                            <p className='mb-4 text-neutral-400'>{project.description}</p>
                            <div className='flex flex-wrap mb-4'>
                                {project.technologies.map((tech, index) => (
                                    <span key={index} className='mr-2 mb-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-900'>
                                        {tech}
                                    </span>
                                ))}
                            </div>
                            <a
                                href={project.github}
                                target='_blank'
                                rel='noopener noreferrer'
                                className='inline-flex items-center bg-purple-900 cursor-pointer p-2 rounded-lg text-sm text-gray-300 hover:bg-gray-300 hover:text-purple-900'
                            >
                                <FaGithub className='mr-1' /> GitHub <FaRegArrowAltCircleRight className='ml-2' />
                            </a>
                        </motion.div>

                    </div>
                ))}
            </div>
        </div>
    );
};

export default Projects;
