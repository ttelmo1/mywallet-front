import { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import StyledLink from "../../components/StyledLink";
import { UserContext } from "../../contexts/UserContext";
import { WalletContext } from "../../contexts/WalletContext";
import apiFinances from "../../services/apiFinances";
import { Container, PurpleBox, WhiteBox } from "./styled";

export default function HomePage() {
    const [loading, setLoading] = useState(false);
    const { user } = useContext(UserContext);
    const { wallet, setWallet } = useContext(WalletContext);
    const navigate = useNavigate();


    useEffect(() => {
        setLoading(true);
        apiFinances.getEntries(user.token)
            .then((response) => {
                setWallet(response.data);
                setLoading(false);
            })
            .catch((error) => {
                setLoading(false);
                console.log(error.response.data.message);
                navigate("/");
            });
    }, []);

    console.log(wallet);

    return (
        <Container>
            <div className="header">
                <h1>Olá, {user.name}</h1>
                <ion-icon name="exit-outline"></ion-icon>
            </div>
            <WhiteBox>
                <h1>Não há registros de<br /> entrada ou saída</h1>
            </WhiteBox>
            <div className="footer">
                <PurpleBox>
                    <ion-icon name="add-circle-outline"></ion-icon>
                    <StyledLink to="/nova-entrada">
                        <h2>Nova entrada</h2>
                    </StyledLink>
                </PurpleBox>
                <PurpleBox>
                    <ion-icon name="remove-circle-outline"></ion-icon>
                    <StyledLink to="/nova-saida">
                        <h2>Nova saída</h2>
                    </StyledLink>
                </PurpleBox>
            </div>
        </Container>
    );
}

//Buscar token dentro de contexto de usuario