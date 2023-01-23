import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import StyledButton from "../../components/StyledButton";
import StyledForm from "../../components/StyledForm";
import StyledInput from "../../components/StyledInput";
import { UserContext } from "../../contexts/UserContext";
import apiFinances from "../../services/apiFinances";
import { Container } from "./styled";

export default function NewEntry(){
    const navigate = useNavigate();
    const { user } = useContext(UserContext);
    const [entryData, setEntryData] = useState({
        value: '',
        description: '',
        type : 'income',
    });
    
    function handleInputChange(e, field){
        const value = e.target.value;
        setEntryData({...entryData, [field]: value});
    }

    function handleNewEntry(e){
        e.preventDefault();

        const body = { ...entryData, value: entryData.value, description: entryData.description, type: entryData.type};
        apiFinances.newEntry(body, user.token)
            .then(res => {
                console.log(res);
                navigate('/home');
            })
            .catch(err => {
                console.log(err.response);
            });
    }        


    return(
        <Container>
            <div className="header">
                <h1>Nova entrada</h1>
            </div>
            <StyledForm onSubmit={handleNewEntry}>
                <StyledInput 
                    type="text" 
                    placeholder="Valor" 
                    onChange={(e) => { handleInputChange(e, 'value'); }}
                    required
                    />
                <StyledInput 
                    type="text" 
                    placeholder="Descrição" 
                    onChange={(e) => { handleInputChange(e, 'description'); }}
                    required
                    />
                <StyledButton type="submit">Salvar entrada</StyledButton>
            </StyledForm>
        </Container>
    );
}