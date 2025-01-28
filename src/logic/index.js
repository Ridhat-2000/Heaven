import { getFirestore,getDoc,doc } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-firestore.js";
import { app } from "../config/firebase.js";
import { sendAns } from "../config/hell.js";

// Intilize Data_Base
const db = getFirestore(app);

let teamNo;

document.getElementById("selectTeamName").addEventListener("change",getLevelNum);
document.getElementById("submitBtn").addEventListener("click",getAns);
document.getElementById("selectTeamName").addEventListener("change", function() {
    teamNo = this.value;
});


async function getLevelNum(){
    const selectLevelNum= document.getElementById("selectLevelNum");
    const teamId = document.getElementById("selectTeamName").value;
    const docRef = doc(db, "teams", teamId);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()){
        const currentLevelNum = docSnap.data().level;
        while (selectLevelNum.firstChild) {
            selectLevelNum.removeChild(selectLevelNum.firstChild);
        }
        for(let i =1;i<=currentLevelNum;i++){
            const option = document.createElement("option");
            option.value = i;
            option.textContent = i;
            selectLevelNum.appendChild(option);
            if (i == currentLevelNum)
                option.selected = true;
        }
    }
    else
        console.log("No such document!");
}

async function getAns()
{
    const ans = document.getElementById("ans").value;
    const level = document.getElementById("selectLevelNum").value
    console.log(ans,level,teamNo)
    await sendAns(ans,level,teamNo);
}
