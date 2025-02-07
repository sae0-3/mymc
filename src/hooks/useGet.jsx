import { useState, useEffect } from 'react'

import BadRequestException from '@/utils/exceptions/BadRequestException'

const useGet = (getFunction) => {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)
      setError(null)

      try {
        const result = await getFunction()
        setData(result)
      } catch (err) {
        console.error('Error al obtener datos:', err)
        setError(new BadRequestException('Error al obtener datos'))
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [getFunction])

  return { data, loading, error }
}

export default useGet
