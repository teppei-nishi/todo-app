import { FC, ReactNode, createContext, useReducer } from 'react'

type State = {
  store: {
    user: any
    token: string | null
    isLoggedIn: boolean
    setToken: (token: State['store']['token']) => void
    setUser: (user: State['store']['user']) => void
  }
}

type Action = {
  type: 'SET_TOKEN' | 'SET_USER'
  payload: NonNullable<State['store']['token'] | State['store']['user']>
}

const initialState: State = {
  store: {
    user: null,
    token: null,
    isLoggedIn: false,
    setToken: () => {},
    setUser: () => {},
  },
}

const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case 'SET_TOKEN':
      return {
        store: {
          ...state.store,
          token: action.payload,
          isLoggedIn: !!action.payload,
        },
      }
    case 'SET_USER':
      return {
        store: {
          ...state.store,
          user: action.payload,
        },
      }
    default:
      return state
  }
}

export const StoreContext = createContext(initialState)

export const StoreProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const setToken: State['store']['setToken'] = (token) => {
    dispatch({ type: 'SET_TOKEN', payload: token })
  }

  const setUser: State['store']['setUser'] = (user) => {
    dispatch({ type: 'SET_USER', payload: user })
  }

  return (
    <StoreContext.Provider
      value={{
        store: {
          ...state.store,
          setToken,
          setUser,
        },
      }}
    >
      {children}
    </StoreContext.Provider>
  )
}
