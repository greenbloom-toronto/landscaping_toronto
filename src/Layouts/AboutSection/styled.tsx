import { Button, styled } from "@mui/material";
import image from '../../resources/images/about-image.jpg'
import { Link } from "react-router-dom";

export const StyledAboutSection = styled('section')(() => ({
    margin: '0 auto',
    background: '#02703d',
    height: 'calc(60vh)',
    marginTop: '30px',
    marginBottom: '30px',
    padding: '30px',
    borderRadius: '40px',

    ['@media (max-width: 1000px)']: {
        // height: "fit-content",
        height: 'fit-content',
        padding: '30px 16px 16px'
    }
}))

export const StyledAboutSectionContent = styled('div')(() => ({
    maxWidth: '1100px',
    margin: '0 auto',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '100%',
    gap: '60px',

    ['@media (max-width: 1000px)']: {
        flexDirection: 'column',
        gap: '24px'
    }
}))

export const StyledAboutSectionLeft = styled('div')(() => ({
    display: 'flex',
    flexDirection: 'column',
    width: '58%',
    gap: '30px',

    ['@media (max-width: 1000px)']: {
        width: '100%'
    }
}))

export const StyledAboutSectionTitle = styled('h2')(() => ({
    color: '#fff',
    fontWeight: 600,
    fontSize: '44px',

    ['@media (max-width: 1000px)']: {
        fontSize: '32px'
    }
}))

export const StyledAboutSectionSubTitle = styled('p')(() => ({
    color: '#fff',
    fontSize: '14px',
    fontWeight: 500,
    lineHeight: 1.5
}));

export const StyledAboutSectionRight = styled('div')(() => ({
    position: 'relative',
    background: 'rgba(255, 255, 255, 0.14)',
    backgroundImage: `url(${image})`,
    backgroundPosition: 'left',
    backgroundSize: '128%',
    backgroundRepeat: 'no-repeat',
    borderRadius: '20px',
    width: '42%',
    height: '75%',

    ['@media (max-width: 1000px)']: {
        // height: "fit-content",
        height: '300px',
        width: '100%',
        borderRadius: '30px',
    }
}))

export const StyledAboutSectionQuoteButton = styled(Link)(() => ({
    position: 'absolute',
    height: '60px',
    lineHeight: '60px',
    textDecoration: 'none',
    padding: '0 26px',
    minWidth: '10%',
    color: '#02703d',
    fontWeight: 600,
    background: '#fff',
    borderRadius: '30px',
    textTransform: 'none',
    fontSize: '16px',
    bottom: 20,
    right: 20

    // [':hover']: {
    //     boxSizing: 'border-box',
    //     background: '#fff',
    //     color: '#00302E',
    // }
}))