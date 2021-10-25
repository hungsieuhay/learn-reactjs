import { Box, Container, Grid, makeStyles, Paper, Typography } from '@material-ui/core';
import React from 'react';
import { useSelector } from 'react-redux';
import { STATIC_HOST, THUMBNAIL_PLACEHOLDER } from '../../constants';
import { formatPrice } from '../../utils/common';
import { cartItemCountSelector, cartItemSelector, cartItemTotalSelector } from './selector';

CartFeature.propTypes = {};
const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(1),
    // marginTop: '6px',
  },

  left: {
    width: '300px',
    padding: theme.spacing(1.5),
    borderRight: `1px solid ${theme.palette.grey[300]}`,
  },

  right: {
    width: '600px',
    padding: theme.spacing(1.5),
    flex: '1 1 0',
  },
}));

function CartFeature(props) {
  const cartCount = useSelector(cartItemCountSelector);
  const cartTotal = useSelector(cartItemTotalSelector);
  const cartInfo = useSelector(cartItemSelector);
  // const thumbnailUrl = cartInfo.thumbnail ? `${STATIC_HOST}${cartInfo.thumbnail?.url}` : THUMBNAIL_PLACEHOLDER;
  const classes = useStyles();

  return (
    <div>
      {cartInfo.length === 0 ? (
        <img
          src="https://bizweb.dktcdn.net/100/411/922/themes/800986/assets/empty-cart.png?1607914671664"
          alt=""
          width="100%"
        />
      ) : (
        <>
          <Typography variant="h6">Total products: {cartCount}</Typography>
          <Typography variant="h6">Total price: {formatPrice(cartTotal)}</Typography>
          {cartInfo.map((item) => (
            <Box key={item.id}>
              <Container className={classes.root}>
                <Grid container>
                  <Paper elevator={3}>
                    <Grid item className={classes.left}>
                      <Typography variant="body2">{item.product.name}</Typography>
                      <img
                        src={
                          item.product.thumbnail
                            ? `${STATIC_HOST}${item.product.thumbnail?.url}`
                            : THUMBNAIL_PLACEHOLDER
                        }
                        alt="name"
                        width="50%"
                      />
                    </Grid>
                  </Paper>
                  <Paper elevator={3}>
                    <Grid item className={classes.right}>
                      <Typography variant="body2">Quantity: {item.quantity}</Typography>
                      <Typography variant="body2">Price: {formatPrice(item.product.salePrice)}</Typography>
                    </Grid>
                  </Paper>
                </Grid>
              </Container>
            </Box>
          ))}
        </>
      )}
    </div>
  );
}

export default CartFeature;
