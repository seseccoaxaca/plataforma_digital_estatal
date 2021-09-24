import React from 'react'
import { Breadcrumbs as MUIBreadcrumbs, Link, Container, Box, Typography } from '@mui/material';


import NavigateNextIcon from '@mui/icons-material/NavigateNext'
import { withRouter } from 'react-router';


const CustomSeparator = (props) => {
  const { history, location: { pathname } } = props;

  const pathnames = pathname.split("/").filter(x => x);

  return (
    <Box sx={{ bgcolor: '#cfe8fc' }} >
      <Container sx={{ py: '2vh' }} >
        <MUIBreadcrumbs
          separator={<NavigateNextIcon fontSize="small" />}
          aria-label="breadcrumb"
        >
          { pathnames.length > 0 ? 
          <Link
            underline="hover"
            color="inherit"
            onClick={() => history.push("/")}
          >
            Plataforma Digital Estatal
          </Link>
          : <Typography>Plataforma Digital Estatal</Typography> }
          {pathnames.map((name, index) => {
            const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`;
            const isLast = index === pathnames.length - 1;
            return isLast ? <Typography key={name}> {name} </Typography> : (
              <Link
                underline="hover"
                color="inherit"
                key={name}
                onClick={() => history.push(routeTo)}
              >
                {name}
              </Link>
            );
          })}

        </MUIBreadcrumbs>
      </Container>
    </Box>
  );
}

export default withRouter(CustomSeparator);


















// import React from 'react'
// import { Breadcrumbs as MUIBreadcrumbs, Link, Container, Box } from '@mui/material';


// import NavigateNextIcon from '@mui/icons-material/NavigateNext'

// // function handleClick(event) {
// //   event.preventDefault();
// //   console.info('You clicked a breadcrumb.');
// // }

// const CustomSeparator = () => {
//   const breadcrumbs = [
//     <Link underline="hover" key="1" color="inherit" href="/" onClick={handleClick}>
//       Plataforma Digital Estatal
//     </Link>,
//     <Link
//       underline="hover"
//       key="2"
//       color="text.primary"
//       href="/getting-started/installation/"
//       onClick={handleClick}
//     >
//       Mesa de Ayuda
//     </Link>
//   ];

//   return (
//     <Box sx={{ bgcolor: '#cfe8fc' }} >
//       <Container sx={{ py: '2vh' }} >
//         <MUIBreadcrumbs
//           separator={<NavigateNextIcon fontSize="small" />}
//           aria-label="breadcrumb"
//         >
//           {breadcrumbs}
//         </MUIBreadcrumbs>
//       </Container>
//     </Box>


//   );
// }

// export default CustomSeparator;