import Form from "../components/Form"
import { Link } from "react-router-dom"
import { Modal, openModal } from "kezenh-modal-package"
import { useDispatch } from "react-redux"
import { addEmployee } from "./../redux/store"
import React from 'react'

function Home() {

    const dispatch = useDispatch()

    function saveEmployee() {

        const employee = {
            firstName: document.getElementById("first-name").value,
            lastName: document.getElementById("last-name").value,
            startDate: document.getElementById("start-date").value,
            department: document.getElementById("department").value,
            dateOfBirth: document.getElementById("date-of-birth").value,
            street: document.getElementById("street").value,
            city: document.getElementById("city").value,
            state: document.getElementById("state").value,
            zipCode: document.getElementById("zip-code").value
        }
        dispatch(addEmployee(employee))
        openModal()
    }

    return (
        <div className="home">
            <div className="title">
                <h1>HRnet</h1>
            </div>
            <div className="container">
                <Link to="/employee-list">View Current Employees</Link>
                <h2>Create Employee</h2>
                <Form />
                <button className="button" onClick={saveEmployee}>Save</button>
            </div>
            <Modal text="Employee Created!" />
        </div>
    )
}

export default Home