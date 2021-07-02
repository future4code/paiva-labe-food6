import React, { useEffect } from 'react';
import OrderCard from '../../components/OrderCard/OrderCard';
import CreateOutlinedIcon from '@material-ui/icons/CreateOutlined';
import useProtectedPage from '../../hooks/useProtectedPage';
import { useGetProfile } from '../../requests/useGetProfile';
import { useGetActiveOrder } from '../../requests/getActiveOrder';
import './profilepage.scss';

function ProfilePage() {
    useProtectedPage()
    const { userProfile, getProfile } = useGetProfile()
    const { activeOrder, getActiveOrder } = useGetActiveOrder()

    const { name, email, cpf, address } = userProfile
    useEffect(() => {
        getProfile()
        getActiveOrder()
    }, [])

    console.log(userProfile)
    console.log(activeOrder)

    return (
        <div id="profileContainer">
            <header>
                <h2>Meu Perfil</h2>
            </header>
            <div className="profileAlign">
                <section className="userInfo">
                    <div className="namePencil">
                        <span>{name}</span>
                        <CreateOutlinedIcon />
                    </div>
                    <p>{email}</p>
                    <p>{cpf}</p>
                </section>

                <section className="addressContent">
                    <div>
                        <h4>Endereço Cadastrado</h4>
                        <p>{address}</p>
                    </div>

                    <CreateOutlinedIcon />

                </section>
                <h2>Historico de pedidos</h2>
                <div style={{ width: "100%", borderBottom: "1px solid black" }} />

                <OrderCard userProfile={userProfile} />
                
            </div>
        </div>
    )
}
export default ProfilePage;