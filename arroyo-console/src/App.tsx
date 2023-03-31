import "./App.css";
import {
  As,
  Box,
  Button,
  ButtonProps,
  Center,
  Divider,
  Flex,
  Grid,
  GridItem,
  HStack,
  Icon,
  Spacer,
  Stack,
  Text,
} from "@chakra-ui/react";

import {
  Link,
  Outlet,
  useLinkClickHandler,
  useMatch,
} from "react-router-dom";
import { FiHome, FiLogIn, FiGitBranch, FiLogOut, FiLink } from "react-icons/fi";
import { CloudSidebar, UserProfile } from "./lib/CloudComponents";

function logout() {
  // TODO: also send a request to the server to delete the session
  //clearSession();
  location.reload();
}

interface NavButtonProps extends ButtonProps {
  icon: As;
  label: string;
  to: string;
}

export const NavButton = (props: NavButtonProps) => {
  const { icon, label, ...buttonProps } = props;

  let isActive = useMatch(props.to + "/*");

  let onClick = useLinkClickHandler(props.to);

  return (
    <Button
      variant="ghost"
      justifyContent="start"
      /* @ts-ignore */
      onClick={onClick}
      aria-current={isActive ? "page" : "false"}
      {...buttonProps}
    >
      <HStack spacing="3">
        <Icon as={icon} boxSize="4" color="subtle" />
        <Text fontSize="sm">{label}</Text>
      </HStack>
    </Button>
  );
};


function Sidebar() {
  return (
    <GridItem className="sidebar" area={"nav"}>
      <Flex as="section" minH="100vh" bg="bg-canvas">
        <Flex
          flex="1"
          bg="bg-surface"
          boxShadow="sm-dark"
          maxW={{ base: "full", sm: "xs" }}
          py={{ base: "6", sm: "8" }}
          px={{ base: "4", sm: "6" }}
        >
          <Stack justify="space-between" spacing="1" width="full">
            <Stack spacing="4" shouldWrapChildren>
              <Link to={"/"}>
                <img width="140px" src="/logo.svg" />
              </Link>
              <Stack spacing="1">
                <NavButton label="Home" to="/" icon={FiHome} />
                <NavButton label="Connections" to="connections" icon={FiLink} />
                <NavButton label="Sources" to="sources" icon={FiLogIn} />
                <NavButton label="Sinks" to="sinks" icon={FiLogOut} />
                <NavButton label="Jobs" to="jobs" icon={FiGitBranch} />
              </Stack>
              <Divider />
              <Stack>
                <CloudSidebar />
              </Stack>
            </Stack>
            <Stack>
              <Divider />
              <UserProfile />
            </Stack>
          </Stack>
        </Flex>
      </Flex>
    </GridItem>
  );
}

function App() {
  return (
    <Grid templateAreas={`"nav main"`} gridTemplateColumns={`200px 1fr`} h="100vh">
      <Sidebar />
      <GridItem className="main" area={"main"}>
        {<Outlet />}
      </GridItem>
    </Grid>
  );
}

export default App;
