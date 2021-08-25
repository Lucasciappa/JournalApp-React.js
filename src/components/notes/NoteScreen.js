import React from 'react';
import { NotesAppBar } from './NotesAppBar';

export const NoteScreen = () => {
    return (
        <div className="notes__main-content">
            
            <NotesAppBar />

            <div className="notes__content">
                
                <input 
                    type="text"
                    placeholder="Some awesome title"
                    className="notes_title-input"
                    autoComplete="off"
                />

                <textarea
                    placeholder="What happened today?"
                    className="notes_textarea">

                </textarea>

                <div className="notes__image">
                    <img src="https://www.solocampings.com.ar/camping-photos/w360/f20/jpg/foto-camping-arika-calfu-bahia-azul-lago-huechulafquen-sur-neuquen-argentina-2070-2.jpg" alt="imagen"/>
                </div>

            </div>

        </div>
    )
}
