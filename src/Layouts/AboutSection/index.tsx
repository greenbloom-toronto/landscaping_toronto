import { useMediaQuery } from "@mui/material";
// import { useOpenQuoteDialog } from "../../Storages/useOpenQuoteDialog"
import { StyledAboutSection, StyledAboutSectionContent, StyledAboutSectionLeft, StyledAboutSectionQuoteButton, StyledAboutSectionRight, StyledAboutSectionSubTitle, StyledAboutSectionTitle } from "./styled.tsx"

export const AboutSection: React.FC = () => {
    // const { setOpenQuoteDialog } = useOpenQuoteDialog()
    const mobile = useMediaQuery('(max-width:1000px)');

    return (
        <StyledAboutSection>
            <StyledAboutSectionContent>
                <StyledAboutSectionLeft>
                    <StyledAboutSectionTitle>
                        Welcome to Greenbloom Landscape Design inc.
                    </StyledAboutSectionTitle>

                    <StyledAboutSectionSubTitle>
                        If you have a residential or commercial property that requires the services of a professional landscaper in Toronto or the GTA then you have come to the right place. Greenbloom Landscaping is the premier provider of landscaping services in Toronto. <br /><br /> Let Greenbloom Landscaping help you create the backyard retreat that you have always dreamt of. Our professional Toronto landscapers will listen to your ideas and make suggestions and help develop your vision into a reality. Whether your lawn just needs a little patch up or you are looking to design a whole new look for your home, give us a call. A proper program of landscaping will not only improve the look of your home but significantly increase the value of the property
                    </StyledAboutSectionSubTitle>
                </StyledAboutSectionLeft>

                <StyledAboutSectionRight>
                    {!mobile && (
                        <StyledAboutSectionQuoteButton
                            to="/about-us"
                        >
                            Read More
                        </StyledAboutSectionQuoteButton>
                    )}
                </StyledAboutSectionRight>
            </StyledAboutSectionContent>
        </StyledAboutSection>
    )
}