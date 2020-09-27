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

export const resetLoading = (stateKey) => {
    return {
        type: "UPDATE_LIKE",
        stateKey,
    }
};

export const updateLike = (term) => {
    return {
        type: "UPDATE_LIKE",
        term,
    }
};
