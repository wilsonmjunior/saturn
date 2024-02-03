import { Ionicons } from '@expo/vector-icons'
import { useState } from 'react'
import { Text, View } from 'react-native'
import { RectButton } from 'react-native-gesture-handler'

import { Sheet } from '@/components/Sheet'
import { createStyleSheet, useStyles } from '@/config/unistyles'
import { useSession } from '@/hooks'

const stylessheet = createStyleSheet(theme => ({
  container: {
    flex: 1,
    height: '100%',
    backgroundColor: theme.colors?.background
  },
  button: {
    marginTop: 74,
    marginRight: 32,
    alignSelf: 'flex-end'
  }
}))

export default function Home () {
  const [openSheet, setOpenSheet] = useState(false)

  const { signOut } = useSession()

  const { styles, theme } = useStyles(stylessheet)

  function handleToggleSheet () {
    setOpenSheet(!openSheet)
  }

  return (
    <View style={styles.container}>
      <RectButton
        onPress={handleToggleSheet}
        style={styles.button}
      >
        <Ionicons
          name="options"
          color={theme.colors?.white}
          size={24}
        />
      </RectButton>

      <Text
        onPress={() => {
          signOut();
        }}
      >
        Sign Out
      </Text>

      { openSheet ? <Sheet onClose={handleToggleSheet} /> : null}
    </View>
  )
}
