fetch('data.json')
    .then(response => response.json())
    .then(members => {
        const membersContainer = document.querySelector('.members');
        members.forEach(member => {
            const memberCard = document.createElement('div');
            memberCard.classList.add('member-card');
            memberCard.innerHTML = `
                <img src="${member.avatar}" alt="${member.name}">
                <h3>${member.name}</h3>
                <p>${member.role}</p>
                <p>Liên hệ: ${member.contact}</p>
            `;
            membersContainer.appendChild(memberCard);
        });
    });