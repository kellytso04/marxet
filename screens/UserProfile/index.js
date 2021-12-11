import UserInfo from './UserInfo';
import UserInventory from './UserInventory';
import UserReviews from './UserReviews';
import UserWishlist from './UserWishlist';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';

const UserProfile = ({ userId }) => {
  return (
    <Grid container direction='row' spacing={3}>
      <Grid item md={3}>
        <UserInfo
          // sx={{
          //   minHeight: 500,
          //   minWidth: 300,
          // }}
        />
      </Grid>
      <Grid item container md={9} direction='column' spacing={3}>
        <Grid item>
          <UserInventory />
        </Grid>
        <Grid item container direction={{ sm: 'column', md:'row'}} spacing={3}>
          <Grid item md={6}>
            <UserWishlist />
          </Grid>
          <Grid item md={6}>
            <UserReviews />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default UserProfile;
