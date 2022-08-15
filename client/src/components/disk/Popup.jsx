import React from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { createDir } from '../../actions/file'
import { setPopupDisplay } from '../../reducers/fileReducer'
import Input from '../../utils/input/input'

const Popup = () => {
    const [dirName, setDirName] = useState('')
    const popupDisplay = useSelector(state => state.files.popupDisplay)
    const currentDir = useSelector(state => state.files.currentDir)
    const dispatch = useDispatch()
    function createHandler() {
        dispatch(createDir(currentDir, dirName))
        setDirName('')
        dispatch(setPopupDisplay('none'))
    }
  return (
    <div className="popup" onClick={() => dispatch(setPopupDisplay('none'))} style={{display: popupDisplay}}>
        <div className="popup__content" onClick={(event) => event.stopPropagation()}>
            <div className="popup_header">
                <div className="popup__title">Создать новую папку</div>
                <button className='popup__close' onClick={() => dispatch(setPopupDisplay('none'))}>Х</button>
            </div>
            <Input type="text" placeholder="Введите название папки..." value={dirName} setValue={setDirName}/>
            <button className="popup__create" onClick={createHandler}>Создать</button>
        </div>
    </div>
  )
}

export default Popup