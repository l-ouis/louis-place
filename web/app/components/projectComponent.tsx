"use client";
import React from 'react';
import Link from 'next/link';
import { Title, Group, Image, Text, Stack } from '@mantine/core'
import { useMobile } from '../utils/useMobile';
import CodeIcon from '@mui/icons-material/Code';
import LanguageIcon from '@mui/icons-material/Language';

import './projectComponent.css';

interface ProjectComponentProps {
    title: string;
    desc: string;
    path: string;
    site?: string;
    code?: string;
    image?: string;
    tags?: string[];
}

const pastelColors = [
    "#FFB3BA",
    "#FFDFBA",
    "#FFFFBA",
    "#BAFFC9",
    "#BAE1FF",
];

const ProjectComponent: React.FC<ProjectComponentProps> = ({ title, desc, path, site, code, image, tags }) => {

    const mobile = useMobile();

    function handleClick() {
        console.log('clicked');
    }

    return (
        <div className="w-[100%]">
            {!(mobile===2) ?
            <>
            <div className="w-[100%]">
                <Group className="ml-[11rem]">
                    {/* Manual logic for site and code handling :/ */}
                    <>
                    {(site && code) ? 
                    <>
                        <div className="tablink" 
                                    onClick={(e) => {
                                        e.preventDefault();
                                        window.open(site, '_blank');
                                    }}
                                    style={{ cursor: 'pointer' }}>
                            <Group className="relative">
                                <div style={{ width: '1rem' }} />
                                <LanguageIcon/>
                                Link
                            </Group>
                        </div>
                        <div className="tabcode" 
                                    onClick={(e) => {
                                        e.preventDefault();
                                        window.open(code, '_blank');
                                    }}
                                    style={{ cursor: 'pointer' }}>
                            <Group className="relative">
                                <div style={{ width: '1rem' }} />
                                <CodeIcon/>
                                Code
                            </Group>
                        </div>
                    </> :
                    <>
                    {site &&
                        <div className="tablink" 
                                    onClick={(e) => {
                                        e.preventDefault();
                                        window.open(site, '_blank');
                                    }}
                                    style={{ cursor: 'pointer' }}>
                            <Group className="relative">
                                <div style={{ width: '1rem' }} />
                                <LanguageIcon/>
                                Link
                            </Group>
                        </div>
                    }
                    {code && 
                        <div className="tablink" 
                                    onClick={(e) => {
                                        e.preventDefault();
                                        window.open(code, '_blank');
                                    }}
                                    style={{ cursor: 'pointer' }}>
                            <Group className="relative">
                                <div style={{ width: '1rem' }} />
                                <CodeIcon/>
                                Code
                            </Group>
                        </div>
                    }
                    </>
                    }
                    </>
                </Group>
            </div>
            <Link href={path} className="folderlink">
                <div 
                    className="folder h-[30vh] w-[100%] max-w-[43rem] p-4"
                    style={{ cursor: 'pointer' }}
                >
                    <div className="maintab">
                        <Title order={3} className="title underline">{title}</Title>
                    </div>
                    <Group>
                    <Text className="desc max-w-[60%]">
                        {desc}
                    </Text>
                    <Stack>
                        {tags?.map((tag, index) => {
                            return (
                                <div key={index} style={{ display: 'flex', alignItems: 'center', gap: '0' }}>
                                    <div
                                        style={{
                                            backgroundColor: pastelColors[index % pastelColors.length],
                                            color: '#000',
                                            width: '3rem',
                                            height: '2rem',
                                        }}
                                    />
                                    <div 
                                        style={{
                                            backgroundColor: 'rgba(255, 255, 255, 0.7)',
                                            height: '2rem',
                                            width: '7rem',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                        }}>
                                        {tag}
                                    </div>
                                </div>
                            );
                        })}
                    </Stack>
                    </Group>
                </div>
            </Link>
            </>
            :
            <>
            <Group justify="space-between">
                <Link href={path}>
                </Link>
                <Group>
                {site &&
                <LanguageIcon 
                    className="mb-[1rem]"
                    onClick={(e) => {
                        e.preventDefault();
                        window.open(site, '_blank');
                    }}
                    style={{ cursor: 'pointer' }}/>
                }
                {code &&
                <CodeIcon 
                    className="mb-[1rem]"
                    onClick={(e) => {
                        e.preventDefault();
                        window.open(code, '_blank');
                    }}
                    style={{ cursor: 'pointer' }}/>
                }
                </Group>
            </Group>
            <Link href={path} className="folderlink">
                <div 
                    className="folderMobile h-[20vh] w-[100%] p-4"
                    style={{ cursor: 'pointer' }}
                >
                    <div className="maintabMobile">
                        <Title order={3} className="title underline">{title}</Title>
                    </div>
                    <Text className="desc">
                        {desc}
                    </Text>
                </div>
            </Link>
            </>
            }
        </div>
    );
};

export default ProjectComponent;