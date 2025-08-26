import React, { useState } from "react";
import { HistoryButton, TrackingContainer, UpdateButton } from "../../Themes/TrackingList/TrackingList";
import { Guide, GuideStatus } from "../../Interfaces/types";

interface Props {
    guides: Guide[];
    onUpdateStatus: (index: number, status: GuideStatus) => void;
    onUpdateAll: (statuses: GuideStatus[]) => void;
    onShowHistory: (guide: Guide) => void;
}

const TrackingList: React.FC<Props> = ({ guides, onUpdateStatus, onUpdateAll, onShowHistory }) => {
    const [statusDraft, setStatusDraft] = useState<GuideStatus[]>(guides.map(g => g.status));

    const handleStatusChange = (index: number, value: GuideStatus) => {
        const newDraft = [...statusDraft];
        newDraft[index] = value;
        setStatusDraft(newDraft);
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
                                    <HistoryButton onClick={() => onShowHistory(guide)}>Historial</HistoryButton>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <div>
                    <UpdateButton onClick={() => onUpdateAll(statusDraft)} type="button" value="Actualizar Estado" />
                </div>
            </TrackingContainer>
        </>
    )
}

export default TrackingList;