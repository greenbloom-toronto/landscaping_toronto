import { Button, IconButton, styled } from "@mui/material";

export const StyledProjectsSection = styled('section')(() => ({
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

export const StyledProjectsSectionTop = styled('div')(() => ({
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

export const StyledProjectsSectionTitle = styled('h3')(() => ({
    color: '#000',
    fontWeight: 600,
    fontSize: '44px',

    ['@media (max-width: 1000px)']: {
        // height: "fit-content",
        fontSize: '32px'
    }
}))

export const ProjectsSeeMoreButton = styled(Button)(() => ({
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

export const StyledProjectsSectionList = styled('ul')(() => ({
    display: 'flex',
    gap: '8px',
    flexWrap: 'wrap',
    width: '100%',
    margin: '0 auto',
    maxWidth: '1100px',

    ['@media (max-width: 1000px)']: {
        justifyContent: 'center'
    }
}))

export const StyledProjectCell = styled('li')(() => ({
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

export const StyledProjectCellTitle = styled('div')(({
    fontWeight: 600,
    fontSize: '18px',
    position: 'absolute',

    padding: '6px',
    textAlign: 'center',
    width: '100%',
    background: '#02703d',
    color: '#fff',
    top: 0,
    left: 0,
    margin: 'auto',

    ['@media (max-width: 1000px)']: {
        fontSize: '12px',
        wordBreak: 'no-break',
        padding: '6px 14px',
        width: 'calc(100% - 28px)'
    }
}))

export const StyledProjectCellButton = styled(IconButton)(() => ({
    position: 'absolute',
    top: "calc(50% + 20px)",
    transform: "translateY(-50%)",
    color: "#fff",
    height: '50px',
    width: '50px',
    backgroundColor: "#02703d",
    display: 'flex',
    justifyContent: 'center',
    "&:disabled": {
        opacity: 0.3,
    },
    [':hover']: {
        backgroundColor: "#02703d",
        border: '2px solid #fff'
    }
}))