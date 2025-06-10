import { Button, styled } from "@mui/material";
import { Link } from "react-router-dom";

export const StyledServicesSection = styled('section')(() => ({
    margin: '0 auto',
    background: '#e3e3e3',
    height: 'calc(100vh - 170px)',
    marginTop: '30px',
    marginBottom: '30px',
    backgroundPosition: 'center',
    padding: '30px',
    borderRadius: '40px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    gap: '40px',

    ['@media (max-width: 1000px)']: {
        // height: "fit-content",
        height: 'fit-content',
        padding: '30px 16px 16px'
    }
}))

export const StyledServicesSectionTop = styled('div')(() => ({
    display: 'flex',
    width: '100%',
    margin: '0 auto',
    maxWidth: '1100px',
    justifyContent: 'space-between',
    gap: '50px',
    alignItems: 'center',

    ['@media (max-width: 1000px)']: {
        flexDirection: 'column',
        alignItems: 'flex-start',
        gap: '20px'
    }
}));

export const StyledServicesSectionTitle = styled('h3')(() => ({
    color: '#000',
    fontWeight: 600,
    fontSize: '44px',

    ['@media (max-width: 1000px)']: {
        // height: "fit-content",
        fontSize: '32px'
    }
}))

export const StyledServicesSectionList = styled('ul')(() => ({
    display: 'flex',
    gap: '8px',
    flexWrap: 'wrap',
    width: '100%',
    margin: '0 auto',
    maxWidth: '1100px',
}))

export const StyledServiceCell = styled('li')(() => ({
    minWidth: 'calc(100% / 2 - 46px)',
    maxWidth: 'calc(100% / 2 - 46px)',
    background: '#fff',
    position: 'relative',
    padding: '0px',
    borderRadius: '20px',
    gap: '18px',
    display: 'flex',
    justifyContent: 'space-between',
    overflow: 'hidden',
    height: '20vh',

    ['@media (max-width: 1000px)']: {
        flexDirection: 'column',
        // height: "fit-content",
        borderRadius: '30px',
    }
}))

export const StyledServiceCellTitle = styled('div')(({
    fontWeight: 600,
    fontSize: '22px',
    position: 'absolute',
    padding: '6px 0',
    textAlign: 'center',
    width: '100%',
    background: '#02703d',
    color: '#fff',
    top: 0,
    left: 0,
    margin: 'auto',

    ['@media (max-width: 1000px)']: {
        fontSize: '16px',
        wordBreak: 'no-break'
    }
}))

export const StyledServiceIcon = styled('div')(() => ({
    aspectRatio: '1/1',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    background: '#02703d',
    border: '1px solid #02703d',
    borderRadius: '20px',
    height: '62px',
    width: '62px',
    position: 'absolute',
    bottom: 10,
    right: 10,
    transition: '0.3s',

    ['img']: {
        filter: 'invert(100%)',
        width: '38xpx',
        height: '38px',
        transition: '0.3s',
    },

    [':hover img']: {
        transform: 'scale(1.25)'
    },

    ['svg']: {
        filter: 'invert(100%)',
        width: '38xpx',
        height: '38px',
        transition: '0.3s',
    },

    [':hover svg']: {
        transform: 'scale(1.25)'
    }
}))

export const StyledSubServices = styled('div')(() => ({
    position: 'absolute',
    top: 39,
    left: 0,
    transition: '0.3s',
    backdropFilter: 'blur(3px)',
    background: 'rgba(0, 0, 0, 0.7)',
    color: '#fff',

    ['@media (max-width: 1000px)']: {
        // height: "fit-content",
        top: 31
    }
}))

export const StyledSubServicesList = styled('ul')(() => ({
    display: 'flex',
    margin: '16px 24px',
    flexDirection: 'column',
    gap: '8px',
    flexWrap: 'wrap',
    height: 'calc(100% - 39px)',
    // alignContent: 'space-between',
    overflow: 'scroll'
}))

export const StyledSubServiceItem = styled(Link)(() => ({
    fontWeight: 600,
    fontSize: '16px',
    color: '#fff',
    textDecoration: 'none',
    transition: '0.3s',
    [':hover']: {
        textDecoration: 'underline'
    }
}))

export const ServicesQuoteButton = styled(Button)(() => ({
    height: '60px',
    padding: '0 26px',
    minWidth: '10%',
    color: '#fff',
    fontWeight: 600,
    background: '#02703d',
    borderRadius: '30px',
    textTransform: 'none',
    fontSize: '16px',
    border: '1px solid #02703d',
    
    [':hover']: {
        boxSizing: 'border-box',
        background: '#e3e3e3',
        color: '#02703d',
    }
}))