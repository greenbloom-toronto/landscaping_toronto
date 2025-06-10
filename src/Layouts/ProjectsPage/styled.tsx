import { styled } from "@mui/material"
import background from '../../resources/images/main_page4.jpg';

export const StyledProjectsPageMain = styled('div')(() => ({
    margin: '0 auto',
    backgroundImage: `url(${background})`,
    backgroundSize: 'cover',
    height: 'calc(100vh - 270px)',
    marginTop: '10px',
    backgroundPosition: 'center',
    padding: '30px',
    borderRadius: '40px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',

    ['@media (max-width: 1000px)']: {
        marginTop: '70px',
        // height: "fit-content",
        height: 'calc(100vh - 100px)',
        maxHeight: '600px',
        justifyContent: 'space-between',
        padding: '0',
        alignItems: 'flex-start'
    }
}))

export const StyledProjectsPageTop = styled('div')(() => ({
    display: 'flex',
    flexDirection: 'column',
    width: 'fit-content',
    margin: '0 auto',
    maxWidth: '1100px',
    gap: '24px',
    alignItems: 'center',
    borderRadius: '24px',
    padding: '30px',
    height: 'fit-content',

    ['@media (max-width: 1000px)']: {
        maxWidth: '100%',
        transform: 'none',
        fontSize: '30px',
        paddingBottom: '24px',
        gap: '16px',
        borderBottomRightRadius: 0,
        borderBottomLeftRadius: 0
    }
}))

export const StyledProjectsPageTitle = styled('h1')(() => ({
    color: '#fff',
    fontWeight: 600,
    fontSize: '44px',

    ['@media (max-width: 1000px)']: {
        fontSize: '30px',
        textAlign: 'center'
    }
}))

export const StyledProjectsPageSubTitle = styled('h4')(() => ({
    color: '#fff',
    fontSize: '18px',
    fontWeight: 500,

    ['@media (max-width: 1000px)']: {
        fontSize: '18px',
        textAlign: 'center'
    }
}))

export const StyledProjectsPage = styled('section')(() => ({
    margin: '0 auto',
    background: '#e3e3e3',
    height: 'fit-content',
    marginTop: '30px',
    marginBottom: '30px',
    padding: '30px',
    borderRadius: '40px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    gap: '40px',

    ['@media (max-width: 1000px)']: {
        height: 'fit-content',
        padding: ' 0 16px',
        gap: '24px',
        background: 'transparent'
    }
}))