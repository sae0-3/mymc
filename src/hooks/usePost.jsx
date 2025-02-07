import { useState } from 'react'

import BadRequestException from '@/utils/exceptions/BadRequestException'
import NotAuthorizedException from '@/utils/exceptions/NotAuthorizedException'

const usePost = (postFunction) => {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const postData = async (data) => {
    setLoading(true)
    setError(null)

    try {
      await postFunction(data)
    } catch (err) {
      if (err.code === 'permission-denied') {
        throw new NotAuthorizedException('No tienes permisos para esta acción.')
      } else {
        throw new BadRequestException('Error al procesar la solicitud.')
      }
    } finally {
      setLoading(false)
    }
  }

  return { postData, loading, error }
}

export default usePost
