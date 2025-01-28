const API_URL = 'https://hell-roan.vercel.app';

export async function sendAns(ans,level,teamNo) {
    try {
        const response = await fetch(`${API_URL}/api/checkAns`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ans, level, teamNo }),
        });

        const result = await response.json();

        if (result.isCorrect) {
            console.log('Correct Answer!');
            console.log('Next Level:', result.nextLevel);
        } else {
            console.log('Incorrect Answer!');
            return result.nextLevel;
        }

        if (response.ok){
            console.log("Check Ans response ok in hell.js")
        }
        else
            console.log("Check Ans response not ok in hell.js")

    } catch (error) {
        console.log('Error0:', error.message); // Error message
    }
}
