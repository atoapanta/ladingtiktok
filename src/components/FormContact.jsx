import React, { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";

const FormContact = () => {
  const [dataForm, setDataForm] = useState({
    name: "",
    ci: "",
    phone: "",
    email: "",
    city: "",
  });

  const updateDataForm = (e) => {
    const { name, value } = e.target;
    setDataForm({ ...dataForm, [name]: value });
  };

  const updateNumberForm = (e) => {
    const { name, value } = e.target;
    const numeroSinEspacios = value.replace(/[^0-9]/g, "");
    setDataForm({ ...dataForm, [name]: numeroSinEspacios });
  };

  const handlePaste = (e) => {
    e.preventDefault();
  };

  const displayAlert = (icon, title, text) => {
    Swal.fire({
      icon,
      title,
      text,
      showConfirmButton: false,
      timer: 2000,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        "http://localhost:8080/contactanos/register-form.php",
        dataForm,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (data.success) {
        displayAlert(
          "success",
          "Registro correcto!",
          "Te registro fue satisfatorio, pronto se comunicara un asesor!"
        );
      } else {
        displayAlert("error", "Oops...", "Hubo un error intenta nuevamente!");
      }
    } catch (err) {
      displayAlert("error", "Oops...", err.message);
    }
    setDataForm({
      name: "",
      cedula: "",
      phone: "",
      ci: "",
      email: "",
      city: "",
    });
  };

  return (
    <div
      className="card bg-body-tertiary rounded-4 bg-opacity-75 col col-md-6 mx-auto "
      id="data-form"
    >
      <div className="card-body">
        <div className="d-grid btn text-bg-dark ">
          <h4>DEJANOS TUS DATOS</h4>
        </div>
        <h4 className="col text-center fw-bold my-2">
          Y UN ASESOR SE COMUNICARA CONTIGO
        </h4>
        <hr />
        <form onSubmit={handleSubmit}>
          <div className="col mx-auto p-4 border bg-white rounded-5">
            <div className="form-floating my-3">
              <input
                className="form-control rounded-4"
                placeholder="Nombres Completos"
                onChange={updateDataForm}
                onPaste={handlePaste}
                value={dataForm.name}
                autoComplete="off"
                type="text"
                id="name"
                name="name"
                required
              />
              <label htmlFor="name">
                Nombres Completos <span className="text-danger">*</span>
              </label>
            </div>
            <div className="form-floating my-3">
              <input
                className="form-control rounded-4"
                placeholder="Número de Cédula"
                onChange={updateNumberForm}
                onPaste={handlePaste}
                value={dataForm.ci}
                autoComplete="off"
                minLength={10}
                maxLength={10}
                type="text"
                id="ci"
                name="ci"
                required
              />
              <label htmlFor="ci">
                Número de Identificacion <span className="text-danger">*</span>
              </label>
            </div>
            <div className="form-floating my-3">
              <input
                className="form-control rounded-4"
                placeholder="Número de Celular"
                onChange={updateNumberForm}
                onPaste={handlePaste}
                value={dataForm.phone}
                autoComplete="off"
                minLength={10}
                maxLength={10}
                type="text"
                id="phone"
                name="phone"
                required
              />
              <label htmlFor="phone">
                Número de Celular <span className="text-danger">*</span>
              </label>
            </div>
            <div className="form-floating my-3">
              <input
                className="form-control rounded-4"
                placeholder="Correo Electronico"
                onChange={updateDataForm}
                onPaste={handlePaste}
                value={dataForm.email}
                autoComplete="off"
                type="email"
                id="email"
                name="email"
                required
              />
              <label htmlFor="email">
                Correo Electronico <span className="text-danger">*</span>
              </label>
            </div>
            <div className="form-floating my-3">
              <input
                className="form-control rounded-4"
                onChange={updateDataForm}
                onPaste={handlePaste}
                value={dataForm.city}
                placeholder="Ciudad"
                autoComplete="off"
                type="text"
                id="city"
                name="city"
                required
              />
              <label htmlFor="city">
                Ciudad <span className="text-danger">*</span>
              </label>
            </div>
            <hr />
            <div className="d-grid">
              <button className="btn text-bg-danger py-2" type="submit">
                ENVIAR
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FormContact;
