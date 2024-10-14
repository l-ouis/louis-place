"use client";
import React from 'react';
import { useRouter } from 'next/navigation';
import { Title, Group, Image, Text, Stack, Card, Button, Code } from '@mantine/core'
import CodeIcon from '@mui/icons-material/Code';
import LanguageIcon from '@mui/icons-material/Language';

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

    const router = useRouter();

    const handleCardClick = () => {
        router.push(path);
    };

    const handleButtonClick = (event: React.MouseEvent<HTMLButtonElement>, link: string) => {
        event.stopPropagation();
        window.open(link, '_blank');
    };

    return (
        <Card shadow="sm" padding="lg" radius="md" withBorder onClick={handleCardClick} style={{ cursor: 'pointer' }}>
            <Stack>
                <Group>
                    <Title order={3}>{title}</Title>
                    {site && 
                        <Button onClick={(e) => handleButtonClick(e, site)}
                            color="rgba(235, 223, 204, 1)" c="rgba(99, 86, 77, 1)"
                        >
                            <LanguageIcon />
                        </Button>
                    }
                    {code && 
                        <Button onClick={(e) => handleButtonClick(e, code)}
                            color="rgba(235, 223, 204, 1)" c="rgba(99, 86, 77, 1)"
                        >
                            <CodeIcon />
                        </Button>
                    }
                </Group>
                <Text>{desc}</Text>
            </Stack>
        </Card>
    );
};

export default ProjectComponent;