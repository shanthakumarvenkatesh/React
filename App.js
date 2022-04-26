// import style from './card.module.css'
import React, {useState} from 'react'
const App=()=>{
        const [data, setData]=UseState(0);
        const increment=()=>{
                setData(data+1)
        }
        return(
          // <div className={style.main}>
          //   <h1>
          //     Hi There!
          //   </h1>
          // </div>
        
          <div>
            <h1>{data}</h1>
          
          <button onClick{increment}>clcik</button>
          </div>

        )
}
export default App;
