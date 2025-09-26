import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FormContainer, FormGroup, FormLegend, SubmitButton } from "../../Themes/TrackingForm/TrackingForm";
import { Guide } from "../../Interfaces/types";
import { addGuide } from "../../store/guidesSlice";
import { RootState } from "../../store/store";


const TrackingForm: React.FC = () => {
    const dispatch = useDispatch();
    const guides = useSelector((state: RootState) => state.guides.guides);

    const [formData, setFormData] = useState({
        trackingNumber: "",
        origin: "",
        destination: "",
        recipient: "",
        creationDate: "",
        status: "pending",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const { trackingNumber, origin, destination, recipient, creationDate, status } = formData;

        if (!trackingNumber || !origin || !destination || !recipient || !creationDate) {
            alert("Por favor, complete todos los campos.");
            return;
        }

        if (guides.some(g => g.trackingNumber === trackingNumber)) {
            alert("El número de guía ya existe.");
            return;
        }

        dispatch(addGuide({
            trackingNumber,
            origin,
            destination,
            recipient,
            creationDate,
            status: status as Guide["status"],
            history: [{ status: status as Guide["status"], timestamp: new Date().toLocaleString() }],
        }));

        setFormData({
            trackingNumber: "",
            origin: "",
            destination: "",
            recipient: "",
            creationDate: "",
            status: "pending",
        });
    };

    return (
        <FormContainer>
            <form onSubmit={handleSubmit}>
                <fieldset>
                    <FormLegend>Formulario de Registro de Guías</FormLegend>
                    <FormGroup>
                        <label>Número de guía</label>
                        <input type="text" name="trackingNumber" value={formData.trackingNumber} onChange={handleChange} placeholder="EJM: LP-12345-628-110" />
                    </FormGroup>
                    <FormGroup>
                        <label>Origen</label>
                        <input type="text" name="origin" value={formData.origin} onChange={handleChange} />
                    </FormGroup>
                    <FormGroup>
                        <label>Destino</label>
                        <input type="text" name="destination" value={formData.destination} onChange={handleChange} />
                    </FormGroup>
                    <FormGroup>
                        <label>Destinatario</label>
                        <input type="text" name="recipient" value={formData.recipient} onChange={handleChange} />
                    </FormGroup>
                    <FormGroup>
                        <label>Fecha de Creación</label>
                        <input type="date" name="creationDate" value={formData.creationDate} onChange={handleChange} />
                    </FormGroup>
                    <FormGroup>
                        <legend>Estado inicial</legend>
                        <div>
                            <select name="status" value={formData.status} onChange={handleChange}>
                                <option value="pending">Pendiente</option>
                                <option value="in-transit">En transito</option>
                                <option value="delivered">Entregado</option>
                            </select>
                        </div>
                    </FormGroup>
                </fieldset>
                <SubmitButton type="submit">Enviar</SubmitButton>
            </form>
        </FormContainer>
    )
}

export default TrackingForm;