import { View } from "react-native";

import { DocumentFileViewer } from "@/components";

export default function Details() {
  return (
    <View style={{ flex: 1 }}>
      <DocumentFileViewer url="https://calibre-ebook.com/downloads/demos/demo.docx" />
    </View>
  )
}
