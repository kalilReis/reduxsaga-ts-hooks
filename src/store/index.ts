import { createStore, applyMiddleware, Store } from "redux"
import createSagaMiddleware from "redux-saga"
import { createLogger } from "redux-logger"
import { RepositoriesState } from "./ducks/repositories/types"

import rootReducer from "./ducks/rootReducer"
import rootSaga from "./ducks/rootSaga"

export interface ApplicationState {
  repositories: RepositoriesState
}

const sagaMiddleware = createSagaMiddleware()

const store: Store<ApplicationState> = createStore(
  rootReducer,
  applyMiddleware(sagaMiddleware, createLogger())
)

sagaMiddleware.run(rootSaga)

export default store
