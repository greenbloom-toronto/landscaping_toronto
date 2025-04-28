import { styled } from "@mui/material";
import { Link } from "react-router-dom";

export const StyledReviewsSection = styled('section')(() => ({
    margin: '0 auto',
    background: '#e3e3e3',
    height: 'calc(70vh)',
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

export const StyledReviewsSectionTop = styled('div')(() => ({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: '24px',
    maxWidth: '1100px',
    width: '100%',
    margin: '0 auto',

    ['@media (max-width: 1000px)']: {
        flexDirection: 'column',
        alignItems: 'flex-start',
        gap: '12px'
    }
}))

export const StyledReviewsSectionTitle = styled('h2')(() => ({
    color: '#000',
    fontWeight: 600,
    fontSize: '44px',

    ['@media (max-width: 1000px)']: {
        fontSize: '32px',
    }
}))

export const StyledReviewsSectionRight = styled('div')(() => ({
    display: 'flex',
    alignItems: 'center',
    gap: '6px'
}))

export const StyledReviewsIconCell = styled('div')(() => ({
    aspectRatio: '1/1',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    background: '#02703d',
    border: '2px solid #02703d',
    borderRadius: '20px',
    height: '60px',
    width: '60px',
    transition: '0.3s',
    cursor: 'pointer',

    ['svg']: {
        fill: '#e3e3e3',
        transform: 'scale(1.6)'
    },

    [':hover']: {
        ['svg']: {
            fill: '#fff',
        },
    }
}))

export const StyledReviewsRow = styled('div')(() => ({
    width: '100%',
    height: '60%',
    display: 'flex',
    overflow: 'auto',
    gap: '12px',
    borderRadius: '20px',
    ['::-webkit-scrollbar']: {
        display: 'none'
    }
}))

export const StyledReviewCell = styled(Link)(() => ({
    aspectRatio: '1/1',
    padding: '20px',
    background: '#fff',
    borderRadius: '20px',
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
    justifyContent: 'space-between',
    cursor: 'pointer',
    border: '2px solid #fff',
    textDecoration: 'none',

    [':hover']: {
        transition: '0.3s',
        border: '2px solid #02703d',
    },

    ['@media (max-width: 1000px)']: {
        minWidth: '80%',
        borderRadius: '30px',
    }
}))

export const StyledReviewCellTop = styled('div')(() => ({
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
    overflow: 'hidden'
}))

export const StyledReviewCellDate = styled('p')(() => ({
    color: 'grey',
    fontWeight: 500,
    fontSize: '14px',
}))

export const StyledReviewCellReview = styled('p')(() => ({
    color: '#000',
    fontWeight: 500,
    fontSize: '14px',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    display: '-webkit-box',
    WebkitLineClamp: 7, /* number of lines to show */
    lineClamp: 7,
    WebkitBoxOrient: 'vertical',
}))

export const StyledReviewCellBottom = styled('div')(() => ({
    display: 'flex',
    gap: '20px',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: '20px',
    borderTop: '2px solid #02703d',
}))

export const StyledReviewCellBottomRight = styled('div')(() => ({
    aspectRatio: '1/1',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    background: '#02703d',
    borderRadius: '20px',
    height: '64px',
    width: '64px',
    transition: '0.3s',
    cursor: 'pointer',

    [':hover']: {
        ['svg']: {
            fill: '#fff',
        },
    }
}))

export const StyledReviewCellBottomRightPlaceholder = styled('div')(() => ({
    fontSize: '28px',
    fontWeight: 600,
    color: '#fff'
}))

export const StyledReviewCellBottomLeft = styled('div')(() => ({
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
}))

export const StyledReviewCellName = styled('p')(() => ({
    color: '#000',
    fontWeight: 600,
    fontSize: '18px',
}))