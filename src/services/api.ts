const API_URL = import.meta.env.VITE_API_URL;

export const getCountries = async () => {
    try {
        const response = await fetch(`${API_URL}/master/countries`);
        if (!response.ok) {
            throw new Error(`Failed to fetch countries: ${response.statusText}`);
        }
        const data = await response.json();
        return data.data.countries; // Matches the { data: { countries: [...] } } structure from backend response
    } catch (error) {
        console.error("Error fetching countries:", error);
        throw error;
    }
};

export const registerUser = async (payload: {
    name: string;
    email: string;
    password: string;
    confirmPassword: string;
    phoneInformation: {
        countryCode: string;
        phoneNumber: string;
    };
}) => {
    try {
        const response = await fetch(`${API_URL}/auth/register`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(payload),
        });

        const data = await response.json();

        if (!response.ok) {
            throw new Error(data.message || `Registration failed: ${response.statusText}`);
        }

        return data;
    } catch (error) {
        console.error("Error registering user:", error);
        throw error;
    }
};
