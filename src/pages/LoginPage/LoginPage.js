import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../contexts/UserContext";
import apiAuth from "../../services/apiAuth";


export default function LoginPage () {
    const [form , setForm] = useState({ email: "", password: "" });
    const [loading, setLoading] = useState(false);
    const { setUser } = useContext(UserContext);
    const navigate = useNavigate();

    function handleForm (e) {
        setForm({ ...form, [e.target.name]: e.target.value });
    }

    function handleLogin (e) {
        e.preventDefault();
        setLoading(true);

        apiAuth.login(form)
            .then((response) => {
                const { email , name 




    return (
        
    );
}


