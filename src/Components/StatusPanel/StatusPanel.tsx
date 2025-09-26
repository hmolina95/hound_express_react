import React from "react";
import { useSelector } from "react-redux";
import { PanelContainer } from "../../Themes/StatusPanel/StatusPanel";
import { RootState } from "../../store/store";

const StatusPanel: React.FC = () => {
    const guides = useSelector((state: RootState) => state.guides.guides);

    const counts = {
        totalActive: guides.filter(g => g.status !== "delivered").length,
        inTransit: guides.filter(g => g.status === "in-transit").length,
        delivered: guides.filter(g => g.status === "delivered").length,
    };

    return (
        <PanelContainer>
            <h1>Estado General</h1>
            <ul>
                <li>Número total de guías activas: {counts.totalActive}</li>
                <li>Guías en tránsito: {counts.inTransit}</li>
                <li>Guías entregadas: {counts.delivered}</li>
            </ul>
        </PanelContainer>
    )
}

export default StatusPanel;