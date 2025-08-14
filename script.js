const userContainer = document.getElementById("userContainer");
const reloadBtn = document.getElementById("reloadBtn");

async function fetchUsers() {
    userContainer.innerHTML = "<p>Loading...</p>";
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        if (!response.ok) throw new Error(HTTP error! status: ${response.status});
        const users = await response.json();
        displayUsers(users);
    } catch (error) {
        userContainer.innerHTML = <p style="color:red;">Failed to load data: ${error.message}</p>;
    }
}

function displayUsers(users) {
    userContainer.innerHTML = "";
    users.forEach(user => {
        const userCard = document.createElement("div");
        userCard.classList.add("user-card");
        userCard.innerHTML = `
            <h3>${user.name}</h3>
            <p>Email: ${user.email}</p>
            <p>Address: ${user.address.street}, ${user.address.city}</p>
        `;
        userContainer.appendChild(userCard);
    });
}

// Event listener for reload
reloadBtn.addEventListener("click", fetchUsers);

// Initial load
fetchUsers();