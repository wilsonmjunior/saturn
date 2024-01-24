import {WebView} from 'react-native-webview';
import {Modal, View, Text, StyleSheet, Platform} from 'react-native';
import { useEffect, useState } from 'react';
import { useStyles } from '@/config/unistyles';
import { stylesheet } from './styles';
import { SafeAreaView } from 'react-native-safe-area-context';

type FileExtension = 'pdf' | 'doc' | 'docx' | 'xls' | 'xlsx';

type Props = {
  url: string;
  isVisible?: boolean;
  showTransparent?: boolean;
  children?: React.ReactNode;
}

export function DocumentViewer({ url, isVisible, showTransparent, children }: Props) {
  const { styles } = useStyles(stylesheet)
  const [webViewURL, setWebViewURL] = useState('');

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
    }
  }, []);

  return (
    <SafeAreaView style={styles.webView}>
      <Modal
        animationType={'slide'}
        transparent={false}
        visible={isVisible}>
        {showTransparent ? (
          <View style={styles.transparentView} />
        ) : null}
        
        { url ?
          <WebView source={{ uri: Platform.OS === 'android' ? webViewURL : url }} />
          : <Text>No url found!</Text>
        }

        <View style={styles.button}>{children}</View>
      </Modal>
    </SafeAreaView>
  );
}
