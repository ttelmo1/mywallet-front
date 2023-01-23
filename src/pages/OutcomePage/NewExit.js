import StyledButton from "../../components/StyledButton";
import StyledForm from "../../components/StyledForm";
import StyledInput from "../../components/StyledInput";
import { Container } from "./styled";

export default function NewExit(){
    return(
        <Container>
            <div className="header">
                <h1>Nova saída</h1>
            </div>
            <StyledForm>
                <StyledInput type="text" placeholder="Valor" />
                <StyledInput type="text" placeholder="Descrição" />
            </StyledForm>
            <StyledButton>Salvar saída</StyledButton>
        </Container>
    );
}