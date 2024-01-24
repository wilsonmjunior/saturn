import { View } from "react-native";

import { DocumentViewer } from "@/components";

export default function Details() {
  return (
    <View style={{ flex: 1 }}>
      <DocumentViewer url="https://calibre-ebook.com/downloads/demos/demo.docx" />
    </View>
  )
}
