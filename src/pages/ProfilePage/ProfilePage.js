import React, { useEffect } from 'react';
import OrderCard from '../../components/OrderCard/OrderCard';
import CreateOutlinedIcon from '@material-ui/icons/CreateOutlined';
import useProtectedPage from '../../hooks/useProtectedPage';
import { useGetProfile } from '../../requests/useGetProfile';
import { useHistory } from 'react-router-dom';
import Footer from '../../components/Button/Footer';
import { goToChangeAddress, goToUpdateInfo } from '../../router/cordination';
import './profilepage.scss';
import { useGetOrderHistory } from '../../requests/useGetOrderHistory';
import LoadingGif from '../../components/LoadingGif/LoadingGif';

function ProfilePage() {
    useProtectedPage()
    const { userProfile, getProfile } = useGetProfile()
    const { orderHistory, getOrder } = useGetOrderHistory()
    const { name, email, cpf, address } = userProfile

    useEffect(() => {
        getProfile()
        getOrder()
    }, [])

    const history = useHistory()

    return (
        <div id="profileContainer">
            <header>
                <h2>Meu Perfil</h2>
            </header>
            {userProfile && userProfile.name ? (
                <div className="profileAlign">
                    <section className="userInfo">
                        <div className="namePencil">
                            <span>{name}</span>
                            <CreateOutlinedIcon onClick={() => goToUpdateInfo(history)} />
                        </div>
                        <p>{email}</p>
                        <p>{cpf}</p>
                    </section>

                    <section className="addressContent">
                        <div>
                            <h4>Endereço Cadastrado</h4>
                            <p>{address}</p>
                        </div>

                        <CreateOutlinedIcon onClick={() => goToChangeAddress(history)} />

                    </section>
                    <h2>Historico de pedidos</h2>
                    <div style={{ width: "100%", borderBottom: "1px solid black" }} />

                    {orderHistory && orderHistory[0] && orderHistory[0].restaurantName ? orderHistory.map((order) => {
                        return <OrderCard order={order} key={order.expiredAt}/>
                    }) : <p style={{ textAlign: "center", padding: "20px 0" }}>Você não realizou nenhum pedido</p>}

                </div>
            ) : <LoadingGif />}

            <Footer history={history} />

        </div>
    )
}

export default ProfilePage;