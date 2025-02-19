import React from 'react';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid2,
  IconButton,
  Typography,
} from '@mui/material';
import Paper from '@mui/material/Paper';
import classes from './blitz-dialog.module.css';
import { KeyboardArrowDown, KeyboardArrowUp } from '@mui/icons-material';

export function BlitzDialogContent() {
  const [winner, setWinner] = React.useState('');
  const [page, setPage] = React.useState(0);
  const makeSetWinner = (event: React.MouseEvent<HTMLButtonElement>) => {
    const newWinner = event.currentTarget.textContent || '';
    if (newWinner) {
      setWinner(newWinner);
      setPage(1);
    }
  };

  const page0 = (
    <>
      <DialogContent>
        <Typography gutterBottom>Who Called Blitz?</Typography>

        <div className={classes.grid}>
          <Button onClick={makeSetWinner} variant="outlined">
            Player 1
          </Button>
          <Button onClick={makeSetWinner} variant="outlined">
            Player 2
          </Button>
          <Button onClick={makeSetWinner} variant="outlined">
            Player 3
          </Button>
          <Button onClick={makeSetWinner} variant="outlined">
            Player 4
          </Button>
        </div>
      </DialogContent>
      <DialogActions>
        <Button color="info">Cancel</Button>
      </DialogActions>
    </>
  );
  const page1 = (
    <>
      <DialogContent>
        <Typography gutterBottom>
          How many cards does Player 1 have left?
        </Typography>

        <div className={classes.counterWrapper}>
          <IconButton>
            <KeyboardArrowUp />
          </IconButton>
          <IconButton>
            <KeyboardArrowUp />
          </IconButton>
          <Typography fontSize={36} sx={{ textAlign: 'center' }}>
            1
          </Typography>
          <Typography fontSize={36} sx={{ textAlign: 'center' }}>
            2
          </Typography>
          <IconButton>
            <KeyboardArrowDown />
          </IconButton>
          <IconButton>
            <KeyboardArrowDown />
          </IconButton>
        </div>
      </DialogContent>
      <DialogActions>
        <Button color="info">Back</Button>
      </DialogActions>
    </>
  );

  return (
    <Dialog open={true}>
      <DialogTitle>Blitz!</DialogTitle>
      {page === 0 ? page0 : page1}
    </Dialog>
  );
}
