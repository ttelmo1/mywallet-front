import { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import StyledLink from "../../components/StyledLink";
import { UserContext } from "../../contexts/UserContext";
import { WalletContext } from "../../contexts/WalletContext";
import apiFinances from "../../services/apiFinances";
import { Container, PurpleBox, WhiteBox } from "./styled";

export default function HomePage() {
    const { user } = useContext(UserContext);
    const [wallet, setWallet] = useState([]);
    const navigate = useNavigate();


    useEffect(() => {
        apiFinances.getEntries(user.token)
            .then((response) => {
                setWallet(response.data);
            })
            .catch((error) => {
                console.log(error.response.data.message);
                navigate("/");
            });
    }, []);

    const newWallet = [...wallet].reverse();

    function sumTotal(wallet) {
        let total = 0;
        wallet.forEach((item) => {
            if (item.type === "income") {
                let valueToNumber = Number(item.value);
                total += valueToNumber;
            } else {
                let valueToNumber = Number(item.value);
                total -= valueToNumber;
            }
        });
        return total;
    }

    return (
        <Container>
            <div className="header">
                <h1>Olá, {user.name}</h1>
                <ion-icon name="exit-outline"></ion-icon>
            </div>
            <WhiteBox>
                {newWallet.length === 0 ? (
                    <h1>Não há registros de<br /> entrada ou saída</h1>
                ) : (
                <div className="entries">
                    {newWallet.map((item) => (
                    <p>
                        {item.date} {item.description} {item.value}
                    </p>
                    ))}
                <div className="total">
                    <p>
                        Total: {sumTotal(newWallet)}
                    </p>
                </div>
                </div>
                )}
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