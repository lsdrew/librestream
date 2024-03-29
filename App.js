import React from 'react'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { persistStore } from 'redux-persist'
import ReduxToastr from 'react-redux-toastr'
import configureStore from './src/store/configureStore'
import ModalWrapper from './src/common/modals/ModalWrapper'
import Layout from './src/containers/Layout'
import LoadingComponent from './src/common/ui/LoadingComponent'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import "react-slideshow-image/dist/styles.css"
import 'remixicon/fonts/remixicon.css'
import './src/styles/main.scss'

const App = ({ element }) => {
  const store = configureStore()
  const persistor = persistStore(store)

  return (
    <Provider store={store}>
      <PersistGate loading={<LoadingComponent />} persistor={persistor}>
        <ModalWrapper />
        <Layout>
          {element}
        </Layout>
        <ReduxToastr
          position="bottom-right"
          transitionIn="fadeIn"
          transitionOut="fadeOut"
        />
      </PersistGate>
    </Provider>
  )
}

export default App