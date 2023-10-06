async function checkMetaMaskConnection() {
    try {
        await window.ethereum.request({ method: 'eth_requestAccounts' });
        document.getElementById('content').style.display = 'block';
    } catch (error) {
        console.error(error);
        document.getElementById('content').style.display = 'none';
        setTimeout(checkMetaMaskConnection, 500);
    }
}

function continuousCheck() {
    setInterval(checkMetaMaskConnection, 500);
}

if (typeof window.ethereum !== 'undefined') {
    checkMetaMaskConnection();
    continuousCheck();
} else {
    document.querySelector('h1').textContent = 'MetaMask is not installed. Please install MetaMask to use this website.';
}

// JavaScript in your main.js file
function expandCard(cardNumber) {
    // Get the expanded card element
    const cardInfo = document.getElementById('card-info');

    // Display the expanded card information
    cardInfo.style.display = 'block';

    // Show the respective part based on the card number
    switch (cardNumber) {
        case 1:
            displayCardInfo(1);
            break;
        case 2:
            displayCardInfo(2);
            break;
        case 3:
            displayCardInfo(3);
            break;
        case 4:
            displayCardInfo(4);
            break;
        default:
            break;
    }
}

// JavaScript in your main.js file
function displayCardInfo(cardNumber) {
    const cardInfo = document.getElementById('card-info');
    
    // Get the specific card's information
    let metamaskAddress, content, boostButtonText;
    switch (cardNumber) {
        case 1:
            metamaskAddress = '0xF5D28D25f578b1E1dc6e5132f26338Eac5E08D2f';
            title = "Ex. Challenge: The Crypto Study: 30 Days Without Music";
            content = `For the next 30 days, immerse yourself in the world of cryptocurrencies without
            the comforting embrace of your favorite tunes. That means no music during study sessions,
            research, or even while tracking your crypto portfolio. The goal is to create an environment of
            absolute focus on your crypto education. While the Crypto Study Challenge may seem daunting, the rewards of enhanced crypto
            knowledge and improved discipline can be immensely gratifying. Remember, it's only 30 days,
            and at the end of the challenge, you'll emerge as a more focused and knowledgeable crypto
            enthusiast, ready to tackle the dynamic world of cryptocurrencies with newfound expertise.`;
            boostButtonText = 'Boost 1';
            break;
        case 2:
            metamaskAddress = '0x1dDC8271e52a08B184A8A3A552dc1a9037eBd9f3';
            title = "The Hardware Hustle: 21 Days of Tech Detox";
            content = 'For the next 21 days, disconnect from all your electronic devices and gadgets. This means no smartphones, tablets, laptops, or gaming consoles. The challenge is to immerse yourself in the world of hardware without the distractions of digital screens. Dive into books, experiment with circuits, and explore the inner workings of computers and gadgets. At the end of this challenge, you will not only gain a deeper understanding of hardware but also discover new hobbies and interests beyond the digital realm.';
            boostButtonText = 'Boost 2';
            break;
        case 3:
            metamaskAddress = '0x8d8A84E50128bEB93a851247Edf6Df8BF03F5F5e';
            title = "Web Wizardry: 30 Days of Website Building";
            content = 'In the next 30 days, commit to building and launching a fully functional website from scratch. Whether it is a personal blog, portfolio site, or an e-commerce platform, this challenge will push your web development skills to the limit. Learn HTML, CSS, JavaScript, and other web technologies as you create an online presence that showcases your skills and interests. By the end of the challenge, you will have a tangible project to be proud of and a solid foundation in web development.';
            boostButtonText = 'Boost 3';
            break;
        case 4:
            metamaskAddress = '0x7Ec946916C55148F1E4c414dC308Ce2d68d34dc7';
            title = "AI Alchemist: 45 Days of Artificial Intelligence";
            content = 'Embark on a 45-day journey into the realm of artificial intelligence. During this time, focus on creating AI projects that solve real-world problems or enhance your daily life. Dive into machine learning, natural language processing, or computer vision, and develop AI applications that demonstrate your newfound expertise. This challenge will not only deepen your understanding of AI but also equip you with practical skills to tackle future AI projects with confidence.';
            boostButtonText = 'Boost 4';
            break;
        default:
            break;
    }

    cardInfo.querySelector('.metamask-address').textContent = `BTTC: ${metamaskAddress}`;
    cardInfo.querySelector('.content-title').textContent = title;
    cardInfo.querySelector('.content-paragraph').textContent = content;
    cardInfo.querySelector('.boost-button').textContent = boostButtonText;
}

const sendBTTButton = document.querySelector('.sendBTTButton');
		
		let accounts = [];
		
		if (typeof window.ethereum !== 'undefined') {
			ethereum
				.request({ method: 'eth_requestAccounts' })
				.then((acc) => {
					accounts = acc;
				})
				.catch((error) => {
					console.error(error);
				});
		}
		
		sendBTTButton.addEventListener('click', () => {
			const donationAmount = 10000; 
			if (typeof window.ethereum !== 'undefined') {
				ethereum
					.request({
						method: 'eth_sendTransaction',
						params: [
							{
								from: accounts[0],
								to: '0xC8bE450818D507b3a86E147726401D7fbED3340C',
								value: `0x${(donationAmount * 1000000000000000000).toString(16)}`,
								chainId: '0x9A'
							}
						]
					})
					.then((txHash) => console.log(txHash))
					.catch((error) => console.error(error));
			}
		});
