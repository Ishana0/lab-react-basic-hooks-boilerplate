import React, { useEffect, useState }from "react";

const UseEffect = () => {
    const [effect, setEffect] = useState(false);

    useEffect(() => {
        if (effect) alert("Content Button Clicked");
    }, [effect]);

    return (
        <div>
            {effect ? (
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad atque necessitatibus quasi debitis tenetur excepturi architecto sed eveniet nulla vero provident soluta deleniti omnis,
                velit iure cum ipsum accusamus praesentium.
</p>
            ) : null}
            <button onClick={() => setEffect(!effect)}>Content</button>
        </div>
    );
}
export default UseEffect;