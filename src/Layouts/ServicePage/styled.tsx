import { styled } from "@mui/material";

export const StyledServicePageMain = styled('section')(() => ({
    margin: '0 auto',
    background: '#e3e3e3',
    // height: 'calc(100vh - 170px)',
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

export const StyledServicePageContent = styled('div')(() => ({
    display: 'flex',
    gap: '30px',
    flexDirection: 'column',
    width: 'calc(80% - 24px)',

    ['@media (max-width: 1000px)']: {
        width: 'calc(100%)'
    }
}))

export const StyledServicePageSidebar = styled('aside')(() => ({
    display: 'flex',
    flexDirection: 'column',
    width: 'calc(20% - 24px)',
    borderRadius: '40px',
    height: 'calc(60vh - 30px)',

    ['@media (max-width: 1000px)']: {
        marginTop: '90px',
        // height: "fit-content",
        height: 'fit-content',
        width: 'calc(100% - 36px)',
    }
}))

export const StyledContentBanner = styled('section')(() => ({
    margin: '0 auto',
    height: 'calc(60vh)',
    backgroundPosition: 'bottom',
    backgroundRepeat: 'no-repeat',
    background: '#e3e3e3',
    borderRadius: '40px',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    overflow: 'hidden',

    ['@media (max-width: 1000px)']: {
        marginTop: '30px',
        // height: "fit-content",
        height: 'calc(100vh - 100px)',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        textAlign: 'center',
        padding: '30px 0',
        maxHeight: '600px'
    }
}))

export const StyledContentBannerShadow = styled('div')(() => ({
    width: '100%',
    height: '100%',
    top: 0,
    left: 0,
    background: 'rgba(0, 0, 0, 0.6)',
    position: 'absolute'
}))

export const StyledContentBannerTitle = styled('h1')(() => ({
    fontSize: '64px',
    fontWeight: 700,
    color: '#fff',
    zIndex: 9,

    ['@media (max-width: 1000px)']: {
        fontSize: '42px',
        margin: 'auto',
        width: 'calc(90%)',
        textAlign: 'center',
    }
}))

export const StyledContentText = styled('section')(() => ({
    margin: '0 auto',
    background: '#e3e3e3',
    borderRadius: '40px',
    width: 'calc(100vw - 120px)',
    padding: '30px',
    maxWidth: '1540px',

    ['@media (max-width: 1000px)']: {
        width: 'calc(100vw - 64px)',
        padding: '16px',
    }
}))