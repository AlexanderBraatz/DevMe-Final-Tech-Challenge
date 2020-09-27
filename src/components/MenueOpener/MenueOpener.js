import React from "react";


const MenueOpener = ({sideBarView, swichM}) => {

    const handleClick = () => swichM();



    return(
        <>
            <div 
                className={`menueOpener ${sideBarView ? "moveOpener": ""}`}
                onClick={ handleClick }
                >
                    <div>
                        <div className="menueOpener__content">
                        ☰
                        </div>

                    </div>
            </div>
        </>
    )
}

export default MenueOpener;