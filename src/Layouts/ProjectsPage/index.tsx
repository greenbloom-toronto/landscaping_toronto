import { Dialog, DialogContent, IconButton, useMediaQuery } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
import { useState } from "react";
import { projectsGallery, servicesList } from "../../resources/data/arrays";
import { AppOuterContainer } from "../DesktopLayout/styled";
import { MainPageOptions } from "../MainPageOptions";
import { StyledProjectsSectionList, StyledProjectCell, StyledProjectCellTitle } from "../ProjectsSection/styled";
import { StyledProjectsPageMain, StyledProjectsPageTop, StyledProjectsPageTitle, StyledProjectsPageSubTitle, StyledProjectsPage } from "./styled";

export const ProjectsPage: React.FC = () => {
    const mobile = useMediaQuery('(max-width:1000px)');
    const [openDialog, setOpenDialog] = useState(false);
    const [selectedProjectId, setSelectedProjectId] = useState(0);
    const [imageIndex, setImageIndex] = useState(0);

    const visibleProject = projectsGallery.find((item: any) => item.id === selectedProjectId);
    const totalImages = visibleProject?.images.length || 0;

    const handleNextImage = () => {
        setImageIndex((prev) => (prev + 1) % totalImages);
    };

    const handlePrevImage = () => {
        setImageIndex((prev) => (prev - 1 + totalImages) % totalImages);
    };

    return (
        <AppOuterContainer>
            {!mobile && <MainPageOptions servicesList={servicesList} />}
            <StyledProjectsPageMain>
                <StyledProjectsPageTop>
                    <StyledProjectsPageTitle>Our projects gallery</StyledProjectsPageTitle>
                    <StyledProjectsPageSubTitle>You can find our last project images here</StyledProjectsPageSubTitle>
                </StyledProjectsPageTop>
            </StyledProjectsPageMain>

            <StyledProjectsPage>
                <StyledProjectsSectionList sx={{ gap: '16px' }}>
                    {projectsGallery.map((project: any) => (
                        <StyledProjectCell
                            key={project.id}
                            onClick={() => {
                                setSelectedProjectId(project.id);
                                setImageIndex(0);
                                setOpenDialog(true);
                            }}
                            sx={{
                                padding: mobile ? '30px 16px' : '40px 20px',
                                minWidth: mobile ? 'calc(100% - 6px)' : 'calc(100% / 2 - 48px)',
                                maxWidth: mobile ? 'calc(100% - 6px)' : 'calc(100% / 2 - 48px)',
                                background: `url(${project.images[0]})`,
                                backgroundRepeat: 'no-repeat',
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                            }}
                        >
                            <StyledProjectCellTitle >{project.title}</StyledProjectCellTitle>
                        </StyledProjectCell>
                    ))}
                </StyledProjectsSectionList>
            </StyledProjectsPage>

            {openDialog && visibleProject && (
                <Dialog open={openDialog} onClose={() => setOpenDialog(false)} maxWidth="md" fullWidth>
                    <DialogContent sx={{ padding: 0, background: "#fff", position: "relative" }}>
                        {/* Header with title and close */}
                        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "12px 16px", borderBottom: "1px solid #eee" }}>
                            <h2 style={{ margin: 0, color: '#02703d' }}>{visibleProject.title}</h2>
                            <IconButton sx={{width: '24px', height: '24px'}} onClick={() => setOpenDialog(false)}>
                                <CloseIcon sx={{
                                    fill: '#02703d'
                                }} />
                            </IconButton>
                        </div>

                        {/* Image Slider Section */}
                        <div style={{ position: "relative", display: "flex", alignItems: "center", justifyContent: "center", padding: mobile ? '0' : "16px" }}>
                            <IconButton
                                onClick={handlePrevImage}
                                sx={{ position: "absolute", left: "32px", zIndex: 2, backgroundColor: "#fff" }}
                            >
                                <ArrowBackIos sx={{
                                    fill: '#02703d'
                                }} />
                            </IconButton>

                            <div
                                style={{
                                    width: "100%",
                                    height: "400px",
                                    backgroundImage: `url(${visibleProject.images[imageIndex]})`,
                                    backgroundSize: "cover",
                                    backgroundPosition: "center",
                                    borderRadius: mobile ? "0" : "8px",
                                }}
                            />

                            <IconButton
                                onClick={handleNextImage}
                                sx={{ position: "absolute", right: "32px", zIndex: 2, backgroundColor: "#fff" }}
                            >
                                <ArrowForwardIos sx={{
                                    fill: '#02703d',
                                }} />
                            </IconButton>
                        </div>
                    </DialogContent>
                </Dialog>
            )}
        </AppOuterContainer>
    );
};
