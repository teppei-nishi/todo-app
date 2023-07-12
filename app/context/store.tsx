import { FC, ReactNode, createContext, useReducer } from 'react'

type State = {
  store: {
    user: null
    token: string | null
    isLoggedIn: boolean
  }
  setToken: (token: string) => void
}

type Action = {
  type: 'SET_TOKEN'
  payload: string
}

const initialState: State = {
  store: {
    user: null,
    token: null,
    isLoggedIn: false,
  },
  setToken: () => {},
}

const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case 'SET_TOKEN':
      return {
        ...state,
        store: {
          ...state.store,
          token: action.payload,
          isLoggedIn: true,
        },
      }
    default:
      return state
  }
}

export const StoreContext = createContext(initialState)

export const StoreProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const setToken = (token: string) => {
    dispatch({ type: 'SET_TOKEN', payload: token })
  }

  return (
    <StoreContext.Provider
      value={{
        ...state,
        setToken,
      }}
    >
      {children}
    </StoreContext.Provider>
  )
}
