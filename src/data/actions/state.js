export const savePlayer = (id, name, colour) => {
    return {
        type:"SAVE_PLAYER",
        id,
        name,
        colour,
    }
}

export const removePlayer = (id) => {
    return {
        type: "REMOVE__PLAYER",
        id,
    }
};

export const switchEddit = (id) => {
    return {
        type: "SWITCH_EDDIT",
        id,
    }
};

export const addPlayer = () => {
    return {
        type: "ADD_PLAYER",
    }
};

export const swichMenue = () => {
    return {
        type: "SWITCH_MENUE",
    }
};

export const startGame = () => {
    return {
        type: "START",
    }
};

