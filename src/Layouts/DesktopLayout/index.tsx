import { useMediaQuery } from "@mui/material";
import { AppOuterContainer } from "./styled";
import { MainPageOptions } from "../MainPageOptions";
import { MainPage } from "../MainPage";
import { AboutSection } from "../AboutSection";
import { ServicesSection } from "../ServicesSection";
import { projectsGallery, servicesList } from "../../resources/data/arrays";
import { ReviewsSection } from "../Reviews/Reviews";
import { ProjectsSection } from "../ProjectsSection";

export const DesktopLayout: React.FC = () => {

    const mobile = useMediaQuery('(max-width:1000px)');

    return (
        <>
            <AppOuterContainer>
                {!mobile && (
                    <MainPageOptions servicesList={servicesList} />
                )}
                <MainPage />
                <AboutSection />
                <ServicesSection servicesList={servicesList} />
                <ReviewsSection />
                <ProjectsSection projects={projectsGallery} />
            </AppOuterContainer>
        </>
    )
}