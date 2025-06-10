import { Button, styled } from "@mui/material";
import background from '../../resources/images/main_page4.jpg';

export const StyledFAQPageMain = styled('div')(() => ({
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

export const StyledFAQPageTop = styled('div')(() => ({
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

export const StyledFAQPageContentTop = styled('div')(() => ({
    display: 'flex',
    gap: '40px',
    maxWidth: '1100px',
    width: '100%',
    margin: '0 auto',
    justifyContent: 'space-between',
    alignItems: 'flex-end',

    ['@media (max-width: 1000px)']: {
        flexDirection: 'column',
        alignItems: 'flex-start',
        gap: '24px',
    }
}))

export const StyledFAQPageTip = styled('span')(() => ({
    color: 'grey',
    fontSize: '14px',
    fontWeight: 500,
}))

export const StyledFAQPageTopLeft = styled('div')(() => ({
    display: 'flex',
    flexDirection: 'column',
    gap: '24px',
}))

export const StyledFAQPageTitle = styled('h1')(() => ({
    color: '#fff',
    fontWeight: 600,
    fontSize: '44px',

    ['@media (max-width: 1000px)']: {
        fontSize: '30px',
        textAlign: 'center'
    }
}))

export const StyledFAQPageSubTitle = styled('h4')(() => ({
    color: '#fff',
    fontSize: '18px',
    fontWeight: 500,

    ['@media (max-width: 1000px)']: {
        fontSize: '18px',
        textAlign: 'center'
    }
}))

export const StyledFAQPageTopButton = styled(Button)(() => ({
    width: '100%',
    height: '60px',
    background: '#02703d',
    color: '#fff',
    fontWeight: 700,
    fontSize: '18px',
    textTransform: 'none',
    borderRadius: '20px',
    border: '2px solid #02703d',
    marginTop: '20px',

    [':hover']: {
        color: '#fff',
        background: 'rgba(0, 0, 0, 0.4)',
        borderColor: '#fff'
    }
}))

export const StyledFAQPage = styled('section')(() => ({
    margin: '0 auto',
    background: '#e3e3e3',
    height: 'calc(100vh - 170px)',
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
        padding: '30px 16px 16px',
        gap: '24px'
    }
}))

export const FAQPageQuoteButton = styled(Button)(() => ({
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

export const StyledFAQPageTopRight = styled('div')(() => ({
    display: 'flex',
    gap: '24px',
    alignItems: 'center',

    ['@media (max-width: 1000px)']: {
        flexDirection: 'column'
    }
}))

export const StyledFAQPageQuestionsList = styled('ul')(() => ({
    maxWidth: '1100px',
    margin: '0 auto',
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
    width: '100%',
    maxHeight: '60%',
    overflow: 'scroll'
}))

export const StyledFAQPageCell = styled('li')(() => ({
    display: 'flex',
    flexDirection: 'column',
    padding: '20px',
    background: '#fff',
    borderRadius: '20px',
    transition: '0.3s',
    gap: '24px',
    
    ['@media (max-width: 1000px)']: {
        padding: '14px',
        borderRadius: '30px',
    }
}))

export const StyledFAQPageCellTop = styled('div')(() => ({
    display: 'flex',
    justifyContent: 'space-between',
    gap: '40px'
}))

export const StyledFAQPageCellLeft = styled('div')(() => ({
    display: 'flex',
    alignItems: 'center',
    gap: '24px'
}))

export const StyledFAQIconCell = styled('div')(() => ({
    aspectRatio: '1/1',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    background: '#e3e3e3',
    border: '2px solid #e3e3e3',
    borderRadius: '20px',
    height: '50px',
    width: '50px',
    transition: '0.3s',

    ['svg']: {
        fill: '#02703d',
        width: '34xpx',
        height: '34px'
    }
}))

export const StyledFAQIconCellNumber = styled('div')(() => ({
    fontSize: '24px',
    fontWeight: 600,
    color: '#000'
}))

export const StyledFAQCellTitle = styled('p')(() => ({
    color: '#000',
    fontWeight: 600,
    fontSize: '24px',

    ['@media (max-width: 1000px)']: {
        fontSize: '16px'
    }
}))

export const StyledFAQCellAnswer = styled('p')(() => ({
    color: '#000',
    fontSize: '17px',
    fontWeight: 500,
    marginLeft: '78px',

    ['@media (max-width: 1000px)']: {
        marginLeft: 0,
        fontSize: '14px'
    }
}))
