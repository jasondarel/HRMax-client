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

export const verifyRegisterOTP = async (payload: { email: string; otpCode: string }) => {
    try {
        const response = await fetch(`${API_URL}/auth/verify/register-otp`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(payload),
        });

        const data = await response.json();

        if (!response.ok) {
            throw new Error(data.message || `OTP verification failed: ${response.statusText}`);
        }

        return data;
    } catch (error) {
        console.error("Error verifying OTP:", error);
        throw error;
    }
};

export const loginUser = async (payload: { email: string; password: string; }) => {
    try {
        const response = await fetch(`${API_URL}/auth/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(payload),
        });

        const data = await response.json();

        if (!response.ok) {
            throw new Error(data.message || `Login failed: ${response.statusText}`);
        }

        return data;
    } catch (error) {
        console.error("Error logging in user:", error);
        throw error;
    }
};
