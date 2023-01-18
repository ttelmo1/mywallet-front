import { useState } from "react";
import { ThreeDots } from "react-loader-spinner";
import { useNavigate } from "react-router-dom";
import StyledButton from "../../components/StyledButton";
import StyledForm from "../../components/StyledForm";
import StyledInput from "../../components/StyledInput";
import StyledLink from "../../components/StyledLink";
import apiAuth from "../../services/apiAuth";
import { Container } from "./styled";


export default function SignUpPage() {
    const [form, setForm] = useState({ email: "", password: "", name: "" });
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    function handleForm(e) {
        setForm({ ...form, [e.target.name]: e.target.value });
    }

    function handleSignUp(e) {
        e.preventDefault();
        setLoading(true);

        apiAuth.signUp(form)
            .then((response) => {
                setLoading(false);
                navigate("/");
            })
            .catch((error) => {
                setLoading(false);
                alert(error.response.data.message);
            });
    }

    return (
        <Container>
            <h1>MyWallet</h1>
            <StyledForm>
                <StyledInput
                    type="text"
                    name="name"
                    placeholder="Nome"
                    value={form.name}
                    onChange={handleForm}
                    disabled={loading}
                />
                <StyledInput
                    type="email"
                    name="email"
                    placeholder="E-mail"
                    value={form.email}
                    onChange={handleForm}
                    disabled={loading}
                />
                <StyledInput
                    type="password"
                    name="password"
                    placeholder="Senha"
                    value={form.password}
                    onChange={handleForm}
                    disabled={loading}
                />
                <StyledButton
                    type="submit"
                    onClick={handleSignUp}
                    disabled={loading}
                >
                    {loading ? (<ThreeDots width={50} height={50} color="#FFFFFF" />) : "Cadastrar"}
                </StyledButton>
             </StyledForm>

             <StyledLink to="/">Já tem uma conta? Entre agora!</StyledLink>
        </Container>
    );
}