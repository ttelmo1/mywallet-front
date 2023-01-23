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

    useEffect(getWallet, []);

    function getWallet(){
        apiFinances.getEntries(user.token)
            .then((response) => {
                setWallet(response.data);
            })
            .catch((error) => {
                console.log(error.response.data.message);
                navigate("/");
            });
    }

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
        return total
    }

    function handleLogout() {
        localStorage.removeItem("user");
        navigate("/");
    }

    function handleDeleteEntry(id) {
        apiFinances.deleteEntry(id, user.token)
            .then((response) => {
                console.log(response);
                const newWallet = wallet.filter((item) => item.id !== id);
                setWallet(newWallet);
                getWallet();
            })
            .catch((error) => {
                console.log(error.response.data.message);
            });
    }

    console.log(sumTotal(newWallet))

    return (
        <Container>
            <div className="header">
                <h1>Olá, {user.name}</h1>
                <ion-icon 
                onClick={handleLogout}
                name="exit-outline"></ion-icon>
            </div>
            <WhiteBox>
                {newWallet.length === 0 ? (
                    <h1>Não há registros de<br /> entrada ou saída</h1>
                ) : (
                <>
                <div className="entries">
                    {newWallet.map((item) => (
                        <div className="transaction" key={item._id}>
                            <div className="date-description"> 
                                <p className="date">{item.date}</p>
                                <p className="description">{item.description}</p>
                            </div>
                            <div className="value-delete">
                                <p className="value"
                                style={item.type === "income" ? {color: "#03AC00"} : {color: "#C70000"}}
                                >{item.value}</p> 
                                <p className="delete"><ion-icon onClick={() => handleDeleteEntry(item._id)} name="close-outline"></ion-icon></p>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="total">
                    SALDO <p className="total-value"
                    style={sumTotal(newWallet) >= 0 ? {color: "#03AC00"} : {color: "#C70000"}}
                    >
                        {sumTotal(newWallet) === "NaN" ? "NEGATIVO" : sumTotal(newWallet)} 
                    </p>
                </div>
                </>
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
