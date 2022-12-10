import { useState } from 'react'
import {LocaleProvider} from "@douyinfe/semi-ui";
import zh_CN from '@douyinfe/semi-ui/lib/es/locale/source/zh_CN';
import {BrowserRouter} from "react-router-dom";
import RenderRouter from "./router";
function App() {
  const [count, setCount] = useState(0)

  return (
      <LocaleProvider locale={zh_CN}>
        <BrowserRouter>
            <RenderRouter></RenderRouter>
        </BrowserRouter>
      </LocaleProvider>
  )
}

export default App
