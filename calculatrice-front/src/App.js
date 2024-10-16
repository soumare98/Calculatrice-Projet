import './App.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const API_URL = 'http://localhost:8000';

function App() {
    const [expression, setExpression] = useState('');
    const [result, setResult] = useState(null);
    const [error, setError] = useState(null);

    const handleButtonClick = (value) => {
        setExpression((prevExpression) => prevExpression + value + ' ');
    };

    const handleClear = () => {
        setExpression('');
        setResult(null);
        setError(null);
    };

    const handleSpace = () => {
        setExpression((prevExpression) => prevExpression + ' ');
    };

    const handleCalculate = async() => {
        try {
            const trimmedExpression = expression.trim();
            if (!trimmedExpression) {
                setError('Veuillez entrer les expressions');
                return;
            }

            const response = await axios.post(`${API_URL}/calculate/`, {
                expression: trimmedExpression,
            });

            setResult(response.data.result);
            setError(null);
        } catch (err) {
            setError("Erreur de calcul. Veuillez vérifier l'expression.");
            setResult(null);
        }
    };

    const handleDownloadCSV = async() => {
        try {
            const downloadUrl = `${API_URL}/export/`;
            window.open(downloadUrl, '_blank');
        } catch (err) {
            console.error('Error downloading CSV:', err);
        }
    };

    useEffect(() => {}, []);

    return ( <
            div className = "App" >
            <
            h1 > Calculatrice NPI < /h1> <
            div className = "display" >
            <
            input type = "text"
            value = { expression }
            readOnly / > {
                result !== null && < div className = "result" > Résultat: { result } < /div>} < /
                div > {
                    error && < div className = "error" > { error } < /div>} <
                    div className = "keyboard" >
                    <
                    div className = "row" >
                    <
                    button onClick = {
                        () => handleButtonClick('1')
                    } > 1 < /button> <
                    button onClick = {
                        () => handleButtonClick('2')
                    } > 2 < /button> <
                    button onClick = {
                        () => handleButtonClick('3')
                    } > 3 < /button> <
                    button className = "operator"
                    onClick = {
                        () => handleButtonClick('+')
                    } > + < /button> < /
                    div > <
                    div className = "row" >
                    <
                    button onClick = {
                        () => handleButtonClick('4')
                    } > 4 < /button> <
                    button onClick = {
                        () => handleButtonClick('5')
                    } > 5 < /button> <
                    button onClick = {
                        () => handleButtonClick('6')
                    } > 6 < /button> <
                    button className = "operator"
                    onClick = {
                        () => handleButtonClick('-')
                    } > - < /button> < /
                    div > <
                    div className = "row" >
                    <
                    button onClick = {
                        () => handleButtonClick('7')
                    } > 7 < /button> <
                    button onClick = {
                        () => handleButtonClick('8')
                    } > 8 < /button> <
                    button onClick = {
                        () => handleButtonClick('9')
                    } > 9 < /button> <
                    button className = "operator"
                    onClick = {
                        () => handleButtonClick('*')
                    } > * < /button> < /
                    div > <
                    div className = "row" >
                    <
                    button onClick = {
                        () => handleButtonClick('0')
                    } > 0 < /button> <
                    button className = "operator"
                    onClick = {
                        () => handleButtonClick('/')
                    } > /</button >
                    <
                    button className = "clear"
                    onClick = { handleClear } > C < /button> <
                    button className = "equals"
                    onClick = { handleCalculate } >= < /button> < /
                    div > <
                    div className = "row" >
                    <
                    button className = "space"
                    onClick = { handleSpace } > Espace < /button> < /
                    div > <
                    /div> <
                    div className = "actions" >
                    <
                    button onClick = { handleDownloadCSV } > Télécharger CSV < /button> < /
                    div > <
                    /div>
                );
            }

            export default App;