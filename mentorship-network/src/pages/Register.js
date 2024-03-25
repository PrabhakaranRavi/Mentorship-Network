import React, { useState } from 'react';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.SUPABASE_URL
const supabaseKey = process.env.SUPABASE_KEY
const supabase = createClient(supabaseUrl, supabaseKey)

const Register = () => {
    // State variables to hold form data
    const [formData, setFormData] = useState({
        username: '',
        gmail: '',
        mobile_number: '',
        city: '',
        postal_code: '',
        linkedin_url: ''
    });
    const [isRegistered, setIsRegistered] = useState(false);

    // Handle form input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();

        const postalCode = formData.postal_code;
        const mapQuestApiUrl = `https://www.mapquestapi.com/geocoding/v1/address?key=Cmjtd%7Cluur2108n1,7w=o5-gz8a&inFormat=kvp&outFormat=json&location=${postalCode}&thumbMaps=false`;

        try {
            const response = await fetch(mapQuestApiUrl);
            const dataMap = await response.json();

            if (dataMap.results && dataMap.results.length > 0) {
                const location = dataMap.results[0].locations[0];
                const { lat, lng } = location.latLng;

                // Insert data into Supabase table along with latitude and longitude
                const { data, error } = await supabase.from('UserData').insert([
                    {
                        ...formData,
                        latitude: lat,
                        longitude: lng
                    }
                ]);

                if (error) {
                    console.error('Error inserting data:', error.message);
                    return;
                }

                console.log('Data inserted successfully:', data);
                // Set registration status to true
                setIsRegistered(true);
                // Reset form fields after submission
                setFormData({
                    username: '',
                    gmail: '',
                    mobile_number: '',
                    city: '',
                    postal_code: '',
                    linkedin_url: ''
                });
            } else {
                console.error('Failed to fetch latitude and longitude coordinates from MapQuest API');
            }
        } catch (error) {
            console.error('Error fetching latitude and longitude coordinates:', error.message);
        }
    };

    return (
        <div>
            <h2>Register Form</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="username">Username:</label>
                    <input
                        type="text"
                        id="username"
                        name="username"
                        value={formData.username}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="gmail">Gmail:</label>
                    <input
                        type="email"
                        id="gmail"
                        name="gmail"
                        value={formData.gmail}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="mobile_number">Mobile Number:</label>
                    <input
                        type="tel"
                        id="mobile_number"
                        name="mobile_number"
                        value={formData.mobile_number}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="city">City:</label>
                    <input
                        type="text"
                        id="city"
                        name="city"
                        value={formData.city}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="postal_code">Postal Code:</label>
                    <input
                        type="text"
                        id="postal_code"
                        name="postal_code"
                        value={formData.postal_code}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="linkedin_url">LinkedIn URL:</label>
                    <input
                        type="url"
                        id="linkedin_url"
                        name="linkedin_url"
                        value={formData.linkedin_url}
                        onChange={handleChange}
                        required
                    />
                </div>
                <button type="submit">Register</button>
            </form>
            {isRegistered && <p>Registration successful!</p>}
        </div>
    );
};

export default Register;
