document.addEventListener('DOMContentLoaded', () => {
    const surpriseBtn = document.getElementById('surpriseBtn');
    const surpriseMessage = document.getElementById('surpriseMessage');
    const messages = [
        "In this three years of us being together, we get so many disagreements, pagtatampo, pagkakamali, and misunderstandings. But through all of that, we still let each other lower our prides and forgive each other and always to remind us to choose one another even when it's hard.",
        "Napaka-grateful ako na pinakilala ka sakin ni Lord, na pinagtagpo rayo ni Lord. At sa bawat araw na lumililipas mas napapanatag ako na ikaw ang aking makakasama sa buhay ko.",
        "Your love is kind. Your love is respectful. Your love is selfless. Your love is beautiful.",
        "I love you so much Gabiii! My one and only asawa.",
        "Thank you for everything! Thank you so much for everything!",
        "We'll nurture our trust and love to God and make God be center of our love to one another. Let him take over us, to love, to guide and to protect us.",
        "Love is patient, love is kind. It does not envy, it does not boast, it is not proud. It does not dishonor others, it is not self-seeking, it is not easily angered, it keeps no record of wrongs. Love does not delight in evil but rejoices with the truth. It always protects, always trusts, always hopes, always perseveres. - 1 Corinthians 13:4-8"
    ];

    surpriseBtn.addEventListener('click', () => {
        const randomMsg = messages[Math.floor(Math.random() * messages.length)];
        surpriseMessage.textContent = randomMsg;
        surpriseMessage.classList.remove('hidden');
        surpriseMessage.classList.add('show');
        setTimeout(() => {
            surpriseMessage.classList.remove('show');
            surpriseMessage.classList.add('hidden');
        }, 22500);
    });
});