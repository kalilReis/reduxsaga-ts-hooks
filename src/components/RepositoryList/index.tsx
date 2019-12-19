import React, { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { ApplicationState } from "../../store"
import { RepositoriesTypes } from "../../store/ducks/repositories/types"

const RepositoryList: React.FC = () => {
  const { repositories } = useSelector((state: ApplicationState) => state)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch({ type: RepositoriesTypes.LOAD_REQUEST })
  }, [])
  return (
    <ul>
      {repositories.data.map(rep => (
        <li key={rep.id}>{rep.name}</li>
      ))}
    </ul>
  )
}

export default RepositoryList
