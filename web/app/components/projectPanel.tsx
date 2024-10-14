import React from 'react';
import { TypographyStylesProvider } from '@mantine/core';
import { marked } from "marked";
import { useMobile } from '../utils/useMobile';

interface ProjectPanelProps {
    content: string;
}

const ProjectPanel: React.FC<ProjectPanelProps> = ({ content }) => {
    const [htmlContent, setHtmlContent] = React.useState<string>('');
    const mobile = useMobile();

    React.useEffect(() => {
        const fetchMarkdown = () => {
            const html = marked(content);
            setHtmlContent(String(html));
        };

        fetchMarkdown();
    }, [content]);

    return (
        <>
            { 
            mobile ?
            <div className="overflow-hidden bg-white mt-[15vh] pb-[50px] w-[100%] pt-[3vh] px-[2vw] rounded-lg shadow-md border border-gray-200">
                <TypographyStylesProvider>
                    <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
                </TypographyStylesProvider>
            </div>
            :
            <div className="overflow-hidden bg-white mt-[15vh] mx-[5vw] pb-[50px] w-[60vw] max-w-[60vw] pt-[3vh] px-[2vw] rounded-lg shadow-md border border-gray-200">
                <TypographyStylesProvider>
                    <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
                </TypographyStylesProvider>
            </div>
            }
        </>
    );
};

export default ProjectPanel;