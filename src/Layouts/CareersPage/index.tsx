import { useMediaQuery } from "@mui/material";
import { servicesList } from "../../resources/data/arrays"
import { AppOuterContainer } from "../DesktopLayout/styled"
import { MainPageOptions } from "../MainPageOptions"
import { StyledCareersPageMain, StyledCareersPageSubTitle, StyledCareersPageTitle, StyledCareersPageTop } from "./styled";

export const CareersPage: React.FC = () => {
    const mobile = useMediaQuery('(max-width:1000px)');
    
    return (
        <AppOuterContainer>
            {!mobile && <MainPageOptions servicesList={servicesList} />}
            <StyledCareersPageMain>
                <StyledCareersPageTop>
                    <StyledCareersPageTitle>Interested In Joining Us?</StyledCareersPageTitle>
                    <StyledCareersPageSubTitle>Fill The Form Below To Apply!</StyledCareersPageSubTitle>
                </StyledCareersPageTop>
            </StyledCareersPageMain>
        </AppOuterContainer>
    )
}