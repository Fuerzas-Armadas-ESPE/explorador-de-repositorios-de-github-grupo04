import { useState } from "react";
import {
  TextField,
  Button,
  Typography,
  Container,
  AppBar,
  Toolbar,
  CssBaseline,
  Select,
  MenuItem,
  Grid,
} from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import RepoList from "./components/RepoList";

function App() {
  const [username, setUsername] = useState("");
  const [showRepoList, setShowRepoList] = useState(false);
  const [stars, setStars] = useState("");
  const [language, setLanguage] = useState("");

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handleStarsChange = (event) => {
    setStars(event.target.value);
  };

  const handleLanguageChange = (event) => {
    setLanguage(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    setShowRepoList(true);
  };

  // Tema personalizado con colores oscuros
  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
      primary: {
        main: '#1976d2',
      },
      secondary: {
        main: '#ff4081',
      },
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Mi Explorador de Repositorios
          </Typography>
        </Toolbar>
      </AppBar>
      <Container maxWidth="md" sx={{ marginTop: "20px" }}>
        <form onSubmit={handleFormSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={4}>
              <TextField
                label="Nombre de Usuario"
                variant="outlined"
                value={username}
                onChange={handleUsernameChange}
                fullWidth
                sx={{ marginBottom: "10px" }}
              />
            </Grid>
            <Grid item xs={6} md={4}>
              <TextField
                label="Número de Estrellas"
                variant="outlined"
                value={stars}
                onChange={handleStarsChange}
                fullWidth
                sx={{ marginBottom: "10px" }}
              />
            </Grid>
            <Grid item xs={6} md={4}>
              <Select
                value={language}
                onChange={handleLanguageChange}
                fullWidth
                variant="outlined"
                displayEmpty
                sx={{ marginBottom: "10px" }}
              >
                <MenuItem value="">Idioma</MenuItem>
                <MenuItem value="JavaScript">JavaScript</MenuItem>
                <MenuItem value="Python">Python</MenuItem>
                {/* Agrega más opciones de idiomas según sea necesario */}
              </Select>
            </Grid>
            <Grid item xs={12}>
              <Button type="submit" variant="contained" fullWidth>
                Buscar Repositorios
              </Button>
            </Grid>
          </Grid>
        </form>
        {showRepoList && (
          <RepoList
            username={username}
            stars={stars}
            language={language}
          />
        )}
      </Container>
    </ThemeProvider>
  );
}

export default App;
