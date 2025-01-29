import { getFirestore,getDocs,doc,collection,Timestamp } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-firestore.js";
import { app } from "../config/firebase.js";

// Intilize Data_Base
const db = getFirestore(app);

// loadLB();

async function loadLB(){
    const leaderboardList = document.getElementById('leaderboard-list');
    leaderboardList.innerHTML = ''; // Clear any existing list items

    const featuredLeaderboard = document.getElementById('lbTop');
    // featuredLeaderboard.innerHTML = ''; // Clear any existing featured items


    try {
        const teamsCollection = collection(db, "teams"); // Replace "teams" with your actual collection name
        const teamsSnapshot = await getDocs(teamsCollection);
        const teams = teamsSnapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data(),
          }));
         // Sort teams by level in descending order, then by time in ascending order (lower first)
        teams.sort((a, b) => {
            if (b.level !== a.level) {
                return b.level - a.level; // Sort by level
            } else {
                return parseInt(a.time) - parseInt(b.time); // If levels are equal, sort by time(lower time first)
            }
        });

        teams.forEach((team, index) => {
            const listItem = document.createElement('li');
            listItem.classList.add('list-item');

            listItem.innerHTML = `
                <div class="list-rank">${index + 1}</div>
                <div class="list-details">
                  <div class="list-name">${team.name}</div>
                </div>
                <div class="list-score">
                   Level: ${team.level}
                </div>
              `;
            leaderboardList.appendChild(listItem);
            if (index == 0){
                document.getElementById("1stTeamName").textContent = `${team.name}`;
                document.getElementById("1stTeamPoint").textContent = `${team.level}`;
            } if (index == 1){
                document.getElementById("2ndTeamName").textContent = `${team.name}`;
                document.getElementById("2ndTeamPoint").textContent = `${team.level}`;
            } if (index == 2){
                document.getElementById("3rdTeamName").textContent = `${team.name}`;
                document.getElementById("3rdTeamPoint").textContent = `${team.level}`;
            }
        });

    } catch (error) {
        console.error("Error fetching data:", error);
      const listItem = document.createElement('li');
       listItem.innerHTML = `Error fetching data`;
       leaderboardList.appendChild(listItem);
    }

}
//.................................................................................//
// Set up a real-time listener for changes to the 'teams' collection
function setupLeaderboardListener() {
  const teamsCollection = collection(db, "teams");

  onSnapshot(teamsCollection, (snapshot) => {
    // Get all documents in the collection
    const teams = snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));

    // Check if any level value changed.
      let levelChange = false;
      const prevTeams = JSON.parse(localStorage.getItem("teams") || "[]");
        if(prevTeams && prevTeams.length > 0){
        teams.forEach(team=>{
            const previousTeam = prevTeams.find(prev=> prev.id == team.id)
            if(previousTeam && previousTeam.level != team.level){
                levelChange = true;
            }
        })
      } else{
        levelChange = true;
      }

      if(levelChange){
         console.log("Level changed, updating leaderboard")
         loadLB();
      }
    localStorage.setItem("teams", JSON.stringify(teams));
  }, (error) => {
    console.error("Error listening for changes:", error);
  });
}

// Call the listener setup function when the page loads or your application initializes
setupLeaderboardListener();
