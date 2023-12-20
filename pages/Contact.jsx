import React, { useState } from 'react'
import styles from '../styles/Contact.module.css'

const Contact = () => {
    const [name, setName] = useState("")
    const [phone, setPhone] = useState("")
    const [email, setEmail] = useState("")
    const [desc, setDesc] = useState("")

    const handlesubmit = async (e) => {
        e.preventDefault()
        const data = { name, phone, email, desc }
        console.log(data)

        const settings = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        };
        try {
            const fetchResponse = await fetch("/api/postcontact", settings);
            const res = await fetchResponse.json();
            console.log("sucess")
            alert("done")
            setName('')
            setPhone('')
            setEmail('')
            setDesc('')
            return res;
        } catch (e) {
            console.log("error")
            return e;
        }
    }

    const handlechange = (e) => {
        if (e.target.name == 'name')
            setName(e.target.value)
        else if (e.target.name == 'phone')
            setPhone(e.target.value)
        else if (e.target.name == 'email')
            setEmail(e.target.value)
        else if (e.target.name == 'desc')
            setDesc(e.target.value)



    }
    return (
        <>
            <div className={styles.container}>
                <h1>Contact Us</h1>
                <form onSubmit={handlesubmit}>
                    <div className={styles.mb3}>
                        <label htmlFor='name' className={styles.formlabel}  >Name</label>
                        <input type="text" value={name} onChange={handlechange} className="form-control" id="name" name='name' placeholder="Enter Your Name" />
                    </div>
                    <div className={styles.mb3}>
                        <label htmlFor='email' className={styles.formlabel} >Email</label>
                        <input type="email" value={email} onChange={handlechange} className="form-control" id="email" name='email' placeholder="Enter Your Email" />
                    </div>
                    <div className={styles.mb3}>
                        <label htmlFor='phone' className={styles.formlabel}>Phone No.</label>
                        <input type="phone" value={phone} onChange={handlechange} className="form-control" id="phone" name='phone' placeholder="Enter your Phone Number" />
                    </div>
                    <div className={styles.mb3}>
                        <label htmlFor='desc' className={styles.formlabel}>Comments</label>
                        <textarea className="form-control" value={desc} onChange={handlechange} id="desc" name='desc' placeholder="Write your concerns here" />
                    </div>

                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        </>
    )
}

export default Contact