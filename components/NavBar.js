import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import IconButton from "@material-ui/core/IconButton"
import MenuIcon from "@material-ui/icons/Menu"
import { Container } from "@material-ui/core"

import { Button, Typography, Link, Box } from "@material-ui/core"
import PersonIcon from "@material-ui/icons/Person"
import AssignmentIcon from "@material-ui/icons/Assignment"

import ExitToAppIcon from "@material-ui/icons/ExitToApp"

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}))

export default function ButtonAppBar() {
  const classes = useStyles()
  const registerHandler = () => {}
  const logoutHandler = () => {}
  const loginHandler = () => {}

  return (
    <div>
      {/* <Container> */}
      <AppBar position="static" style={{ color: "primary" }}>
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            OpenFreeUni
          </Typography>
          <>
            {/* {userInfo ? ( */}
            <>
              <Box
                style={{
                  marginRight: "0.25rem",
                  marginLeft: "0.75rem",
                  marginTop: "0.75",
                }}
              >
                <Typography style={{ marginTop: "0.25rem" }}>
                  {" "}
                  {/* Hello {userInfo.firstName} {userInfo.lastName} */}
                </Typography>
              </Box>
              <Box
                style={{
                  marginTop: "0.25rem",
                  display: "flex",
                  justifyContent: "right",
                  alignItems: "right",
                }}
              >
                <Button
                  color="inherit"
                  onClick={logoutHandler}
                  style={{ marginRight: "0.5rem" }}
                >
                  <ExitToAppIcon style={{ marginRight: "0.25rem" }} />
                  LogOut
                </Button>
              </Box>
            </>
            {/* ) : ( */}
            <>
              {" "}
              <Button color="inherit" onClick={registerHandler}>
                <Link style={{ color: "white" }} href="/register">
                  <AssignmentIcon style={{ marginRight: "0.25rem" }} />
                  Register
                </Link>
              </Button>
              <Button color="inherit" onClick={loginHandler}>
                <Link style={{ color: "white" }} href="/login">
                  <PersonIcon style={{ marginRight: "0.25rem" }} />
                  Login
                </Link>
              </Button>
            </>
            {/* )} */}
          </>
        </Toolbar>
      </AppBar>
      {/* </Container> */}
    </div>
  )
}
