import { View } from 'react-native'
import React from 'react'
import { connect } from 'react-redux'

import LoginNavigator from './LoginNavigator'
import HomeNavigator from './HomeNavigator'
import { NavigationContainer } from '@react-navigation/native'

function Navigation({auth}) {
  console.log('day la auth:', auth?.token)
  return (
    <View style={{ flex: 1, justifyContent: 'center' }}>
      <NavigationContainer>
        {auth?.token == null ?
          <LoginNavigator /> : <HomeNavigator />
        }
      </NavigationContainer>
    </View>
  )
}

const mapStateToProps = state => ({
  auth: state.auth,
});

export default connect(mapStateToProps)(Navigation)