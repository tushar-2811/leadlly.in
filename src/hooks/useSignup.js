import { useState } from "react";
import { AuthContext } from "../Contexts/UserContext";

import { useAuth } from "../hooks/useAuth";
export const useSignup = () => {
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(null);
    const { dispatch } = useAuth()
    const Signup = async (formData) => {
        setIsLoading(true)
        setError(false)
        const response = await fetch(`https://localhost:5000/api/v1/users/register`, {
            method: 'POST',
            headers: 'Content-Type:application/json',
            body: JSON.stringify(formData)

        })
        const json = await response.json()
        if (!response.ok) {
            setIsLoading(false)
            setError(json.error)
        }
        else {
            localStorage.setItem('user', JSON.stringify(json))
            dispatch({ type: 'login', payload: json })
            setIsLoading(false)
        }

    }
    return { Signup, isLoading, error }

}
