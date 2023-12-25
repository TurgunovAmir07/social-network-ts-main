import React, { useState, useEffect } from "react";

export const useUserId = () => {
  const [userId, setUserId] = useState<string | null>(null)

  useEffect(() => {
    const savedUserId = localStorage.getItem('userLoginData')

    if (savedUserId) {
      setUserId(JSON.parse(savedUserId))
    }
  }, [])

  return userId
}