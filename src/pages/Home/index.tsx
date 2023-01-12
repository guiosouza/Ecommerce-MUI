import { AccountCircle } from "@mui/icons-material";
import { Lock } from "@mui/icons-material";
import { Box, Button, InputAdornment, TextField } from "@mui/material";
import "./styles.css";

const Home = () => {
  return (
    <div className="page-container">
      <div className="banner-container">
        <h1>LOGIN</h1>
        <p>O melhor de Franca</p>
      </div>
      <div className="base-card login-card">
        <form>
          <Box sx={{ display: "flex", alignItems: "flex-end" }}>
            <AccountCircle sx={{ color: "action.active", mr: 1, my: 0.5 }} />
            <TextField id="input-with-sx" label="Informe o usuário" variant="standard" />
          </Box>
          <Box sx={{ display: "flex", alignItems: "flex-end", marginTop: "10px", marginBottom: "20px" }}>
            <Lock sx={{ color: "action.active", mr: 1, my: 0.5 }} />
            <TextField id="input-with-sx" label="Informe a senha" variant="standard" />
          </Box>
          <Button variant="contained">Entrar</Button>
        </form>
      </div>
    </div>
  );
};

export default Home;
