import React from "react";
import { Guide } from "../../Interfaces/types";
import { CloseButton, ModalContainer } from "../../Themes/HistoryModal/HistoryModal";


interface Props {
    guide: Guide;
    onClose: () => void;
}

const HistoryModal: React.FC<Props> = ({ guide, onClose }) => {
    return (
        <ModalContainer>
            <div className="modal">
                <h2>Historial de la guía {guide.trackingNumber}</h2>

                <ul>
                    {guide.history.map((entry, index) => (
                        <li key={index}>
                            Estado: {entry.status} | Fecha: {entry.timestamp}
                        </li>
                    ))}
                </ul>

                <CloseButton onClick={onClose}>Cerrar</CloseButton>
            </div>
        </ModalContainer>
    );
};

export default HistoryModal;
