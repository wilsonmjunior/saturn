import { useEffect, useState } from 'react';
import {Modal, View, Text, Platform, StatusBar, ActivityIndicator} from 'react-native';
import {WebView} from 'react-native-webview';
import { SafeAreaView } from 'react-native-safe-area-context';

import { useStyles } from '@/config/unistyles';

import { stylesheet } from './styles';

type FileExtension = 'pdf' | 'doc' | 'docx' | 'xls' | 'xlsx';

type Props = {
  url: string;
  isVisible?: boolean;
  children?: React.ReactNode;
}

export function DocumentViewer({ url, isVisible, children }: Props) {
  const { styles, theme } = useStyles(stylesheet)

  const [webViewURL, setWebViewURL] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (url) {
      if (Platform.OS === 'android') { 
        const URL = url.split('?');
        const extension = URL[0].split('.').reverse()[0] as FileExtension;
        
        const viewerUrl = encodeURIComponent(url);
        setWebViewURL(`https://docs.google.com/viewerng/viewer?url=${viewerUrl}`)
      } else {  
        setWebViewURL(url);
      } 

      setLoading(false);
    }
  }, []);

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar 
        translucent
        backgroundColor="transparent"
        barStyle="dark-content"
      />

      {
        loading ? (
          <ActivityIndicator size="large" color={theme.colors?.primary} />
        ) : (
          <Modal
            animationType={'slide'}
            transparent
            visible={isVisible}
          >
            
            { url ?
              <WebView 
                source={{ uri: Platform.OS === 'android' ? webViewURL : url }} 
                style={styles.webView}
              />
              : (
                <View style={{ justifyContent: 'center' }}>
                  <Text>No url found!</Text>
                </View>
              )
            }

            { children ? <View style={styles.button}>{children}</View> : null}
          </Modal>
        )
      }
    </SafeAreaView>
  );
}
