import { useState } from "react";

const LangButtons= ({ setGreeting }) => {
    const options = {
        spanish: "Buenos Dias!",
        queensEnglish: "Good Morrow.",
        slang: "Wazzaaaaap,",
        minionese: "Banana.",
        wingdings: "☝︎⚐︎⚐︎👎︎ 💣︎⚐︎☼︎☠︎✋︎☠︎☝︎✏︎"
    }
    
    return (
        <>
            <button onClick={() => setGreeting(options.spanish)}>SPANISH</button>
            <button onClick={() => setGreeting(options.queensEnglish)}>QUEENS ENGLISH</button>
            <button onClick={() => setGreeting(options.slang)}>SLANG</button>
            <button onClick={() => setGreeting(options.minionese)}>MINIONESE</button>
            <button onClick={() => setGreeting(options.wingdings)}>WINGDINGS</button>
        </>
    )
}

export default LangButtons