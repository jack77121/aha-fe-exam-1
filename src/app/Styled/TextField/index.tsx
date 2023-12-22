import { styled } from '@mui/material/styles'
import TextField from '@mui/material/TextField'

export const StyledTextField = styled(TextField)({
  '& label': {
    display: 'none',
    fontFamily: 'var(--font-ubuntu)',
    fontSize: '14px',
    fontStyle: 'normal',
    color: '#fff',
    fontWeight: 400,
    lineHeight: '18px',
    height: '18px',
    letterSpacing: '0.4px',
    top: '2px',
  },
  '& label.Mui-focused': {
    color: '#fff',
  },
  '& .MuiOutlinedInput-root': {
    width: '335px',
    maxWidth: '100%',
    height: '58px',
    fontFamily: 'var(--font-ubuntu)',
    '& input ': {
      color: 'rgba(255, 255, 255, 1)',
      fontSize: '16px',
      fontWeight: 400,
      lineHeight: '24px',
      height: '24px',
      letterSpacing: '0.15px',
      padding: '17px 12px 15px 12px',
    },
    '& input[type="password"]': {
      fontFamily: 'var(--font-custom-pwd-ubuntu)',
    },
    '& fieldset': {
      // color: 'red',
      border: '3px solid rgba(255, 255, 255, .5)',
      borderRadius: '8px',
    },
    '&:hover fieldset': {
      border: '3px solid rgba(255, 255, 255,1)',
    },
    '&.Mui-focused fieldset': {
      color: '#fff',
      border: '3px solid rgba(0, 163, 255, 1)',
    },
    '& ::placeholder': {
      color: 'rgba(255, 255, 255, .3)',
    },
    '& legend': {
      overflow: 'initial',
      '& span': {
        position: 'relative',
        fontFamily: 'var(--font-ubuntu)',
        fontStyle: 'normal',
        color: '#fff',
        fontWeight: 400,
        lineHeight: '18px',
        height: '18px',
        letterSpacing: '0.4px',
        top: '-6px',
        opacity: 1,
      },
    },
  },
})

export default StyledTextField
