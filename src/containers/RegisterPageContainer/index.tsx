import React, { FunctionComponent } from "react";
import { useDispatch } from "react-redux";
import { useIntl } from "react-intl";

const RegisterPageContainer: FunctionComponent = () => {
  const dispatch = useDispatch();
  const { formatMessage } = useIntl();

  return (
    <></>
    // <Container maxWidth='xs' component={Card}>
    //   <Box
    //     display='flex'
    //     justifyContent='flex-start'
    //     alignItems='center'
    //     pt='0.5rem'
    //   >
    //     <UnstyledLink to={Links.authSelect}>
    //       <IconButton>
    //         <ArrowBack />
    //       </IconButton>
    //     </UnstyledLink>
    //   </Box>
    //   <Box py={2}>
    //     <LogoVerticalWithLabel logo={Logo} />
    //     <LoginForm
    //       onSubmit={(values) =>
    //         dispatch(
    //           FirebaseAuthProxyApi.slice.actions.signIn({
    //             provider: FirebaseAuthAPI.emailAPI,
    //             data: values,
    //           })
    //         )
    //       }
    //     />
    //     <Typography align='center' color='primary'>
    //       <UnstyledLink to={Links.forgotPassword}>
    //         <Button color='primary' variant='text' fullWidth>
    //           {formatMessage(messages.actions.auth.resetPassword)}
    //         </Button>
    //       </UnstyledLink>
    //     </Typography>
    //
    //     <Typography align='center' color='primary'>
    //       <UnstyledLink to={Links.createAccount}>
    //         <Button color='primary' variant='text' fullWidth>
    //           {formatMessage(messages.actions.auth.singUp)}
    //         </Button>
    //       </UnstyledLink>
    //     </Typography>
    //   </Box>
    // </Container>
  );
};

export default RegisterPageContainer;
