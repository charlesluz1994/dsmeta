import NotificationButton from '../NotificationButton'
import './styles.css'

function SalesCard() {
    return (
        <div className="dsmeta-card">
            <h2 className="ds-meta-sales-title">Vendas</h2>
            <div>
                <div className="dsmeta-form-control-container">
                    <input className="ds-meta-form-control" type="date" />
                </div>
                <div className="dsmeta-form-control-container">
                    <input className="ds-meta-form-control" type="date" />
                </div>
            </div>
            <div>
                <table className="dsmeta-sales-table">
                    <thead>
                        <tr>
                            <th className="show992">ID</th>
                            <th className="show576">Data</th>
                            <th>Vendedor</th>
                            <th className="show992">Visitas</th>
                            <th className="show992">Vendas</th>
                            <th>Total</th>
                            <th>Notificar</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="show992">#001</td>
                            <td className="show576">08/07/2022</td>
                            <td>Anakin</td>
                            <td className="show992">1</td>
                            <td className="show992">10</td>
                            <td>R$ 5.300</td>
                            <td>
                                <div className="dsmeta-red-btn-container">
                                    <NotificationButton />
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td className="show992">#002</td>
                            <td className="show576">08/07/2022</td>
                            <td>Anakin</td>
                            <td className="show992">2</td>
                            <td className="show992">20</td>
                            <td>R$ 5.300</td>
                            <td>
                                <div className="dsmeta-red-btn-container">
                                    <NotificationButton />
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td className="show992">#003</td>
                            <td className="show576">08/07/2022</td>
                            <td>Anakin</td>
                            <td className="show992">3</td>
                            <td className="show992">30</td>
                            <td>R$ 5.300</td>
                            <td>
                                <div className="dsmeta-red-btn-container">
                                    <NotificationButton />
                                </div>
                            </td>
                        </tr>

                    </tbody>
                </table>
            </div>

        </div>
    )
}

export default SalesCard

