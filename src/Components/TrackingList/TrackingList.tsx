import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { HistoryButton, TrackingContainer, UpdateButton } from "../../Themes/TrackingList/TrackingList";
import { Guide, GuideStatus } from "../../Interfaces/types";
import { updateGuideStatus, updateAllStatuses, setSelectedHistory } from "../../store/guidesSlice";
import { RootState } from "../../store/store";


const TrackingList: React.FC = () => {
    const dispatch = useDispatch();
    const guides = useSelector((state: RootState) => state.guides.guides);

    const [statusDraft, setStatusDraft] = useState<GuideStatus[]>(guides.map(g => g.status));

    const handleStatusChange = (index: number, value: GuideStatus) => {
        const newDraft = [...statusDraft];
        newDraft[index] = value;
        setStatusDraft(newDraft);
        dispatch(updateGuideStatus({ index, newStatus: value }));
    };

    const handleUpdateAll = () => {
        dispatch(updateAllStatuses(statusDraft));
    };

    const handleShowHistory = (guide: Guide) => {
        dispatch(setSelectedHistory(guide));
    };

    const getStatusOptions = (current: GuideStatus) => {
        const flow: Record<GuideStatus, GuideStatus[]> = {
            pending: ["pending", "in-transit"],
            "in-transit": ["in-transit", "delivered"],
            delivered: ["delivered"],
        };

        return flow[current].map(status => (
            <option key={status} value={status}>
                {status === "pending" ? "Pendiente" : status === "in-transit" ? "En tránsito" : "Entregado"}
            </option>
        ));
    };

    return (
        <>
            <TrackingContainer>
                <h1>Lista de guías</h1>
                <table>
                    <caption>Lista de guías registradas</caption>
                    <thead>
                        <tr>
                            <th>Número de guía</th>
                            <th>Estado actual</th>
                            <th>Origen</th>
                            <th>Destino</th>
                            <th>Fecha de la última actualización</th>
                        </tr>
                    </thead>
                    <tbody>
                        {guides.map((guide, i) => (
                            <tr key={guide.trackingNumber}>
                                <td>{guide.trackingNumber}</td>
                                <td>{guide.status}</td>
                                <td>{guide.origin}</td>
                                <td>{guide.destination}</td>
                                <td>{guide.creationDate}</td>
                                <td>
                                    <select
                                        value={statusDraft[i]}
                                        onChange={e => handleStatusChange(i, e.target.value as GuideStatus)}
                                    >
                                        {getStatusOptions(guide.status)}
                                    </select>
                                </td>
                                <td>
                                    <HistoryButton onClick={() => handleShowHistory(guide)}>Historial</HistoryButton>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <div>
                    <UpdateButton onClick={handleUpdateAll} type="button" value="Actualizar Estado" />
                </div>
            </TrackingContainer>
        </>
    )
}

export default TrackingList;