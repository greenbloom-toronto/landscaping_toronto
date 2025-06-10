import { IconButton, useMediaQuery } from "@mui/material";
import { ProjectsSeeMoreButton, StyledProjectCell, StyledProjectCellButton, StyledProjectCellTitle, StyledProjectsSection, StyledProjectsSectionList, StyledProjectsSectionTitle, StyledProjectsSectionTop } from "./styled"
import { useMemo, useState } from "react";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
import { Link } from "react-router-dom";

interface IProps {
    projects: any
}

export const ProjectsSection: React.FC<IProps> = ({ projects }) => {
    const mobile = useMediaQuery('(max-width:1000px)');

    const getRandomProjects = (arr: any[], n: number) => {
        const uniqueProjectsMap = new Map();

        // Filter unique projects by ID
        arr.forEach(project => {
            if (!uniqueProjectsMap.has(project.id)) {
                uniqueProjectsMap.set(project.id, project);
            }
        });

        const uniqueProjects = Array.from(uniqueProjectsMap.values());

        return [...uniqueProjects]
            .sort(() => 0.5 - Math.random()) // Shuffle
            .slice(0, n); // Select first n
    };

    const randomProjects = useMemo(() => getRandomProjects(projects, 4), [projects]);

    const [imageIndices, setImageIndices] = useState<{ [id: string]: number }>(
        () => Object.fromEntries(randomProjects.map((project: any) => [project.id, 0]))
    );

    const handleImageChange = (projectId: string, direction: "prev" | "next") => {
        setImageIndices((prev) => {
            const currentIndex = prev[projectId] || 0;
            const project = randomProjects.find((p: any) => p.id === projectId);
            const totalImages = project?.images?.length || 0;

            let newIndex = direction === "prev" ? currentIndex - 1 : currentIndex + 1;
            newIndex = Math.max(0, Math.min(totalImages - 1, newIndex));

            return {
                ...prev,
                [projectId]: newIndex,
            };
        });
    };

    return (
        <StyledProjectsSection>
            <StyledProjectsSectionTop>
                <StyledProjectsSectionTitle>
                    Our Projects
                </StyledProjectsSectionTitle>

                <Link
                    to="/projects-gallery"
                >
                    <ProjectsSeeMoreButton
                    >
                        See all
                    </ProjectsSeeMoreButton>
                </Link>
            </StyledProjectsSectionTop>

            <StyledProjectsSectionList>
                {randomProjects.map((project: any, index: number) => {
                    const currentImageIndex = imageIndices[project.id] || 0;
                    const totalImages = project.images.length;

                    return (
                        <StyledProjectCell
                            key={project.id}
                            sx={{
                                padding: mobile ? '30px 16px' : '40px 20px',
                                minWidth: mobile ? 'calc(100% - 36px)' : 'calc(100% / 2 - 46px)',
                                maxWidth: mobile ? 'calc(100% - 36px)' : 'calc(100% / 2 - 46px)',
                                background: `url(${project.images[currentImageIndex]})`,
                                backgroundRepeat: 'no-repeat',
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                            }}
                        >
                            <StyledProjectCellButton
                                onClick={() => handleImageChange(project.id, "prev")}
                                disabled={currentImageIndex === 0}
                                sx={{
                                    left: 8,
                                }}
                            >
                                <ArrowBackIos sx={{ transform: 'translateX(4px)' }} fontSize="small" />
                            </StyledProjectCellButton>

                            <StyledProjectCellButton
                                onClick={() => handleImageChange(project.id, "next")}
                                disabled={currentImageIndex === totalImages - 1}
                                sx={{
                                    right: 8,
                                }}
                            >
                                <ArrowForwardIos fontSize="small" />
                            </StyledProjectCellButton>
                            <StyledProjectCellTitle
                                sx={{
                                }}
                            >
                                {project.title}
                            </StyledProjectCellTitle>
                        </StyledProjectCell>
                    )
                })}
            </StyledProjectsSectionList>
        </StyledProjectsSection>
    )
}