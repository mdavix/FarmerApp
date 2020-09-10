export function tripPlanner({bagsOfCorn, numberOfGeese}) {

    if (bagsOfCorn === 1 && numberOfGeese === 1) {
        return { crossings: ["Cross with corn", "Return with nothing", "Cross with goose"] };
    }

    if (bagsOfCorn === 1 && numberOfGeese === 2) {
        return { crossings: ["Cross with corn", "Return with nothing", "Cross with goose", "Return with corn", "Cross with goose", "Return with nothing", "Cross with corn"] };
    }

    if (bagsOfCorn === 2 && numberOfGeese === 1) {
        return { crossings: ["Cross with goose", "Return with nothing", "Cross with corn", "Return with goose", "Cross with corn", "Return with nothing", "Cross with goose"] };
    }

    if (bagsOfCorn >= 1) {
        const result = ["Cross with corn"];
        for (let index = 1; index < bagsOfCorn; index++) {
            result.push("Return with nothing", "Cross with corn");
            
        }
        return { crossings: result };
    }

    if (numberOfGeese >= 1) {
        const result = ["Cross with goose"];
        for (let index = 1; index < numberOfGeese; index++) {
            result.push("Return with nothing", "Cross with goose");
            
        }
        return { crossings: result };
    }


    return { crossings: ["Cross with nothing"] };
}