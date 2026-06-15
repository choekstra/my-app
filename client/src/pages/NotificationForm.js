import React from 'react';
import { useState } from 'react';
import '../Notification.css';
import { useForm } from 'react-hook-form';
import SupervList from '../components/SupervList';

export default function NotificationForm() {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [errorFirstName, setErrorFirstName] = useState('');
    const [errorLastName, setErrorLastName] = useState('');
    const [errorEmail, setErrorEmail] = useState('');
    const [errorPhone, setErrorPhone] = useState('');


    function handleFirstNameChange(e) {
        const val = e.target.value;
        if (/^[A-Za-z]*$/.test(val)) {
            setFirstName(val);
            setErrorFirstName('');
        } else {
            setErrorFirstName('First name may only contain letters');
        }
    }
    function handleLastNameChange(e) {
        const val = e.target.value;
        if (/^[A-Za-z]*$/.test(val)) {
            setLastName(val);
            setErrorLastName('');
        } else {
            setErrorLastName('Last name may only contain letters');
        }
    }
    function handleEmailChange(e) {
        const val = e.target.value;

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        setEmail(val);
        if (!val || emailPattern.test(val)) {
            setEmail(val);
            setErrorEmail('');
        } else {
            setErrorEmail('Email format required');
        }
    }
    function handlePhoneChange(e) {
        const val = e.target.value;
        setPhoneNumber(val);
        const phonePattern = /^(\+?\d{1,3}[-.\s]?)?(\(?\d{3}\)?[-.\s]?)?\d{3}[-.\s]?\d{4}$/;
        if (!val || phonePattern.test(val)) {
            setErrorPhone('');
        } else {
            setErrorPhone('Enter a standard phone number like 123-456-7890 or +1 (123) 456-7890');
        }
    }

    const { register, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        console.log("data", data);
    };

    const handleSubmit = (event) => {

        console.log("event", event);
        // 1. Stop the default HTML browser page refresh
        //event.preventDefault();

        if (errorEmail || errorPhone) {
            return;
        }

        // 2. Capture all form inputs instantly
        const formData = new FormData(event.currentTarget);

        // 3. Convert FormData to a standard JavaScript object
        const dataObject = Object.fromEntries(formData.entries());

        console.log("Submitted Data:", dataObject);
        // Output: { username: "...", email: "..." }

        // 4. Send directly to your backend API
        // fetch('/api/signup', { method: 'POST', body: formData });
    };

    return (
        <div>
            <header >
                <div class="Notification-header" > LightFeather Notification Form </div>
            </header>

            <form onSubmit={handleSubmit} >
                <div class="Notification-form">
                    <br /><br />

                    <div class="betw-div">
                        <div>
                            <p class="invisibles" style={{ width: 300 }}>. </p>
                            <label >First name</label><br />
                            <input type="text"
                                value={firstName}
                                onChange={handleFirstNameChange}
                                aria-invalid={!!errorFirstName}
                                required />
                            <p class="invisibles" style={{ width: 300 }}>. </p>
                            {errorFirstName && <div className="error">{errorFirstName}</div>}
                        </div>

                        <div>
                            <p class="invisibles" style={{ width: 300 }}>. </p>
                            <label>Last name</label><br />
                            <input type="text"
                                value={lastName}
                                onChange={handleLastNameChange}
                                aria-invalid={!!errorLastName}
                                required />

                            {errorLastName && <div className="error">{errorLastName}</div>}
                        </div>
                    </div>

                    <div class="betw-div">
                        <div>

                            <p style={{ width: 300 }}>How would you prefer to be notified?</p>

                            <input type="checkbox" id="notifyemail" name="notifychoiceemail" />
                            <label for="notifyemail">Email</label><br />

                            <input
                                type="email"
                                name="email"
                                value={email}
                                onChange={handleEmailChange}
                                aria-invalid={!!errorEmail}
                                false
                            />

                            {errorEmail && <div className="error">{errorEmail}</div>}
                        </div>
                        <div>
                            <p class="invisibles" style={{ width: 300 }}>. </p>
                            <input type="checkbox" id="notifyphone" name="notifychoicephone" />
                            <label htmlFor="notifyphone">Phone Number</label><br />
                            <input
                                type="text"
                                name="phoneNumber"
                                value={phoneNumber}
                                onChange={handlePhoneChange}
                                aria-invalid={!!errorPhone}
                                false
                            />
                            {errorPhone && <div className="error">{errorPhone}</div>}
                        </div>
                    </div>
                    <div class="single-div">

                        <div class="dropdown-div">
                            <SupervList />
                        </div>
                    </div>
                    <div class="single-div">
                        <input type="submit" class="button-div" Submit />
                    </div>
                </div>
            </form>
        </div>
    );
}

