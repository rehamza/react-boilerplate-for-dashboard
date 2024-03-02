import Snackbar from '@mui/material/Snackbar';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import ReportProblemOutlinedIcon from '@mui/icons-material/ReportProblemOutlined';
export const SnackbarComponent = ({
  open,
  setOpen,
  message,
  type,
  style,
  keepOpened,
}: {
  open: boolean;
  setOpen?: React.Dispatch<React.SetStateAction<boolean>>;
  message: string;
  type?: 'success' | 'faliure' | 'normal';
  style: object;
  keepOpened?: boolean | undefined;
}) => {
  const handleClose = () => {
    if (setOpen && !keepOpened) {
      setOpen(false);
    }
  };
  return (
    <Snackbar
      autoHideDuration={2000}
      anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      open={open}
      onClose={handleClose}
      sx={style}
    >
      <p style={{ margin: '0px', display: 'flex', alignItems: 'center', textAlign: 'center', padding: '10px' }}>
        {type === 'success' ? (
          <CheckCircleOutlineIcon sx={{ color: 'success.main', marginRight: '20px' }} />
        ) : type === 'faliure' ? (
          <ReportProblemOutlinedIcon sx={{ color: 'red', marginRight: '20px' }} />
        ) : null}
        {message}
      </p>
    </Snackbar>
  );
};
