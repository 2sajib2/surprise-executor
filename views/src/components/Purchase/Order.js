import React from 'react'
import { Link } from 'react-router-dom'
import { List, ListItem, ListItemText, Typography,Grid, Paper, Box, Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import { useCart } from 'react-use-cart'

const useStyles = makeStyles((theme) => ({
    listItem: {
      padding: theme.spacing(1, 0),
    },
    total: {
      fontWeight: 900,
    },
    title: {
      marginTop: theme.spacing(2),
    },
    finalSection : {
        margin: '1',
        padding : '1',
       justifyContent: "space-around",
       alignItems: "center",
       flexDirection: "row-reverse",
       display: "flex"
      },
  }));

const Order = () => {
    const classes = useStyles()
    const {
        items,
        cartTotal,
        emptyCart,
        metadata,
      } = useCart();


    return (
        <>
        <Paper elevation={2}>
      <Typography variant="h4" color="secondary" align="center" gutterBottom>
        Order summary
      </Typography>
      <List disablePadding style={{margin: '10px'}}>
        {items.map((product) => (
          <ListItem className={classes.listItem} key={product.id}>
            <ListItemText primary={product.title} secondary={`Quantity: ${product.quantity}`} />
            <Typography variant="body2">৳ {product.price} × {product.quantity}</Typography>
          </ListItem>
        ))}
        <ListItem className={classes.listItem}>
          <ListItemText primary="Total" />
          <Typography variant="subtitle1" className={classes.total}>
          ৳ {cartTotal}
          </Typography>
        </ListItem>
      </List>
      <Grid style={{margin: '10px'}} container spacing={2}>
        <Grid item xs={12} sm={6} lg={4}>
          <Typography variant="h6" gutterBottom className={classes.title}>
            Shipping
          </Typography>
          <Typography gutterBottom>{metadata.shipName}</Typography>
          <Typography gutterBottom>{metadata.shipNumber}</Typography>
          <Typography gutterBottom>{metadata.shipAddress} {metadata.billcity} {metadata.billState}</Typography>
        </Grid>
        <Grid item xs={12} sm={6} lg={4}>
          <Typography variant="h6" gutterBottom className={classes.title}>
            Billing
          </Typography>
          <Typography gutterBottom>{metadata.billName}</Typography>
          <Typography gutterBottom>{metadata.billNumber}</Typography>
          <Typography gutterBottom>{metadata.billAddress} {metadata.billcity} {metadata.billState}</Typography>
        </Grid>
        <Grid item container direction="column" xs={12} sm={6} lg={4}>
          <Typography variant="h6" gutterBottom className={classes.title}>
            Payment details
          </Typography>
          <Grid container>
              <React.Fragment >
                <Grid item xs={6}>
                  <Typography gutterBottom>Payment Method</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography gutterBottom>{metadata.payMethod}</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography gutterBottom>Payment Number</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography gutterBottom>{metadata.payNumber}</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography gutterBottom>Transaction Id</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography gutterBottom>{metadata.transactionId}</Typography>
                </Grid>
              </React.Fragment>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
    <Box
          className={classes.finalSection}
        >

         <Box p={1} >
            <Button 
            variant="outlined"
            color="primary"
            size="large"
            onClick={()=> emptyCart()}
            component={Link}
            to="/order-confirmation"
            >
            <Typography variant="h6">Confirm Order</Typography>
            </Button>
        </Box>

        <Box p={1} >
            <Button 
            variant="outlined"
            size="large"
            color="secondary"
            component={Link}
            to="/payment"
            >
            <Typography variant="h6" >Go Back</Typography>
            </Button>
        </Box>
            </Box>
    </>
    )
}

export default Order