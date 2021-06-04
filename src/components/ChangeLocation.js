import { useState } from 'react'

const ChangeLocation = ({ onUpdate }) => {
    const [postcode, setPostcode] = useState('')


    const onSubmit = (e) => {
        e.preventDefault()

        if (!postcode) {
            alert("Please provide a postcode")
            return
        }

        onUpdate({ postcode })

        setPostcode('')

    }


    return (

        <div className="container">

            <form className="change-location" onSubmit={onSubmit}>
                <label className="location-label">Enter A UK Postcode</label>
                <input className="location-field" value={postcode} onChange={(e) => setPostcode(e.target.value)}></input>
                <input type="submit" value="GO" className="btn"></input>
            </form>

        </div>

    );

}

export default ChangeLocation