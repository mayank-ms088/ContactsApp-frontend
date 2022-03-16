import {
  Link as RouterLink,
  useParams,
  Navigate,
  useNavigate,
} from "react-router-dom";
// material
import { styled } from "@mui/material/styles";
import {
  Box,
  Card,
  Link,
  Container,
  Typography,
  Stack,
  IconButton,
} from "@mui/material";
// components
import Page from "../components/Page";
import ContactDetails from "src/sections/ContactDetails";
import CONTACTLIST from "src/_mocks_/user";
import Iconify from "src/components/Iconify";
// ----------------------------------------------------------------------

const RootStyle = styled(Page)(({ theme }) => ({
  [theme.breakpoints.up("md")]: {
    display: "flex",
  },
}));

const SectionStyle = styled(Card)(({ theme }) => ({
  width: "100%",
  maxWidth: 464,
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  margin: theme.spacing(2, 0, 2, 2),
}));

const ContentStyle = styled("div")(({ theme }) => ({
  maxWidth: 480,
  margin: "auto",
  display: "flex",
  minHeight: "100vh",
  flexDirection: "column",
  justifyContent: "center",
  padding: theme.spacing(12, 0),
}));

// ----------------------------------------------------------------------

export default function ContactInfo() {
  const { id } = useParams();
  const navigate = useNavigate();
  const contact = CONTACTLIST.filter((v) => v.id === id);
  if (!contact || contact.length === 0) {
    return <Navigate to="/404" />;
  }

  return (
    <RootStyle title="Contact Info">
      <SectionStyle sx={{ display: { xs: "none", md: "flex" } }}>
        <Stack direction={"row"}>
          <IconButton
            sx={{ mx: 5, mt: 5 }}
            onClick={() => {
              navigate(-1);
            }}
          >
            <Iconify icon={"bx:arrow-back"} width={22} height={22} />
          </IconButton>
        </Stack>
        <Typography variant="h3" sx={{ px: 5, mt: 4, mb: 5 }}>
          Welcome, {contact[0].name}
        </Typography>
        <img alt="avatarUrl" src={contact[0].avatarUrl} />
      </SectionStyle>

      <Container>
        <ContentStyle>
          <Box sx={{ mb: 5 }}>
            <Typography variant="h4" gutterBottom>
              Contact Details
            </Typography>
          </Box>

          <ContactDetails contact={contact} />
        </ContentStyle>
      </Container>
    </RootStyle>
  );
}
