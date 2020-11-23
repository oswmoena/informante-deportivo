import React from 'react'
import { useFormik } from 'formik';
import { addTeam } from '../actions';
import Swal from 'sweetalert2'

export const AddTeam = () => {
    const formik = useFormik({
        initialValues: {
            name: '',
            img: '',
            points: 0,
        },
        onSubmit: values => {
            // alert(JSON.stringify(values, null, 2));
            console.log('values', values)
            addTeam(values).then(() => {
                Swal.fire(
                    'Agregado!',
                    'El club ha sido agregado exitosamente',
                    'success'
                )
            }).catch(err => (
                Swal.fire('Error D:', `${err}`, 'error')
            ));
        },
    });
    return (
        <div className="container" style={{ marginTop: '5%' }}>
            <h1>Agregar un Club</h1>
            <hr />
            <form onSubmit={formik.handleSubmit}>
                <div className="form-group row">
                    <label className="col-sm-2 col-form-label" htmlFor="name">Nombre del Club</label>
                    <div className="col-sm-10">
                        <input
                            id="name"
                            className="form-control"
                            name="name"
                            type="text"
                            onChange={formik.handleChange}
                            value={formik.values.name}
                        />
                    </div>
                </div>
                <div className="form-group row">
                    <label className="col-sm-2 col-form-label" htmlFor="img">Imagen del Club</label>
                    <div className="col-sm-10">
                        <input
                            id="img"
                            className="form-control"
                            name="img"
                            type="text"
                            onChange={formik.handleChange}
                            value={formik.values.img}
                        />
                    </div>
                </div>
                <div className="form-group row">
                    <label className="col-sm-2 col-form-label" htmlFor="points">Puntos Iniciales</label>
                    <div className="col-sm-10">
                        <input
                            id="points"
                            className="form-control"
                            name="points"
                            type="number"
                            onChange={formik.handleChange}
                            value={formik.values.points}
                        />
                    </div>
                </div>
                <div className="form-group" style={{ alignItems: 'center' }}>
                    <button className="btn btn-primary mb-2" type="submit">Submit</button>
                </div>
            </form>
        </div>
    );
}
