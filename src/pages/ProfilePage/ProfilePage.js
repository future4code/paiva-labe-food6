import React from 'react';
import OrderCard from '../../components/OrderCard/OrderCard';
import CreateOutlinedIcon from '@material-ui/icons/CreateOutlined';
import './profilepage.scss';

function ProfilePage() {
    return (
        <div id="profileContainer">
            <header>
                <h2>Meu Perfil</h2>
            </header>
            <div className="profileAlign">
                <section className="userInfo">
                    <div className="namePencil">
                        <span>Nome Sobrenome</span>
                        <CreateOutlinedIcon />
                    </div>
                    <p>email@dominio.com</p>
                    <p>123.456.789.01</p>
                </section>

                <section className="addressContent">
                    <div>
                        <h4>Endereço Cadastrado</h4>
                        <p>Rua Lorem Ipsum, 123 - Labenu</p>
                    </div>

                    <CreateOutlinedIcon />

                </section>
                <h2>Historico de pedidos</h2>
                <div style={{ width: "100%", borderBottom: "1px solid black" }} />
                {/* Card de Pedidos*/}
                <OrderCard />
            </div>
        </div>
    )
}
export default ProfilePage;