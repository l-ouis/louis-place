import React from 'react';
import { TypographyStylesProvider, Title, Group, Button, Divider } from '@mantine/core';
import { marked } from "marked";
import { useMobile } from '../utils/useMobile';
import CodeIcon from '@mui/icons-material/Code';
import LanguageIcon from '@mui/icons-material/Language';

interface ProjectPanelProps {
    title: string;
    link?: string;
    code?: string;
    content: string;
}


const handleButtonClick = (event: React.MouseEvent<HTMLButtonElement>, link: string) => {
    event.stopPropagation();
    window.open(link, '_blank');
};

const ProjectPanel: React.FC<ProjectPanelProps> = (props: ProjectPanelProps) => {
    const [htmlContent, setHtmlContent] = React.useState<string>('');
    const mobile = useMobile();

    React.useEffect(() => {
        const fetchMarkdown = () => {
            const html = marked(props.content);
            setHtmlContent(String(html));
        };

        fetchMarkdown();
    }, [props.content]);

    return (
        <>
            { 
            mobile ?
            <div className="overflow-hidden bg-white mt-[15vh] pb-[50px] w-[100%] pt-[3vh] px-[2vw] rounded-lg shadow-md border border-gray-200">
                                <Group>
                    <Title>
                        {props.title}
                    </Title>
                    {props.link && 
                        <Button onClick={(e) => handleButtonClick(e, props.link!)}
                            color="rgba(235, 223, 204, 1)" c="rgba(99, 86, 77, 1)"
                        >
                            <LanguageIcon />
                        </Button>
                    }
                    {props.code && 
                        <Button onClick={(e) => handleButtonClick(e, props.code!)}
                            color="rgba(235, 223, 204, 1)" c="rgba(99, 86, 77, 1)"
                        >
                            <CodeIcon />
                        </Button>
                    }
                </Group>
                <TypographyStylesProvider>
                    <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
                </TypographyStylesProvider>
            </div>
            :
            <div className="overflow-hidden bg-white mt-[15vh] mx-[5vw] pb-[50px] w-[60vw] max-w-[60vw] pt-[3vh] px-[2vw] rounded-lg shadow-md border border-gray-200">
                <Group>
                    <Title>
                        {props.title}
                    </Title>
                    {props.link && 
                        <Button onClick={(e) => handleButtonClick(e, props.link!)}
                            color="rgba(235, 223, 204, 1)" c="rgba(99, 86, 77, 1)"
                        >
                            <LanguageIcon />
                        </Button>
                    }
                    {props.code && 
                        <Button onClick={(e) => handleButtonClick(e, props.code!)}
                            color="rgba(235, 223, 204, 1)" c="rgba(99, 86, 77, 1)"
                        >
                            <CodeIcon />
                        </Button>
                    }
                </Group>
                <br />
                <Divider />
                <br />
                <TypographyStylesProvider>
                    <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
                </TypographyStylesProvider>
            </div>
            }
        </>
    );
};

export default ProjectPanel;