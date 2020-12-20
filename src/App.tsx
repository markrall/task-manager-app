import React from 'react'
// import { Route, Switch, withRouter, Redirect } from 'react-router-dom'
import { Grommet } from 'grommet'
// import axios from './shared/store/axios-common'

import Layout from './components/Layout'

const theme = {
  global: {
    colors: {
      brand: '#228BE6',
    },
    font: {
      family: 'Roboto',
      size: '18px',
      height: '20px',
    },
  },
}

const App = () => {
  // const [data, setData] = useState({ token: '', _id: '' })

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const result = await axios.post('users/login', {
  //         name: 'Mark',
  //         email: 'mark@example.com',
  //         password: 'r5_9)Gq2!@135',
  //       })

  //       setData({
  //         token: result.data.token,
  //         _id: result.data.user._id,
  //       })
  //     } catch (error) {
  //       console.log(error)
  //     }
  //   }

  //   fetchData()
  // }, [])

  return (
    <Grommet theme={theme} full>
      <Layout />
    </Grommet>
  )
}

export default App
