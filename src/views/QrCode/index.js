import React, { useState } from 'react';
import * as S from './styles';
import Qr from 'qrcode.react';
import { Redirect } from 'react-router-dom';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

function QrCode() {
    const [macaddress, setMacaddress] = useState();
    const [redirect, setRedirect] = useState(false);

    async function saveMacaddress() {
        if (!macaddress) {
            alert("Informe o código de validação")
        } else {
            await localStorage.setItem('@todo/macaddress', macaddress)
            setRedirect(true);
            window.location.reload();
        }
    }

    return (
        <S.Container>
            { redirect && <Redirect to="/" /> }
            <Header />

            <S.Content className="smoothTransition">
                <h1>Capture o QrCode pelo APP</h1>
                <p>suas atividades serão sincronizadas com a do seu celular.</p>
                <S.QrCodeArea>
                    <Qr value='getmacaddress' size={300} />
                </S.QrCodeArea>

                <S.ValidationCode>
                    <span>Digite o código de validação</span>
                    <input type="text" onChange={ e => setMacaddress(e.target.value)} value={macaddress} />
                    <button type="button" onClick={saveMacaddress}>SINCRONIZAR</button>
                </S.ValidationCode>
            </S.Content>

            <Footer />
        </S.Container>
    )
}

export default QrCode;