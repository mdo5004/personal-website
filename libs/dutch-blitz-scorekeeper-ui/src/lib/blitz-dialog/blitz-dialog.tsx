import { KeyboardArrowDown, KeyboardArrowUp } from '@mui/icons-material';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  Typography,
} from '@mui/material';
import React from 'react';
import classes from './blitz-dialog.module.css';

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

  const [player1Cards, setPlayer1Cards] = React.useState(0);
  const [player2Cards, setPlayer2Cards] = React.useState(0);
  const [player3Cards, setPlayer3Cards] = React.useState(0);
  const [player4Cards, setPlayer4Cards] = React.useState(0);

  const [player1Points, setPlayer1Points] = React.useState(0);
  const [player2Points, setPlayer2Points] = React.useState(0);
  const [player3Points, setPlayer3Points] = React.useState(0);
  const [player4Points, setPlayer4Points] = React.useState(0);

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
  const player1blitzPile = (
    <>
      <DialogContent>
        <Typography gutterBottom>
          How many cards does Player 1 <b>have left</b>?
        </Typography>

        <div className={classes.counterWrapper}>
          <IconButton onClick={() => setPlayer1Cards(player1Cards + 10)}>
            <KeyboardArrowUp />
          </IconButton>
          <IconButton onClick={() => setPlayer1Cards(player1Cards + 1)}>
            <KeyboardArrowUp />
          </IconButton>
          <Typography fontSize={36} sx={{ textAlign: 'center' }}>
            {`${player1Cards}`.padStart(2, '0')[0]}
          </Typography>
          <Typography fontSize={36} sx={{ textAlign: 'center' }}>
            {`${player1Cards}`.padStart(2, '0')[1]}
          </Typography>
          <IconButton
            onClick={() => setPlayer1Cards(Math.max(0, player1Cards - 10))}
          >
            <KeyboardArrowDown />
          </IconButton>
          <IconButton
            onClick={() => setPlayer1Cards(Math.max(0, player1Cards - 1))}
          >
            <KeyboardArrowDown />
          </IconButton>
        </div>
      </DialogContent>
      <DialogActions>
        <Button onClick={() => setPage((p) => p - 1)} color="secondary">
          Back
        </Button>
        <div style={{ flex: 1 }} />
        <Button
          onClick={() => setPage((p) => p + 1)}
          variant="contained"
          color="primary"
        >
          Next
        </Button>
      </DialogActions>
    </>
  );
  const player2blitzPile = (
    <>
      <DialogContent>
        <Typography gutterBottom>
          How many cards does Player 2 <b>have left</b>?
        </Typography>

        <div className={classes.counterWrapper}>
          <IconButton onClick={() => setPlayer2Cards(player2Cards + 10)}>
            <KeyboardArrowUp />
          </IconButton>
          <IconButton onClick={() => setPlayer2Cards(player2Cards + 1)}>
            <KeyboardArrowUp />
          </IconButton>
          <Typography fontSize={36} sx={{ textAlign: 'center' }}>
            {`${player2Cards}`.padStart(2, '0')[0]}
          </Typography>
          <Typography fontSize={36} sx={{ textAlign: 'center' }}>
            {`${player2Cards}`.padStart(2, '0')[1]}
          </Typography>
          <IconButton
            onClick={() => setPlayer2Cards(Math.max(0, player2Cards - 10))}
          >
            <KeyboardArrowDown />
          </IconButton>
          <IconButton
            onClick={() => setPlayer2Cards(Math.max(0, player2Cards - 1))}
          >
            <KeyboardArrowDown />
          </IconButton>
        </div>
      </DialogContent>
      <DialogActions>
        <Button onClick={() => setPage((p) => p - 1)} color="secondary">
          Back
        </Button>
        <div style={{ flex: 1 }} />
        <Button
          onClick={() => setPage((p) => p + 1)}
          variant="contained"
          color="primary"
        >
          Next
        </Button>
      </DialogActions>
    </>
  );
  const player3blitzPile = (
    <>
      <DialogContent>
        <Typography gutterBottom>
          How many cards does Player 3 <b>have left</b>?
        </Typography>

        <div className={classes.counterWrapper}>
          <IconButton onClick={() => setPlayer3Cards(player3Cards + 10)}>
            <KeyboardArrowUp />
          </IconButton>
          <IconButton onClick={() => setPlayer3Cards(player3Cards + 1)}>
            <KeyboardArrowUp />
          </IconButton>
          <Typography fontSize={36} sx={{ textAlign: 'center' }}>
            {`${player3Cards}`.padStart(2, '0')[0]}
          </Typography>
          <Typography fontSize={36} sx={{ textAlign: 'center' }}>
            {`${player3Cards}`.padStart(2, '0')[1]}
          </Typography>
          <IconButton
            onClick={() => setPlayer3Cards(Math.max(0, player3Cards - 10))}
          >
            <KeyboardArrowDown />
          </IconButton>
          <IconButton
            onClick={() => setPlayer3Cards(Math.max(0, player3Cards - 1))}
          >
            <KeyboardArrowDown />
          </IconButton>
        </div>
      </DialogContent>
      <DialogActions>
        <Button onClick={() => setPage((p) => p - 1)} color="secondary">
          Back
        </Button>
        <div style={{ flex: 1 }} />
        <Button
          onClick={() => setPage((p) => p + 1)}
          variant="contained"
          color="primary"
        >
          Next
        </Button>
      </DialogActions>
    </>
  );
  const player4blitzPile = (
    <>
      <DialogContent>
        <Typography gutterBottom>
          How many cards does Player 4 <b>have left</b>?
        </Typography>

        <div className={classes.counterWrapper}>
          <IconButton onClick={() => setPlayer4Cards(player4Cards + 10)}>
            <KeyboardArrowUp />
          </IconButton>
          <IconButton onClick={() => setPlayer4Cards(player4Cards + 1)}>
            <KeyboardArrowUp />
          </IconButton>
          <Typography fontSize={36} sx={{ textAlign: 'center' }}>
            {`${player4Cards}`.padStart(2, '0')[0]}
          </Typography>
          <Typography fontSize={36} sx={{ textAlign: 'center' }}>
            {`${player4Cards}`.padStart(2, '0')[1]}
          </Typography>
          <IconButton
            onClick={() => setPlayer4Cards(Math.max(0, player4Cards - 10))}
          >
            <KeyboardArrowDown />
          </IconButton>
          <IconButton
            onClick={() => setPlayer4Cards(Math.max(0, player4Cards - 1))}
          >
            <KeyboardArrowDown />
          </IconButton>
        </div>
      </DialogContent>
      <DialogActions>
        <Button onClick={() => setPage((p) => p - 1)} color="secondary">
          Back
        </Button>
        <div style={{ flex: 1 }} />
        <Button
          onClick={() => setPage((p) => p + 1)}
          variant="contained"
          color="primary"
        >
          Next
        </Button>
      </DialogActions>
    </>
  );
  const player1dutchPile = (
    <>
      <DialogContent>
        <Typography gutterBottom>
          How many points did Player 1 <b>get</b>?
        </Typography>

        <div className={classes.counterWrapper}>
          <IconButton onClick={() => setPlayer1Points(player1Points + 10)}>
            <KeyboardArrowUp />
          </IconButton>
          <IconButton onClick={() => setPlayer1Points(player1Points + 1)}>
            <KeyboardArrowUp />
          </IconButton>
          <Typography fontSize={36} sx={{ textAlign: 'center' }}>
            {`${player1Points}`.padStart(2, '0')[0]}
          </Typography>
          <Typography fontSize={36} sx={{ textAlign: 'center' }}>
            {`${player1Points}`.padStart(2, '0')[1]}
          </Typography>
          <IconButton
            onClick={() => setPlayer1Points(Math.max(0, player1Points - 10))}
          >
            <KeyboardArrowDown />
          </IconButton>
          <IconButton
            onClick={() => setPlayer1Points(Math.max(0, player1Points - 1))}
          >
            <KeyboardArrowDown />
          </IconButton>
        </div>
      </DialogContent>
      <DialogActions>
        <Button onClick={() => setPage((p) => p - 1)} color="secondary">
          Back
        </Button>
        <div style={{ flex: 1 }} />
        <Button
          onClick={() => setPage((p) => p + 1)}
          variant="contained"
          color="primary"
        >
          Next
        </Button>
      </DialogActions>
    </>
  );
  const player2dutchPile = (
    <>
      <DialogContent>
        <Typography gutterBottom>
          How many Points did Player 2 <b>get</b>?
        </Typography>

        <div className={classes.counterWrapper}>
          <IconButton onClick={() => setPlayer2Points(player2Points + 10)}>
            <KeyboardArrowUp />
          </IconButton>
          <IconButton onClick={() => setPlayer2Points(player2Points + 1)}>
            <KeyboardArrowUp />
          </IconButton>
          <Typography fontSize={36} sx={{ textAlign: 'center' }}>
            {`${player2Points}`.padStart(2, '0')[0]}
          </Typography>
          <Typography fontSize={36} sx={{ textAlign: 'center' }}>
            {`${player2Points}`.padStart(2, '0')[1]}
          </Typography>
          <IconButton
            onClick={() => setPlayer2Points(Math.max(0, player2Points - 10))}
          >
            <KeyboardArrowDown />
          </IconButton>
          <IconButton
            onClick={() => setPlayer2Points(Math.max(0, player2Points - 1))}
          >
            <KeyboardArrowDown />
          </IconButton>
        </div>
      </DialogContent>
      <DialogActions>
        <Button onClick={() => setPage((p) => p - 1)} color="secondary">
          Back
        </Button>
        <div style={{ flex: 1 }} />
        <Button
          onClick={() => setPage((p) => p + 1)}
          variant="contained"
          color="primary"
        >
          Next
        </Button>
      </DialogActions>
    </>
  );
  const player3dutchPile = (
    <>
      <DialogContent>
        <Typography gutterBottom>
          How many Points did Player 3 <b>get</b>?
        </Typography>

        <div className={classes.counterWrapper}>
          <IconButton onClick={() => setPlayer3Points(player3Points + 10)}>
            <KeyboardArrowUp />
          </IconButton>
          <IconButton onClick={() => setPlayer3Points(player3Points + 1)}>
            <KeyboardArrowUp />
          </IconButton>
          <Typography fontSize={36} sx={{ textAlign: 'center' }}>
            {`${player3Points}`.padStart(2, '0')[0]}
          </Typography>
          <Typography fontSize={36} sx={{ textAlign: 'center' }}>
            {`${player3Points}`.padStart(2, '0')[1]}
          </Typography>
          <IconButton
            onClick={() => setPlayer3Points(Math.max(0, player3Points - 10))}
          >
            <KeyboardArrowDown />
          </IconButton>
          <IconButton
            onClick={() => setPlayer3Points(Math.max(0, player3Points - 1))}
          >
            <KeyboardArrowDown />
          </IconButton>
        </div>
      </DialogContent>
      <DialogActions>
        <Button onClick={() => setPage((p) => p - 1)} color="secondary">
          Back
        </Button>
        <div style={{ flex: 1 }} />
        <Button
          onClick={() => setPage((p) => p + 1)}
          variant="contained"
          color="primary"
        >
          Next
        </Button>
      </DialogActions>
    </>
  );
  const player4dutchPile = (
    <>
      <DialogContent>
        <Typography gutterBottom>
          How many Points did Player 4 <b>get</b>?
        </Typography>

        <div className={classes.counterWrapper}>
          <IconButton onClick={() => setPlayer4Points(player4Points + 10)}>
            <KeyboardArrowUp />
          </IconButton>
          <IconButton onClick={() => setPlayer4Points(player4Points + 1)}>
            <KeyboardArrowUp />
          </IconButton>
          <Typography fontSize={36} sx={{ textAlign: 'center' }}>
            {`${player4Points}`.padStart(2, '0')[0]}
          </Typography>
          <Typography fontSize={36} sx={{ textAlign: 'center' }}>
            {`${player4Points}`.padStart(2, '0')[1]}
          </Typography>
          <IconButton
            onClick={() => setPlayer4Points(Math.max(0, player4Points - 10))}
          >
            <KeyboardArrowDown />
          </IconButton>
          <IconButton
            onClick={() => setPlayer4Points(Math.max(0, player4Points - 1))}
          >
            <KeyboardArrowDown />
          </IconButton>
        </div>
      </DialogContent>
      <DialogActions>
        <Button onClick={() => setPage((p) => p - 1)} color="secondary">
          Back
        </Button>
        <div style={{ flex: 1 }} />
        <Button
          onClick={() => setPage((p) => p + 1)}
          variant="contained"
          color="primary"
        >
          Next
        </Button>
      </DialogActions>
    </>
  );

  const pages = [
    page0,
    player1blitzPile,
    player2blitzPile,
    player3blitzPile,
    player4blitzPile,
    player1dutchPile,
    player2dutchPile,
    player3dutchPile,
    player4dutchPile,
  ];

  return (
    <Dialog open={true}>
      <DialogTitle>Blitz!</DialogTitle>
      {pages[page] || null}
    </Dialog>
  );
}
