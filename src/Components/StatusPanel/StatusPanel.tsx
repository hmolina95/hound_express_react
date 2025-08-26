import React from "react";
import { PanelContainer } from "../../Themes/StatusPanel/StatusPanel";

interface Props {
    counts: {
        totalActive: number;
        inTransit: number;
        delivered: number;
    };
}

const StatusPanel: React.FC<Props> = ({ counts }) => {
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

