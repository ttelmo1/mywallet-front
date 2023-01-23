import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { ThreeDots } from "react-loader-spinner";
import { useNavigate } from "react-router-dom";
import StyledButton from "../../components/StyledButton";
import StyledForm from "../../components/StyledForm";
import StyledInput from "../../components/StyledInput";
import StyledLink from "../../components/StyledLink";
import { UserContext } from "../../contexts/UserContext";
import apiAuth from "../../services/apiAuth";
import { Container } from "./styled";


export default function LoginPage() {
    const [form, setForm] = useState({ email: "", password: "" });
    const [loading, setLoading] = useState(false);
    const { setUser } = useContext(UserContext);
    const navigate = useNavigate();

    function handleForm(e) {
        setForm({ ...form, [e.target.name]: e.target.value });
    }

    function handleLogin(e) {
        e.preventDefault();
        setLoading(true);

        apiAuth.login(form)
            .then((response) => {
                const { email, name } = response.data.user;
                setLoading(false);
                setUser({ email, name , token: response.data.token});
                localStorage.setItem("user", JSON.stringify({ email, name }));
                navigate("/home");
            })
            .catch((error) => {
                setLoading(false);
                alert(error.response.data.message);
            });
    }

    return (
        <Container>
            <h1>MyWallet</h1>
            <StyledForm onSubmit={handleLogin}>
                <StyledInput
                    type="email"
                    name="email"
                    placeholder="E-mail"
                    value={form.email}
                    onChange={handleForm}
                    required
                    disabled={loading}
                />
                <StyledInput
                    type="password"
                    name="password"
                    placeholder="Senha"
                    value={form.password}
                    onChange={handleForm}
                    required
                    disabled={loading}
                />
                <StyledButton type="submit" disabled={loading}>
                    {loading ? (
                        <ThreeDots width={50} height={50} color="#FFFFFF" />
                    ) : "Entrar"}
                </StyledButton>
            </StyledForm>
            <StyledLink to="/cadastro">Primeira vez? Cadastre-se!</StyledLink>
        </Container>
    );
}


